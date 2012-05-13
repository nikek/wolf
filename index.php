<?php 
/**
 *
 * ICPC Live, The ACM-ICPC International Collegiate Programming Contest Live
 * A system for live broadcast and feed data from an active competition, with old competition information. A better presentation of information. 
 * Authors: Roger Sandholm & Niklas Ek
 * 
 */
 
 /**
 * Define globals and paths
 */
	define('BASEPATH', $_SERVER['DOCUMENT_ROOT']);
	define('BASE_URL', "http://localhost/wolf/");
	//define('BASE_URL', "http://213.103.206.210/wolf/");
 
/**
 * A session class.
 */
 	/*session_start();
	include('inc/session_class.php');
	$mySession = new SessionHandler();*/
	
/**
 * A database connection class
 */
	/*include('inc/db_class.php');
	$myDb = new DataConnection();*/
	
/**
 * Functions for taking database action 
 */
	//include('inc/admin_db_func.php');
		
/**
 * MagPieRSS - will post wp-content outside of wp through wps feed.
 */
	require_once('magpierss/rss_fetch.inc');


/**
 * Include administration panel
 */
	if(isset($_GET['view'])){
		$view = $_GET['view'];
	}else{
		$view = "";
	}
	
	
	switch ($view) {
	
		case 'start':
			include('views/view_start.php');
			break;
			
		case 'live':
			include('views/view_live.php');
			break;

		case 'archives':
				if(isset($_GET['view3'])):
					if($_GET['view3'] == "video") {
						include('views/archive/view_video.php');
					} else if($_GET['view3'] == "credit") {
						include('views/archive/view_credit.php');
					} else {
						// Link to yearly archive page
						include('views/view_archive.php');
					};
				elseif(isset($_GET['view2'])):
					include('views/view_archive.php');
				else:
					include('views/view_archive.php');
				endif;
			break;

		case 'info':
			include('views/view_info.php');
			break;
			
		case 'teams/':
			include('jsons/teams.json');
			break;
			
		default:
			include('views/view_start.php');
			
	}
	
?>