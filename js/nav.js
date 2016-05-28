/*
code for the sliding navbar
*/

$('#navbutton').click(function() { //hamburger nav button click event
	$('#nav').addClass('open'); //opens the sliding menu
	$('#navshadow').addClass('open'); //opens the nav shadow
});

$('#navshadow').click(function() { //nav shadow click closes the sliding menu
	$('#nav').removeClass('open'); //closes the sliding menu
	$('#navshadow').removeClass('open'); //closes the nav shadow
});