function DetailView(params){
	var win = Ti.UI.createWindow({
		title: params.detailTitle,
		backgroundColor: "#660000",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: false
	});
		
	var img = Ti.UI.createImageView({
		image: params.mainImage,
		width: "100%",
		height: "180dp",
		top: "65dp"
	});
	
	var headerLabel = Ti.UI.createLabel({
		text: params.detailTitle,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "170dp",
		right: "12dp",
		color: "#FFF",
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		//Shadow: iOS only
		shadowColor: "#1a3743", //Darker blue
		shadowOffset: {x:1, y:1}
	});

	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: "255dp",
		height: Ti.UI.FILL,
		enableZoomControls: false, //Android only
    borderRadius:1
	});


	var img = Ti.UI.createImageView({
		image: params.mainImage,
		width: "100%",
		height: "180dp",
		top: "65dp"
	});

	var headerLabel = Ti.UI.createLabel({
		text: params.detailTitle,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "170dp",
		right: "12dp",
		color: "#FFF",
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		//Shadow: iOS only
		shadowColor: "#1a3743", //Darker blue
		shadowOffset: {x:1, y:1}
	});

	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: "255dp",
		height: Ti.UI.FILL,
		enableZoomControls: false, //Android only
    borderRadius:1
	});

    var os = Ti.Platform.osname;
	
	if (os === 'ipad' || os === 'iphone') {
		var bb = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.BACK, 
			 backgroundImage:"go_previous_black.png",
			 touchEnabled: 'True',
			 borderRadius:'20',
			 backgroundColor:'gray',
			 borderColor: 'white',
			 borderWidth: '1.0',
			 top: 20,
			 right: 20,
			 width: 43,
			 height: 43
		});
		
		win.add(bb);
		bb.addEventListener('click', function(){	
	    	win.close(win);
		});
	}

	win.add(img);
	win.add(detail);
	win.add(headerLabel);

	return win;
}
module.exports = DetailView;