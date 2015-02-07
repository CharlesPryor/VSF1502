// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');
conosle.log("test");

var mainWin = Ti.UI.createWindow({
	backgroundColor:"#333",
});


var arrayTextLabelView = Ti.UI.createView({
	backgroundColor:"#000",
	height: 50,
	right:20,
	left:20,
	top: Titanium.Platform.displayCaps.platformHeight*.33
});


var MainTextLabel = Ti.UI.createLabel({
	text:"Hello",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Helvetica", fontWeight:"bold"},
	top:10,
	left:10
});

var PreviousButtonView = Ti.UI.createView({
	backgroundColor:"#23ba00",
	top: Titanium.Platform.displayCaps.platformHeight - 60,
	left:10,
	width:Titanium.Platform.displayCaps.platformWidth/2 - 10,
	right:Titanium.Platform.displayCaps.platformWidth/2 - 20,
	height:50
});

var NextButtonView = Ti.UI.createView({
	backgroundColor:"#23ba00",
	top: Titanium.Platform.displayCaps.platformHeight - 60,
	left:Titanium.Platform.displayCaps.platformWidth/2 + 10,
	right:10,
	height:50
});



var NextLabel = Ti.UI.createLabel({
	text:"Next",
	top:mainWin.height,
	left:mainWin.width
	
});

var PreviousLabel = Ti.UI.createLabel({
	text:"Previous",
	top:mainWin.height,
	left:mainWin.width
	
});

var arrayLogic = require("arrayLogic");

mainWin.add(arrayTextLabelView,PreviousButtonView, NextButtonView);
NextButtonView.add(NextLabel);
PreviousButtonView.add(PreviousLabel);
arrayTextLabelView.add(MainTextLabel);
mainWin.open();


