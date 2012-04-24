
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
	<?php require_once('layout/head.php');?>
</head>
<body id="baseBody">
	
	<header id="site-header">
		<?php require_once('layout/header.php');?>
	</header>
	
		
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap start-wrap group">
			<div class="colwrap">
				<img src="<?=BASE_URL;?>images/Logo-2012.png" id="icpc-live-logo" />
			</div>
			
			<div class="col2">
			
				<h1>ICPC Live 2012, soon live from Warsaw, Poland!</h1>
				<p>
					&raquo;While&laquo; we are waiting &raquo;for&laquo; the contestants to arrive in Poland, you can have a look at previous competition covered. Just click the Archive button on the top. The material is currently only available in mp4 format.
				</p>
				<h1 class="live-pitch">ICPC 2012 will be live broadcasted and displayed here on the 17th of may</h1>
	
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
				

				<ul id="side_nav">
					<li class="int_nav_head">ICPC Live Web</li>
					<li>Check out the backbone blog for the ICPC Live crew</li>
				</ul>
			</div>
	
	</section>
	
	
	<footer class="footer-light">
		<?php require_once('layout/footer.php');?>
	</footer>

</body>
</html>