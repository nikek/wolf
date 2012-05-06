<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	
	<link href='http://fonts.googleapis.com/css?family=Nixie+One|Codystar:300,400|Cabin+Sketch:400,700|Neucha|Cambo|Fugaz+One|Kaushan+Script|Patua+One|Bree+Serif|Montserrat|Rancho|Pacifico|Gruppo' rel='stylesheet' type='text/css' />
	
	<link rel="stylesheet" href="<?=BASE_URL;?>styles/site.less" type="text/less" media="screen" />
	
	<script src="<?=BASE_URL;?>scripts/less-1.3.0.min.js"></script>
	<script src="<?=BASE_URL;?>assets/js/libs/jquery-1.7.2.min.js"></script>
	<script src="<?=BASE_URL;?>assets/js/plugins/queryTwitter.js"></script>
	
	<!--[if lt IE 9]><script src="../script/ie.js"></script><![endif]-->

	<script>var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-23660871-1']);_gaq.push(['_trackPageview']);
	  (function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>
	
	
	<!-- Temporary Development Assets -->
	<!-- ******************************************************** -->
	<!--<link rel="stylesheet" href="development-assets/development.css">
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="development-assets/scripts.js"></script>-->
	<!-- ******************************************************** -->
	
	<?php
	if(isset($site['title'])):
		echo "<title>" , $site['title'] , "</title>";
	else:
		echo "<title>ICPC Live</title>";
	endif;
	?>

</head>
