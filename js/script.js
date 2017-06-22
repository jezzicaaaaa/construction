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

//hide cross on page load
  $( ".cross" ).hide();

  $( ".hamburger" ).click( function(e) {
    $( ".menu" ).toggleClass( "open-nav" );
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    console.log($(".menu"));
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).toggleClass( "open-nav" );
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    console.log($(".menu"));
  });

});
