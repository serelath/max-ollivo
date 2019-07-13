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
	
	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	
	
	
  
});