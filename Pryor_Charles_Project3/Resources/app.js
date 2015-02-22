Titanium.UI.setBackgroundColor('#000');




var mainWin = Ti.UI.createWindow({
	backgroundColor:"#333",
});

var statusBar = Ti.UI.createView({
	top:0,
	height:20,
	backgroundColor:"#333"
});

var titleBar = Ti.UI.createView({
	top:20,
	backgroundColor:"#fff",
	height:45
});

var Title = Ti.UI.createLabel({
	text:"Galery Choose",
	font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
	top:10,
	width:"100%",
	textAlign:"center"
});


var OpenGalleryButton = Ti.UI.createLabel({
		backgroundColor:"#fff",
		color:"#000",
		height:50,
		font: {fontSize:12,fontFamily:"Arial"},
		right:Titanium.Platform.displayCaps.platformHeight*.05,
		left:Titanium.Platform.displayCaps.platformHeight *.05,
		top:Titanium.Platform.displayCaps.platformHeight/2 +10,
		textAlign:"center",
		text:"Open"	
	});
	
var FullGallery = require("FullGalleryView");
titleBar.add(Title);
mainWin.add(statusBar,titleBar,OpenGalleryButton);
mainWin.open();