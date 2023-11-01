// adds the class red to the header element on click
$(document).ready(function () {
  $('DIV#red_header').click(function () {
    $('header').addClass('red');
  });
});
