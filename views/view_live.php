<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta charset="utf-8">
	<title>ICPC Live</title>
	
	<link rel="stylesheet" href="styles/site.less" type="text/less" media="screen" />
	
	<script src="scripts/less-1.3.0.min.js"></script>
	
	<!--[if lt IE 9]><script src="../script/ie.js"></script><![endif]-->

	<script>var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-23660871-1']);_gaq.push(['_trackPageview']);
	  (function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>
	
</head>
<body>
	
	<header id="site-header">
		
		<div class="wrap group">
			
			<h1 id="site-title">ICPC Live</h1>
				<?php // <h2 id="site-description">Broadcasting from Warsaw, Poland</h2> ?>
			
		
			<nav>
			
				<ul>
				
					<li><strong>Live</strong></li>
					<li>Blog</li>
					<li>Info</li>
					<li>FAQ</li>
				
				</ul>
			
			</nav>
		</div>
	</header>
	
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap">
		
		<section id="video-wrap">
			
			<video
			src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.ogg"
			controls="controls"
			style="width:100%"
			>
				your browser does not support the video tag
			</video>
						
		</section>
		
		
		
		
		<section id="info-wrap">
			
			<div class="tabs">
				
				<span>Info</span> - <span>Chat</span> - <span>Teams</span>
			
			</div>
			
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap <abbr title="Frequently Asked Questions">FAQ</abbr> into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			
		</section>
		
		
		
		
		<section id="scoreboard-wrap">
			
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			
		</section>
		
	</section>
	
	
	
	
	<footer>
		
		<div class="wrap">
			
			<p>©2012 ICPC Live Crew</p>
			
		</div>
		
	</footer>
	
	
	<script src="scripts/libs.js"></script>
	<script src="scripts/site.js"></script>
</body>
</html>