<<<<<<< HEAD
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');
=======
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
>>>>>>> e74c23772459e8db5e8a43a96a8f14252e9aff77

	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
<<<<<<< HEAD
		title: "PMP Fundamentals",
=======
		title: "PMP Prep",
>>>>>>> e74c23772459e8db5e8a43a96a8f14252e9aff77
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
<<<<<<< HEAD
		tabBarHidden: false
	});
	var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', 
		title:'Main Tab', 
		window:mainWindow
	});

=======
		tabBarHidden: true
	});
	var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', //Irrelevant; we are hiding the tab bar
		title:'Tab 1', //Irrelevant; we are hiding the tab bar
		window:mainWindow
	});

	var ProcessView = new ProcessView();
	
	mainWindow.add(ProcessView);

	ProcessView.addEventListener("click", function(e){
		var detailView = new DetailView({
			detailTitle: e.rowData.detailTitle,
			mainImage: e.rowData.mainImage,
			detail: e.rowData.detail
		});
		tab.open(detailView, {animated: true});
	});

>>>>>>> e74c23772459e8db5e8a43a96a8f14252e9aff77
	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

<<<<<<< HEAD
})();
=======
})();
>>>>>>> e74c23772459e8db5e8a43a96a8f14252e9aff77
