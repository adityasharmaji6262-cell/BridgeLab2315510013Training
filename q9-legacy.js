
/* q9-legacy.js - uses jQuery 1.x features and saves it to window.jQuery1 via noConflict
   - This file runs immediately after jQuery 1.x is loaded.
   - It calls noConflict(true) to free global $ and jQuery for the newer version,
     while keeping a reference to older jQuery under window.jQuery1.
*/
(function(){
  // store legacy jQuery instance on window.jQuery1
  window.jQuery1 = jQuery.noConflict(true);

  // Use jQuery1 for carousel rotation (legacy plugin simulation)
  (function($){
    // Simulate a simple carousel rotation using setInterval
    let idx = 0;
    const items = ['Slide 1 - Sale','Slide 2 - New','Slide 3 - Trending'];
    function rotate(){
      idx = (idx + 1) % items.length;
      $('#carousel').text(items[idx] + ' (powered by jQuery 1.x)');
    }
    // initial text
    $('#carousel').text(items[0] + ' (powered by jQuery 1.x)');
    setInterval(rotate, 3000);
  })(window.jQuery1);
})();
