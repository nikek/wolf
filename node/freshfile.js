var PORT = 1337;


var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(PORT);

function handler (req, res) {
  fs.readFile(__dirname + '/freshfile.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function(socket) {
    console.log("Connected!");
    socket.emit('connected', { accept: true});
    fs.readFile("data.txt","UTF-8", function(err, data) {
                if (err) throw err;
                socket.emit("receiveFile", data );
                console.log("Content:", data);
    });
    console.log("Trying to send the content to a client...");
    console.log("dir", __dirname);

    fs.watch(__dirname + "/data.txt", function(event, filename) {
        console.log("Event:", event);

        if (event == "change") {
            fs.readFile("data.txt","UTF-8", function(err, data) {
                if (err) throw err;
                socket.emit("receiveFile", data );
                console.log("Content:", data);
            })
        }

    });

});

console.log("Application has started! Port: " + PORT);