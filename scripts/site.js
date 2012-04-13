
(function($){


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

	// Default values to fill gap where the json is undefined.
	defaults: {
		starred: false,
		score: 0,
		A: ["", "", ""],
		B: ["", "", ""],
		C: ["", "", ""],
		D: ["", "", ""],
		E: ["", "", ""],
		F: ["", "", ""],
		G: ["", "", ""],
	},
	
	// When a model is created, make it show in the console.
	initialize: function() { console.log("new model"); },
	
	// Toggle the starred variable, triggers change on view.
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
	tmpl: _.template($("#tmplTeam").html()), // this gets the html template with <script id="id"> in the php view-file.

	// Events, trigger methods on the form: "event selector": "method"
	events: {
		"click .team-star": "toggleStar"
	},
	
	// When created, bind change on model to rerender view.
	// If model is destroyed, also remove the view.
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
		console.log("new view");
	},
	
	// Render the element (el), which is the views html.
	render: function() {
		this.$el.html(this.tmpl(this.model.toJSON()));
		return this; // So we can chain the render like: teamView.render().el
	},
	
	// Remove view from DOM
	remove: function(){ this.$el.remove(); },
	
	// Use a toggle method in model so we can toggle star from other locations aswell, not only here.
	toggleStar: function() { this.model.toggleStar(); }

});




// -------------------------------------------------------
// TEAM LIST
// -------------------------------------------------------
// The Scoreboard collection that handles all the team models.

var TeamList = Backbone.Collection.extend({
	model: Team,
	url: "data/scoreboard.json",
	
	
	// The .fetch() function will go through Backbone.sync which use ajax to get
	// the data from the url specified. Fetch then use a default parse which sends
	// the response on to the reset function. We are here overriding both the 
	// default parse and reset.
	
	
	/*parse: function(resp){
		// Default parse will just send the response on to reset without doing anything.
		// But we only want the teams array to be passed on, not the other stuff.
		
		return resp.teams;
	},*/
	
	
	// This is the update method created by dalyons(github), but without the removeMissing parts.
	// It replaces the reset and can do in-place updates of these models, reusing existing instances.
	// The default reset, replaces the collection with new instances of models, making a lot of garbage instances.
	// - Items are matched against existing items in the collection by id
	// - New items are added
	// - matching models are updated using set(), triggers 'change'.
	// - a collection change event will be dispatched for each add() and remove()
	reset: function(models, options) {
		return this.update(models, options);
	},
	update : function(models, options) {
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
	},
	updateDelta: function(delta){
		
		var len = delta.length;
		
		for(var i=0; i<len; i++){
			var tempID = delta[i].id;
			delete delta[i].id;
			this.get(tempID).set(delta[i]);
		}
	
	}
});



// -------------------------------------------------------
// TEAM LIST VIEW
// -------------------------------------------------------
// Handling all the TeamViews and their common methods.

var TeamListView = Backbone.View.extend({
	
	// Connect this view to the #scoreboard element in DOM.
	el: $("#scoreboard"),

	// Clear the html in element. Create views for every model and add to element.
	render: function () {
		
		this.$el.html("");
		
		this.collection.each(function(team){
			var teamView = new TeamView({model: team});
			this.$el.append(teamView.render().el);
		}, this);
		
		return this;	// still, so we can chain the method like: this.render().el
	}
});

// Create the Collection from JSON.
var teamList = new TeamList(teamsJSON);

// Create the View for the Collection.
var Scoreboard = new TeamListView({collection:teamList});

// Start the scoreboard by render the data to DOM.
Scoreboard.render();



// -------------------------------------------------------
// Connection functions
// -------------------------------------------------------


var setupSocket = function () {
	
	var socket = io.connect('http://localhost:1336');

	// ON CONNECT
	socket.on("connected", function(data) {
		console.log("Socket connected.");
	});

	// ON DELTA
	socket.on("delta", function(data) {
		if(data !== ""){
			teamList.updateDelta(data);
			
		}else{ console.log("Empty data was recieved. Do nothing."); }
	});
};

var setupPolling = function () {
	return setInterval(function(){
		teamList.fetch({ cache: false,
			success: function(){
				console.log("Fetched!");
			},
			error: function(error) {
				console.log("Error on fetching. Try refreshing the page in a while.");
				console.log(error);
				clearInterval(pollingInterval);
			}
		});
	}, 3000);
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