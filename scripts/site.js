


// ---------------------------------------------------------
// Setting up a socket and listening for scoreboard changes
// ---------------------------------------------------------

(function(){
	
	var sb;

	console.log("Try to logon...");
	var socket = io.connect('http://130.237.8.168:1337');

	// ON CONNECT
	socket.on("connected", function(data) {
		console.log("Connected User?", data.accept);
	});

	// ON RECIEVEFILE
	socket.on("receiveFile", function(data) {

		if(data !== ""){
			sb = JSON.parse(data);
			
			var teamCount = sb.length;
			var sbTable = "<tr><th>Team</th><th>Score</th><th>Country</th></tr>";

			for(var i = 0; i<teamCount; i++){
				sbTable += "<tr>";
				for(var attr in sb[i]){
					sbTable += "<td>" + sb[i][attr] + "</td>";
				}
				sbTable += "</tr>";
			}

			$('table#sb').html(sbTable);
		}else{ console.log("empty data"); }
	});
	
})();




(function ($) {

	$(document).ready(function () {
		console.log('The DOM is complete.');
	});

	$(window).load(function () {
		console.log('All of the page is loaded.');
	});

}(jQuery));