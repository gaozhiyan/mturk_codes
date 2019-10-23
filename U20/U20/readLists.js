function doReadTrainList() {
// http requests for training and testing trials
	// "train"+condition+list+".txt"
	//alert("reading train list");
	$.ajax({
		url : "U20/lists/train_"+condition+"_"+list+".csv",	//on the server
		//url : "train_"+condition+"_"+list+".csv",	//on the local host
		dataType : "text",
		cache : false,
		success : function(text, status, jqXHR) {
			// add train trials from file after http request
			var trainTrialsArray = text.split("\n");
			for (var i=1; i<trainTrialsArray.length; i++) {
				if ((/^\s*$/).test(trainTrialsArray[i])) {	// skip empty lines
					continue;
				}
				var trial_i = trainTrialsArray[i].split(",");
				//var trial2 = {speaker1:trial_i[2],speaker2:trial_i[3]}
				trial = {speaker1:trial_i[2]};
				trial2= {speaker2:trial_i[3]};
				trainTrials.push(shuffleArray(trial1));
				trainTrials.push(shuffleArray(trial2));
			}
			shuffleArray(trainTrials);
			//alert("number of train trials: "+ trainTrials.length);
			//alert(trainTrials[0]);
			//alert(trainTrialsArray[1]);
			doTrainTrial();
		},
		error : function(x, text, error) {
			alert(error);
		}
	});
}

function doReadTestList() {
	//alert("reading test list");
	$.ajax({
		url : "U20/lists/test_"+condition+"_"+list+".csv",	//on the server
		//url : "test_"+condition+"_"+list+".csv",	//on the local host
		dataType : "text",
		cache : false,
		success : function(text, status, jqXHR) {
			// add train trials from file after http request
			var testTrialsArray = text.split("\n");
			for (var i=1; i<testTrialsArray.length; i++) {
				if ((/^\s*$/).test(testTrialsArray[i])) {	// skip empty lines
					continue;
				}
				var trial_i = testTrialsArray[i].split(",");
				//var trial = {trialType:trial_i[0], trialText:trial_i[1], choice1:trial_i[2], choice2:trial_i[3], choice3:trial_i[4], choice4:trial_i[5], correctChoice:trial_i[6], Dem:trial_i[7], oldNew:trial_i[8]};//original 
				var trial = {trialType:trial_i[0], trialText:trial_i[1], choice1:trial_i[2], choice2:trial_i[3], choice3:trial_i[4], choice4:trial_i[5], correctChoice:trial_i[6], Dem:trial_i[7], oldNew:trial_i[8], choice1order:trial_i[9], choice2order:trial_i[10], choice3order:trial_i[11], choice4order:trial_i[12]};
				//var trial = {trialType:trial_i[0], trialText:trial_i[1], choice1:trial_i[2], choice2:trial_i[3], choice3:trial_i[4], choice4:trial_i[5], correctChoice:trial_i[6], oldNew:trial_i[10], choice1order:trial_i[11], choice2order:trial_i[12], choice3order:trial_i[13], choice4order:trial_i[14]};//stacked verbs 

				testTrials.push(trial);
			}
			shuffleArray(testTrials);
			//alert(trainTrials.length);
			//alert(testTrialsArray[0]);
			//alert(testTrialsArray[1]);
			//doTestInstructions();	// xxx debugging only
			//alert("number of test trials: "+ testTrials.length);
			//doTestTrial();	// debugging only
			doTrainTrial();
		},
		error : function(x, text, error) {
			alert(error);
		}
	});
}
