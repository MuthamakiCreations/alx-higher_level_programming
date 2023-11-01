// toggoles class of the header when user clicks on the tag
$(document).ready(function () {
  $('DIV#toggle_header').click(function () {
    $('header').toggleClass('red green');// toggles between red and green
  });
});
