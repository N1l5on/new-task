$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#tarefa").val();
    const novaLinha = $("<li></li>");
    $("ul").append(`<li>${novaTarefa}</li>`);
    $(novaLinha).appendTo("ul");
    $("#tarefa").val("");
    $("ul").on("click", "li", function () {
      $(this).toggleClass("completed");
    });
  });
});
