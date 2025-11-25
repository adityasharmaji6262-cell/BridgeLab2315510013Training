
/* Q7 - Search Courses
   - Keyup filters courses in real-time using .keyup()
   - Highlight matched text using .css()
   - Toggle visibility of non-matching courses
   - Show count of matched courses dynamically
   - Clear search resets list
*/
$(function(){
  function updateCount(n){ $('#count').text('Matches: ' + n); }

  $('#search').on('keyup', function(){
    const q = $(this).val().trim().toLowerCase();
    let matches = 0;
    $('#courses .course').each(function(){
      const txt = $(this).text();
      if(q && txt.toLowerCase().indexOf(q) !== -1){
        // highlight matched course by changing background and bolding matched substring
        const regex = new RegExp('('+q+')','ig');
        const highlighted = txt.replace(regex, '<span class="match">$1</span>');
        $(this).html(highlighted);
        $(this).show();
        $(this).css({'background':'#fff7ed'});
        matches++;
      } else if(!q){
        // reset
        $(this).html(txt);
        $(this).show();
        $(this).css({'background':''});
      } else {
        $(this).hide();
      }
    });
    updateCount(matches);
  });

  $('#clear').on('click', function(){
    $('#search').val('');
    $('#courses .course').each(function(){
      const txt = $(this).text();
      $(this).html(txt);
      $(this).show();
      $(this).css({'background':''});
    });
    updateCount(0);
  });
});
