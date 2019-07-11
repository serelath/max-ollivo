$(document).ready(function() {
  
  // Find the initial scroll top when the page is loaded.
  var initScrollTop = $(window).scrollTop();
  
  
  // When the user scrolls...
  $(window).scroll(function() {
    
    // Find the new scroll top.
    var scrollTop = $(window).scrollTop();
    
    // Set the new background position.
    $('#landing video').css({'top' : (scrollTop/30 + 50)+'%'});
    $('#landing .scroll-down').css({'bottom' : -(scrollTop/15)+'%'});
  });
  
});