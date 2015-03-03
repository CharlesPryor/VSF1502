


var OpenNewWindow = function(){
	
	
	var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
	var ImageFiles = imagesFolder.getDirectoryListing();
	var lastIndex = Math.floor(Math.random()*ImageFiles.length);
	
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
		text: "Flag Pictures",
		color:"#000",
		font: {fontsize: 25, fontFamily:"helvetica",fontWeight:"bold"},
		top:10,
		width:"100%",
		textAlign:"center"
	}); 
	
	var ImageView = Ti.UI.createImageView({
		image:"Images/"+ImageFiles[lastIndex]
	});
	
	
	var newRandomImage = Ti.UI.createLabel({
		backgroundColor:"#7CFC00",
		color:"#000",
		height:150,
		font: {fontSize:12,fontFamily:"Arial"},
		right:Titanium.Platform.displayCaps.platformWidth*.25,
		left:Titanium.Platform.displayCaps.platformWidth*.25,
		bottom:175,
		textAlign:"center",
		text:"New Random Image"
	});
	
	var closeButton = Ti.UI.createLabel({
		backgroundColor:"#000",
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
	
	
	var randomImage = function(){
		
		var newIndex = Math.floor(Math.random()*ImageFiles.length);
		//console.log(lastIndex);
		//console.log(newIndex);
		//newIndex = lastIndex;
		while (newIndex == lastIndex) {
			//console.log("refreshing number same");
			newIndex = Math.floor(Math.random()*ImageFiles.length);
			//newIndex = lastIndex;
		}
		//console.log("Images/"+ImageFiles[newIndex]);
		
		ImageView.setImage("Images/"+ImageFiles[newIndex]);
		lastIndex = newIndex;
	};
	
	newRandomImage.addEventListener("click",randomImage);	
	closeButton.addEventListener("click", closeWindow);
	titleBar.add(Title);
	detailedWindow.add(statusBar,titleBar,closeButton,newRandomImage,ImageView);
	detailedWindow.open();
	
};

galleryViewControllerOpen.addEventListener("click",OpenNewWindow);
