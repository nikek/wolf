<?php

class pluginTwitter {
	
	public function showTwitterFeed($req_type='search',$req_what,$req_lenght=1,$req_upd_interval=10) {
		
		// Declare variables and set type of request
		switch($req_type) {
			case "search":
				$feed = "http://search.twitter.com/search.json?q=from:" . $req_what . "&amp;rpp=" . $req_lenght;
				break;
			case "user":
				$feed = "http://twitter.com/status/user_timeline/" . $req_what . ".json";
				break;
			default:
				$feed = "http://search.twitter.com/search.json?q=from:" . $req_what . "&amp;rpp=" . $req_lenght;
		}

		// Check if file has recently been 
		// updated with new tweets and if it exists
		// The update interval can be switched while calling the function
		// if no interval is set, 15 minutes is standard
		$file = dirname(__FILE__)."/twitter.json";
			
		if (file_exists($file)) {
			// Get todays date minus 15 minuters
			$todays_date = date("Y-m-d H:i:s", mktime(date("H"), date("i")-$req_upd_interval, date("s"), date("m"), date("d"), date("Y")) );
			
			// Get and convert the date when the file was created
			$created_date =  date("Y-m-d H:i:s", filemtime($file));
		}
		
		if ($created_date < $todays_date) {
			$newfile = dirname(__FILE__)."/twitternew.json";
			copy($feed, $newfile);
			
			// Check if the new json-callback actually has changed content since last time
			$oldcontent = @file_get_contents($file);
			$newcontent = @file_get_contents($newfile);
			
			if($oldcontent != $newcontent) {
				copy($newfile, $file);
			}
		}
		
		$months = array('01' => 'Januari', 
				   '02' => 'Februari', 
				   '03' => 'Mars', 
				   '04' => 'April', 
				   '05' => 'Maj', 
				   '06' => 'Juni', 
				   '07' => 'Juli', 
				   '08' => 'Augusti', 
				   '09' => 'September', 
				   '10' => 'Oktober', 
				   '11' => 'November', 
				   '12' => 'December'); 
		
		$days = array('Söndag', 
				   'Måndag', 
				   'Tisdag', 
				   'Onsdag', 
				   'Torsdag', 
				   'Fredag', 
				   'Lördag', 
				   'Augusti');

		$tweets = @file_get_contents($file);
		
		$tweets = json_decode($tweets);
		 	//echo $tweets;
		// Make it print beautifully
		$return = "<ul id='twitterfeed'>";
	
		for($x=0;$x<$req_lenght;$x++) {
			// Fix the time-printing
			$tw_date_time = strftime("%H:%M",strtotime( $tweets[$x]->created_at ));
			$tw_date_day = strftime("%e",strtotime( $tweets[$x]->created_at ));
			$tw_date_month = strftime("%b",strtotime( $tweets[$x]->created_at ));
			$tw_date_dayname = strftime("%a",strtotime( $tweets[$x]->created_at ));
			 
			// Fixes link structure in tweet
			//$str = ereg_replace("[[:alpha:]]+://[^<>[:space:]]+[[:alnum:]/]","<a href=\"\\0\">\\0</a>", $tweets[$x]->text);
			//$pattern = '/[#|@][^\s]*/';
			//preg_match_all($pattern, $str, $matches);
			 
			// Check if there is no more tweets to get
			if(empty($str)) {
				$return .= "<li>You have requested more tweets than avaible amount, while using your type of request. (Hide this row by manually hacking the script)</li>";
				break;
			}
			
			// Loop out and return pre-formatted string
			foreach($matches[0] as $keyword) {
				$keyword = str_replace(")","",$keyword);
				$link = str_replace("#","%23",$keyword);
				$link = str_replace("@","",$keyword);
					if(strstr($keyword,"@")) {
						$search = "<a href=\"http://twitter.com/$link\">$keyword</a>";
					} else {
						$link = urlencode($link);
						$search = "<a href=\"http://twitter.com/#search?q=$link\" class=\"grey\">$keyword</a>";
					}
				$str = str_replace($keyword, $search, $str);
			}
			 
			$return .= "<li><a href='http://www.twitter.com/BrainBattleICPC/'>@BrainBattleICPC</a> ".$str." <br/><span class='twittdate'>".$tw_date_dayname.", ".$tw_date_month." ".$tw_date_day."th at ".$tw_date_time."</span></li>\n";
		}
		$return .= "<li>Updates from <a href='http://www.twitter.com/#!/BrainBattleICPC'>BrainBattleICPC</a> on Twitter.</li></ul>";
		
		return $return;
	}

}
?>