var arrayOfText = [];
var arrayOfTextOptions = [,"Python","Objective C (the best language!)","Java","Java Scripit","Writing Code for computers","Computers that can do complex math","Computers that can speak","Artificaly Intelegent Computers","Apple Computer","Windows Computer","IOS Operating System","Andriod Operating System","Phones that use OS","Tablets that work Like Computers","Computers that run like tablets"];



var textForward = function() {
	index++;
	if (index >= arrayOfText.length) {
		index = 0;
	}
	HumanIndex = index+1;
	MainTextLabel.text = HumanIndex+". "+arrayOfText[index];
};

var textBackwards = function() {
	index--;
	if(index< 0) {
		index = arrayOfText.length-1;
	}
	HumanIndex = index+1;
	MainTextLabel.text = HumanIndex+". "+arrayOfText[index];
};

var createArrayFromOptions = function() {
	for (var i = 0;i < Math.floor(Math.random()*5) + 5;i++) {
		indexToGrabFrom = Math.floor(Math.random()*arrayOfTextOptions.length);
		text = arrayOfTextOptions[indexToGrabFrom];
		arrayOfTextOptions.splice(indexToGrabFrom,1);
		console.log(text);
		arrayOfText.push(text);
		
	}
	console.log("arrayOfTextCount");
	console.log(arrayOfText.length);
};

NextButtonView.addEventListener("click",textForward);
PreviousButtonView.addEventListener("click",textBackwards);

createArrayFromOptions();
var index = Math.floor(Math.random()*arrayOfText.length);
var humanIndex = index +1;
MainTextLabel.text = MainTextLabel.text = humanIndex+". "+arrayOfText[index];