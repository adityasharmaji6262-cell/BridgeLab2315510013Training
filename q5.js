
/* Q5 - Team Members Directory
   - Click manager to highlight direct reports (uses attribute matching)
   - Hover on employee shows contact using .next() or .find()
   - Click department to change background of all members in dept using .children()
   - Select random employee -> highlight siblings
   - Collapse/expand team using parent() and find()
*/
$(function(){
  // Click manager -> highlight direct reports
  $('.manager').on('click', function(){
    const id = $(this).data('manager');
    $('.employee').removeClass('highlight');
    $('.employee').filter('[data-manager="'+id+'"]').addClass('highlight');
  });

  // Hover on employee -> show contact info using .find() or .next()
  $('.employee').on('mouseenter', function(){
    $(this).find('.contact').show();
  }).on('mouseleave', function(){
    $(this).find('.contact').hide();
  });

  // Click on department -> change background of all members using children()
  $('.dept').on('click', function(e){
    // avoid manager click double firing
    if($(e.target).is('.manager')) return;
    $(this).children().toggleClass('highlight');
  });

  // Select random employee -> highlight sibling employees
  $('#random').on('click', function(){
    const all = $('.employee');
    const idx = Math.floor(Math.random()*all.length);
    const chosen = all.eq(idx);
    chosen.css('outline','2px solid #f59e0b');
    // highlight siblings (other employees in same reports parent)
    chosen.siblings('.employee').addClass('highlight');
    // remove after 2s
    setTimeout(function(){
      chosen.css('outline','');
      chosen.siblings('.employee').removeClass('highlight');
    },2000);
  });

  // Collapse / expand team using parent() and find()
  let collapsed = false;
  $('#toggle-team').on('click', function(){
    if(!collapsed){
      // collapse all reports
      $('.reports').slideUp(200);
    } else {
      $('.reports').slideDown(200);
    }
    collapsed = !collapsed;
  });
});
