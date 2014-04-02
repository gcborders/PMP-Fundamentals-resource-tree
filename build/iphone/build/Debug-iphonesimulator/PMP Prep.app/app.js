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
	//Set the background color of the main Window
	Titanium.UI.setBackgroundColor('#FFF');

	//Get Required Modules
	var DetailView = require("/views/DetailView");
	var MainWindowView = require("/views/MainWindowView");
	var ProcessViewWindow = require("/views/ProcessViewWindow");
	
	//Load First Two Windows
	var mainWindow= MainWindowView();
	var processWindow = ProcessViewWindow();
	

	//Open Main Window
	mainWindow.open();
	
	//Listen for Swipe
	mainWindow.addEventListener('swipe', function(e) {
   		if (e.direction == 'left') {
   			//Open List of Processes
      		processWindow.open();
      		
      		//Listen for Click Event
      		processWindow.addEventListener("click", function(e){
				var detailView = new DetailView({
					detailTitle: e.rowData.detailTitle,
					mainImage: e.rowData.mainImage,
					detail: e.rowData.detail
				});
			//Open the Window	
			detailView.open();
	
			});
   		}	
	});

})();