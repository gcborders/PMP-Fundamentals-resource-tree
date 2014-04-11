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
		top: "10dp",
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
		shortDescription: "The goal of this process is to produce the Scope Management Plan.",
		color: "#000",
		leftImage: "/images/planscopemanagementthumb.png",
		mainImage: "/images/planscopemanagement.png",
		detail: "/detail/PlanScopeManagement.html",
		hasChild: true,
		className: "tableRow"
	}),

	createRow({
		title: "Collect Requirements",
		shortDescription: "This is the process of defining and documenting the needs of the stakeholders.",
		color: "#000",
		leftImage: "/images/collectrequirementsthumb.png",
		mainImage: "/images/collectrequirements.png",
		detail: "/detail/CollectRequirements.html",
		hasChild: true,
		className: "tableRow"
	}),

	createRow({
		title: "Define Scope",
		shortDescription: "This process defines exactly what the project will and will not include.",
		color: "#000",
		leftImage: "/images/definescopethumb.png",
		mainImage: "/images/definescope.png",
		detail: "/detail/DefineScope.html",
		hasChild: true,
		className: "tableRow"
	}),
	
	createRow({
		title: "Create WBS",
		shortDescription: "The WBS defines each deliverable and further decomposes them into smaller work packages.",
		color: "#000",
		leftImage: "/images/createwbsthumb.png",
		mainImage: "/images/createwbs.png",
		detail: "/detail/WBS.html",
		hasChild: true,
		className: "tableRow"
	}),



];
module.exports = Processes;