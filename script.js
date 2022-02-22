function get_ev_v() {
	document.getElementById("ev").value = document.getElementById("ev_v").value;
}

function get_ev() {
	document.getElementById("ev_v").value = document.getElementById("ev").value;
}

function ellenoriz() {
	var nev1 = document.getElementById("nev1").value;
	var nev2 = document.getElementById("nev2").value;
	var r1 = document.getElementById("r1").checked;
	var r2 = document.getElementById("r2").checked;
	var r3 = document.getElementById("r3").checked;
	var r4 = document.getElementById("r4").checked;
	var dropdown = document.getElementById("dropdown").value;
	var nev3 = document.getElementById("nev3").value;
	var ev = document.getElementById("ev").value;

	if (nev1 == "Romolus" && nev2 == "Remus")
	{
		document.getElementById("1").className = "col-sm-12 pb-5 bg-success";
	}
	else {
		document.getElementById("1").className = "col-sm-12 pb-5 bg-danger";
	}
	switch(true) {
		case r1:
			document.getElementById("2").className = "col-sm-12 pb-5 bg-danger";
			break;
		case r2:
			document.getElementById("2").className = "col-sm-12 pb-5 bg-danger";
			break;
		case r3:
			document.getElementById("2").className = "col-sm-12 pb-5 bg-success";
			break;
		case r4:
			document.getElementById("2").className = "col-sm-12 pb-5 bg-danger";
			break;
	}
	if (dropdown == "patriciusok")
	{
		document.getElementById("3").className = "col-sm-12 pb-5 bg-success";
	}
	else {
		document.getElementById("3").className = "col-sm-12 pb-5 bg-danger";
	}

	if (nev3 == "Servius Tullius"){
		document.getElementById("4").className = "col-sm-12 pb-5 bg-success";
	}
	else {
		document.getElementById("4").className = "col-sm-12 pb-5 bg-danger";
	}

	if (ev == 476) {
		document.getElementById("5").className = "col-sm-12 pb-5 bg-success";
	}
	else {
		document.getElementById("5").className = "col-sm-12 pb-5 bg-danger";
	}
}