<?php defined('BASEPATH') or die('No direct script access.');
/*
	Project: ICPC Live 2012 in Warsaw, Poland.
	Authors: Niklas Ek & Roger Sandholm.
	Date: March, April and May 2012.
*/

$site = array(
	"title" => "ICPC Live - Live"
);

require_once('layout/head.php');
?>

<body id="liveBody">
	
	<header id="site-header">
		<?php require_once('layout/header.php');?>
	</header>

	<?php // WRAPPING EVERYTHING BUT HEADER & FOOTER. ?>
	<section class="wrap main group">
		
		<section id="video-wrap">
			<object width="100%" height="60%" id="lsplayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="http://cdn.livestream.com/grid/LSPlayer.swf?channel=icpclive&amp;autoPlay=false"></param><param name="allowScriptAccess" value="always"></param><param name="allowFullScreen" value="true"></param><embed name="lsplayer" wmode="transparent" src="http://cdn.livestream.com/grid/LSPlayer.swf?channel=icpclive&amp;autoPlay=false" width="100%" height="400px" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash"></embed></object><div style="font-size: 11px;padding-top:10px;text-align:center;width:100%">Watch <a href="http://www.livestream.com/?utm_source=lsplayer&amp;utm_medium=embed&amp;utm_campaign=footerlinks" title="live streaming video">live streaming video</a> from <a href="http://www.livestream.com/icpclive?utm_source=lsplayer&amp;utm_medium=embed&amp;utm_campaign=footerlinks" title="Watch icpclive at livestream.com">icpclive</a> at livestream.com</div>
			
			<?php	/*
			<video
			src="http://video.blendertestbuilds.de/download.blender.org/peach/trailer_400p.og"
			controls="controls"
			style="width:100%"
			>
				your browser does not support the video tag
			</video> */
			?>
		</section>
		
		
		<section id="tabs-wrap">
			
				<ul class="nav-top">
					<li class="selected"><a href="#" id="quickInfoBtn">Information</a></li>
					<li><a href="#" id="chatBtn">Chat</a></li>
					<?php /* 
					<li><a href="#" id="#quickInfoBtn">Teams</a></li>
					<li><a href="#" id="#quickInfoBtn">Chat</a></li>
					<li><a href="#" id="#quickInfoBtn">Studio Question</a></li>*/ ?>
				</ul>
			
				<div style="clear:both;"> </div>
				
				
				
				
				<div id="quickInfoTab" class="tabbox visible">
					<h2>Welcome to the ICPCLive broadcast site.</h2>
					<p>On this site you will find the LIVE Web stream for the ICPC. What you also find here is a live updating scoreboard and more.</p>
					<p>To not miss out on any cool feature, make sure you are using a modern browser. <span style="color:green">Tip:</span> Check for updates to your favourite browser.</p>
					
					<h2>Scoreboard</h2>
						<p>Click the star icon to the left of a team to select it as starred. A copy will be placed on top of the scoreboard, making it easier to follow your teams of interest throughout the competition.</p>
						<p><div id="desc_solved"></div>Solved <div id="desc_first"></div>First Solved <div id="desc_pend"></div>Pending <div id="desc_tried"></div>Tried(not solved)<br/>The first number is number of attempts. The second, for solved problems is the time in minutes and for the pending is the amount of pending submissions.</p>
				</div>
				
				
				
				
				<div id="chatTab" class="tabbox invisible">
					<object width="100%" height="60%" id="lschat" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
						<param name="movie" value="http://cdn.livestream.com/chat/LivestreamChat.swf?&showTimestamp=true&channel=icpclive"></param>
						<param name="allowScriptAccess" value="always"></param>
						<param name="allowFullScreen" value="true"></param>
						<embed src="http://cdn.livestream.com/chat/LivestreamChat.swf?&showTimestamp=true&channel=icpclive" 
							name="lschat" width="100%" height="60%" allowScriptAccess="always" 
							allowFullScreen="true" type="application/x-shockwave-flash" bgcolor="#ffffff">
						</embed>
					</object>
				</div>
				
				
				
				
				<div id="studioQuestionTab" class="tabbox invisible">
					<p>Posta Question!</p>
				</div>
				
				
			</div>
		</section>
		
		
		<section id="scoreboard-wrap">
			
<?php				
//$feed2="http://scrool.se/icpc/wf2011/xml";

//echo @file_get_contents($feed2);
?>			
			
			<table id="starred" cellspacing="0"></table>
			<table id="scoreboard" cellspacing="0">
			</table>
		</section>
		
	</section>
	

	<footer class="footer-dark">
			<?php require_once('layout/footer.php');?>
	</footer>
	
	<script id="tmplTeam" type="text/template">
	
		<td class="team-star <%= starred %>" title="Starmark">&#9733;</td>
		<td class="team-rank" title="Rank"><%= rank %></td>
		<td class="team-name" ><%= name %></td>
		<td class="team-nameshort" title=""><%= unishort %></td>
		<td class="team-info"><span class="info-i">i</span></td>
		<td id="team-info-box<%=id%>" class="team-info-box hidden">
			<h4>Team Info</h4>
			<ul>
				<li><span>Team Number:</span> <%=id%></li>
				<li><span>University:</span> <%=name%></li>
				<li><span>Country:</span> <%=country%></li>
				<li><span>Region:</span> <%=region%></li>
				<li><span>Team Name:</span> <%=team%></li>
				<ul>
				<% _.each(members, function(m){ %>
					<li><span><%=m.role%>:</span> <%=m.fname%> <%=m.lname%></li>
				<% }); %>
				</ul>
			</ul>
			
		</td>
		<td class="team-score"><%= score %></td>
		<td class="team-time"><%= time %></td>
		<%
		_.each([A, B, C, D, E, F, G, H, I, J, K, L], function(i) { 
			
			if(i.s){ 
				
				%><td class="<%= i.s %>"><%
				
				if(i.a && i.a !== 0){
					%><%= i.a %><%
				}
				
				if(i.p && i.p !== 0){
					%>/<%= i.p %><%
				}
				
				if(i.t && i.t !== 0){
					%>-<%= i.t %><%
				}
			}else{
				%><td></td><%
			}
		});
		%>
		
	</script>
	<script id="sbHeader" type="text/template">
		<tr class="sbHeader">
			<th class="team-star" title="Starmark">&#9733;</th>
			<th class="team-rank" title="Rank">#</th>
			<th class="team-name" title="Team University">Team University</th>
			<th class="team-nameshort" title="Team University Short">Team University</th>
			<th class="team-info" title="Hover the 'i' to get information about the team.">Info</th>
			<th class="team-info-box hidden"></th>
			<th class="team-score" title="Solved problems">Score</th>
			<th class="team-time" title="Time">Time</th>
			<th>A</th>
			<th>B</th>
			<th>C</th>
			<th>D</th>
			<th>E</th>
			<th>F</th>
			<th>G</th>
			<th>H</th>
			<th>I</th>
			<th>J</th>
			<th>K</th>
			<th>L</th>
		</tr>
	</script>

	<script src="scripts/libs.js"></script>
	<script src="scripts/store.js"></script>
	
	<? //<script src="http://130.237.8.168:1336/socket.io/socket.io.js"></script> ?>
	<script>var teamsJSON = <?php echo file_get_contents('scoreboard/sb.json');?>;</script>
	<script>var extraInfo = <?php echo file_get_contents('data/extrainfo.json');?>;</script>
	<script src="scripts/sbClasses.js"></script>
	<script src="scripts/tabbing.js"></script>
	<script src="scripts/site.js"></script>
	<?php //print $start_log , "End: ", microtime(true); ?>
</body>
</html>