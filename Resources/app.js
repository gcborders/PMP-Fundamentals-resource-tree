/*
 * PMP Prep App for CS 633 - Distributed Software Development
 * 
 * The purpose of this application is to provide a resource for those interested in project management.
 * 
 * Development Team: Gregg Borders, Jim Geraci, Crystal Weaver, Sama Al-Obaidy
 ************************************************************************
 * Change Log:
 ****************************************************************************************
 * Change Description									* Developer		* Date			*
 ****************************************************************************************
 * Initial Code brought from Explore California App		* Jim Geraci	* 20-MAR-2014	*
 ****************************************************************************************
 ****************************************************************************************
 * 														* 				* 				*
 ****************************************************************************************
 ****************************************************************************************
 * 														* 				* 				*
 ****************************************************************************************
 ****************************************************************************************
 * 														* 				* 				*
 **************************************************************************************** 
 * 
 */
(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#FFF');

	var ProcessView = require("/views/ProcessView");
	var DetailView = require("/views/DetailView"); //Remember: this is a function

	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
		title: "PMP Prep",
		backgroundColor: "#fff",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	/*var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', //Irrelevant; we are hiding the tab bar
		title:'Tab 1', //Irrelevant; we are hiding the tab bar
		window:mainWindow
	});*/
	
	var mainLabel = Ti.UI.createLabel({
		text: 'Project Scope Management',
		font: {
			fontSize: "30dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "3dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#000"
	});
	var mainText = Ti.UI.createLabel({
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor elit, elementum at augue ac, mollis suscipit mi. Nunc sit amet convallis leo, vel bibendum libero. Nulla vestibulum, odio dictum bibendum suscipit, eros nulla porttitor ante, quis tempus mauris orci vel augue. Aenean ullamcorper ipsum ac est volutpat, vitae tristique dolor lacinia. Vivamus eget eleifend diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus rutrum ultricies ipsum. Fusce mattis accumsan velit, sed feugiat arcu vulputate id. Aliquam pretium ligula metus. In consectetur tortor risus, ut rutrum nisl sagittis euismod. Praesent porta libero massa, a accumsan nunc ultrices in.',
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		//top: "3dp",
		//left: "54dp",
		height: Ti.UI.SIZE,
		color: "#000"
	});
	mainWindow.add(mainLabel);
	mainWindow.add(mainText);

	mainWindow.addEventListener('swipe', function(e) {
   if (e.direction == 'left') {
      processWindow.open();
   }/* else if (e.direction == 'right') {
      win2.open();
   }*/
});

	var processWindow = Titanium.UI.createWindow({
		title: "Processes",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	
	var processWindow2 = Titanium.UI.createWindow({
		title: "Processes 2",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	var ProcessView = new ProcessView();
	
	processWindow.add(ProcessView);
	ProcessView.addEventListener("click", function(e){
		var detailView = new DetailView({
			detailTitle: e.rowData.detailTitle,
			mainImage: e.rowData.mainImage,
			detail: e.rowData.detail
		});
		processWindow2.open(detailView, {animated: true});
	});

	//tabGroup.addTab(tab);

	// open tab group
	mainWindow.open();

})();