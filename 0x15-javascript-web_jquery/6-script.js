// appends <li>Items</li> to a list when the user clicks
$(document).ready(function () {
  $('DIV#update_header').click(function () {
    $('DIV#update_header').text('New Header!!!');
  });
});
