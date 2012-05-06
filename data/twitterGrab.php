<?php

function showTwitterFeed($req_type='search',$req_what=NULL,$req_lenght=10,$req_upd_interval=10) {
		
		// Declare variables and set type of request
		switch($req_type) {
			case "search":
				$feed = "http://search.twitter.com/search.json?q=" . $req_what . "&amp;rpp=" . $req_lenght;
				break;
			case "user":
				$feed = "http://twitter.com/status/user_timeline/" . $req_what . ".json";
				break;
			default:
				$feed = "http://search.twitter.com/search.json?q=" . $req_what . "&amp;rpp=" . $req_lenght;
		}

		// Check if file has recently been 
		// updated with new tweets and if it exists
		// The update interval can be switched while calling the function
		// if no interval is set, 15 minutes is standard
		$file = dirname(__FILE__)."/twitter.json";
			
		if (file_exists($file)) {
			// Get todays date minus 15 minuters
			$todays_date = strtotime(date("Y-m-d H:i:s", mktime(date("H"), date("i")-$req_upd_interval, date("s"), date("m"), date("d"), date("Y")) ) );
			
			// Get and convert the date when the file was created
			$created_date =  strtotime(date("Y-m-d H:i:s", filemtime($file))) ; 
		}
		
		if ($created_date < $todays_date) {
			$newfile = dirname(__FILE__)."/twitternew.json";
			copy($feed, $newfile);
			
			// Check if the new json-callback actually has changed content since last time
			$oldcontent = @file_get_contents($file);
			$newcontent = @file_get_contents($newfile);
			
			if($oldcontent != $newcontent) {
				copy($newfile, $file);
				echo @file_get_contents($newfile);
			}
		} else {
			echo @file_get_contents($file);
		}
		
		//echo "<pre>";
		//echo @file_get_contents(json_encode($file));
		
}
showTwitterFeed('search', $_GET['q']);
?>