
(function($){

// Create the Collection from JSON.
var teamList = new TeamList({});

// Create Views for the Collection.
var Scoreboard = new TeamListView({collection:teamList});
var Starred = new StarredView({collection:teamList});

// Now when the views are hooked up, lets add som data.
teamList.reset(teamsJSON);
teamList.update(extraInfo);

// Start the scoreboard by render the data to DOM.
Scoreboard.render();
Starred.render();

teamList.rerank();

//console.log(teamList.sortedIndex(teamList.get(3), teamList.comparator));








// -------------------------------------------------------
// Connection functions
// -------------------------------------------------------


var setupSocket = function () {
	
	//var socket = io.connect('http://localhost:1336');
	var socket = io.connect('http://130.237.8.168:1336');

	// ON CONNECT
	socket.on("connected", function(data) {
		console.log("Socket connected.");
	});

	// ON DELTA
	socket.on("delta", function(data) {
		if(data !== ""){
			teamList.update(data);
		}
	});
};

var setupPolling = function () {
	return setInterval(function(){
		teamList.fetch({ cache: false, type: "jsonp",
			success: function(){
				//console.log("Fetched!");
			},
			error: function(error) {
				console.log("Error on fetching. Try refreshing the page in a while.");
				console.log(error);
				clearInterval(pollingInterval);
			}
		});
	}, 120000);
};



// ---------------------------------------------------------
// Setting up a socket and listening for scoreboard changes
// ---------------------------------------------------------

console.log("Trying to set up scoreboard socket..");

if(typeof io !== 'undefined'){
	setupSocket();
} else {
	console.log("Could not connect socket. Trying to poll.");
	
	var pollingInterval = setupPolling();
	/* 
	if( we want to stop polling){
		clearInterval(pollingInterval);
	}
	*/
}
	

})(jQuery);