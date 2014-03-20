var Processes = require("/views/Processes");

function ProcessView(){
	var ProcessView = Ti.UI.createTableView({
		top: 0,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: Processes
	});
	return ProcessView;
}

module.exports = ProcessView;