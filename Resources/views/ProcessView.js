var Processes = require("/views/Processes");

function ProcessView(){
	
	var isAndroid = (Ti.Platform.osname =='android');
	if(isAndroid) {	
		var ProcessView = Ti.UI.createTableView({
			top:"0dp",
			height: Ti.UI.FILL,
			backgroundColor: "transparent",
			data: Processes
		});
	}	
	else {
		var ProcessView = Ti.UI.createTableView({
			top:"18dp",
			height: Ti.UI.FILL,
			backgroundColor: "transparent",
			data: Processes	
		});
	}
	
	return ProcessView;
}

module.exports = ProcessView;