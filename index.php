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
	
		case 'info':
			include('views/view_info.php');
			break;
			
		case 'teams/':
			include('jsons/teams.json');
			break;
			
		default:
			include('views/view_live.php');
			
	}
	
?>