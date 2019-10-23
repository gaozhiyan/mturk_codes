

function doRandom(){
	//javascript function to randomly select n items from an array (rows in your csv list)
	function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

	function removeSelected(array1,array2){
		array1 = array1.filter(val => !array2.includes(val));
		return array1
	}
	//block1
	var list1_1=getRandom(trainTrials1,2) //select 2 stimuli from trainTrial1
	var list1_2=getRandom(trainTrials2,2) //select 2 stimuli from trainTrial2
	var block1=list1_1.concat(list1_2) //the first block
	shuffle(block1) // randomize block1
  //block2
	var list2_1=getRandom(
			removeSelected(trainTrials1,list1_1), 2
		) // select 2 stimuli from the first
	var list2_2=getRandom(
			removeSelected(trainTrials2,list1_2), 2
		)
	var block2=list2_1.concat(list2_2)
	shuffle(block2) //randomize block2
	
	trainTrials=block1.concat(block2)

		doTrainTrial();
		
		//});

}
	
	// JavaScript Document