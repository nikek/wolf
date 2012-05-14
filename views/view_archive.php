<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
*/

$site = array(
	"title" => "ICPC Live - Archive"
);

require_once('layout/head.php');
?>

<body id="baseBody">
	
	<header id="site-header">
		<?php require_once('layout/header.php');?>
	</header>
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap start-wrap group">
			<div class="colwrap">
				<a href="/"><img src="<?=BASE_URL;?>images/Logo-2012.png" id="icpc-live-logo" /></a>
			</div>
			
			<div class="col2">
			
				
				<p>
					Watch the competition edited down to one hour.<? // The Orlando version is still in editing and we only have a full length version of 1 GB to stream. ?>
				</p>
				
				<h3>ICPC Live, crew, cast and friends</h3>
				
				<p>
					The first live broadcast of ICPC took place in Stockholm in 2009. After a few months of intense planning we made it happen.
					Since then we have covered every competition. We are in collaboration with the DMT-team that also supports the ICPC with images and video. Our joint goal is to present the competition to the rest of the world.
				</p>
				
				<p>
					The first ICPC live crew consisted out of people from the Royal Instutitute of Technology (KTH) and students from Lillehammer University College. 
					ICPC Live is composed of students and former students that develop graphics for the scoreboard (ICPC Live Dev), 
					broadcasters from Lillehammer and technical knowledge from KTH. The team has it's base for planning in Stockholm. 
					People from different disciplinary fields, university faculty, students and local resources is a part of the big machine. 
					We are all of course working closely with the rest of the ICPC to bring you the best programing contest there is. 
				</p>

				<h1 class="live-pitch">ICPC Live born in 2009</h1>
				
				<p>
					One part of the Live team is the Dev team that works on the live scoreboard and other technologies making it possible to produce a nice end product. 
					Everyone else that is't programming for the ICPC Live helps out with the broadcast, manning cameras, production planing, mixer control, vision mixing, sound engineers and many more. 
					Everyone is equally important.
				</p>
				
				<!--<p>
					Producing in a distance.
				</p>-->
				
				<figure class="photo-byline">
					<img src="<?=BASE_URL;?>images/photos/icpc-team-2011.jpg" width="100%" alt="ICPC Live team photo from Orlando 2011" class="photo-in-text" />
					<figcaption>ICPC Live crew 2011, Orlando, Florida, US</figcaption>
				</figure>
				
				
				<p>
					In order to produce this fine competition we had a lot of help from our friends in the broadcast industry. IBM is the main sponsor of the competition. 
					But the broadcast and production bits would not be possible without companies like, Blackmagic Design, Grass Valley, Logitech, Panasonic, Alkit. 
					Thank you very much for making easy to use products for our goals to be reached. You are very important to us, lots of love!
				</p>
			</div>
			
			<div class="col4">
				<?php require_once('menus/menu_archives.php');?>
			</div>
	
	</section>
	
	<footer class="footer-light">
	<?php 
			//echo phpinfo();
	?>
		<?php require_once('layout/footer.php');?>
	</footer>

</body>
</html>