/***********************************************
* Loading gif
***********************************************/
$(window).load(function() {
  setTimeout(function () {
    $(".loading").fadeOut("slow");
  }, 100);
});

/***********************************************
* Slideshow Gallery
***********************************************/
jQuery('#intro-slides').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  captions: false, // Position: overlay, below, custom, false

  // pager
  pager: false,

  // controls
  controls: false,
  autoHover: false,

  // transitions
  transition: 'kenburns', // fade, horizontal, kenburns, false
  kenZoom: 0,
  speed: 6500 // time the transition takes (ms)
});

/***********************************************
* Google maps
***********************************************/
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(39.7642543,-104.9955373), // Denver, CO

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.

        //original *******************
        // styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}],
        //END original *****************
styles:
[{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}],
        // Disable scrolling
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('maps');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: ''
    });
}

/***********************************************
* LightGallery - Lightbox with slideshow, captions and comments
***********************************************/
$(document).ready(function() {
    // $("#lightgallery").lightGallery();

    // Interior features
    $('#dynamic').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/wild/int1.png',
            'thumb': 'img/wild/int1.png',
            'subHtml': '<h2>Specifications</h2>'
        }, {
            'src': 'img/wild/int2.jpg',
            'thumb': 'img/wild/int2.jpg',
            // 'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
        }, {
            'src': 'img/wild/int3.jpg',
            'thumb': 'img/wild/int3.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/int4.jpg',
            'thumb': 'img/wild/int4.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/int5.jpg',
            'thumb': 'img/wild/int5.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }]
    })
    //
    });

    // Exterior features
    $('#dynamic2').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/wild/ext1.png',
            'thumb': 'img/wild/ext1.png',
            'subHtml': '<h2>Specifications</h2>'
        }, {
            'src': 'img/wild/ext2.jpg',
            'thumb': 'img/wild/ext2.jpg',
            // 'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
        }, {
            'src': 'img/wild/ext3.jpg',
            'thumb': 'img/wild/ext3.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/ext4.jpg',
            'thumb': 'img/wild/ext4.jpg',
        }, {
            'src': 'img/wild/ext5.jpg',
            'thumb': 'img/wild/ext5.jpg',
        }, {
            'src': 'img/wild/ext6.jpg',
            'thumb': 'img/wild/ext6.jpg',
        }, {
            'src': 'img/wild/ext7.jpg',
            'thumb': 'img/wild/ext7.jpg',
        }]
    })
    //
    });

    // Kitchen features
    $('#dynamic3').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/wild/kit1.png',
            'thumb': 'img/wild/kit1.png',
            'subHtml': '<h2>Specifications</h2>'
        }, {
            'src': 'img/wild/kit2.jpg',
            'thumb': 'img/wild/kit2.jpg',
            // 'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
        }, {
            'src': 'img/wild/kit3.jpg',
            'thumb': 'img/wild/kit3.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/kit4.jpg',
            'thumb': 'img/wild/kit4.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/kit5.jpg',
            'thumb': 'img/wild/kit5.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/kit6.jpg',
            'thumb': 'img/wild/kit6.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }]
    })
    //
    });

    // Build features
    $('#dynamic4').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/wild/build1.png',
            'thumb': 'img/wild/build1.png',
            'subHtml': '<h2>Specifications</h2>'
        }, {
            'src': 'img/wild/build2.png',
            'thumb': 'img/wild/build2.png',
            // 'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
        }, {
            'src': 'img/wild/build3.jpg',
            'thumb': 'img/wild/build3.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/build4.jpg',
            'thumb': 'img/wild/build4.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/build5.jpg',
            'thumb': 'img/wild/build5.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/build6.jpg',
            'thumb': 'img/wild/build6.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/build7.jpg',
            'thumb': 'img/wild/build7.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }, {
            'src': 'img/wild/build8.jpg',
            'thumb': 'img/wild/build8.jpg',
            // 'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }]
    })
    //
    });

});

/***********************************************
* Intense - Image zooming
***********************************************/
window.onload = function() {
  var elements = document.querySelectorAll( '.zoom, .features-item' );
  Intense( elements );
}

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



// Set hamburger icon color depending on background (light or dark)
// document.addEventListener('DOMContentLoaded', function () {
//   BackgroundCheck.init({
//     targets: '.bg-check',
//     images: '.bg'
//   });
// });


/***********************************************
* Smooth scrolling
***********************************************/
$('a').click(function(e){

  // If internal link
  if (/#/.test(this.href)) {
    e.preventDefault();

    var target = $( $.attr(this, 'href') );
    $('body,html').animate({'scrollTop': target.offset().top}, 1000, function(){ animating = false; });
  }

});

/***********************************************
* Bootstrap default behavior
***********************************************/
// Bootstrap Custom JS
// $(document).ready(function() {
//
//   // Tooltip opt-in
//   // $('[data-toggle="tooltip"]').tooltip()
//
//   // About Us Show full Bio
//   $('#myModal-btn').click(function () {
//     $('#myModal').modal();
//   });
//
//
// });
