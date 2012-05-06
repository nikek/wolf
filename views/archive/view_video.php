<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
	Page: Archive / video
*/

$site = array(
	"title" => "ICPC Live - Video"
);

include('views/layout/head.php');
?>

<body id="baseBody">
	
	<header id="site-header">
		<?php require_once('views/layout/header.php');?>
	</header>
	
	<section class="wrap start-wrap group">
	
			<div class="colwrap">
				<img src="<?=BASE_URL;?>images/Logo-2012.png" id="icpc-live-logo" />
			</div>
			
			<div class="col2">
				<?php
				$subpage = $_GET['view2'];
				$ext_video = '';
				$ext_map = 'world';

				if($subpage == '2009') 
				{
					// Stockholm, Sweden
					$ext_video = 'ICPCLive2009_Stockholm_1h_mp4.m4v';
					$ext_map = 'stockholm09';
				} 
				else if ($subpage == '2010') 
				{
					// Harbin, China
					$ext_video = 'ICPCLive2010_Harbin_1h_mp4.m4v';
					$ext_map = 'harbin10';
				}
				
				if (!file_exists(BASE_URL."video/".$ext_video)) {
					//$ext_video = '';
				}
				
				if($ext_video != '') {
					?>
						<center><video src="video/<?=$ext_video;?>" controls width="540"> </video>
						<br/><br/><br/>
						<p>Download this video here: <a href="videos/<?=$ext_video;?>"><?=$ext_video;?></a></p>
						</center>
					<?php
				}
				else {
					echo "Could not find any video for this year. Try selecting any other year in the right side menu.";
				}
				?>
				
			</div>
			
			<div class="col4">
				<?php require_once('views/menus/menu_archives.php');?>
				
				<?php /* A nice looking map from the country */ ?>
				<img src="<?=BASE_URL;?>images/maps/worldmap-<?=$ext_map;?>.png" id="archive-world-map" />
			</div>
	
	</section>
	
	<footer class="footer-light">
		<?php require_once('views/layout/footer.php');?>
	</footer>

</body>
</html>