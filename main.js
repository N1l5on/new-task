$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#tarefa").val();
    const novaLinha = $("<li></li>");
    $(novaLinha).appendTo("ul");
  });
});
