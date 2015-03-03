var OpenNewWindow = function() {
	
	var savedValues = Ti.App.Properties.getList('savedCountries', []);
	
	//Please note all detailed quotes are taken from wikipedia
	var jsonObject = {
		"Mobile" : {
			"title" : "Default Countries",
			"countries" : [{
				"title" : "Argentina",
				"detailed" : "Argentina Listeni/ˌɑrdʒənˈtiːnə/, officially the Argentine Republic[A] (Spanish: República Argentina [reˈpuβlika aɾxenˈtina]) is a federal republic located in southeastern South America. Sharing the Southern Cone with its smaller neighbour Chile, it is bordered by Bolivia and Paraguay to the north; Brazil to the northeast; Uruguay and the South Atlantic Ocean to the east; Chile to the west and the Drake Passage to the south."
			}, {
				"title" : "Austria",
				"detailed" : "Austria (Listeni/ˈɔːstriə/ or /ˈɒstriə/; German: Österreich [ˈøːstɐˌʁaɪç] ( listen), lit. Eastern Realm), officially the Republic of Austria (German: About this sound Republik Österreich (help·info)), is a federal republic and a landlocked country of roughly 8.5 million people[6] in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west."
			}, {
				"title" : "Belgium",
				"detailed" : "Belgium (Listeni/ˈbɛldʒəm/; Dutch: België; French: Belgique; German: Belgien), officially the Kingdom of Belgium, is a federal monarchy in Western Europe. It is a founding member of the European Union and hosts the EU's headquarters as well as those of several other major international organisations such as NATO"
			}, {
				"title" : "Cameroon",
				"detailed" : "Cameroon /ˌkæməˈruːn/, officially the Republic of Cameroon (French: République du Cameroun), (German: Republik Kamerun), is a country in Central Africa. It is bordered by Nigeria to the west; Chad to the northeast;"
			}, {
				"title" : "Canada",
				"detailed" : "Canada (Listeni/ˈkænədə/) is a country in North America consisting of ten provinces and three territories. Located in the northern part of the continent, it extends from the Atlantic to the Pacific and northward into the Arctic Ocean. Covering 9.98 million square kilometres in total"
			}, {
				"title" : "Chile",
				"detailed" : "Chile (/ˈtʃɪli/;[7] Spanish pronunciation: [ˈtʃile]), officially the Republic of Chile (Spanish: República de Chile, [reˈpuβlika ðe ˈtʃile] ( listen)), is a South American country occupying a long, narrow strip of land between the Andes mountains to the east and the Pacific Ocean to the west."
			}, {
				"title" : "China",
				"detailed" : "China (Listeni/ˈtʃaɪnə/; simplified Chinese: 中国; traditional Chinese: 中國; pinyin: Zhōngguó), officially the People's Republic of China (PRC), is a sovereign state located in East Asia. It is the world's most populous country, with a population of over 1.35 billion."
			}, {
				"title" : "Denmark",
				"detailed" : "Denmark (Listeni/ˈdɛnmɑrk/; Danish: Danmark)[N 10] is a country in Northern Europe. The most southern of the Nordic countries, it is located southwest of Sweden and south of Norway, and bordered to the south by Germany."
			}, {
				"title" : "Finland",
				"detailed" : "Finland (Listeni/ˈfɪnlənd/; Finnish: Suomi [suomi] ( listen); Swedish: Finland [ˈfɪnland]), officially the Republic of Finland,[7] is a Nordic country in Northern Europe bordered by Sweden to the west"
			}, {
				"title" : "Germany",
				"detailed" : "Germany (Listeni/ˈdʒɜrməni/; German: Deutschland), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland, pronounced [ˈbʊndəsʁepuˌbliːk ˈdɔʏtʃlant] ( listen)),[7] is a federal parliamentary republic in western-central Europe."
			}, {
				"title" : "Greece",
				"detailed" : "Greece (Greek: Ελλάδα, Elláda, pronounced [eˈlaða] ( listen)), officially the Hellenic Republic (Ελληνική Δημοκρατία [eliniˈci ðimokraˈti.a] Ellīnikī́ Dīmokratía) and known since ancient times as Hellas (/ˈhɛləs/; Greek: Ελλάς), is a country in Southern Europe and Balkans"
			}, {
				"title" : "Hungry",
				"detailed" : "Hungary Listeni/ˈhʌŋɡəri/ (Hungarian: Magyarország [ˈmɒɟɒrorsaːɡ] ( listen), formally, until 2012, the Republic of Hungary (Hungarian: Magyar Köztársaság) is a landlocked country in Central Europe."
			}, {
				"title" : "Iceland",
				"detailed" : "Iceland[6] (Listeni/ˈaɪslənd/; Icelandic: Ísland [ˈistlant]) is a Nordic island country between the North Atlantic and the Arctic Ocean. It has a population of 325,671 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe."
			}, {
				"title" : "India",
				"detailed" : "India (Listeni/ˈɪndiə/), officially the Republic of India (Bhārat Gaṇarājya),[12][c] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world."
			}, {
				"title" : "Indonesia",
				"detailed" : "Indonesia (Listeni/ˌɪndəˈniːʒə/ in-də-nee-zhə or /ˌɪndoʊˈniːziə/ in-doh-nee-zee-ə), officially the Republic of Indonesia (Indonesian: Republik Indonesia Indonesian pronunciation: [rɛpublik ɪndonesia]), is a sovereign state in Southeast Asia and Oceania."
			}, {
				"title" : "Ireland",
				"detailed" : "Ireland (Listeni/ˈaɪərlənd/; locally: /ˈɑːrlənd/;[citation needed] Irish: Éire [ˈeːɾʲə] ( listen); Ulster-Scots: Airlann [ˈɑːrlən]) is an island in the North Atlantic to the west of Great Britain, from which it is separated by the North Channel, the Irish Sea, and St Georges Channel, and after which it is the largest island of the British Isles archipelago. It is the third-largest island in Europe and the twentieth-largest island on Earth."
			}, {
				"title" : "Israel",
				"detailed" : "Israel /ˈɪzreɪəl/ or /ˈɪzriːəl/, officially the State of Israel (Hebrew: מְדִינַת יִשְׂרָאֵל‎, Medīnat Yisrā'el, IPA: [mediˈnat jisʁaˈʔel] ( listen); Arabic: دولة إِسرائيل‎, Dawlat Isrāʼīl, IPA: [dawlat ʔisraːˈʔiːl]), is a country in Western Asia,"
			}, {
				"title" : "Japan",
				"detailed" : "Japan Listeni/dʒəˈpæn/ (Japanese: 日本 Nippon or Nihon; formally 日本国 About this sound Nippon-koku or Nihon-koku, literally [the] State of Japan) is an island nation in East Asia. Located in the Pacific Ocean, it lies to the east of the Sea of Japan, China, North Korea, South Korea and Russia, stretching from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south."
			}, {
				"title" : "Malaysia",
				"detailed" : "Malaysia (Listeni/məˈleɪʒə/ mə-lay-zhə or Listeni/məˈleɪsiə/ mə-lay-see-ə) (Malaysian pronunciation: [məlejsiə]) is a federal constitutional monarchy located in Southeast Asia. It consists of thirteen states and three federal territories and has a total landmass of 329,847 square kilometres (127,350 sq mi) separated by the South China Sea"
			}, {
				"title" : "Mexico",
				"detailed" : "Mexico (Listeni/ˈmɛksɨkoʊ/; Spanish: México [ˈmexiko] ( listen)), officially the United Mexican States (Spanish: About this sound Estados Unidos Mexicanos (help·info)),[9][10][11][12] is a federal republic in North America. It is bordered on the north by the United States;"
			}, {
				"title" : "Netherlands",
				"detailed" : "The Netherlands (Listeni/ˈnɛðərləndz/; Dutch: Nederland [ˈneːdərˌlɑnt] ( listen)) is the main constituent country of the Kingdom of the Netherlands. It is a small, densely populated country, lying mainly in Western Europe, but also including three islands in the Caribbean. "
			}, {
				"title" : "Norway",
				"detailed" : "Norway (Listeni/ˈnɔrweɪ/; Norwegian: About this sound Norge (Bokmål) or About this sound Noreg (Nynorsk)), officially the Kingdom of Norway, is a sovereign and unitary monarchy whose territory comprises the western portion of the Scandinavian Peninsula, Jan Mayen, and the Arctic archipelago of Svalbard.[note 1]"
			}, {
				"title" : "Pakistan",
				"detailed" : "Pakistan (Listeni/ˈpækɨstæn/ or Listeni/pɑːkiˈstɑːn/; Urdu: پاكستان‎ ALA-LC: Pākistān, pronounced [pɑːkɪst̪ɑːn] ( listen)), officially the Islamic Republic of Pakistan (Urdu: اسلامی جمہوریۂ پاكستان‎ ALA-LC: Islāmī Jumhūriyah-yi Pākistān), is a sovereign country in South Asia. With a population exceeding 180 million people, it is the sixth most populous country and with an area covering 796,095 km2"
			}, {
				"title" : "Palestine",
				"detailed" : "Palestine (Arabic: فلسطين‎ Filasṭīn, Falasṭīn, Filisṭīn; Greek: Παλαιστίνη, Palaistinē; Latin: Palaestina; Hebrew: פלשתינה Palestina) is a geographic region in Western Asia between the Mediterranean Sea and the Jordan River."
			}, {
				"title" : "Peru",
				"detailed" : "Peru Listeni/pəˈruː/ (Spanish: Perú; Quechua: Piruw;[5] Aymara: Piruw), officially the Republic of Peru (Spanish: República del Perú, pronounced: [reˈpuβlika ðel peˈɾu] ( listen)), is a country in western South America."
			}, {
				"title" : "Poland",
				"detailed" : "Poland Listeni/ˈpoʊlənd/ (Polish: Polska; pronounced [ˈpɔlska] ( listen)), officially the Republic of Poland (Polish: Rzeczpospolita Polska; pronounced [ʐɛt͡ʂpɔˈspɔʎit̪a ˈpɔlska] ( listen)), is a country in Central Europe bordered by Germany to the west"
			}, {
				"title" : "Portugal",
				"detailed" : "Portugal (UK /ˈpɔːtʃʊɡl/; US Listeni/ˈpɔrtʃʉɡəl/; Portuguese: Portugal [puɾtuˈɣaɫ]; Mirandese: Pertual), officially the Portuguese Republic (Portuguese: República Portuguesa; Mirandese: República Pertuesa), is a country in southwest Europe."
			}, {
				"title" : "Romania",
				"detailed" : "Romania (Listeni/roʊˈmeɪniə/ roh-may-nee-ə; Romanian: România [romɨˈni.a] ( listen)), occasionally spelled Rumania,[10][11][12][13][14] and formerly also spelled Roumania[15][16] is a unitary semi-presidential republic located in Southeastern-Central Europe"
			}, {
				"title" : "Russia",
				"detailed" : "Russia (Russian: Россия, tr. Rossiya; IPA: [rɐˈsʲijə] ( listen)), also officially known as the Russian Federation[9] (Russian: Российская Федерация, tr. Rossiyskaya Federatsiya; IPA: [rɐˈsʲijskəjə fʲɪdʲɪˈratsɨjə] ( listen)), is a country in northern Eurasia."
			}, {
				"title" : "Singapore",
				"detailed" : "Singapore (Listeni/ˈsɪŋəpɔr/ or /ˈsɪŋɡəpɔr/), officially the Republic of Singapore, is a modern city-state and island country in Southeast Asia. It lies off the southern tip of the Malay Peninsula and is 137 kilometres (85 mi) north of the equator"
			}, {
				"title" : "Spain",
				"detailed" : "Spain (Listeni/ˈspeɪn/; Spanish: España [esˈpaɲa] ( listen)), officially the Kingdom of Spain (Spanish: Reino de España),[a][b] is a sovereign state located on the Iberian Peninsula in southwestern Europe. Its mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar"
			}, {
				"title" : "Sweden",
				"detailed" : "Sweden (Listeni/ˈswiːdən/ swee-dən; Swedish: Sverige [ˈsværjɛ] ( listen)), officially the Kingdom of Sweden (Swedish: About this sound Konungariket Sverige (help·info)), is a Scandinavian country in Northern Europe"
			}, {
				"title" : "Switzerland",
				"detailed" : "Switzerland (/ˈswɪtsərlənd/; German: Schweiz [ˈʃvaɪts];[note 3] French: Suisse [sɥis(ə)]; Italian: Svizzera [ˈzvittsera]; Romansh: Svizra [ˈʒviːtsrɐ] or [ˈʒviːtsʁːɐ]),[note 4] officially the Swiss Confederation (Latin: Confoederatio Helvetica, hence its abbreviation CH), is a federal parliamentary republic consisting of 26 cantons"
			}
			]
		},
		"Computers" : {
			"title" : "User Entered",
			"UserContries" : savedValues
		}
	};

	var jsonVC = Ti.UI.createWindow({
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
		text : "Countries List",
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

	var tableView = Ti.UI.createTableView({
		top : titleBar.top + titleBar.height + 1,
		bottom:50
	});

	if (Ti.Platform.platform == "IPhone 5") {
		console.log("IOS");
		tableView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}

	var detailsView = function() {
		console.log("detail hit");
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
			text : this.title,
			font : {
				fontsize : 25,
				fontFamily : "helvetica",
				fontWeight : "bold"
			},
			top : 10,
			width : "100%",
			textAlign : "center"
		});

		var detailedLabel = Ti.UI.createLabel({
			text : this.desc,
			height : 300,
			right : 20,
			top : Titanium.Platform.displayCaps.platformHeight * .33
		});
		
		var imgView = Ti.UI.createImageView({
			height:250,
			top:70
		});
		
		var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "Images/"+this.title+".png");
 
		if(file.exists()) { 
			Ti.API.info('file exists'); 
			imgView.setImage(file);
		} else {
			imgView.setImage("NoIMGFound/no-image");
		}
		

		var closeButton = Ti.UI.createLabel({
			backgroundColo : "#000",
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
		var closeWindowDetailed = function() {
			detailedWindow.close();
		};

		closeButton.addEventListener("click", closeWindowDetailed);
		titleBar.add(Title);
		detailedWindow.add(statusBar, titleBar, imgView, detailedLabel, closeButton);
		detailedWindow.open();

	};

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
		jsonVC.close();
	};

	var myTableDataSection1 = jsonObject.Mobile.countries;
	var myTableDataSection2 = jsonObject.Computers.UserContries;

	var firstSection = Ti.UI.createTableViewSection({
		headerTitle : jsonObject.Mobile.title
	});

	var secondSection = Ti.UI.createTableViewSection({
		headerTitle : jsonObject.Computers.title
	});

	for (var i = 0,
	    j = myTableDataSection1.length; i < j; i++) {
		var Row = Ti.UI.createTableViewRow({
			title : myTableDataSection1[i].title,
			desc : myTableDataSection1[i].detailed,
			hasChild : true

		});
		if (Ti.Platform.name == "IPhone OS") {
			Row.hasChild = false;
			Row.hasDetail = true;
		}
		firstSection.add(Row);
		Row.addEventListener("click", detailsView);
	}
	for (var i = 0,
	    j = myTableDataSection2.length; i < j; i++) {
		var Row = Ti.UI.createTableViewRow({
			title : myTableDataSection2[i].title,
			desc : myTableDataSection2[i].detailed,
			hasChild : true

		});
		if (Ti.Platform.name == "IPhone OS") {
			Row.hasChild = false;
			Row.hasDetail = true;
		}

		secondSection.add(Row);
		Row.addEventListener("click", detailsView);
	}

	tableView.setData([firstSection, secondSection]);

	closeButton.addEventListener("click", closeWindow);
	titleBar.add(Title);
	jsonVC.add(statusBar, titleBar, tableView, closeButton);
	jsonVC.open();

};

jsonDataViewControllerOpen.addEventListener("click", OpenNewWindow);
