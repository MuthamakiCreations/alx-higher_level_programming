// 5-script.js
$(document).ready(function() {
  $('DIV#add_item').click(function() {
    $('UL.my_list').append('<li>Item</li>');
  });
});
