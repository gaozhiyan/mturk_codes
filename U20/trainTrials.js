 // run a single training trial
function doTrainTrial() {
	//alert("doTrainTrial() with trainIndx = "+ trainIndx);
	// on the first trial, set up the images, sound, and choices
	
	if (firstTrainTrial) {
		firstTrainTrial = false;
		var div1 = document.createElement('div');
		div1.id = "translationDiv";
		document.body.appendChild(div1);
		$('#translationDiv')
		.append('<p id="instr2"><p>Click on the buttons to listen to each audio file. </p> <p>First click to listen to Audio 1, and then Audio 2.</p> <p>After that, you will be able to enter your response.</p> <p>You can only listen to each file once. </p></p>')
		.append('<p id="translate">Audio 1:</p>')
		.append('<button id="b1">Listen to Audio 1</button>')
		.attr('align',"center")
		.css('font-size',"20px")
		.css('color',"black"); 		
		$("#b1").css('font-size','20px');
		$("instr2").css('font-size','20px');
		var audio1 = document.createElement('audio');
		audio1.id = "audio1";
		$("#b1").click(function(){
        document.getElementById("audio1").play();
		document.getElementById("b1").disabled = true;
		//document.getElementById("b2").disabled = false;
    });
		$("#translate")
			.css("font-weight", "bold")
			.css('margin-top','50px')
	audio1.addEventListener('ended', function(){
    document.getElementById("b2").disabled = false;
});
		div1.appendChild(audio1);
		var div2 = document.createElement('div');
		div2.id= 'speaker2';
		document.body.appendChild(div2);
		$('#speaker2')
		.append('<p id="translate2">Audio 2:</p>')
		.append('<button id="b2">Listen to Audio 2</button>')
		.attr('align',"center")
		.css('font-size',"20px")
		.css('color',"black")
		.css('font-weight','bold'); 	
		$("#b2").css('font-size','20px');	
		document.getElementById("b2").disabled = true;
		var audio2 = document.createElement('audio');
		audio2.id = "audio2";
		$("#b2").click(function(){
        document.getElementById("audio2").play();
		document.getElementById("b2").disabled = true;
    });
	
		div2.appendChild(audio2);
	var listen1=false;
	var listen2=false;
		// div to hold instructions
		var div4 = document.createElement('div');
		div4.id = "instr";
		document.body.appendChild(div4);
		$('#instr')
			.append('<p id="message">...Did they say the same thing?...</p>')
			.attr('align',"center")
			.css('margin-top', "50px")	//add some space
			.css('font-size',"16px")
			.css('color',"whitesmoke");
		
		// div to hold choices
		var div3 = document.createElement('div');
		div3.id = "radioDiv";
		document.body.appendChild(div3);
		$('#radioDiv').attr('align',"center")	//centering doesn't work with width specification
			.css("position", "absolute")
   			.css("top", "50%")
    		.css("left", "40%")
    		.css("margin-left", "-350px")		//achieves centering
    		.css("margin-top", "200px")
    		.css("height", "100px")
			.css("width", "1000px");
		$('#radioDiv').hide();
		//document.getElementById("slider").hidden=true;
		var numbers=document.createElement('div')
			numbers.id='numbers'
			document.body.appendChild(numbers)
			$('#numbers')
				.append('<p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</p>')
				.css('margin-left',"450px")
				.css('margin-top','150px')
				.hide()
			var scale=document.createElement('div')
			scale.id='Slider1'
			document.body.appendChild(scale);
			$("#Slider1")
				.slider({
					min:0,
					max:5,
					step:1,
					
				})
				.css("position", "absolute")
   			.attr('align',"center")
   			.css("margin-left", "450px")//achieves centering
    		.css("margin-top", "-15px")
			.css("width", "480px");
			
			$('#Slider1').hide();
		// set up four response buttons
		var notsame=document.createElement('div')
		notsame.id='notsame'
		document.body.appendChild(notsame);
		$('#notsame')
			.append('<p>definitely different</p>')
			.css('margin-left','260px')
			.css('margin-top','-15px')
			.css('font-size','20px')
			.css('font-weight','bold')
			.css('float','left')
			.hide()
		var same=document.createElement('div')
		same.id='same'
		document.body.appendChild(same);
		$('#same')
			.append('<p>definitely the same</p>')
			.css('margin-left','960px')
			.css('margin-top','-65px')
			.css('font-size','20px')
			.css('font-weight','bold')
			.css('float','left')
			.hide()
		for (var i=1; i<=1; i++) {
			
		$('#Slider1').append('<br><button id="next">next</button>')
		
		document.getElementById("next").disabled = true;
 		$('.ui-slider-handle').hide()  
	$("#next")
		.css('margin-left','200px')
		.css('margin-top','10px')
	$( "#Slider1" ).mouseup(function(){
	$('.ui-slider-handle').show()
	
	//})
			//$('#radioDiv').append('<br><button id="next">next</button>')
			
			//$('#myRange').mouseup(function(){
				
				document.getElementById("next").disabled = false;
				
				});
			
			$('#next').on('click', function() {
								document.getElementById("next").disabled = true;

				
				//trialResponses[trainIndx] =document.getElementById("myRange").value;
				//testResponses.push(this.id);
						trialResponses[trainIndx]=$('#Slider1').slider('option','value');	
						//alert (trainTrials[trainIndx].trialCond+trialResponses[trainIndx]);	//debug								// test
					//$('input[name=radioDiv]:checked + label').css("background-color","#66FF33");
					setTimeout(function() {
						trainIndx = trainIndx + 1;										// advance trial index
						if (trainIndx < trainTrials.length) {
							//$('#img1').attr("src","pics/blank.gif");	// clear images
							//$('#img2').attr("src","pics/blank.gif");
							$('#audio1').attr("src","");
							$('#audio2').attr("src","");					// clear sound 
							$('input[name=radioDiv]:checked + label')
								.css("background-color","white");			// clear button color
							$('#instr').css('color',"black");
							$("#message").text('\xA0 \xA0 \xA0 \xA0...Did they say the same thing?...\xA0 \xA0 \xA0('+(trainIndx+1)+'/'+(trainTrials.length)+')')
							$('#radioDiv').hide();
							listen1=false;
							listen2=false;
							listen2=true;
							document.getElementById("b1").disabled = false;
							document.getElementById("b2").disabled = true;
							document.getElementById("next").disabled = true;	
							$('#Slider1').hide();
							$('.ui-slider-handle').hide()
							$('#translationDiv').show();
							$('#speaker2').show();	
							$('#same').hide();
							$('#notsame').hide();
							$('#numbers').hide();
							doTrainTrial();
						} else {
							//alert("cleaning up and starting test instr");
							document.body.removeChild(scale);
							document.body.removeChild(div1);
							document.body.removeChild(div3);
							document.body.removeChild(div2);
							document.body.removeChild(div4);
							document.body.removeChild(numbers);
							document.body.removeChild(same);
							document.body.removeChild(notsame);
							doExperimentEnd();
						}
					},1000);
				//}
			});
		}
		$("#next").buttonset();
	}
	
	
	
	var audio1=trainTrials[trainIndx].trialSound;
	var audio2=trainTrials[trainIndx].trialSound2;
	
		
	$('#audio2')
		.attr('src',"U20/sounds/"+audio2)
		.bind('ended', function(){
			
			if (listen1){
			
			setTimeout(function() {
				//alert(trial.correctChoice)
				$('#Slider1').show();
				$('#notsame').show();
				$('#same').show();
				$('#numbers').show();
				
			$('#translationDiv').hide();
			$('#speaker2').hide();
				$('#instr').css('color',"black");
				$("#message").text('\xA0 \xA0 \xA0 \xA0...Did they say the same thing?...\xA0 \xA0 \xA0('+(trainIndx+1)+'/'+(trainTrials.length)+')');
			}, 250);
			}else{$('#Slider1').hide()};
			});
	$('#audio1')
		.attr('src', "U20/sounds/"+audio1)
		.bind('ended', function() {
			listen1=true;
			if (listen2){
			$('#Slider1').show();
			//$('#notsame').show();
				//$('#same').show();	
			setTimeout(function() {
				//$('#instr').css('color',"black");
				//$("#message").text('\xA0 \xA0 \xA0 \xA0...Did they say the same thing?...\xA0 \xA0 \xA0('+(trainIndx+1)+'/'+(trainTrials5.length)+')');
			}, 250);
			}else{$('#Slider1').hide()};
		});
	//setTimeout(function() {
		//$('#audio2')[0].click();
	//}, 1000);
}
