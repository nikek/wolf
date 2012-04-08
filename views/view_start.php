
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
	<section class="wrap main group">

		<section class="start-wrap">
			
			ddOKOK

			<!--<div class="boxing">
				<div class="inner_boxing">
					<video
					src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.og"
					controls="controls"
					style="width:100%"
					>
						your browser does not support the video tag
					</video>
				</div>
			</div>-->
		</section>
				
	</section>
	
	
	<footer class="footer-light">
			<?php require_once('layout/footer.php');?>
	</footer>
	
	<script id="tmplTeam" type="text/template">
		<td class="team-star <%= starred %>">&#9733;</td>//<% if(starred){ %>&#9733;<% }else{ %>&#9734;<%}%></td>
		<td><%= teamName %></td>
		<td class="<%= A.state %>"><%= A.attempts %>-<%= A.time %></td>
		<td class="<%= B.state %>"><%= B.attempts %>-<%= B.time %></td>
		<td class="<%= C.state %>"><%= C.attempts %>-<%= C.time %></td>
		<td class="<%= D.state %>"><%= D.attempts %>-<%= D.time %></td>
		<td class="<%= E.state %>"><%= E.attempts %>-<%= E.time %></td>
		
	</script>
	<script src="scripts/libs.js"></script>
	<script src="http://130.237.8.168:1336/socket.io/socket.io.js"></script>
	<script src="scripts/site.js"></script>
	<?php //print $start_log , "End: ", microtime(true); ?>
</body>
</html>