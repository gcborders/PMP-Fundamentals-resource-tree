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
		top: "5dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#fff"
	});
	var mainText = Ti.UI.createLabel({
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor elit, elementum at augue ac, mollis suscipit mi. Nunc sit amet convallis leo, vel bibendum libero. Nulla vestibulum, odio dictum bibendum suscipit, eros nulla porttitor ante, quis tempus mauris orci vel augue. Aenean ullamcorper ipsum ac est volutpat, vitae tristique dolor lacinia. Vivamus eget eleifend diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus rutrum ultricies ipsum. Fusce mattis accumsan velit, sed feugiat arcu vulputate id. Aliquam pretium ligula metus. In consectetur tortor risus, ut rutrum nisl sagittis euismod. Praesent porta libero massa, a accumsan nunc ultrices in. \n Swipe Left to Continue',
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "40dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
<<<<<<< HEAD
		color: "#000"
	});	
=======
		color: "#FFF"
	});
>>>>>>> 9fa2d95f5676d866afc696da118abf0848e07a63
	mainWindow.add(mainLabel);
	mainWindow.add(mainText);

	return mainWindow;

};
module.exports = MainWindowView;