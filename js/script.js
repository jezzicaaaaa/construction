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
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
  $( ".menu" ).addClass( "open-nav", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});

$( ".cross" ).click(function() {
  $( ".menu" ).removeClass( "open-nav", function(h) {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
      });
  });



});
