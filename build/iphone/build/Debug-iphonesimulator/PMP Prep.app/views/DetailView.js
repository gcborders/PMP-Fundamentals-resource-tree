function DetailView(params){
	var win = Ti.UI.createWindow({
		title: params.detailTitle,
		backgroundColor: "#FFF",
		backgroundImage: "images/bg.jpg",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: false
	});
	
	//bb is the Back button for all detail screen views	
	
	bb = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.BACK, 
		 backgroundImage:"go_previous_black.png",
		 touchEnabled: 'True',
		 borderRadius:10,
		 backgroundColor:'white',
		 borderColor: 'blue',
		 borderWidth: '2.0',
		 top: 20,
	     width: 75,
	     height: 25
		});
	
	//bb is the Back button for all detail screen views
	    
	    bb.addEventListener('click', function(){	
	    win.close(win);
	});
	
	var img = Ti.UI.createImageView({
		image: params.mainImage,
		width: "100%",
		height: "180dp",
		top: "50dp"
	});

	var headerLabel = Ti.UI.createLabel({
		text: params.detailTitle,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "156dp",
		right: "12dp",
		color: "#FFF",
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		//Shadow: iOS only
		shadowColor: "#1a3743", //Darker blue
		shadowOffset: {x:1, y:1}
	});

	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: "180dp",
		height: Ti.UI.FILL,
		enableZoomControls: false, //Android only
    borderRadius:1
	});

    win.add(bb);
	win.add(img);
	win.add(detail);
	win.add(headerLabel);

	return win;
}
module.exports = DetailView;