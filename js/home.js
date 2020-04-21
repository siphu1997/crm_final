$(document).ready(function () {
  $(".collapse").collapse("hide");
  $("[aria-expanded='true']").siblings().collapse("show");
});
