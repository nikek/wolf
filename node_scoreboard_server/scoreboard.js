
// Set port for server.
var PORT = 1336;


// Load libs and set port to socket
var io = require('socket.io').listen(PORT),
	fs = require('fs'),
	_ = require('underscore')._,
	Backbone = require('backbone'),
	sb,
	client,
	delta = new Backbone.Collection();



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


fs.readFile("scoreboard.json","UTF-8", function(err, data) {
	sb = new TeamList(JSON.parse(data));
});

fs.readFile("client.json","UTF-8", function(err, data) {
	client = new TeamList(JSON.parse(data));
});



var calcDelta = function (sbJSON) {
	var clientTeam,
		id;
	
	delta.reset();
	
	sb.each(function(team){
		id = team.get("id");
		var clientTeam = client.get(id);
		var teamAttr = team.attributes;
		var clientAttr = clientTeam.attributes;
		
		if(!_.isEqual(teamAttr, clientAttr)){
			
			
			var deltaAttr = {};
			 deltaAttr["id"] = id;
			//delta.add(team.attributes);
			//clientTeam.set(team.attributes);
			for (var attr in teamAttr) {
				if(teamAttr[attr] !== clientAttr[attr]){
					deltaAttr[attr] = teamAttr[attr];
					//console.log(team.get("name") + team.attributes[attr]);
				}
			}
			
			delta.add(deltaAttr);
			console.log();
		}
	});
	
	client.update(sbJSON);
	return delta.toJSON();
};


console.log("Setup complete! Listening on port " + PORT);


setTimeout(function(){ change(); }, 3000);


// Watch the scoreboard file for change, read and emit it when it does.
/*fs.watch(__dirname + "scoreboard.json", function(event, filename) {
	if (event == "change") {*/
	var change = function() {
		fs.readFile("scoreboard.json","UTF-8", function(err, data) {
			if (err) throw err;
			if (data !== "") {
				sbJSON = JSON.parse(data);
				sb.update(sbJSON);
				io.sockets.emit('delta', calcDelta(sbJSON));
			}
		});
	};
	/*}
});*/
