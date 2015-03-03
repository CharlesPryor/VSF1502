var OpenNewWindow = function() {
	var detailedWindow = Ti.UI.createWindow({
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
		text : "Add Countries",
		color : "#000",
		font : {
			fontsize : 25,
			fontFamily : "helvetica",
			fontWeight : "bold"
		},
		top : 10,
		width : "100%",
		textAlign : "center"
	});

	var textField = Ti.UI.createTextField({
		hintText : 'Enter Country Name',
		backgroundColor : "#fff",
		top : 75,
		width : "100%",
		height : 50
	});

	var textArea = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#bbb',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Enter Description For Country',
		top : 130,
		width : Titanium.Platform.displayCaps.platformWidth,
		height : Titanium.Platform.displayCaps.platformWidth * .70
	});

	var saveButton = Ti.UI.createLabel({
		backgroundColor : "#7CFC00",
		color : "#fff",
		height : 50,
		font : {
			fontSize : 12,
			fontFamily : "Arial"
		},
		width : "100%",
		bottom : 60,
		textAlign : "center",
		text : "Save"
	});

	var closeButton = Ti.UI.createLabel({
		backgroundColor : "#000",
		color : "#fff",
		height : 50,
		font : {
			fontSize : 12,
			fontFamily : "Arial"
		},
		width : "100%",
		bottom : 0,
		textAlign : "center",
		text : "CLOSE"

	});

	var closeWindow = function() {
		detailedWindow.close();
	};

	var saveData = function() {
		console.log("save");
		console.log(textArea.value);
		console.log(textField.value);
		
		if (textArea.value &&textField.value) {

		var savedValues = Ti.App.Properties.getList('savedCountries', []);

		var dictionary = {
			"title" : textField.value,
			"detailed" : textArea.value
		};

		savedValues.push(dictionary);
		Ti.App.Properties.setList('savedCountries', savedValues);
		
		alert('Data Saved');
	} else {
		alert('You need to fill in both to save data');	
	}

	};

	closeButton.addEventListener("click", closeWindow);
	saveButton.addEventListener("click", saveData);
	titleBar.add(Title);
	detailedWindow.add(statusBar, titleBar, closeButton, textField, textArea, saveButton);
	detailedWindow.open();

};

AddDataViewControllerOpen.addEventListener("click", OpenNewWindow);
