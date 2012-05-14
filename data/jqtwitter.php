<?php
 
 
$cache = 'tweets-cache.txt';
$date = 'tweets-date.txt';
 
$currentTime = time(); // Current time
 
// Get cache time
$datefile = fopen($date, 'r');
$cacheDate = fgets($datefile);
fclose($datefile);
 
 
//check if cache has expired
if (floor(abs(($currentTime-$cacheDate))) <= $_GET['expiry'] && $cacheDate) {
 
    $cachefile = fopen($cache, 'r');
    $data = fgets($cachefile);
    fclose($cachefile);
 
} else { //renew the cache
 
    //toggle between API
    if ($_GET['q']) 
    {
        $data = file_get_contents($_GET['api'] . '?q=' . urlencode($_GET['q']));   
     
    } else if ($_GET['screen_name']) 
    {
        $data = file_get_contents($_GET['api'] . '?screen_name=' . $_GET['screen_name'] . '&count=' . $_GET['count'] . '&include_rts=' . $_GET['include_rts'] . '&include_entities=' . $_GET['include_entities']);   
    }
     
    // update cache file
    $cachefile = fopen($cache, 'wb');  
    fwrite($cachefile,utf8_encode($data));  
    fclose($cachefile); 
 
    // update date file
    $datefile = fopen($date, 'wb');  
    fwrite($datefile, utf8_encode(time()));  
    fclose($datefile);   
}
 
 
header('Content-type: application/json');
echo $data;
?>