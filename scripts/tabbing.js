
(function($){

	var currentLiveTab = "quickInfo";
	
	/**** LISTENING FOR BUTTONPRESSING ****/
	
	// Live TABBER
	$('#quickInfoBtn').on('click', function(e){ e.preventDefault(); changeTab("quickInfo", currentLiveTab); currentLiveTab = "quickInfo";});
	$('#sbInfoBtn').on('click', function(e){ e.preventDefault(); changeTab("sbInfo", currentLiveTab); currentLiveTab = "sbInfo";});
	$('#studioQuestionBtn').on('click', function(e){ e.preventDefault(); changeTab("studioQuestion", currentLiveTab); currentLiveTab = "studioQuestion";});
	
	/*
	$('#sbDescBtn2').on('click', function(){ 
		if(currentLayout == "hideInfo" || currentLayout == "hideBoth"){
			changeLayout("hideSocial");
			changeTab("sbDesc", currentLiveTab); currentLiveTab = "sbDesc";
		}
	});
	*/

	/**** CHANGE TAB ****/

	var changeTab = function(tab, currentTab) {
		if(tab !== currentTab && !lock.val){
			lock.close();

			var speed = 130;
			var cTab = "#"+currentTab+"Tab";
			var cBtn = "#"+currentTab+"Btn";
			var nTab = "#"+tab+"Tab";
			var nBtn = "#"+tab+"Btn";

			$(cTab).fadeOut(speed, function(){
				$(cBtn).parent().removeClass("selected");
				$(nBtn).parent().addClass("selected");
				$(nTab).fadeIn(speed, function(){
					lock.open();
				});
			});
		}
	};
	
	
	/**** LOCK the script ****/

	var lock = {
		val: false,

		open: function(){ val = false; },
		close: function(){ val = true; }
	}

})(jQuery);