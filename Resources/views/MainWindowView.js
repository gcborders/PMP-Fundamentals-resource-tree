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
<<<<<<< HEAD
		top: "20dp",
=======
		textAlign: "center",
		top: (Ti.Platform.osname === "android") ? "3dp" : "3dp",
>>>>>>> 7ef03b2c47a1c45b631ca8a37a2e3c2f5f480343
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#fff"
	});
	var mainText = Ti.UI.createLabel({
<<<<<<< HEAD
		text: 'is a set of processes used to ensure that the project includes all of the requirements and no new requirements are added in a way that could harm the project.\n\n\nReference: http://www.pmi.org/pmief/learningzone/KCMA_Curricula_Documents/Lesson_1-Nine_Knowledge_Area_Defintions.pdf\n\n\n Swipe Left to Continue',
		font: {
			fontSize: "20dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "60dp",
		//left: "54dp",
=======
		text: 'Project Scope Management is made up of four main processes. These processes are Collect Requirements, Define Scope, Plan Scope Management, and Create WBS. According to the PMBOK 5th Edition, Project Scope Management includes the processes required to ensure that the project includes all the work required, and only the work required, to complete the project successfully. \n\nSwipe Left to Continue',
		font: {
			fontSize: "24dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		textAlign: "center",
		width:"auto",
		top: (Ti.Platform.osname === "android") ? "65dp" : "65dp",
		left: (Ti.Platform.osname === "android") ? "10dp" : "10dp",
		right: (Ti.Platform.osname === "android") ? "10dp" : "10dp",
>>>>>>> 7ef03b2c47a1c45b631ca8a37a2e3c2f5f480343
		height: Ti.UI.SIZE,
		color: "#000"
	});	

	mainWindow.add(mainLabel);
	mainWindow.add(mainText);

	return mainWindow;

};
module.exports = MainWindowView;