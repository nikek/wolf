
// Set port for server.
var PORT = 1336;


// Load libs and set port to socket
var io = require('socket.io').listen(PORT),
	fs = require('fs');


// Removing all the debug statements
io.set('log level', 1);


// When a client connects
io.sockets.on('connection', function(socket) {

	// Print it out!
	console.log("client connected! length: " + io.sockets.clients().length);

	// Tell the new client he is connected.
	socket.emit('connected', { accept: true });

});


// Watch the scoreboard file for change, read and emit it when it does.
fs.watch(__dirname + "../data/scoreboard.json", function(event, filename) {
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

console.log("Application has started! Port: " + PORT);