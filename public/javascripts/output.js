function output(array1, array2, array3, array4){
	var randverb = array1[Math.floor(Math.random() * array1.length)];
	var randadj = array2[Math.floor(Math.random() * array2.length)];
	var randnoun = array3[Math.floor(Math.random() * array3.length)];
	var bsphrase = randverb.concat(" ",randadj," ",randnoun);

	
	document.getElementById("bshere").innerHTML = bsphrase;
	var randexample = examples[Math.floor(Math.random() * examples.length)];
	var bsexample = randexample.replace("TKTK", bsphrase);
	document.getElementById("bsheretoo").innerHTML = "<strong>e.g. </strong>" + bsexample;
}
