$(document).ready(function(){

	// Create the baseline grid and the development bar
	var $baselineGrid = $('<div></div>', {
		class: 'development-baseline-grid',
		text: ''
	});
		$developmentBar = $('<ul></ul>', {
			class: 'development-bar',
			html: '<li id="development-link-baseline-18"><span>²</span>Baseline Grid - 18px</li>' +
				'<li id="development-link-grid-skeleton"><span>¹</span>Skeleton Grid - 960px</li>'
		});
		$960SkeletonGrid = $('<div></div>', {
			class: 'development-skeleton-960-grid',
			text: ''
		});

	// Add it right after the BODY tag
	$('body').prepend($developmentBar, $baselineGrid, $960SkeletonGrid);

	// On click, we toggle the grids on/off
	$('#development-link-baseline-18').click(function(){

		// First, we calculate document height and apply it to our grid container
		$docHeight = $('body').outerHeight() + 'px';
		$('.development-baseline-grid').height($docHeight);

		$('.development-baseline-grid').toggle();

	});

	$('#development-link-grid-skeleton').click(function(){

		// First, we calculate document height and apply it to our grid container
		$docHeight = $('body').outerHeight() + 'px';
		$('.development-skeleton-960-grid').height($docHeight);

		$('.development-skeleton-960-grid').toggle();

	});	
});