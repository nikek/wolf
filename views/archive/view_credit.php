<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
	Page: Archive / credit
*/

$site = array(
	"title" => "ICPC Live - Credit"
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
					require_once('views/archive/credit/view_credit2009.php');
					$ext_map = 'stockholm09';
				} 
				else if ($subpage == '2010') 
				{
					// Harbin, China
					require_once('views/archive/credit/view_credit2010.php');
					$ext_map = 'harbin10';
				}
				else if ($subpage == '2011') 
				{
					// Orlando, Florida, US
					require_once('views/archive/credit/view_credit2011.php');
					$ext_map = 'orlando11';
				}
				else {
					echo "Could not find any end credit information from this year. Try selecting any other year in the right hand side menu.";
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