

///////////////////////////////////////////////////////////
// Backbone Objects
///////////////////////////////////////////////////////////
/*  The objects used in the scoreboard:
*
*	Team - Model
*	TeamView - View
*	TeamList - Collection
*	TeamListView - Collection View
*
*/



// -------------------------------------------------------
// TEAM    
// -------------------------------------------------------
// A team model, including attributes and data-related methods.

var Team = Backbone.Model.extend({
	
	default: {starred: false},
	
	toggleStar: function() {
		if(this.get('starred') === false){
			this.set({'starred': true});
		}else{
			this.set({'starred': false});
		}
	}
	
});



// -------------------------------------------------------
// TEAM VIEW
// -------------------------------------------------------
// Handling all the interaction from client and visual changes triggered by model.

var TeamView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template('<td><%= teamName %></td><td class="teamStar"><%= starred %></td>'),
	
	events: {
		"click tr": "alertTest",
		"click .teamStar": "toggleStar"
	},
	
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		
		return this; // So we can chain the render like: teamView.render().el
	},
	
	toggleStar: function() {
		this.model.toggleStar();
	},
	
	alertTest: function(e) {
		alert("The event is funking");
	},
	
	remove: function(){
		this.$el.remove();
	}

});


/*
// -------------------------------------------------------
// TEAM LIST
// -------------------------------------------------------
// The Scoreboard model that includes all the teams.

var TeamList = Backbone.Collection.extend({
	url: '/teams'	// the whole JSON should be stored on this url for .fetch()-calls.
});



// -------------------------------------------------------
// TEAM LIST VIEW
// -------------------------------------------------------
// Handling all the TeamViews and their common methods.
var TeamListView = Backbone.View.extend({
	
});
*/



var team = new Team({
	starred: false,
	teamName: "The Awesomes"
});

var teamView = new TeamView({
	model: team
});

$('table#bbtest').html(teamView.render().el);









/*

(function(){
	
	var Scoreboard = new (Backbone.Router.extend({

		initialize: function(){
			this.teamList = new TeamList();
			this.teamListView = new TeamListView({collection: this.teamList});
			$('#sb').append(this.teamListView.el);
		}

	}));
	
})();


*/



(function ($) {




	$(document).ready(function () {
		console.log('The DOM is complete.');
		
		
		
		
		
		// ---------------------------------------------------------
		// Setting up a socket and listening for scoreboard changes
		// ---------------------------------------------------------
		
		console.log("Setting up sb socket..");
		var sb, socket = io.connect('http://130.237.8.168:1336');

		// ON CONNECT
		socket.on("connected", function(data) {
			console.log("Connected User?", data.accept);
		});

		// ON RECIEVEFILE
		socket.on("delta", function(data) {

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
		
		
		
		
		
	});




	$(window).load(function () {
		
		console.log('All of the page is loaded.');
		
	});

}(jQuery));