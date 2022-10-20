$(document).ready(function () {

  $("#start").click(function () {

    $("#status").text("Game started");
    $("div.boundary").removeClass("youlose");

    $("div.boundary").mouseover(function () {
      $("div.boundary").addClass("youlose");
      $("#status").text("You lose");
    });

    $("#maze").mouseleave(function () {
      $("div.boundary").addClass("youlose");
      $("#status").text("You lose");
    });

    $("#end").mouseenter(function () {
      $("#status").text("You win :]");
    });

  });
});
