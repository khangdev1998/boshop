$(document).ready(function () {
    $(".btn-plus").click(function () {
      const input = $(this).prev(".quantity");
      input.val(parseInt(input.val()) + 1);
    });

    $(".btn-minus").click(function () {
      const input = $(this).next(".quantity");
      const value = parseInt(input.val());
      if (value > 1) {
        input.val(value - 1);
      }
    });
  });