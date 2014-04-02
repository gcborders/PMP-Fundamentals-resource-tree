var Processes = require("/views/Processes");

function ProcessView(){
	var ProcessView = Ti.UI.createTableView({
		top: "30dp",
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: Processes
	});
	return ProcessView;
}

module.exports = ProcessView;