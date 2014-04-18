function DetailView(params){
	var win = Ti.UI.createWindow({
		title: params.detailTitle,
		backgroundColor: "#660000",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: false
	});
	
	var top = "0";	
		if (os === 'ipad' || os === 'iphone'){top = "3dp";}
    else{top = "0dp";
   };
   
	var img = Ti.UI.createImageView({
		image: params.mainImage,
		width: "100dp",
		height: "180dp",
		top: top,
	});
	
	 
	if (os === 'ipad' || os === 'iphone'){top = "183dp";}
    else{top = "180dp";
   };
	
	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: top,
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
			 backgroundColor:'#FFF',
			 borderColor: '#FFF',
			 borderWidth: '1.0',
			 top: 20,
			 left: 10,
			 width: 25,
			 height: 25
		});
		
		//win.add(bb);
		bb.addEventListener('click', function(){	
	    	win.close(win);
		});
	}
	win.add(img);
	//Add Button After Image
	if (os === 'ipad' || os === 'iphone'){win.add(bb);}
	win.add(detail);

	return win;
}
module.exports = DetailView;
