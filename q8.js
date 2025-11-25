
/* Q8 - Dynamic Blog Posts
   - Add post (append)
   - Prepend featured post at top
   - Remove last post
   - Add tags using before/after
   - Highlight posts with keywords dynamically
*/
$(function(){
  $('#add').on('click', function(){
    const title = $('#new-title').val().trim();
    if(!title) return alert('Enter a title');
    $('#posts').append('<div class="post">'+title+'</div>');
    $('#new-title').val('');
  });

  $('#prepend').on('click', function(){
    $('#posts').prepend('<div class="post"><strong>FEATURED:</strong> Latest Release Notes</div>');
  });

  $('#remove-last').on('click', function(){
    $('#posts .post').last().remove();
  });

  // Add a tag to each post using before/after
  $('#posts').on('click', '.post', function(){
    $(this).after('<div class="post-tag">Tag: blog</div>');
  });

  // Highlight posts containing 'jQuery' or 'Performance'
  function highlightKeywords(){
    $('#posts .post').each(function(){
      const t = $(this).text().toLowerCase();
      if(t.indexOf('jquery')!==-1 || t.indexOf('performance')!==-1){
        $(this).css({'background':'#ecfeff','border-color':'#06b6d4'});
      }
    });
  }
  highlightKeywords();
});
