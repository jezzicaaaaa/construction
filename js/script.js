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



// /*! Fades in page on load */
// $('.home-content').css('display', 'none');
// $('.home-content').fadeIn(500);

// });

});