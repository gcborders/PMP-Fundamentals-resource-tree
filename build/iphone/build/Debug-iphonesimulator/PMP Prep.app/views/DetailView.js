function DetailView(params){
	var win = Ti.UI.createWindow({
		title: params.detailTitle,
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: false
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
		enableZoomControls: false //Android only
	});	
 
	win.add(detail);
	win.add(headerLabel);	

	return win;
}
module.exports = DetailView;