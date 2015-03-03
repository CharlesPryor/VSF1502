// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var mainWin = Ti.UI.createWindow({
	backgroundColor : "#333",
});

var statusBar = Ti.UI.createView({
	top : 0,
	height : 20,
	backgroundColor : "#333"
});

var titleBar = Ti.UI.createView({
	top : 20,
	backgroundColor : "#fff",
	height : 45
});

var Title = Ti.UI.createLabel({
	text : "Menu",
	font : {
		fontsize : 25,
		fontFamily : "helvetica",
		fontWeight : "bold"
	},
	top : 10,
	width : "100%",
	textAlign : "center"
});

var galleryViewControllerOpen = Ti.UI.createLabel({
	backgroundColor : "#6495ED",
	color : "#000",
	height : 200,
	font : {
		fontSize : 100,
		fontFamily : "Arial"
	},
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	top : titleBar.top + 45,
	textAlign : "Right",
	text : "Flag Pictures"
});

var jsonDataViewControllerOpen = Ti.UI.createLabel({
	backgroundColor : "#556B2F",
	color : "#000",
	height : 200,
	font : {
		fontSize : 100,
		fontFamily : "Arial"
	},
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	top : titleBar.top + 246,
	textAlign : "Right",
	text : "View Countries"
});

var AddDataViewControllerOpen = Ti.UI.createLabel({
	backgroundColor : "#CD5C5C",
	color : "#000",
	height : 200,
	font : {
		fontSize : 100,
		fontFamily : "Arial"
	},
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	top : titleBar.top + 447,
	textAlign : "Right",
	text : "Add Countries"
});


var VSFLabel = Ti.UI.createLabel({
	color : "#FFFFFF",
	height : 50,
	font : {
		fontSize : 12,
		fontFamily : "Arial"
	},
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	bottom:150,
	textAlign : "Center",
	text : "VFW Term 1502//Charles Pryor"
});

var picsViewController = require("picturesViewController");
var jsonVC = require("jsonDataViewController");
var addVC = require("AddDataViewController");
titleBar.add(Title);
mainWin.add(statusBar, titleBar, galleryViewControllerOpen, jsonDataViewControllerOpen, AddDataViewControllerOpen,VSFLabel);
mainWin.open();
