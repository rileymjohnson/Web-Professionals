/*
code for this contact form and it's validation
*/

$("#contactForm").on("submit", function(event) { //submit event for contact form
	event.preventDefault() //prevents form from auto submitting
	$(".customAlert").hide() //originally hides all errors before validation
	var name = $("#name").val() //contact form name
	var email = $("#email").val() //contact form email
	var comment = $("#comment").val() //contact form comment
	if (name) {
		if (email) {
			if (comment) {
				$("#contactForm")[0].submit() //submits the form if the it is validated
			} else {
				$("#commentAlert").show() //shows comment error if user does not enter comment
			}
		} else {
			$("#emailAlert").show() //shows email error if user does not enter email
		}
	} else {
		$("#nameAlert").show() //shows name error if user does not enter name
	}
})