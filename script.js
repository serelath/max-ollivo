$(document).ready(function() {
  
  // Find the initial scroll top when the page is loaded.
  var initScrollTop = $(window).scrollTop();
  
  
  // When the user scrolls...
  $(window).scroll(function() {
    
    // Find the new scroll top.
    var scrollTop = $(window).scrollTop();
    
    // Set the new background position.
    $('#landing video').css({'top' : (scrollTop/50 + 50)+'%'});
    $('#landing .scroll-down').css({'bottom' : 'calc(' + -(scrollTop/25) + '% + 25px)'});
	  
	$('#about .img').css({'background-position' : 'auto ' + (scrollTop/25 + 100) + '%'});
	
	if (scrollTop >= 100) {
		$(".navbar-container").css({'background-color' : 'rgba(0,0,0,0.95)'});
	} else {
		$(".navbar-container").css({'background-color' : 'rgba(0,0,0,0)'});
	}
	  
  });
	
	$(".portfolio-item").hover(function() {
		$(this).find("rect").addClass("rect");
	}, function() {
		$(this).find("rect").removeClass("rect");
	})
	
//	$(".portfolio-item a").hover(function() {
//		$(".portfolio-item a h3").removeClass("active");
//		$(this).find("h3").addClass("active");
//			$('.thumbnail').css({'background-image' : 'url("' + $(this).attr("data-image") + '")'});
//		
//	});
  
});