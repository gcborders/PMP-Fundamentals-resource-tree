function ProcessViewWindow(){
	var ProcessView = require("/views/ProcessView");
	var processWindow = Titanium.UI.createWindow({
		title: "Processes",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	var ProcessView = new ProcessView();
	
	processWindow.add(ProcessView);
	
return processWindow;
};

module.exports = ProcessViewWindow;