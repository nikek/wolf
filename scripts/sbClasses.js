

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
	prenum: "starTeam",		// remove this and store an object if more data is to be stored
	
	// Default values to fill gap where the json is undefined.
	defaults: {
		starred: false,
		score: 0,
		time: 0,
		A: ["", 0, 0],
		B: ["", 0, 0],
		C: ["", 0, 0],
		D: ["", 0, 0],
		E: ["", 0, 0],
		F: ["", 0, 0],
		G: ["", 0, 0],
		H: ["", 0, 0],
		I: ["", 0, 0],
		J: ["", 0, 0],
		K: ["", 0, 0],
	},
	
	// When a model is created, make it show in the console.
	initialize: function() {
		console.log("new model");
		
		this.getLocalData();
		
		this.calcScore();
	},
	
	// Toggle the starred variable, triggers change on view.
	toggleStar: function() {
		if(this.get('starred') === false){
			this.set({'starred': true});
			$.store.set(this.prenum + this.get('id'), true);
		}else{
			this.set({'starred': false});
			$.store.remove(this.prenum + this.get('id'));
		}
	},
	
	
	getLocalData: function() {
		
		// Starred?		(starTeam4: true)
		var starredFromStorage = $.store.get(this.prenum + this.get('id'));
		if(typeof starredFromStorage !== "undefined"){
			this.set({ starred: starredFromStorage });
		}
		
		// If we save and want to retrieve more client specific stuff.
		// In that case change the variable prenum and store an object instead.
	},
	
	
	calcScore: function(delta) {
		var addThis = {};
		
		
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
	//url: "node_scoreboard_server/scoreboard.json",
	//url: "http://130.237.8.168/data/scoreboard.json",
	url: "http://icpclive.com/data/scoreboard.php",
	
	
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
		return this.update(models);
	},
	update: function(models) {
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
	
	/*updateDelta: function(delta){
		
		var len = delta.length;
		var tempID;
		
		for(var i=0; i<len; i++){
			
			tempID = delta[i].id;
			
			if ( this.get(tempID) ) {
				
				delete delta[i].id;
				this.get(tempID).set(delta[i]);
				
			} else {
				this.add( delta[i] );
			}
		}
	},*/
	
	comparator: function(team) {
		
	}
});



// -------------------------------------------------------
// TEAM LIST VIEW
// -------------------------------------------------------
// Handling all the TeamViews and their common methods.

var TeamListView = Backbone.View.extend({
	
	// Connect this view to the #scoreboard element in DOM.
	el: $("#scoreboard"),
	
	initialize: function() {
		this.collection.on('add', this.render, this);
	},

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

