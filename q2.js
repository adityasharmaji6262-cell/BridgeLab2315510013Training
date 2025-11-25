
/* Q2 - Product Highlight
   - Click product to highlight
   - Hover to show extra details
   - Favorite icon toggles 'selected' class
   - Attribute selector styles discounts (handled in CSS here but demonstrated)
   - Alert if product is out of stock (data attribute)
*/
$(function(){
  // Click on product -> highlight by toggling .highlight
  $('.product').on('click', function(e){
    // If target is favorite icon, do not toggle highlight here
    if($(e.target).closest('.fav').length) return;
    $('.product').removeClass('highlight'); // single highlight at a time
    $(this).addClass('highlight');
  });

  // Hover to show additional details
  $('.product').on('mouseenter', function(){
    $(this).find('.details').slideDown(150);
  }).on('mouseleave', function(){
    $(this).find('.details').slideUp(120);
  });

  // Favorite icon toggle using class .selected
  $('.fav').on('click', function(e){
    e.stopPropagation(); // prevent product click highlight when clicking heart
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '♥' : '♡');
  });

  // Style products with discounts using attribute selector - update UI on load
  $('.product[data-discount]').each(function(){
    const d = parseInt($(this).data('discount') || 0, 10);
    if(d>0){
      // add a visual hint
      $(this).find('.pname').append(' <span class="discount">(' + d + '%)</span>');
    }
  });

  // Show alert if clicked product is out of stock (using data attribute)
  $('.product').on('dblclick', function(){
    if($(this).data('out-of-stock') === true || $(this).data('out-of-stock') === 'true'){
      alert('Sorry: This product is out of stock.');
    }
  });
});
