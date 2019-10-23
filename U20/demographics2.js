/*
 * Collect demographic information and post demographic info and trial results to MTurk
 */
//.append('<form id="demoForm" action="https://workersandbox.mturk.com/mturk/externalSubmit" method="POST">\
function demographics() {
	var demoDiv = document.createElement('div');
	demoDiv.id = "demoDiv";
	document.body.appendChild(demoDiv);
	$('#demoDiv')
		.attr('style',"margin-left:45px")
		.css('font-size',"20px")
		.append('<form id="demoForm" action="https://www.mturk.com/mturk/externalSubmit" method="POST">\
		<p>Please provide us with some information about you and how you did the experiment. We will keep this information private (it will not be associated with your worker id), and it will help us very much when we analyze the data.</p>\
		<p><b>Gender</b><br>\
		<input type="radio" name="gender" id="genderF" value="female"/>female\
		<input type="radio" name="gender" id="genderM" value="male"/>male</p>\
		<p><b>Age</b><br>\
		<input id="age" name="age" size="5"/></p>\
		<p><b>Choose your race</b><br>\
		<input type="radio" name="race" id="AmericanIndian" value="AmericanIndian"/>American Indian\
		<input type="radio" name="race" id="AfricanAmerican" value="AfricanAmerican"/>African American\
		<input type="radio" name="race" id="Asian" value="Asian"/>Asian\
		<input type="radio" name="race" id="PacificIslander" value="PacificIslander"/>Pacific Islander\
		<input type="radio" name="race" id="White" value="White"/>White\
		<input type="radio" name="race" id="Other" value="other"/>Other\
		</p>\
		<p><b>Indicate whether you are Hispanic</b><br>\
		<input type="radio" name="hisp" id="hisp" value="hispanic"/>Hispanic\
		<input type="radio" name="hisp" id="hisp" value="non-hispanic"/>Non-Hispanic\
		<p><b>Language background</b><br>\
		<input id="langNative" name="langNative" size="20"/>List your native language(s)<br>\
		<input id="langOther" name="langOther" size="20"/> List any other languages you speak fluently (indicate if fluent)\
		<p><b>How many years of formal and/or informal music experience do you have?</b> <br>e.g. music lessons, band practice, etc.<br>\
		<textarea id="comments2" name="music" rows="10" cols="30"></textarea></p>\
		<p><b> Have you ever had any speech or hearing disorders?</b><br>\
		<input type="radio" name="prob" id="prob" value="probyes"/>Yes<br>\
		<input type="radio" name="prob" id="prob" value="probno"/>No<br>\
		If yes, please explain.<br>\
		<textarea id="comments" name="comments" rows="10" cols="30"></textarea></p>\
		<input type="submit" value="Submit HIT" style="height: 35px; width: 130px; font-size: 18px">\
		</form>');
		
	$('#demoForm')
		.append('<input type="hidden" name="assignmentId" value="'+ assignId +'" />')
		.append('<input type="hidden" name="hitId" value="'+ hitId +'" />')
		.append('<input type="hidden" name="workerId" value="'+ workerId +'" />')
		.append('<input type="hidden" name="condition" value="condition_'+ condition +'" />')
		.append('<input type="hidden" name="list" value="list_'+ list +'" />');
	for (var i=0; i<trainTrials.length; i++) {
		var trial_i = trainTrials[i];
		//var trial_i2 = trainTrials2[i];
		var x = i +'__'+ one[i] +'__'+ two[i]+'__'+trialResponses[i]+'__'+trial_i.trialCond;
		$('#demoForm')
			.append('<input type="hidden" name="trainTrial'+ i +'" value="'+ x +'" />');	
	}
	
	//for (var i=0; i<testTrials.length; i++) {
		//var trial_i = testTrials[i];
		//var x = 'testTrial'+ i +'_'+ trial_i.trialType +'_'+ trial_i.trialText +'_'+ trial_i.choice1 +'_'+ trial_i.choice2 +'_'+ trial_i.choice3 +'_'+ trial_i.choice4 +'_'+ trial_i.correctChoice +'_'+ trial_i.oldNew +'_'+ testResponses[i];//original
		//var x = 'testTrial'+ i +'_'+ trial_i.trialType +'_'+ trial_i.trialText +'_'+ trial_i.choice1 +'_'+ trial_i.choice2 +'_'+ trial_i.choice3 +'_'+ trial_i.choice4 +'_'+ trial_i.correctChoice +'_'+ trial_i.oldNew +'_'+ trial_i.choice1order +'_'+ trial_i.choice2order +'_'+ trial_i.choice3order +'_'+ trial_i.choice4order +'_'+ testResponses[i];//stacked verbs, nh
		//$('#demoForm')
			//.append('<input type="hidden" name="testTrial'+ i +'" value="' + x +'" />');	
	//}

	$('#demoForm').submit(function() {
		//return false;	// xxx debugging only
		return true;
	});
}

