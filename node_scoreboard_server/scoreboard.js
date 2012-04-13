
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

fs.readFile("scoreboard.json","UTF-8", function(err, data) {
	sb = new Backbone.Collection(JSON.parse(data));
});

fs.readFile("client.json","UTF-8", function(err, data) {
	client = new Backbone.Collection(JSON.parse(data));
});



var calcDelta = function () {
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

	console.log(delta.toJSON());
};



setTimeout(function(){ calcDelta(); }, 400);
console.log("Setup complete! Listening on port " + PORT);


// Watch the scoreboard file for change, read and emit it when it does.
/*fs.watchFile(__dirname + "../data/scoreboard.json", function(event, filename) {
	console.log(filename);
	if (event == "change") {
		fs.readFile(filename,"UTF-8", function(err, data) {
			if (err) throw err;
			if (data !== "") {
				io.sockets.emit('delta', data);
			}
		});
	}
});
*/