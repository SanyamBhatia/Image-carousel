// Activate the carousel on document ready
$(document).ready(function(){
  $('.carousel').carousel();
});

// Optional: Pause the carousel on hover
$('.carousel').hover(function() {
  $(this).carousel('pause');
}, function() {
  $(this).carousel('cycle');
});