
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
	<?php //$start_log = "Start: ". microtime(true); ?>
	<meta charset="utf-8">
	<title>ICPC Live</title>
	
	<link href='http://fonts.googleapis.com/css?family=Nixie+One|Codystar:300,400|Cabin+Sketch:400,700|Neucha|Cambo|Fugaz+One|Kaushan+Script|Patua+One|Bree+Serif|Montserrat|Rancho|Pacifico|Gruppo' rel='stylesheet' type='text/css' />
	
	<link rel="stylesheet" href="styles/site.less" type="text/less" media="screen" />
	
	<script src="scripts/less-1.3.0.min.js"></script>
	
	<!--[if lt IE 9]><script src="../script/ie.js"></script><![endif]-->

	<script>var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-23660871-1']);_gaq.push(['_trackPageview']);
	  (function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>
	
	
	<!-- Temporary Development Assets -->
	<!-- ******************************************************** -->
	<!--<link rel="stylesheet" href="development-assets/development.css">
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="development-assets/scripts.js"></script>-->
	<!-- ******************************************************** -->
	
</head>
<body id="baseBody">
	
	<header id="site-header">
		<?php require_once('layout/header.php');?>
	</header>
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap start-wrap group">
			<div class="colwrap"><br/><br/>
			<img src="images/Logo-2012.png" width="150px" /></div>
			<div class="col2">
			
<h1>First arrival in Warsaw, Poland, soon!</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus neque in massa placerat vestibulum. Praesent venenatis, diam in sollicitudin rhoncus, libero lectus scelerisque nisi, suscipit bibendum ipsum libero vitae risus. Vestibulum mi erat, placerat in interdum ac, fringilla ac diam. Mauris pulvinar condimentum enim ac pulvinar. Maecenas eget lacus sit amet augue malesuada dignissim non vitae quam. Cras viverra lorem ac tellus consectetur laoreet. Quisque interdum congue pharetra. Nulla facilisi. Ut vel lacus purus. Duis quis ultrices odio. Nulla cursus erat vel nisi vehicula semper. Sed semper, augue nec bibendum lacinia, turpis elit interdum enim, ac cursus risus dui id lacus. Duis rhoncus odio a urna placerat vehicula. Ut placerat porta mi non condimentum.
</p>
<h1 class="live-pitch">ICPC 2012 will be live broadcasted and displayed here on the 12th of may</h1>
<p>
Phasellus sed lectus sit amet ante imperdiet fringilla eu in sem. Nam turpis nisl, porta ut consequat id, ullamcorper eu magna. Aenean felis arcu, laoreet quis vehicula ac, luctus sed elit. Etiam vulputate consectetur faucibus. Phasellus venenatis consequat tempor. Nulla faucibus magna at lectus ultricies vehicula. Proin eu erat ut nisl egestas venenatis blandit nec massa. Aliquam lacinia tincidunt placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque condimentum vestibulum fermentum. Proin eget lacus at massa faucibus auctor sit amet sed ipsum. Vestibulum interdum, tellus eu accumsan sagittis, turpis odio fermentum odio, sed aliquet neque turpis nec lectus. Ut enim magna, porttitor eu accumsan vel, mollis eu ipsum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis non enim mattis velit pharetra lobortis. In pellentesque ultrices nibh id viverra.
</p>

<h3>ICPC Live, Royal Institute of technology</h3>
<p>
	We started broadcasting the ICPC in Stockholm, Sweden 2009. 
	Since then we had the chance to cover Harbin in 2010 and Orlando in 2011. 
	The ICPC Live crew started out with people from the Royal Institute of Technology in Stockholm and Students from Lillehammer Uni. College. 
	The team now consists of faculty and students from these schools and is always supported by local abilities and working closely with the rest of the ICPC. One part of the Live team is the Dev team which works on the live scoreboard and other technologies making it possible to produce a nice end product. Everyone else that is't programming for the ICPC Live helps out with the broadcast, manning cameras, production planing, mixer contol, vision mixing, sound engineers and many more. 
</p>
<p>
	One key parameter in the production is "Distance production". It started in Stockholm where the price ceremony was produced from campus, 3 km away from the arena. The only people on site where 3 camera personela and one local "handy man".
</p>
<p>
Nunc massa orci, fringilla egestas semper nec, pulvinar id elit. Nulla in lacinia sem. Donec et sapien nunc, vel pellentesque orci. Donec aliquet est a diam faucibus at luctus mauris luctus. Aenean felis velit, semper in consectetur at, bibendum nec ipsum. Curabitur erat arcu, venenatis et hendrerit dictum, faucibus sed massa. Mauris cursus aliquet odio tempor pretium. Nullam iaculis nulla in erat iaculis varius. Curabitur pretium euismod nulla, vel suscipit nunc convallis eu. Curabitur eleifend, libero ac dapibus egestas, turpis lectus pharetra eros, non accumsan sem mauris a eros. Phasellus porttitor viverra enim eget euismod. Mauris ut libero ante, ultrices ornare ipsum. Nulla nisi leo, rhoncus a laoreet eget, placerat nec sem.
</p>

			</div>
			
			<div class="col4">
				

				<center><img src="images/icon_birdy.png" width="50px" style="margin:15px 0px 0px 0px"></center>
				<br/>
				<div id="tweets">
				<?php 
				// ------------------
				// Twitter API
				require_once("api/TwitterSearch.php");
				$tw = new TwitterSearch("#ICPC2012");
				$twResults = $tw->from("BrainBattleICPC")->rpp(6)->results();
				foreach($twResults as $tt)
				{
					echo "<a href='http://www.twitter.com/BrainBattleICPC/' class='tweet_from'>@" , $tt->from_user , "</a> <p class='tweet_text'>" , $tt->text , "</p> <div class='tweet_date'>" , substr($tt->created_at,0,25) , "</div>";
				}
				?>
				</div>
				
				
				<h2>Competition archive</h2>
				<ul id="side_nav">
					<li class="int_nav_head">Harbin, China 2010</li>
					<li><a href="?page=archive&subp=harbin_video">One hour version</a></li>
					<li><a href="#">Country information</a></li>
					<li><a href="?page=archive&subp=harbin_credits">Cast and credits</a></li>
					<li class="int_nav_head">Stockholm, Sweden 2009</li>
					<li><a href="?page=archive&subp=stockholm_video">One hour version</a></li>
					<li><a href="#">Country information</a></li>
					<li><a href="?page=archive&subp=stockholm_credits">Cast and credits</a></li>
				</ul>
			</div>
			<div class="boxing">
				<div class="inner_boxing">
					<video
					src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.mp4"
					controls="controls"
					style="width:100%"
					>
						your browser does not support the video tag
					</video>
				</div>
			</div>
	
	</section>
	
	
	<footer class="footer-light">
		<?php require_once('layout/footer.php');?>
	</footer>

</body>
</html>