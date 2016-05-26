$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name").val();

    $(".name1").text(name1Input);

    event.preventDefault();
  });
});
