/***********************************************
* Loading gif
***********************************************/
$(window).load(function() {
  setTimeout(function () {
    $(".loading").fadeOut("slow");
  }, 100);
});

/***********************************************
* Hamburger menu behaviour
***********************************************/
$(window).scroll(function() {
  if($(document).scrollTop() > 34){
    $('#hamburger').removeClass('dark');
  }
  else {
    $('#hamburger').addClass('dark');
  }
});

// Animate icon on click
$(document).ready(function(){

  $('.navbar-abel').toggleClass('open');

  $('#hamburger').click(function(){
    $(this).toggleClass('open');
    $('.navbar-abel').toggleClass('open');
  });
});

// Float navbar links left on smaller screen size

(function($) {
    var $window = $(window),
        $navlist = $('#nav-list');

    $window.resize(function resize(){
        if ($window.width() < 915) {
            return $navlist.removeClass('navbar-right').addClass('navbar-left');
        }

    }).trigger('resize');
})(jQuery);
