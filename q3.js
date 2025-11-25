
/* Q3 - Interactive FAQ
   - Click question (dt) to toggle answer (dd)
   - Hover changes question color
   - Double-click question collapses all answers
   - Focus on input inside answer highlights parent question
   - Blur resets background
*/
$(function(){
  // Toggle single answer on question click
  $('.faq dt').on('click', function(){
    $(this).next('dd').slideToggle(150);
  });

  // Hover to change question color
  $('.faq dt').on('mouseenter', function(){
    $(this).css('color','#1d4ed8');
  }).on('mouseleave', function(){
    $(this).css('color','');
  });

  // Double-click question to collapse all answers
  $('.faq dt').on('dblclick', function(){
    $('.faq dd').slideUp(200);
  });

  // Focus on answer input -> highlight parent question (access parent dt)
  $('.answer-input').on('focus', function(){
    $(this).closest('dd').prev('dt').css({'background':'#fff7ed','color':'#92400e'});
  }).on('blur', function(){
    // Reset background on blur
    $(this).closest('dd').prev('dt').css({'background':'','color':''});
  });
});
