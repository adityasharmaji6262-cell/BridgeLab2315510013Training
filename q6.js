
/* Q6 - Event Subscription Panel
   - Subscribe enables notifications (visual change)
   - Unsubscribe disables notifications
   - Dynamically add new topics and attach event handlers using .on()
   - Remove subscription -> detach specific handler using .off()
   - Show success message dynamically inserted into the DOM
*/
$(function(){
  // Use event delegation for subscribe/unsubscribe handlers
  $('#panel').on('click', '.subscribe', function(){
    const topic = $(this).closest('.topic').data('topic');
    $(this).closest('.topic').css('background','#ecfccb');
    $('#messages').prepend('<div>Subscribed to '+topic+'</div>');
  });

  $('#panel').on('click', '.unsubscribe', function(){
    const topic = $(this).closest('.topic').data('topic');
    $(this).closest('.topic').css('background','');
    $('#messages').prepend('<div>Unsubscribed from '+topic+'</div>');
  });

  // Add new topic dynamically and attach events
  $('#add-topic').on('click', function(){
    const name = $('#new-topic').val().trim();
    if(!name) return alert('Enter a topic name');
    const el = $('<div class="topic" data-topic="'+name+'">'+name+' <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button> <button class="remove">Remove</button></div>');
    $('#panel').append(el);
    $('#new-topic').val('');
    $('#messages').prepend('<div>Added topic '+name+'</div>');
  });

  // Remove specific subscription topic and detach handlers for it
  $('#panel').on('click', '.remove', function(){
    const name = $(this).closest('.topic').data('topic');
    // detach all events on this element before removing (good practice)
    $(this).closest('.topic').off();
    $(this).closest('.topic').remove();
    $('#messages').prepend('<div>Removed topic '+name+'</div>');
  });
});
