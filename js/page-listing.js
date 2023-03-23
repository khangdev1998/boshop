$(document).ready(function () {
  $("#dropdown-button-1").click(function () {
    $("#dropdown-content-1").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#dropdown-button-2").click(function () {
    $("#dropdown-content-2").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#dropdown-button-3").click(function () {
    $("#dropdown-content-3").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#dropdown-button-4").click(function () {
    $("#dropdown-content-4").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#dropdown-button-5").click(function () {
    $("#dropdown-content-5").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#dropdown-button-6").click(function () {
    $("#dropdown-content-6").toggle();
    $(this).children("img").toggleClass("active");
  });
  $("#pricez-1").val("0");
  $("#pricez-2").val("100.000");
});
