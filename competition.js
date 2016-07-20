$(document).ready(function () {
	$("#theMain").hide()
});

$(document).ready(function () {
	
	$("#enterbutton").click(function () {
		$("#theIntro").fadeOut("slow");
		$("#theMain").show();
	});
});

