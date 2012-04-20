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
<body id="darkBody">
	
	<header id="site-header">
		
		<div class="wrap group">
			
			<h1 id="site-title">ICPC Live</h1>
			<?php // <h2 id="site-description">Broadcasting from Warsaw, Poland</h2> ?>
		
			<nav>
			
					<a href="#"><strong>Live</strong></a>
					<a href="#">Blog</a>
					<a href="#">Info</a>
					<a href="#">Archive</a>
					<a href="#">FAQ</a>
			
			</nav>
		</div>
	</header>
	
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap main group">
		
		<section id="video-wrap">
			<div class="boxing">
				<div class="inner_boxing">
					<video
					src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.og"
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
					
					<!--<div class="tabs">
					
						<span>Info</span> - <span>Chat</span> - <span>Teams</span>
				
					</div>-->
					
			<ul class="nav-top">
				<li><a href="#">Information</a></li> 
				<li><a href="#">Scoreboard</a></li> 
				<li><a href="#">Teams</a></li>
				<li><a href="#">Chat</a></li>
				<li><a href="#">Studio Question</a></li>
			</ul>
			
			<div style="clear:both;"> </div>
					
					<p>Welcome to the ICPC-live broadcast page. To make it work beautifully and as expected try one of the newer browsers, say Chrome or Firefox.</p>

					<p>If your computer is running slowly with this page up, try to turn off the automatic scoreboard update. Or you could try hiding the social box on the screens right hand side.</p>

					<p>You can change the layout of this page either by using the buttons above the video or the keys 1-4 on your keyboard.</p>
					<table id="sb"></table>
					
				</div>
			</div>
		</section>
		
		
		<section id="scoreboard-wrap">
			
			<div class="boxing">
				<div class="inner_boxing">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				
<?php				
//$feed2="http://scrool.se/icpc/wf2011/xml";

//echo @file_get_contents($feed2);
?>


				<table id="scoreboard"></table>
				
				</div>
			</div>
			
		</section>
		
	</section>
	

	<footer class="footer-dark">
			<?php require_once('layout/footer.php');?>
	</footer>
	
	
	
	<script id="tmplTeam" type="text/template">
		<td class="team-star <%= starred %>">&#9733;</td>
		<td><%= name %></td>
		<td><%= score %></td>
		<td class="<%= A[0] %>"><%= A[1] %>-<%= A[2] %></td>
		<td class="<%= B[0] %>"><%= B[1] %>-<%= B[2] %></td>
		<td class="<%= C[0] %>"><%= C[1] %>-<%= C[2] %></td>
		<td class="<%= D[0] %>"><%= D[1] %>-<%= D[2] %></td>
		<td class="<%= E[0] %>"><%= E[1] %>-<%= E[2] %></td>
		<td class="<%= F[0] %>"><%= F[1] %>-<%= F[2] %></td>
		<td class="<%= G[0] %>"><%= G[1] %>-<%= G[2] %></td>
	</script>

	<script src="scripts/libs.js"></script>
	<?php // <script src="http://localhost:1336/socket.io/socket.io.js"></script> ?>
	<script src="http://130.237.8.168:1336/socket.io/socket.io.js"></script>
	<script>var teamsJSON = <?php  echo file_get_contents('http://icpclive.com/data/scoreboard.json');?>;</script>
	<script src="scripts/site.js"></script>
	<?php //print $start_log , "End: ", microtime(true); ?>
</body>
</html>