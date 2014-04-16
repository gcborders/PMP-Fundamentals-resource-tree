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
		top: (Ti.Platform.osname === "android") ? "0dp" : "0dp",
	});

	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: (Ti.Platform.osname === "android") ? "180dp" : "180dp",
		height: Ti.UI.FILL,
		enableZoomControls: false, //Android only
    borderRadius:1
	});

    var os = Ti.Platform.osname;

	if (os === 'ipad' || os === 'iphone') {
		var bb = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.BACK, 
			 backgroundImage:"go_previous_black.png",
			 touchEnabled: 'True',
			 borderRadius:'15',
			 backgroundColor:'',
			 borderColor: 'white',
			 borderWidth: '1.0',
			 top: 20,
			 left: 10,
			 width: 32,
			 height: 32
		});

		//win.add(bb);
		bb.addEventListener('click', function(){	
	    	win.close(win);
		});
	}
	win.add(img);
	if (os === 'ipad' || os === 'iphone'){win.add(bb);}
	win.add(detail);

	return win;
}
module.exports = DetailView;