<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
	Page: Error / 404
*/

$site = array(
	"title" => "ICPC Live - Could not find page"
);

include('views/layout/head.php');
?>

<body id="baseBody">
	
	<header id="site-header">
		<?php require_once('views/layout/header.php');?>
	</header>
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap start-wrap group">
			<div class="colwrap">
				
				<img src="<?=BASE_URL;?>images/Logo-2012.png" width="150px" id="icpc-live-logo" />
				
			</div>
			
			<div class="col2">
				This page is floating around somewhere else..
			</div>
			
			<div class="col4">
				<h2> </h2>
				
			</div>
	
	</section>
	
	<footer class="footer-light">
		<?php require_once('views/layout/footer.php');?>
	</footer>

</body>
</html>