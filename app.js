// this sets the background color of the master UIView (when there are no windows/tab groups on it)
(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
		title: "PMP Fundamentals",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: false
	});
	var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', 
		title:'Main Tab', 
		window:mainWindow
	});

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();
