$(document).ready(function(){ // когда DOM будет готов
	
	// $('li').each(function(){
	// 	// console.log( $(this) .text() );
	// $(this).html('йцу<br>кен');
	// });
	 $("#owl").owlCarousel({
	 	items:4
	 	
	 });
});
var newYear = new Date(); 
newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
$('#defaultCountdown').countdown({until: newYear}); 
 
$('#removeCountdown').click(function() { 
    var destroy = $(this).text() === 'Remove'; 
    $(this).text(destroy ? 'Re-attach' : 'Remove'); 
    $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear}); 
});
$.countdown.setDefaults({description: 'Until liftoff'});
$(selector).countdown({since: new Date(2014, 12-1, 25)});