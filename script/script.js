$(document).ready(function() {
  var active = $(".active");
  var inactive = $('.inactive');
  $(inactive).click(function() {
    $(".signup").toggle();
    $(".login").toggle();
  });

});
