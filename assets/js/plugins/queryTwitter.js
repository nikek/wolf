/* Twitter search plugin */
/* Author: Niklas Ek & Roger Sandholm */


// Using Guidelines

/*

search options:
	search :: The search term we are looking to pass to twitter

*/


// Utility

// For Object.vcreate method (older browsers)
if( typeof Object.create !== 'function' ) {
	// If function doesnt exists, create it 
	Object.create = function() {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function ( $, window, document, undefined) { // Define undefined and send nothing to this var, so it's undefined.
	
	var Twitter = {
		
		init: function( options , elem ) {
			// elem = past in element
			var self = this;
			
			self.elem = elem; 
			self.$elem = $( elem );
			
			var oldresults = "";
			
			//self.url = 'http://localhost/wolf/data/twitter.json';
			self.url = 'http://localhost/wolf/data/twitterGrab.php';
			
			
			// Check if the passed in options is a string or an object
			self.search = ( typeof options === 'string' ) ? options : options.search;
			
			// (Empty function , standard options, user passed options) This is for overriding. and not overriding standard options
			self.options = $.extend( {}, $.fn.queryTwitter.options, options ); 
			
			self.cycle( 1 ); // This initiates the fetching and displaying
		},
		
		
		cycle: function( lenght ) {
			var self = this;
			
			setTimeout(function( lenght ) {
				// When the fetch functions is done()
				self.fetch().done(function( results ) {
					results = self.limit( results.results , self.options.limit );
					self.buildFragments( results ); // Fraqments to throw into DOM
					console.log( results );

					self.display();
					
					if( self.options.refresh ) {
						self.cycle();
					}
				}).fail(function(jqXHR, textStatus) {
					console.log( "Request failed: " + textStatus );
					if( self.options.refresh ) {
						// Roger added
						self.cycle();
					}
				});
			}, lenght || self.options.refresh);
			
		},
		
		
		fetch: function() {
			// Fetching json results
			return $.ajax({
				url: this.url,
				data: { q: this.search, },
				dataType: 'json',
				cache: false
			});
		},
		
		
		buildFragments: function( results ) {
			// First creation of the tweets object and build what is sent to the display(), from cycle()
			var self = this;
			
			// map, modify array
			self.tweets = $.map( results, function( obj, i) {
				return $( self.options.wrapEachWith ).append( "<a href='https://twitter.com/#!/" + obj.from_user + "' target='_blank'>@" + obj.from_user + "</a>" + obj.text + "<br/> <img src='" + obj.profile_image_url + "' class='from_user' /><span class='tweet_date'>" + obj.created_at.slice( 0, 22 ) + "</span>")[0];
			}); 
			
			this.oldresults = results;
			
			return self.tweets;
		},
		
		
		display: function() {
			var self = this;
			
			if( self.options.transition === 'none' || !self.options.transition ) {
				self.$elem.html(self.tweets);
			} else {
				self.$elem[ self.options.transition ]( 500, function() {
					$(this).html( self.tweets )[ self.options.transition ]( 500 );
				});
			}
		},
		
		
		limit: function( obj, count ) {
			// Slice of what we need in results
			return obj.slice( 0, count );
		},

	};
	
	
	$.fn.queryTwitter = function( options ) {
		console.log("Grabing twitter posts");
		
		return this.each(function(){ 
			// 'Return' this each so chaining of functions to the plugin works
			var twitter = Object.create( Twitter );
			twitter.init( options , this ); // Create instance 
			
			$.data( this, 'queryTwitter', twitter );
		});
		
	};
	
	// So that options can be overwritten
	$.fn.queryTwitter.options = {
		search: 'flowers',
		limit: 9,
		wrapEachWith: '<li></li>',
		refresh: null,
		transition: 'fadeToggle'
	};
	
})( jQuery, window, document );