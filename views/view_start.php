
<?php defined('BASEPATH') or die('No direct script access.');

/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
*/

/* Getting wp rss feed, used for presenting the blog on start-site */

$url = 'http://www.icpclive.com/blog/feed';
$rss = fetch_rss($url);


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>ICPC Live</title>
	<?php require_once('layout/head.php');?>
</head>
<body id="baseBody">
	
	<header id="site-header" role="navigation">
		<?php require_once('layout/header.php');?>
	</header>
	
	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap start-wrap group">
			<!--<div class="colwrap">
				<img src="<?=BASE_URL;?>images/Logo-2012.png" id="icpc-live-logo" />
			</div>-->
			
			<div class="col2">
			
				
				<?php
				
				/*
				$title = ;
				$url   = $item[link];
				echo "<a href=$url>$title</a></li><br>
				";
				*/
				
						
						
				foreach ($rss->items as $item ):
					$published = parse_w3cdtf($item['pubdate']);
				?>
				<article class="post">
					<header class="entry-header">
						<h1 class="entry-title"><?php echo $item['title']; ?></h1>
						<small class="pubdate"><?php echo date("D, j M", strtotime($item['pubdate']));?></small>
					</header><!-- .entry-header -->

					<div class="entry-content">
						<?php foreach ($item['content'] as $content){
							echo $content;
						}?>
					</div><!-- .entry-content -->
				</article>
				
				<?php endforeach;
					
				/*	array(
						title => 'Weekly Peace Vigil',
						link => 'http://protest.net/NorthEast/calendrome.cgi?span=event&ID=210257',
						description => 'Wear a white ribbon',
						dc => array (
								subject => 'Peace'
							),
						ev => array (
							startdate => '2002-06-01T11:00:00',
							enddate => '2002-06-01T12:00:00',
							type => 'Protest',
							location => 'Northampton, MA'
						)
					);*/
				?>
			</div>
			
			<div class="col4">
				<h1>ICPC Live 2012, reporting from Warsaw, Poland!</h1>
				<p>
					&raquo;While&laquo; we are waiting &raquo;for&laquo; the contestants to arrive in Poland, you can have a look at previous competition covered. Just click the Archive button on the top.
				</p>
				<h1 class="live-pitch">ICPC 2012 will be live broadcasted and displayed here on the 17th of may</h1>
				<p>
					To not miss out on any cool feature, make sure you are using a modern browser. Tip: Check for updates to your favourite browser.
				</p>

				<center><img src="images/icon_birdy.png" width="50px" style="margin:15px 0px 0px 0px"></center>
				<br/>
				<ul id="tweets">
				
				</ul>
				<script>
				// ------------------
				// Twitter API
				// @BrainBattleICPC
					
					$("#tweets").queryTwitter({search :"ICPC2012",limit: 5, refresh: null, transition: "fadeToggle" });
					var instance = $.data( $('ul#tweets')[0], 'queryTwitter');
					//instance.url = "http://newutl.com";
				</script>
				
				

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