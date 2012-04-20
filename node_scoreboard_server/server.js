
// Set port for server.
var PORT = 1336;

var localhost = false;

var sbURL = "../../www/data/scoreboard.json";

// Load libs and set port to socket
var io = require('socket.io').listen(PORT),
	fs = require('fs'),
	_ = require('underscore')._,
	Backbone = require('backbone'),
	sb,
	client,
	delta = new Backbone.Collection(),
	watchChangeCounter;


	console.log("Setup complete! Listening on port " + PORT);

//// SETUP SOCKET.IO

// Removing all the debug statements
io.set('log level', 1);

// When a client connects
io.sockets.on('connection', function(socket) {
	console.log("client connected! length: " + io.sockets.clients().length);
	socket.emit('connected', { accept: true }); // Tell the new client he is connected.
});



//// SET COLLECTIONS FOR SCOREBOARD AND THE CLIENT VERSION.

var TeamList = Backbone.Collection.extend({

	update : function(models) {
		models || (models = []);
		
		// Loop through all the models in response
		_.each( models, function(model) {
			
			// Check the idAttribute, if the id is change to something like teamsID, then get the id.
			var idAttribute = this.model.prototype.idAttribute;
			var modelId = model[idAttribute];
			
			// If no id is found, call error!
			if ( modelId === undefined ) throw new Error("Can't update a model with no id attribute. Please use 'reset'.");
			
			// If the this response model id also exist in our collection on client update attributes.
			// Else add new model to collection.
			// On update: Ternary if the object is a instance of Backbone.Model, then get the attributes, else get whole model.
			// Get rid of the id amongst the attributes to be updated.
			// Then set the new attributes to out model in the collection.
			if ( this._byId[modelId] ) {
				var attrs = (model instanceof Backbone.Model) ? _.clone(model.attributes) : _.clone(model);
				delete attrs[idAttribute];
				this._byId[modelId].set( attrs );
			} else {
				this.add( model );
			}
		}, this);
		
		return this;
	}
});


fs.readFile(sbURL,"UTF-8", function(err, data) {
	sb = new TeamList(JSON.parse(data));
	if(!localhost) client = new TeamList(JSON.parse(data));
});

if(localhost){
	
	fs.readFile("client.json","UTF-8", function(err, data) {
		client = new TeamList(JSON.parse(data));
	});
	
	setTimeout(function(){ change(); }, 3000);
	
}else{
	
	watchChangeCounter = 0;
	
	// Watch the scoreboard file for change, read and emit it when it does.
	fs.watch(__dirname + "/" + sbURL, function(event, filename) {
		if (event == "change") change();
	});
}


// Collecting attributes to delta hashes/obj that differ between sb and what the client has.
// The obj are added as models to the delta collection which we then JSONify and send to client.
var calcDelta = function (sbJSON) {
	var id,
		teamAttr,
		clientAttr,
		deltaAttr,
		deltaJSON;
	
	delta.reset();
	
	sb.each(function(team){
		id = team.get("id");
		teamAttr = team.attributes;

		// Check if the team already exist
		if(client.get(id)){

			clientAttr = client.get(id).attributes;
			
			// If the attributes aren't the same
			if(!_.isEqual(teamAttr, clientAttr)){
			
				deltaAttr = {"id": id};
			
				for (var attr in teamAttr) {
					if(!_.isEqual(teamAttr[attr], clientAttr[attr])){
						deltaAttr[attr] = teamAttr[attr];
					}
				}
			
				delta.add(deltaAttr);
			}
		}else{ // we have to add all the attributes.
			delta.add(teamAttr);
		}
	});
	
	//client.update(sbJSON);
	deltaJSON = delta.toJSON();
	console.log("Delta sent:");
	console.log(deltaJSON);
	return deltaJSON;
};


var change = function() {
	fs.readFile(sbURL,"UTF-8", function(err, data) {
		if (err) throw err;
		if (data !== "") {
			sbJSON = JSON.parse(data);
			sb.reset(sbJSON);
			io.sockets.emit('delta', calcDelta(sbJSON));
		}
	});
};