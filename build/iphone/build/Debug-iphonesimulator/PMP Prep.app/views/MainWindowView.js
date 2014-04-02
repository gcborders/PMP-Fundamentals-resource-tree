	var ProcessView = require("/views/ProcessView");
	var ProcessViewWindow = require("/views/ProcessViewWindow");
function MainWindowView() {
	var mainWindow = Titanium.UI.createWindow({
		title: "PMP Prep",
		backgroundColor: "#fff",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true,
		backgroundImage: "images/bg.jpg"
	});
	var mainLabel = Ti.UI.createLabel({
		text: 'Project Scope Management',
		font: {
			fontSize: "30dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "20dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#fff"
	});
	var mainText = Ti.UI.createLabel({
		text: 'is a set of processes used to ensure that the project includes all of the requirements and no new requirements are added in a way that could harm the project.\n\n\nReference: http://www.pmi.org/pmief/learningzone/KCMA_Curricula_Documents/Lesson_1-Nine_Knowledge_Area_Defintions.pdf\n\n\n Swipe Left to Continue',
		font: {
			fontSize: "20dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "60dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#000"
	});	

	mainWindow.add(mainLabel);
	mainWindow.add(mainText);

	return mainWindow;

};
module.exports = MainWindowView;