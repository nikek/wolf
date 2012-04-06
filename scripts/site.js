

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

var teamsJSON = [
	{id: 0, teamName: "Nördarna", starred: false, score: 6, A: 0, B:1, C:2, D:3, E:0 },
	{id: 1, teamName: "The Awesomes", starred: true, score: 10, A: 1, B:1, C:2, D:3, E:3 },
	{id: 2, teamName: "HaxX0rzZ", starred: false, score: 1, A: 0, B:1, C:2, D:0, E:0 },
	{id: 3, teamName: "Epic 1337", starred: false, score: 3, A: 1, B:1, C:0, D:3, E:3 }
];

// -------------------------------------------------------
// TEAM    
// -------------------------------------------------------
// A team model, including attributes and data-related methods.

var Team = Backbone.Model.extend({
	
	defaults: {
		id:0,
		teamName: "unnamed",
		starred: false,
		score: 0,
		A: 0, B: 0, C: 0, D: 0, E: 0
	},
	
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
	tmpl: _.template($("#tmplTeam").html()), // this gets the html template with <script id="tmplTeam"> in the php view-file.

	events: {
		"click .team-star": "toggleStar"
	},
	
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function() {
		this.$el.html(this.tmpl(this.model.toJSON()));
		return this; // So we can chain the render like: teamView.render().el
	},
	
	remove: function(){ this.$el.remove(); },
	
	// Use models toggle function, this way let us toggle star from other functions aswell.
	toggleStar: function() { this.model.toggleStar(); }

});


/*
// -------------------------------------------------------
// TEAM LIST
// -------------------------------------------------------
// The Scoreboard model that includes all the teams.*/

var TeamList = Backbone.Collection.extend({
	model: Team
});



// -------------------------------------------------------
// TEAM LIST VIEW
// -------------------------------------------------------
// Handling all the TeamViews and their common methods.
var TeamListView = Backbone.View.extend({
	
	el: $("#scoreboard"),
	

    initialize: function () {
		this.collection.on('reset', this.render(), this);
    },

    render: function () {
		this.collection.forEach(function(team){
			
			var teamView = new TeamView({model: team});
			this.$el.append(teamView.render().el);
		}, this);
		
		return this;
    }

});

// create the Collection
var teamList = new TeamList();

// Put all the teams in models and all the models in the Collection.
teamList.reset(teamsJSON);

// Create a view for the COllection and add views for every model to it.
var Scoreboard = new TeamListView({collection:teamList});




//$('table#bbtest').html(teamView.render().el);









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