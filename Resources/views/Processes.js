function createRow(params){
	var row = Ti.UI.createTableViewRow({
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		mainImage: params.mainImage,
		hasChild: params.hasChild,
		detailTitle: params.title,
		detail: params.detail,
		className: params.className,
	});
	
	var leftImage = Ti.UI.createImageView({
		image: params.leftImage,
		width: "50dp",
		left: 0
	});

	var headerLabel = Ti.UI.createLabel({
		text: params.title,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "3dp",
		left: "54dp",
		height: Ti.UI.SIZE,
		color: params.color
	});
	
	var shortDescription = Ti.UI.createLabel({
		text: params.shortDescription,
		font:{
			fontSize: "10dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Lt" : "Aller Light"
		},
		color: "#000",
		top: "24dp",
		height:"auto",
		left: "54dp"
	});
	
	row.add(leftImage);
	row.add(headerLabel);
	row.add(shortDescription);

	return row;
}

var Processes = [
	createRow({
		title: "Plan Scope Management",
		shortDescription: "This is the section where we got Plan Scope Management.",
		color: "#000",
		leftImage: "/images/definescopethumb.png",
		mainImage: "/images/planscopemanagement.png",
		detail: "/detail/PlanScopeManagement.html",
		hasChild: true,
		className: "tableRow"
	}),

	createRow({
		title: "Collect Requirements",
		shortDescription: "This is the section where we got the Requirements.",
		color: "#000",
		leftImage: "/images/definescopethumb.png",
		mainImage: "/images/definescope.png",
		detail: "/detail/CollectRequirements.html",
		hasChild: true,
		className: "tableRow"
	}),

	createRow({
		title: "Define Scope",
		shortDescription: "This is the section where we got the Scope.",
		color: "#000",
		leftImage: "/images/definescopethumb.png",
		mainImage: "/images/definescope.png",
		detail: "/detail/DefineScope.html",
		hasChild: true,
		className: "tableRow"
	}),
	
	createRow({
		title: "WBS",
		shortDescription: "This is the section where we got the WBS.",
		color: "#000",
		leftImage: "/images/definescopethumb.png",
		mainImage: "/images/definescope.png",
		detail: "/detail/WBS.html",
		hasChild: true,
		className: "tableRow"
	}),



];
module.exports = Processes;