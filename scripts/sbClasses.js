

///////////////////////////////////////////////////////////
// Backbone Objects
///////////////////////////////////////////////////////////
/*  The objects used in the scoreboard:
*
*	Team - Model
*	TeamView - View
*	TeamList - Collection
*	allTeamViews - Object with all TeamViews
*	TeamListView - Collection View
*	StarredView - Collection View displaying only starred teams.
*
*/


// -------------------------------------------------------
// TEAM    
// -------------------------------------------------------
// A team model, including attributes and data-related methods.

var Team = Backbone.Model.extend({
	prenum: "starTeam",		// remove this and store an object if more data is to be stored
	
	// Default values to fill gap where the json is undefined.
	// Ska det vara tomma strängar eller typ en 0a?
	defaults: {
		name: "TeamName",
		group: "region",
		starred: false,
		score: 0,
		time: 0,
		rank: 0,
		A: {},
		B: {},
		C: {},
		D: {},
		E: {},
		F: {},
		G: {},
		H: {},
		I: {},
		J: {},
		K: {}
	},
	
	// When a model is created, make it show in the console.
	initialize: function() {
		// get and set values from different places.
		this.set($.extend(this.calcScoreTime(), this.getLocalData()));
		
		// Bindings
		this.on('change:A', this.resetScoreTime, this);
		this.on('change:B', this.resetScoreTime, this);
		this.on('change:C', this.resetScoreTime, this);
		this.on('change:D', this.resetScoreTime, this);
		this.on('change:E', this.resetScoreTime, this);
		this.on('change:F', this.resetScoreTime, this);
		this.on('change:G', this.resetScoreTime, this);
		this.on('change:H', this.resetScoreTime, this);
		this.on('change:I', this.resetScoreTime, this);
		this.on('change:J', this.resetScoreTime, this);
		this.on('change:K', this.resetScoreTime, this);
		//this.on('all', this.logEvent, this);
		
		console.log("new model");// Say cheese to the console!
	},
	
	// Toggle the starred variable, triggers change on view.
	toggleStar: function() {
		var storeKey = this.prenum + this.get('id');
		
		if(this.get('starred') === false){
			this.set({'starred': true});
			$.store.set(storeKey, true);
		}else{
			this.set({'starred': false});
			$.store.remove(storeKey);
		}
	},
	
	
	getLocalData: function() {
		
		// Starred?		(prenum4: true)
		var starredFromStorage = $.store.get(this.prenum + this.get('id'));
		if(typeof starredFromStorage !== "undefined"){
			return { starred: starredFromStorage };
		}else{
			return {};
		}
		
		// If we save and want to retrieve more client specific stuff
		// change the variable prenum and store an object instead.
		// Also change the toggleStar method.
	},
	
	calcScoreTime: function() {
		var st = {
			score: 0,
			time: 0
		};
		
		_.each(this.attributes, function(attr){
			if(attr !== null && attr.t){
				st.score += 1;
				st.time += attr.t;
			}
		});
		
		return st;
	},
	
	resetScoreTime: function() {
		this.set(this.calcScoreTime());
	},
	
	logEvent: function(event){ console.log("m:" + event); }
});





// -------------------------------------------------------
// TEAM VIEW
// -------------------------------------------------------
// Handling all the interaction from client and visual changes triggered by model.

var TeamView = Backbone.View.extend({
	tagName: 'tr',
	tmpl: _.template($("#tmplTeam").html()), // this gets the html template with <script id="id"> in the php view-file.

	// Events, trigger methods on the form: "event selector": "method"
	events: { "click .team-star": "toggleStar" },
	
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
		this.delegateEvents();
		return this; // So we can chain the render like: teamView.render().el
	},
	
	// Remove view from DOM
	remove: function(){ this.$el.remove(); },
	
	// Use a toggle method in model so we can toggle star from other locations aswell, not only here.
	toggleStar: function() { this.model.toggleStar();  }
});




// -------------------------------------------------------
// TEAM LIST
// -------------------------------------------------------
// The Scoreboard collection that handles all the team models.

var TeamList = Backbone.Collection.extend({
	model: Team,
	//url: "node_scoreboard_server/scoreboard.json",
	//url: "http://130.237.8.168/data/scoreboard.json",
	//url: "http://icpclive.com/data/scoreboard.php",
	url: "http://localhost/wolf/data/scoreboard.php",
	//url: "http://213.103.206.210/wolf/data/scoreboard.php",
	
	initialize: function(){
		this.on('change:time', this.resort, this);
		//this.on('all', this.logEvent, this);
	},
	
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
		return this.update(models, false);
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
			if (team = this._byId[modelId]) {
				var attrs = (model instanceof Backbone.Model) ? _.clone(model.attributes) : _.clone(model);
				delete attrs[idAttribute];
				team.set( attrs );
			} else {
				this.add( model );
			}
		}, this);
		
		return this;
	},
	
	comparator: function(team) {
		return -(team.get("score")*10000 - team.get("time"));
	},
	
	resort: function(){
		console.log("resort!");
		this.sort();
		this.rerank();
	},
	
	rerank: function() {
		console.log("reranking");
		var count = 0;
		
		_.each(this.models, function(team){
			team.set({rank: ++count});
		});
	},
	
	logEvent: function(event){ console.log("tl:" + event); }
});





// -------------------------------------------------------
// TEAM LIST VIEW
// -------------------------------------------------------
// Handling all the TeamViews and their common methods.

var TeamListView = Backbone.View.extend({
	
	// Connect this view to the #scoreboard element in DOM.
	el: $("#scoreboard"),
	allTeamViews: {},
	sbHeader: $("#sbHeader").html(),
	
	initialize: function() {
		this.collection.on('add', this.add, this);
		this.collection.on('reset', this.render, this);
		//this.on('all', this.logEvent, this);
	},

	// Clear the html in element. Create views for every model and add to element.
	render: function () {
		
		this.$el.html("");
		this.$el.append(this.sbHeader);
		
		this.collection.each(function(team){
			this.$el.append(this.allTeamViews[team.get('id')].render().el);
		}, this);

		return this;	// still, so we can chain the method like: this.render().el
	},
	
	add: function(team) {
		var view = new TeamView({model:team});
		this.allTeamViews[team.get('id')] = view;
	},
	
	logEvent: function(event){ console.log("tlv:" + event); }
});




var StarredView = Backbone.View.extend({
	
	// Connect this view to the #scoreboard element in DOM.
	el: $("#starred"),
	allStarredViews: {},
	sbHeader: $("#sbHeader").html(),
	
	initialize: function() {
		this.collection.on('add', this.add, this);
		this.collection.on('reset', this.render, this);
		this.collection.on('change:starred', this.render, this);
	},

	// Clear the html in element. Create views for every model and add to element.
	render: function () {
		
		this.$el.html("");
		
		this.collection.each(function(team){
			if(team.get('starred')){
				this.$el.append(_.clone(this.allStarredViews[team.get('id')]).render().el);
			}
		}, this);
		
		if(this.$el.html() !== ""){
			this.$el.prepend(this.sbHeader);
		}
		return this;	// still, so we can chain the method like: this.render().el
	},
	
	add: function(team) {
		var view = new TeamView({model:team});
		this.allStarredViews[team.get('id')] = view;
	}
});







