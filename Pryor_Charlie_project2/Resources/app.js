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
	text:"Main TableView",
	font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
	top:10,
	width:"100%",
	textAlign:"center"
});

var borderLine = ({
	top:titleBar.top + titleBar.height,
	height:1,
	backgroundColor:"#333"
});


var tableView = Ti.UI.createTableView({
	top:titleBar.top + titleBar.height +1
});




if (Ti.Platform.platform == "IPhone 5") {
	console.log("IOS");
	tableView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var detailsView = function(){
	console.log("detail hit");
	var detailedWindow = Ti.UI.createWindow({
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
		text:this.title,
		font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
		top:10,
		width:"100%",
		textAlign:"center"
	}); 
	
	var detailedLabel = Ti.UI.createLabel({
		text:this.desc,
		height: 300,
		right:20,
		top: Titanium.Platform.displayCaps.platformHeight*.33
	});
	
	var closeButton = Ti.UI.createLabel({
		backgroundColo:"#000",
		color:"#fff",
		height:50,
		font: {fontSize:12,fontFamily:"Arial"},
		width:"100%",
		bottom:0,
		textAlign:"center",
		text:"CLOSE"
		
		
	});
	var closeWindow = function(){
		detailedWindow.close();
	};
	
	closeButton.addEventListener("click",closeWindow);
	titleBar.add(Title);
	detailedWindow.add(statusBar,titleBar,borderLine,detailedLabel,closeButton);
	detailedWindow.open();
	
};



var delegate = require("delegate");

titleBar.add(Title);
mainWin.add(statusBar,titleBar,borderLine,tableView);
mainWin.open();
