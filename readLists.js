
function doReadTrainList() {
// http requests for training and testing trials
	// "train"+condition+list+".txt"
	//alert("reading train list");
	
	
	$.ajax({
		url : "U20/lists/train_"+condition+"_"+list+"_"+"1.csv",	//on the server
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
				var trial = {trialSound:trial_i[0], trialSound2:trial_i[1], trialCond:trial_i[2]};
				trainTrials1.push(trial);
				
			}
			shuffleArray(trainTrials1);
			//trainTrials=trainTrials.slice(0,1);
			doCond2();
		},
		error : function(x, text, error) {
			alert(error);
		}
	});
}

function doCond2() {
// http requests for training and testing trials
	// "train"+condition+list+".txt"
	//alert("reading train list");
	$.ajax({
		url : "U20/lists/train_"+condition+"_"+list+"_"+"2.csv",	//on the server
		//url : "train_"+condition+"_"+list+".csv",	//on the local host
		dataType : "text",
		cache : false,
		success : function(text, status, jqXHR) {
			// add train trials from file after http request
			var trainTrialsArray2 = text.split("\n");
			for (var i=1; i<trainTrialsArray2.length; i++) {
				if ((/^\s*$/).test(trainTrialsArray2[i])) {	// skip empty lines
					continue;
				}
				var trial_i2 = trainTrialsArray2[i].split(",");
				var trial2 = {trialSound:trial_i2[0], trialSound2:trial_i2[1],trialCond:trial_i2[2]};
				
				trainTrials2.push(trial2);
				
			}
			shuffleArray(trainTrials2);
			doCond3();
			//doTrainTrial();
		},
		error : function(x, text, error) {
			alert(error);
		}
	});
}

function doCond3() {
// http requests for training and testing trials
	// "train"+condition+list+".txt"
	//alert("reading train list");
	$.ajax({
		url : "U20/lists/train_"+condition+"_"+list+"_"+"3.csv",	//on the server
		//url : "train_"+condition+"_"+list+".csv",	//on the local host
		dataType : "text",
		cache : false,
		success : function(text, status, jqXHR) {
			// add train trials from file after http request
			var trainTrialsArray3 = text.split("\n");
			for (var i=1; i<trainTrialsArray3.length; i++) {
				if ((/^\s*$/).test(trainTrialsArray3[i])) {	// skip empty lines
					continue;
				}
				var trial_i3 = trainTrialsArray3[i].split(",");
				var trial3 = {trialSound:trial_i3[0], trialSound2:trial_i3[1],trialCond:trial_i3[2]};
				
				trainTrials3.push(trial3);
				
			}
			shuffleArray(trainTrials3);
			//doCond4();
			//doTrainTrial();
			doRandom();
		},
		error : function(x, text, error) {
			alert(error);
		}
	});
}

//function doCond4() {
// http requests for training and testing trials
	// "train"+condition+list+".txt"
	//alert("reading train list");
	//$.ajax({
		//url : "U20/lists/train_"+condition+"_"+list+"_"+"4.csv",	//on the server
		//url : "train_"+condition+"_"+list+".csv",	//on the local host
		//dataType : "text",
		//cache : false,
		//success : function(text, status, jqXHR) {
			// add train trials from file after http request
			//var trainTrialsArray4 = text.split("\n");
			//for (var i=1; i<trainTrialsArray4.length; i++) {
				//if ((/^\s*$/).test(trainTrialsArray4[i])) {	// skip empty lines
					//continue;
				//}
				//var trial_i4 = trainTrialsArray4[i].split(",");
				//var trial4 = {trialSound:trial_i4[0], trialSound2:trial_i4[1],trialCond:trial_i4[2]};
				
				//trainTrials4.push(trial4);
				
			//}
			//shuffleArray(trainTrials4);
			//doTrainTrial();
		//},
		//error : function(x, text, error) {
			//alert(error);
		//}
	//});
//}