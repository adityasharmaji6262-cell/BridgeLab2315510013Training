
/* Q1 - Welcome Page Greeting
   - On load: display greeting based on time of day.
   - "Change Greeting": replace text with a motivational quote.
   - Toggle visibility of welcome message.
   - Clicking the greeting shows an alert.
*/
$(function(){
  // Determine time of day and set greeting text
  function setGreetingByTime(){
    const h = new Date().getHours();
    let text = 'Good Morning';
    if(h>=12 && h<17) text = 'Good Afternoon';
    else if(h>=17) text = 'Good Evening';
    $('#greeting').text(text + ' 👋');
  }

  setGreetingByTime();

  // Change greeting to motivational quote on button click
  $('#change-greet').on('click', function(){
    $('#greeting').text('Keep going — your hard work will pay off!');
  });

  // Toggle visibility of the welcome message
  $('#toggle-welcome').on('click', function(){
    $('#welcome-msg').toggle(); // simple toggle
  });

  // Show an alert when the greeting is clicked
  $('#greeting').on('click', function(){
    alert('Greeting clicked: ' + $(this).text());
  });
});
