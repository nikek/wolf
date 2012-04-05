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
	<?php $start_log = "Start: ". microtime(true); ?>
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
	<section class="wrap main">
		
		<section id="video-wrap">
			<div class="boxing">
				<div class="inner_boxing">
					<video
					src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.ogg"
					controls="controls"
					style="width:100%"
					>
						your browser does not support the video tag
					</video>
				</div>
			</div>
		</section>
		
		
		<section id="info-wrap">
			<div class="boxing">
				<div class="inner_boxing">
					
					<div class="tabs">
					
						<span>Info</span> - <span>Chat</span> - <span>Teams</span>
				
					</div>
					
					<table id="bbtest"></table>
					<table id="sb"></table>
					
				</div>
			</div>
		</section>
		
		
		<section id="scoreboard-wrap">
			
			<div class="boxing">
				<div class="inner_boxing">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				
<?php				
$feed2="http://scrool.se/icpc/wf2011/xml";

echo @file_get_contents($feed2);
?>
				
				</div>
			</div>
			
		</section>
		
	</section>
	
	<div style="clear:both"> </div>
	
	<footer>
		

			
			<?php require_once('layout/footer.php');?>
			

		
	</footer>
	
	<script id="tmplTeam" type="text/template">
		<td><%= teamName %></td>
		<td class="team-star <%= starred %>">&#9733;</td>//<% if(starred){ %>&#9733;<% }else{ %>&#9734;<%}%></td>
	</script>
	<script src="scripts/libs.js"></script>
	<script src="http://130.237.8.168:1336/socket.io/socket.io.js"></script>
	<script src="scripts/site.js"></script>
	<?php //print $start_log , "End: ", microtime(true); ?>
</body>
</html>