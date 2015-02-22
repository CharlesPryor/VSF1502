

var openGallery = function (){
	
	console.log("Open");
	
	
	var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "FlagsFolder");
	var ImageFiles = imagesFolder.getDirectoryListing();
	console.log(ImageFiles.length);
	
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
		text:"Cool Backgrounds",
		color:"#000",
		font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
		top:10,
		width:"100%",
		textAlign:"center"
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
	
	var scrollView = Ti.UI.createScrollView({
		top:65,
		height:Titanium.Platform.displayCaps.platformHeight - 115,
		backgroundColor:"#fff"
		
	});
	
	scrollView.addEventListener("click",function(event){
		
		//console.log(event);
		
		
		var detailedWindow2 = Ti.UI.createWindow({
		backgroundColor:"#333",
	});
	var statusBar2 = Ti.UI.createView({
	top:0,
	height:20,
	backgroundColor:"#333"
	});

	var titleBar2 = Ti.UI.createView({
		top:20,
		backgroundColor:"#fff",
		height:45
	});

	var Title2 = Ti.UI.createLabel({
		text:event.source.image,
		font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
		top:10,
		width:"100%",
		textAlign:"center"
	}); 
	
	
	var bigImageView = Ti.UI.createImageView({
		image:event.source.image	
	});
	
	
	var closeButton2 = Ti.UI.createLabel({
		backgroundColo:"#000",
		color:"#fff",
		height:50,
		font: {fontSize:12,fontFamily:"Arial"},
		width:"100%",
		bottom:0,
		textAlign:"center",
		text:"CLOSE"
		
		
	});
	
	
	var closeWindow2 = function(){
		detailedWindow2.close();
	};
		
	closeButton2.addEventListener("click",closeWindow2);
	titleBar2.add(Title2);
	detailedWindow2.add(statusBar2,titleBar2,bigImageView,closeButton2);
	detailedWindow2.open();
		
	});
	
	
	var closeWindow = function(){
		detailedWindow.close();
	};
	
	closeButton.addEventListener("click",closeWindow);
	titleBar.add(Title);
	detailedWindow.add(statusBar,titleBar,scrollView,closeButton);
	detailedWindow.open();
	
	//20 + i * i %
	var space = 20;
	var currentTop = -90;
	var leftSpace = 0;
	var screenWidth = Titanium.Platform.displayCaps.platformWidth;
	var size = (screenWidth / 4) - space;
	//console.log(screenWidth);
	
	for (var i = 0;i < ImageFiles.length;i++) {
		//currentTop = ((size * i) % 4)+ 20;
		leftSpace = (size * (i%4)) + 20 * i;
		
		if (i % 4 == 0) {
			currentTop += 90;
		}
		
		if (leftSpace >= screenWidth) {
			leftSpace = 0;	
		}
		
	//console.log(currentTop);
	var view = Ti.UI.createView({
		top:currentTop,
		left:leftSpace,
		height:size,
		width:size	
	});	
		
	var IMGView = Ti.UI.createImageView({
		image: "FlagsFolder/"+ImageFiles[i]
	});
	view.add(IMGView);
	scrollView.add(view);
}
	
	
	
};







OpenGalleryButton.addEventListener("click",openGallery);