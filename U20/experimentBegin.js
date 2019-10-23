/* Classifier experiment
 * - set up global variables
 * - present IRB information
 * - present training instructions
 */
 
// global variables
var url = "";
var assignId = "";
var hitId = "";
var workerId = "";
var condition = "1v";
var list = "A";

var trainIndx = 0;
var firstTrainTrial = true;
var trainTrials =[];
var trainTrials1 = [];
var trainTrials2 = [];
var trainTrials3 = [];
var trainTrials4 = [];
var trainTrials5 = [];
var trialResponses = [];
var one=[];
var two=[];

var testIndx = 0;
var firstTestTrial = true;
var testTrials = [];
var testResponses = [];

// parse url and set condition, list on document ready
function turkGetParam( name, defaultValue ) { 
   var regexS = "[\?&]"+name+"=([^&#]*)"; 
   var regex = new RegExp( regexS ); 
   var tmpURL = window.location.href; 
   var results = regex.exec( tmpURL ); 
   if( results == null ) { 
     return defaultValue; 
   } else { 
     return results[1];    
   } 
}

$(document).ready(function() {
url = ''+window.location;
var params = url.split("?")[1].split("&");
for (var i=0; i<params.length; i++) { 
	var name = params[i].split("=")[0];
	var value = params[i].split("=")[1];
	insert_hidden_into_form('mturkSubmitForm',name,value);
	if (name=="assignmentId") {
		assignId = value;
	}
	if (name=="hitId") {
		hitId = value;
	}
	if (name=="workerId") {
		workerId = value;
	}
	if (name=="condition") {
		condition = value;
	}
	if (name=="list") {
		list = value;
	}
}
doIRBInformation();
});


// present IRB information
function doIRBInformation() {
	var div = document.createElement('div');
	div.id = "irbDiv";
	document.body.appendChild(div);
	$('#irbDiv')
		.attr('style',"margin-left:45px")
		.css('font-size',"24px")
		.append('<p> This experiment will ask you to listen to samples of muffled speech in a monotone voice. It will take about 10 minutes to complete and you will be paid $0.50 for your time. This experiment is part of a series of studies being conducted by XXXX at George Mason University, and has been approved by the George Mason Institutional Review Board. Please <a href="InformationFormTurk.pdf" target="_blank" download>click here</a> to download a study information letter (pdf) that provides further information about the study.</p>\
		<p> Clicking on the <b> agree </b> button below indicates that:\
		<ul>\
		<li> you have downloaded and read the information letter </li>\
		<li> you voluntarily agree to participate </li>\
		<li> you are at least 18 years of age </li>\
		<li> you are a native speaker of English </li>\
		</ul>\
		If you do not agree to all of these, please close this window in your browser now. </p>')
		.append('<p>This experiment requires you to listen to AUDIO. If your browser does not \
		support audio, or you are not in a quiet place, please do not agree to participate in this HIT. \
		Also, PLEASE DO NOT PARTICIPATE IN THIS HIT MORE THAN ONCE -- we cannot pay duplicate HITs!</p>')
		.append('<input type="button" id="irbBtn" value="Agree"></input>')
	$('#irbBtn')
		.attr('style',"margin-left:45px")
		.css('font-size',"20px")
		.on('click', function() {
			if (assignId == "ASSIGNMENT_ID_NOT_AVAILABLE") {
				$('#irbBtn').attr('value',"You must ACCEPT the HIT before you can agree");
			
			}else{
				$('#irbBtn').attr('value',"Agree");
			document.body.removeChild(div);
			//doIntroInstructions();
			doCond4();
			//demographics();
			}
		});
}


// present introductory instructions
function doIntroInstructions() {
	var div = document.createElement('div');
	div.id = "introDiv";
	document.body.appendChild(div);
	$('#introDiv')
		.attr('style',"margin-left:45px")
		//.css("width","50%")
		.css('font-size',"24px")
		.append('<p>Welcome!</p>')
		.append('<p>In this experiment, you will hear samples of "muffled speech". <br>You will be able to tell that someone is talking, but you will not hear what they say. <br>You will hear pairs of samples (2 samples in a row).</p>')
		.append('<p>Your task is to rate how likely the samples are to be of people saying the same thing. <br> Click Continue to start the experiment.</p>')
		.append('<p></p>')
		.append('<button id="introBtn">Continue</button>');

	//document.getElementById('introText2').style.color = "black";
	//document.getElementById('introBtn').style.color = "black";

	$('#introBtn')
		.attr('style',"margin-left:45px")
		.css('font-size',"20px")
		//.on('click', function() {
			//document.body.removeChild(div);
			//doReadTrainList();
		//});
		document.getElementById('introBtn').disabled=true;
	setTimeout(function() {
		document.getElementById('introBtn').disabled=false;
		$('#introBtn').on('click', function() {
			document.body.removeChild(div);
			var wait=document.createElement('div')
			wait.id="wait"
			$("#wait")
				.append("<p>please allow a few seconds for the content to load...</p>")
				
			doReadTrainList();
			//demographics() ;
		});
	}, 2000);

}
