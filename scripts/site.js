
function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}


teams = [{
	"rk":"1",
	"team":"Zhejiang University",
	"slv.":"8",
	"time":"1228",
	"A":"4:169",
	"B":"1:260",
	"C":"1:60","D":"","E":"2:88","F":"","G":"4:290","H":"1:153","I":"","J":"1:49","K":"1:19"},
	{"rk":"2","team":"University of Michigan at Ann Arbor","slv.":"8","time":"1462",
	"A":"2:202","B":"1:291","C":"2:78","D":"","E":"3:90","F":"","G":"1:266","H":"3:235","I":"",
	"J":"2:121","K":"1:39"},
	{"rk":"3","team":"Tsinghua University","slv.":"7","time":"800","A":"1:77","B":"",
	"C":"2:27","D":"","E":"1:144","F":"2:218","G":"","H":"2:160","I":"","J":"2:50","K":"1:44"},{"rk":"4","team":"St. Petersburg State University","slv.":"7","time":"893","A":"1:160","B":"3:280","C":"1:71","D":"","E":"1:107","F":"","G":"","H":"1:180","I":"","J":"1:44","K":"1:11"},{"rk":"5","team":"Nizhny Novgorod State University","slv.":"7","time":"938","A":"2:220","B":"2:--","C":"1:67","D":"","E":"1:48","F":"","G":"2:273","H":"2:137","I":"","J":"1:105","K":"1:28"},{"rk":"6","team":"Saratov State University","slv.":"7","time":"966","A":"2:182","B":"2:272","C":"1:60","D":"","E":"4:158","F":"10:--","G":"","H":"1:131","I":"","J":"1:43","K":"1:20"},{"rk":"7","team":"Friedrich-Alexander-University Erlangen-Nuremberg","slv.":"7","time":"1088","A":"1:210","B":"","C":"1:94","D":"","E":"1:57","F":"","G":"","H":"3:119","I":"1:288","J":"6:159","K":"1:21"},{"rk":"8","team":"Donetsk National University","slv.":"7","time":"1155","A":"1:215","B":"","C":"1:116","D":"1:--","E":"1:136","F":"","G":"2:289","H":"2:75","I":"","J":"4:171","K":"1:53"},{"rk":"9","team":"Jagiellonian University in Krakow","slv.":"7","time":"1176","A":"5:246","B":"3:287","C":"1:118","D":"","E":"2:163","F":"5:--","G":"","H":"2:89","I":"","J":"1:67","K":"1:46"},{"rk":"10","team":"Moscow State University","slv.":"7","time":"1187","A":"3:276","B":"","C":"2:75","D":"","E":"1:106","F":"3:--","G":"3:185","H":"2:198","I":"","J":"2:128","K":"3:39"},{"rk":"11","team":"Ural State University","slv.":"7","time":"1345","A":"2:72","B":"","C":"1:111","D":"2:--","E":"3:163","F":"","G":"6:296","H":"4:287","I":"","J":"1:114","K":"1:82"},{"rk":"12","team":"University of Waterloo","slv.":"7","time":"1555","A":"2:277","B":"","C":"1:140","D":"","E":"2:172","F":"","G":"","H":"5:180","I":"5:279","J":"4:124","K":"3:83"},{"rk":"13","team":"Taurida V.I. Vernadsky National University","slv.":"6","time":"614","A":"1:211","B":"","C":"1:66","D":"","E":"1:89","F":"","G":"9:--","H":"1:167","I":"","J":"1:48","K":"1:33"},{"rk":"14","team":"National Taiwan University","slv.":"6","time":"804","A":"","B":"6:196","C":"1:60","D":"","E":"3:161","F":"","G":"2:--","H":"1:108","I":"","J":"1:116","K":"1:23"},{"rk":"15","team":"University of Warsaw","slv.":"6","time":"872","A":"2:84","B":"4:--","C":"2:113","D":"","E":"8:--","F":"2:261","G":"","H":"3:163","I":"","J":"3:78","K":"1:33"},{"rk":"16","team":"St. Petersburg State University of IT, Mechanics and Optics","slv.":"6","time":"931","A":"2:246","B":"","C":"2:59","D":"","E":"4:254","F":"","G":"5:--","H":"2:160","I":"","J":"1:79","K":"1:13"},
	{"rk":"17","team":"Nanyang Technological University","slv.":"6","time":"958","A":"1:237","B":"","C":"1:98","D":"","E":"5:204","F":"","G":"7:--","H":"3:165","I":"","J":"1:78","K":"2:36"},{"rk":"18","team":"Universidad de Buenos Aires - FCEN","slv.":"6","time":"965","A":"1:255","B":"","C":"2:89","D":"","E":"3:196","F":"","G":"","H":"1:235","I":"","J":"1:97","K":"1:33"},{"rk":"19","team":"Korea Advanced Institute of Science and Technology","slv.":"6","time":"965","A":"1:58","B":"","C":"1:125","D":"","E":"5:282","F":"4:--","G":"","H":"1:185","I":"","J":"2:135","K":"2:60"},{"rk":"20","team":"Peking University","slv.":"6","time":"1012","A":"3:238","B":"","C":"1:52","D":"","E":"1:107","F":"2:--","G":"","H":"3:261","I":"","J":"5:129","K":"2:45"},{"rk":"21","team":"Sharif University of Technology","slv.":"6","time":"1066","A":"6:293","B":"","C":"1:127","D":"","E":"1:200","F":"","G":"","H":"2:167","I":"","J":"2:98","K":"1:41"},{"rk":"22","team":"Carnegie Mellon University","slv.":"6","time":"1110","A":"2:79","B":"","C":"3:92","D":"","E":"6:299","F":"","G":"","H":"2:161","I":"","J":"3:223","K":"1:36"},{"rk":"23","team":"Shanghai Jiao Tong University","slv.":"6","time":"1113","A":"4:280","B":"","C":"2:89","D":"","E":"2:78","F":"","G":"10:--","H":"3:186","I":"","J":"4:230","K":"2:30"},{"rk":"24","team":"Lviv National University","slv.":"6","time":"1150","A":"1:136","B":"","C":"1:57","D":"","E":"3:187","F":"","G":"","H":"5:255","I":"","J":"6:258","K":"1:37"},
	{"rk":"25","team":"The Chinese University of Hong Kong","slv.":"6","time":"1243","A":"4:200","B":"","C":"4:109","D":"","E":"2:171","F":"","G":"30:--","H":"7:249","I":"","J":"1:231","K":"1:23"},{"rk":"26","team":"Zhongshan (Sun Yat-sen) University","slv.":"6","time":"1367","A":"5:156","B":"","C":"1:247","D":"7:--","E":"1:202","F":"","G":"","H":"5:256","I":"","J":"2:120","K":"6:106"},{"rk":"27","team":"University of Electronic Science and Technology of China","slv.":"5","time":"648","A":"1:286","B":"","C":"1:96","D":"","E":"1:54","F":"","G":"","H":"1:--","I":"","J":"2:147","K":"1:45"},{"rk":"28","team":"Taras Shevchenko Kiev National University","slv.":"5","time":"754","A":"2:281","B":"","C":"2:66","D":"","E":"3:138","F":"","G":"4:--","H":"4:--","I":"","J":"1:133","K":"1:56"},{"rk":"29","team":"Massachusetts Institute of Technology","slv.":"5","time":"803","A":"","B":"","C":"2:84","D":"","E":"3:271","F":"","G":"5:206","H":"12:--","I":"","J":"1:60","K":"1:42"},{"rk":"30","team":"Belarusian State University","slv.":"5","time":"811","A":"3:--","B":"2:--","C":"2:138","D":"","E":"5:161","F":"","G":"","H":"1:189","I":"","J":"3:111","K":"2:52"},{"rk":"31","team":"Universidade Federal de Pernambuco","slv.":"5","time":"817","A":"","B":"","C":"3:94","D":"","E":"1:128","F":"","G":"","H":"3:242","I":"","J":"1:214","K":"1:59"},
	{"rk":"32","team":"University of Tokyo","slv.":"5","time":"822","A":"4:--","B":"","C":"1:85","D":"","E":"2:154","F":"","G":"","H":"6:269","I":"","J":"4:105","K":"1:29"},{"rk":"33","team":"South Ural State University","slv.":"5","time":"839","A":"","B":"","C":"1:63","D":"","E":"3:247","F":"","G":"","H":"3:205","I":"","J":"3:185","K":"1:19"},{"rk":"34","team":"Kazakh-British Technical University","slv.":"5","time":"874","A":"6:255","B":"","C":"2:100","D":"","E":"3:147","F":"","G":"","H":"5:--","I":"","J":"4:131","K":"1:21"},{"rk":"35","team":"Perm State University","slv.":"5","time":"927","A":"5:216","B":"","C":"1:96","D":"","E":"3:261","F":"","G":"","H":"","I":"","J":"6:118","K":"1:16"},{"rk":"36","team":"Kyoto University","slv.":"5","time":"935","A":"10:296","B":"","C":"1:81","D":"","E":"2:188","F":"","G":"","H":"","I":"","J":"1:131","K":"1:39"},{"rk":"37","team":"Novosibirsk State University","slv.":"5","time":"1010","A":"5:--","B":"","C":"1:73","D":"","E":"6:295","F":"","G":"","H":"4:245","I":"","J":"3:139","K":"2:38"},{"rk":"38","team":"Fudan University","slv.":"5","time":"1225","A":"","B":"","C":"1:113","D":"","E":"5:214","F":"","G":"","H":"1:206","I":"","J":"15:298","K":"1:34"},{"rk":"39","team":"Harbin Institute of Technology","slv.":"5","time":"1312","A":"4:--","B":"","C":"2:154","D":"","E":"1:244","F":"","G":"","H":"5:268","I":"","J":"12:200","K":"3:86"},{"rk":"40","team":"Tianjin University","slv.":"5","time":"1353","A":"","B":"","C":"1:133","D":"","E":"2:40","F":"","G":"","H":"5:296","I":"","J":"19:251","K":"4:113"},{"rk":"41","team":"University of Helsinki","slv.":"5","time":"1447","A":"4:225","B":"","C":"3:242","D":"","E":"3:276","F":"","G":"","H":"9:230","I":"","J":"2:154","K":"12:--"},
	{"rk":"42","team":"Universidade Federal do ParanÃ¡","slv.":"4","time":"386","A":"","B":"","C":"1:91","D":"","E":"1:64","F":"","G":"","H":"8:--","I":"","J":"1:166","K":"2:45"},{"rk":"43","team":"Moscow Institute of Physics &amp;Technology","slv.":"4","time":"452","A":"9:--","B":"","C":"1:82","D":"","E":"2:174","F":"","G":"2:--","H":"3:--","I":"","J":"3:105","K":"1:31"},{"rk":"44","team":"Wuhan University","slv.":"4","time":"550","A":"","B":"","C":"1:77","D":"","E":"3:133","F":"","G":"","H":"1:--","I":"","J":"6:158","K":"1:42"},{"rk":"45","team":"Universidade de SÃ£o Paulo - Escola PolitÃ©cnica","slv.":"4","time":"590","A":"","B":"","C":"1:101","D":"","E":"1:161","F":"","G":"","H":"5:--","I":"","J":"4:239","K":"1:29"},{"rk":"46","team":"Princeton University","slv.":"4","time":"673","A":"","B":"","C":"1:57","D":"","E":"4:190","F":"","G":"","H":"2:242","I":"","J":"3:--","K":"2:84"},
	{"rk":"47","team":"Universidade de SÃ£o Paulo - Instituto de MatemÃ¡tica e EstatÃ­stica","slv.":"4","time":"675","A":"","B":"","C":"3:41","D":"","E":"3:148","F":"","G":"","H":"7:--","I":"","J":"5:206","K":"4:60"},{"rk":"48","team":"International Institute of Information Technology - Hyderabad","slv.":"4","time":"710","A":"","B":"","C":"1:115","D":"","E":"2:158","F":"","G":"","H":"","I":"","J":"4:275","K":"2:62"},{"rk":"49","team":"East China Normal University","slv.":"4","time":"732","A":"","B":"","C":"1:221","D":"","E":"2:163","F":"","G":"","H":"","I":"","J":"2:208","K":"3:60"},{"rk":"50","team":"Universidad Nacional de CÃ³rdoba - FaMAF","slv.":"4","time":"759","A":"1:--","B":"","C":"2:121","D":"","E":"1:234","F":"","G":"","H":"4:--","I":"","J":"6:215","K":"1:69"},{"rk":"51","team":"University of Alberta","slv.":"4","time":"763","A":"","B":"","C":"1:114","D":"","E":"5:226","F":"","G":"","H":"5:--","I":"","J":"6:212","K":"1:31"},
	{"rk":"52","team":"Seoul National University","slv.":"4","time":"772",
	"A":"3:202","B":"","C":"3:98","D":"","E":"5:--","F":"","G":"","H":"4:--","I":"",
	"J":"5:188","K":"4:64"},{"rk":"53","team":"Swiss Federal Institute of Technology Zurich - VIS","slv.":"4","time":"808","A":"","B":"3:181","C":"3:61","D":"","E":"","F":"","G":"2:--","H":"6:247","I":"","J":"1:--","K":"5:59"},{"rk":"54","team":"Beijing Jiaotong University","slv.":"4","time":"813","A":"","B":"","C":"3:186","D":"","E":"4:255","F":"","G":"","H":"","I":"","J":"5:154","K":"1:38"},{"rk":"55","team":"Indian Institute of Technology - Delhi","slv.":"4","time":"862","A":"","B":"","C":"3:120","D":"","E":"","F":"","G":"","H":"2:210","I":"","J":"6:284","K":"3:48"},{"rk":"56","team":"University of Wroclaw","slv.":"4","time":"896","A":"","B":"","C":"4:146","D":"","E":"3:--","F":"","G":"","H":"4:272","I":"1:--","J":"1:199","K":"4:99"},{"rk":"57","team":"University of Stellenbosch","slv.":"4","time":"981","A":"2:249","B":"","C":"4:237","D":"","E":"1:286","F":"","G":"","H":"","I":"","J":"5:--","K":"2:109"},{"rk":"58","team":"Pontificia Universidad CatÃ³lica del PerÃº","slv.":"4","time":"1025","A":"","B":"","C":"6:85","D":"","E":"8:225","F":"","G":"","H":"2:--","I":"","J":"10:267","K":"1:28"},{"rk":"59","team":"Hangzhou Dianzi University","slv.":"3","time":"263","A":"2:--","B":"","C":"3:123","D":"","E":"2:32","F":"","G":"","H":"","I":"","J":"13:--","K":"1:48"},{"rk":"60","team":"Fuzhou University","slv.":"3","time":"272","A":"","B":"","C":"2:111","D":"","E":"1:55","F":"","G":"","H":"5:--","I":"","J":"14:--","K":"3:46"},{"rk":"61","team":"California State University - Chico","slv.":"3","time":"288","A":"2:--","B":"","C":"2:70","D":"2:--","E":"","F":"","G":"","H":"","I":"","J":"2:118","K":"2:40"},{"rk":"62","team":"German University in Cairo","slv.":"3","time":"389","A":"","B":"","C":"1:222","D":"","E":"1:111","F":"","G":"","H":"","I":"","J":"3:--","K":"1:56"},{"rk":"63","team":"University of New South Wales","slv.":"3","time":"395","A":"1:--","B":"","C":"1:108","D":"","E":"1:132","F":"","G":"","H":"1:--","I":"","J":"5:--","K":"5:75"},{"rk":"64","team":"Ain Shams University","slv.":"3","time":"426","A":"","B":"","C":"2:141","D":"","E":"","F":"","G":"","H":"","I":"","J":"1:206","K":"1:59"},
	{"rk":"65","team":"Bangladesh University of Engineering and Technology","slv.":"3","time":"431","A":"","B":"","C":"1:98","D":"","E":"2:266","F":"","G":"","H":"2:--","I":"","J":"6:--","K":"1:47"},{"rk":"66","team":"Leiden University","slv.":"3","time":"447","A":"2:196","B":"","C":"2:151","D":"","E":"2:--","F":"","G":"","H":"","I":"","J":"3:--","K":"2:40"},{"rk":"67","team":"Huazhong University of Science &amp;Technology","slv.":"3","time":"447","A":"","B":"1:--",
	"C":"1:156","D":"","E":"9:--","F":"","G":"","H":"","I":"","J":"1:228","K":"2:43"},{"rk":"68","team":"Instituto TecnolÃ³gico de Aeronautica","slv.":"3","time":"491","A":"5:245","B":"","C":"3:96","D":"","E":"","F":"","G":"","H":"","I":"","J":"21:--","K":"1:30"},{"rk":"69","team":"University of Miami","slv.":"3","time":"536","A":"","B":"","C":"1:167","D":"","E":"","F":"","G":"","H":"","I":"","J":"5:189","K":"2:80"},{"rk":"70","team":"Shandong University","slv.":"3","time":"538","A":"","B":"","C":"2:148","D":"","E":"3:266","F":"","G":"7:--","H":"1:--","I":"","J":"3:--","K":"1:64"},{"rk":"71","team":"Universidade Federal de Minas Gerais","slv.":"3","time":"560","A":"","B":"","C":"1:110","D":"","E":"3:287","F":"","G":"","H":"","I":"","J":"8:--","K":"1:123"},{"rk":"72","team":"Harvey Mudd College","slv.":"3","time":"601","A":"","B":"","C":"3:70","D":"","E":"3:206","F":"1:--","G":"","H":"","I":"","J":"26:--","K":"4:185"},{"rk":"73","team":"Simon Fraser University","slv.":"3","time":"682","A":"","B":"","C":"2:239","D":"","E":"","F":"","G":"","H":"","I":"2:--","J":"4:220","K":"4:83"},{"rk":"74","team":"Ho Chi Minh City University of Science","slv.":"2","time":"137","A":"","B":"","C":"1:115","D":"","E":"","F":"","G":"","H":"","I":"","J":"7:--","K":"1:22"},{"rk":"75","team":"University of Oklahoma","slv.":"2","time":"142","A":"1:--","B":"","C":"2:57","D":"","E":"2:--","F":"","G":"","H":"","I":"","J":"4:--","K":"3:25"},{"rk":"76","team":"Hong Kong University of Science and Technology","slv.":"2","time":"152","A":"3:--","B":"","C":"1:84","D":"","E":"","F":"","G":"","H":"","I":"","J":"4:--","K":"2:48"},{"rk":"77","team":"Universidad de Guanajuato - CIMAT","slv.":"2","time":"159","A":"1:--","B":"","C":"1:102","D":"","E":"","F":"","G":"","H":"","I":"","J":"2:--","K":"1:57"},{"rk":"78","team":"Zhejiang Normal University","slv.":"2","time":"193","A":"","B":"","C":"2:128","D":"","E":"2:--","F":"",
	"G":"","H":"","I":"","J":"8:--","K":"1:45"},{"rk":"79","team":"University of Chicago","slv.":"2","time":"225","A":"","B":"","C":"1:88","D":"","E":"4:--","F":"","G":"","H":"","I":"","J":"","K":"1:137"},{"rk":"80","team":"Duke University","slv.":"2","time":"243","A":"","B":"","C":"1:124","D":"","E":"3:--","F":"","G":"","H":"","I":"","J":"3:--","K":"2:99"},{"rk":"81","team":"Alexandria University - Faculty of Engineering","slv.":"2","time":"248","A":"","B":"","C":"1:169","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"1:79"},{"rk":"82","team":"American University of Sharjah","slv.":"2","time":"299","A":"","B":"","C":"2:240","D":"","E":"","F":"","G":"","H":"","I":"","J":"5:--","K":"1:39"},{"rk":"83","team":"Harbin Engineering University","slv.":"2","time":"332","A":"","B":"","C":"2:162","D":"","E":"8:--","F":"","G":"","H":"","I":"","J":"7:--","K":"4:90"},{"rk":"84","team":"University of Wisconsin - Madison","slv.":"2","time":"359","A":"","B":"","C":"1:210","D":"","E":"","F":"","G":"3:--","H":"","I":"","J":"10:--","K":"4:89"},{"rk":"85","team":"Orel State Technical University","slv.":"2","time":"374","A":"","B":"","C":"3:121","D":"","E":"","F":"","G":"","H":"","I":"","J":"2:--","K":"5:133"},{"rk":"86","team":"Universidad del Valle","slv.":"2","time":"375","A":"","B":"","C":"1:170","D":"","E":"","F":"","G":"","H":"","I":"","J":"1:--","K":"6:105"},{"rk":"87","team":"Universidad CatÃ³lica Boliviana - La Paz","slv.":"2","time":"377","A":"","B":"","C":"1:147","D":"","E":"","F":"","G":"","H":"","I":"","J":"2:--","K":"5:150"},{"rk":"88","team":"University of Minnesota - Twin Cities","slv.":"2","time":"408","A":"","B":"","C":"1:160","D":"","E":"1:248","F":"","G":"","H":"","I":"","J":"","K":"8:--"},{"rk":"89","team":"Universidad de las Ciencias InformÃ¡ticas","slv.":"2","time":"426","A":"","B":"","C":"3:121","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"7:145"},{"rk":"90","team":"University of California - San Diego","slv.":"2","time":"542","A":"","B":"8:--","C":"12:157","D":"","E":"","F":"","G":"","H":"","I":"","J":"4:--","K":"8:25"},{"rk":"91","team":"University of Maryland","slv.":"2","time":"596","A":"","B":"","C":"2:159","D":"","E":"7:297","F":"","G":"","H":"","I":"","J":"","K":"11:--"},{"rk":"92","team":"Illinois State University","slv.":"2","time":"607","A":"","B":"","C":"1:184","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"8:283"},{"rk":"93","team":"Universidad de La Habana","slv.":"2",
	"time":"703","A":"","B":"","C":"6:268","D":"","E":"8:--","F":"","G":"","H":"","I":"","J":"","K":"6:235"},{"rk":"94","team":"Universidad Nacional de Colombia - BogotÃ¡","slv.":"2","time":"718","A":"","B":"","C":"4:227","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"8:291"},{"rk":"95","team":"University of Virginia","slv.":"2","time":"883","A":"","B":"","C":"5:266","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"17:217"},{"rk":"96","team":"University of Canterbury","slv.":"1","time":" 38","A":"","B":"","C":"1:38","D":"","E":"1:--","F":"","G":"","H":"","I":"","J":"","K":"4:--"},{"rk":"97","team":"South Dakota School of Mines and Technology","slv.":"1","time":"146","A":"","B":"","C":"3:--","D":"","E":"4:--","F":"","G":"","H":"","I":"","J":"4:--","K":"3:106"},{"rk":"98","team":"EAFIT University","slv.":"1","time":"175","A":"2:--","B":"","C":"1:--","D":"","E":"","F":"","G":"","H":"2:--","I":"","J":"","K":"4:115"},{"rk":"99","team":"Cairo University - Faculty of Computers and Information","slv.":"1","time":"193","A":"","B":"","C":"2:173","D":"","E":"","F":"","G":"","H":"4:--","I":"","J":"2:--","K":"11:--"},{"rk":"100","team":"University of Illinois at Urbana-Champaign","slv.":"1","time":"242","A":"","B":"","C":"2:222","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"19:--"},{"rk":"101","team":"Amirkabir University of Technology","slv.":"0","time":" 0","A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":""},{"rk":"101","team":"DJ Sanghvi College of Engineering","slv.":"0","time":" 0","A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":""},{"rk":"101","team":"Indian Institute of Technology - Kanpur","slv.":"0","time":" 0","A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":""},{"rk":"101","team":"King Abdullah University of Science and Technology","slv.":"0","time":" 0","A":"","B":"","C":"","D":"","E":"","F":"1:--","G":"","H":"","I":"1:--","J":"4:--","K":"4:--"},{"rk":"101","team":"Sichuan University","slv.":"0","time":" 0","A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":""}];

(function($){

// Create the Collection from JSON.
var teamList = new TeamList(teamsJSON);

// Create the View for the Collection.
var Scoreboard = new TeamListView({collection:teamList});

// Start the scoreboard by render the data to DOM.
Scoreboard.render();



// -------------------------------------------------------
// Connection functions
// -------------------------------------------------------


var setupSocket = function () {
	
	//var socket = io.connect('http://localhost:1336');
	var socket = io.connect('http://130.237.8.168:1336');

	// ON CONNECT
	socket.on("connected", function(data) {
		console.log("Socket connected.");
	});

	// ON DELTA
	socket.on("delta", function(data) {
		if(data !== ""){
			teamList.update(data);
		}else{ console.log("Empty data was recieved. Do nothing."); }
	});
};

var setupPolling = function () {
	return setInterval(function(){
		teamList.fetch({ cache: false, type: "jsonp",
			success: function(){
				console.log("Fetched!");
			},
			error: function(error) {
				console.log("Error on fetching. Try refreshing the page in a while.");
				console.log(error);
				clearInterval(pollingInterval);
			}
		});
	}, 3000);
};



// ---------------------------------------------------------
// Setting up a socket and listening for scoreboard changes
// ---------------------------------------------------------

console.log("Trying to set up scoreboard socket..");

if(typeof io !== 'undefined'){
	setupSocket();
} else {
	console.log("Could not connect socket. Trying to poll.");
	
	var pollingInterval = setupPolling();
	/* 
	if( we want to stop polling){
		clearInterval(pollingInterval);
	}
	*/
}
	

})(jQuery);