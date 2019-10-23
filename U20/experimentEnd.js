// end of experiment
function doExperimentEnd() {
	var div = document.createElement('div');
	div.id = "endExpDiv";
	document.body.appendChild(div);
	$('#endExpDiv')
		.attr('style',"margin-left:45px")
		//.css("width","50%")
		.css('font-size',"24px")
		.append('<p>You\'re almost finished with this task. Thank you for participating!</p>')
		.append('<p>Please help us by filling out a short questionnaire, after which you\'ll submit the HIT.</p>');

	var btn = document.createElement('button');
	btn.id = 'endExpBtn';
	btn.appendChild(document.createTextNode("Continue"));
	document.body.appendChild(btn);
	$('#endExpBtn')
		.attr('style',"margin-left:45px")
		.css('font-size',"20px")
		.on('click', function() {
			document.body.removeChild(div);
			document.body.removeChild(btn);
			demographics();
		});
}