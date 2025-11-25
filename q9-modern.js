
/* q9-modern.js - uses the modern jQuery (3.x) loaded after legacy version.
   - This script uses the global jQuery and $ provided by v3.x.
   - It manages modal-like notifications and tooltips.
*/
$(function(){
  // Manage notifications (simple popup)
  $('#notifications').on('click', function(){
    const n = $('<div class="modal">New notification at '+new Date().toLocaleTimeString()+'</div>');
    $('body').append(n);
    n.css({position:'fixed',right:20,top:20,background:'#111',color:'#fff',padding:10,borderRadius:6});
    setTimeout(()=>n.fadeOut(400,function(){n.remove();}),2000);
  });

  // Highlight active widget using modern jQuery
  $('.item').on('click', function(){
    $('.item').removeClass('active');
    $(this).addClass('active');
  });

  // Attach tooltips on hover
  $('.item').on('mouseenter', function(){
    const tt = $('<div class="tooltip">Tooltip</div>');
    $('body').append(tt);
    tt.css({position:'absolute',left:$(this).offset().left+$(this).width()+8,top:$(this).offset().top,background:'#f8fafc',padding:6,border:'1px solid #ddd'});
    $(this).data('tooltip', tt);
  }).on('mouseleave', function(){
    const tt = $(this).data('tooltip');
    if(tt) tt.remove();
  });
});
