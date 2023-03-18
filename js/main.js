$(document).ready(function () {
  $("#cart").hide();

  $("#showCart").click(function (e) {
    e.preventDefault();
    $("#cart").toggle(250);
  });

  $("#close-cart").click(function () {
    $("#cart").hide();
  });

  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const headerTop = $("#header").offset().top;
  $(window).scroll(
    debounceFn(function () {
      const windowScroll = $(window).scrollTop();
      if (windowScroll > headerTop) {
        $("#header").addClass("fixed");
      } else {
        $("#header").removeClass("fixed");
      }
    }, 50)
  );
});
