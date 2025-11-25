
/* Q10 - Registration Validation
   - Validate name not empty
   - Email format and uniqueness (mocked with a list)
   - Password minimum 8 chars
   - Show success message if all valid
   - Highlight invalid fields using .css() / .addClass()
*/
$(function(){
  // Mock existing emails
  const existing = ['a@x.com','bob@example.com','user@test.com'];

  function showError($el, flag){
    if(flag) $el.addClass('invalid');
    else $el.removeClass('invalid');
  }

  $('#reg').on('submit', function(e){
    e.preventDefault();
    $('#msg').empty();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    let ok = true;

    // 1. Name not empty
    if(!name){
      showError($('#name'), true);
      ok = false;
    } else showError($('#name'), false);

    // 2. Email format and uniqueness
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      showError($('#email'), true);
      ok = false;
    } else if(existing.indexOf(email.toLowerCase()) !== -1){
      // unique check (mocked)
      showError($('#email'), true);
      $('#msg').append('<div>Email already in use</div>');
      ok = false;
    } else showError($('#email'), false);

    // 3. Password length >=8
    if(password.length < 8){
      showError($('#password'), true);
      ok = false;
    } else showError($('#password'), false);

    if(ok){
      $('#msg').html('<div class="success">Registration successful!</div>');
      // Add email to mocked list to simulate registration
      existing.push(email.toLowerCase());
    } else {
      $('#msg').append('<div style="color:#ef4444">Please fix highlighted fields.</div>');
    }
  });

  $('#reset').on('click', function(){
    $('#reg')[0].reset();
    $('.invalid').removeClass('invalid');
    $('#msg').empty();
  });
});
