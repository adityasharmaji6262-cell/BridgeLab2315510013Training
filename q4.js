
/* Q4 - Special Offer Banner
   - Hide / Show specific banners
   - Slide Up/Down and Fade In/Out
   - Auto-rotate banners every 5 seconds with fadeIn/fadeOut
*/
$(function(){
  $('#hide').on('click', function(){
    // hide the first banner only
    $('#banners .banner').first().hide();
  });
  $('#show').on('click', function(){
    $('#banners .banner').show();
  });
  $('#slide').on('click', function(){
    // toggle sliding for all banners
    $('#banners .banner').slideToggle(300);
  });
  $('#fade').on('click', function(){
    // fade toggle for all banners
    $('#banners .banner').fadeToggle(300);
  });

  // Auto-rotate banners: fade out current, fade in next
  let idx = 0;
  const items = $('#banners .banner');
  function rotate(){
    items.eq(idx).fadeOut(600, function(){
      idx = (idx + 1) % items.length;
      items.eq(idx).fadeIn(600);
    });
  }
  // Start by hiding all except first
  items.hide().eq(0).show();
  setInterval(rotate, 5000); // every 5 seconds
});
