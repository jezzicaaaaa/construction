$(function(){
  
  var  mn = $(".main-nav");
      mns = "main-nav-scrolled";
      hdr = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });


$('.slick-slider').slick({
  dots:true,
  autoplay: false,
});


$( ".cross" ).hide();
$( ".hamburger" ).click( function(e) {
  $( ".menu" ).addClass( "open-nav" );
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    e.preventDefault();
});

$( ".cross" ).click(function(e) {
  $( ".menu" ).addClass( "close-nav" );
      $( ".cross" ).hide();
      $(".menu").hide();
      $( ".hamburger" ).show();
      e.preventDefault();
});

});
