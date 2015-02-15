var jsonObject = {
    "Mobile": {
        "title": "Apple Mobile Devices",
        "deviceLists": [
            {
                "title": "Iphone",
                "detailed": "The first Iphone it was a somewhat small display but could do lots of cool things!"
            },
            {
                "title": "Iphone 5",
                "detailed": "It was a inch bigger than the iphone and it did all the cool stuff"
            },
            {
                "title": "Iphone 6",
                "detailed": "It was a much bigger display that did all the cool stuff"
            },
            {
                "title": "Ipad",
                "detailed": "It did all the stuff the phone did but a really big screen so you could see much more"
            },
            {
                "title": "Ipad Air",
                "detailed": "same thing as the Ipad but a bit of a small screen size so it could fit in a jacket pocket"
            }
        ]
    },
    "Computers": {
        "title": "Apple Computers",
        "deviceLists": [
            {
                "title": "MacBook Air",
                "detailed": "A really thing computer that could be bought in two sizes was incredibly portable!"
            },
            {
                "title": "MacBook Pro",
                "detailed": "One step up from the macbook air it was a bit more powerful and generaly had a bigger screen size"
            },
            {
                "title": "Imac",
                "detailed": "A desktop computer that has a very thing display while you cant take it with you with ease it generaly is a more powerful machine"
            },
            {
                "title": "Mac Mini",
                "detailed": "Very small little box with a computer inside it.  does not have a display normaly a very inexpensive desktop computer"
            },
            {
                "title": "Mac Pro",
                "detailed": "The same concept as a mac mini but much more powerful, it is a tube like shape and is the fastest desktop that apple makes currently"
            }
        ]
    }
};

var myTableDataSection1 = jsonObject.Mobile.deviceLists;
var myTableDataSection2 = jsonObject.Computers.deviceLists;

var firstSection = Ti.UI.createTableViewSection({
	headerTitle: jsonObject.Mobile.title	
});

var secondSection = Ti.UI.createTableViewSection({
	headerTitle: jsonObject.Computers.title	
});


for (var i=0, j = myTableDataSection1.length; i<j;i++) {
	var Row = Ti.UI.createTableViewRow({
		title:  myTableDataSection1[i].title,
		desc: myTableDataSection1[i].detailed,
		hasChild: true
		
	});
	if (Ti.Platform.name == "IPhone OS") {
	Row.hasChild = false;
	Row.hasDetail = true;	
	}
	firstSection.add(Row);
	Row.addEventListener("click",detailsView);
}
for (var i=0, j = myTableDataSection2.length; i<j;i++) {
	var Row = Ti.UI.createTableViewRow({
		title: myTableDataSection2[i].title,
		desc: myTableDataSection2[i].detailed,
		hasChild: true
		
	});
	if (Ti.Platform.name == "IPhone OS") {
	Row.hasChild = false;
	Row.hasDetail = true;	
	}
	
	secondSection.add(Row);
	Row.addEventListener("click",detailsView);
}

tableView.setData([firstSection,secondSection]);




