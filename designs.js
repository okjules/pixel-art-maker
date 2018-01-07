// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){

  $("#submit-button").on("click", function makeGrid(event) {
    document.getElementById("pixel_canvas").innerHTML = "";
    var inputHeight = $("#input-height").val();
    var inputWidth = $("#input-width").val();
    var jens = "<table id='table'>";


    for(var x=0; x < inputHeight; x++) {
      jens += "<tr class='tr'>";

      for(var y=0; y < inputWidth; y++) {
        jens += "<td class='td'></td>";
      }
      jens += "</tr>";

    }

    jens += "</table>";

    $("#pixel_canvas").append(jens);
    event.preventDefault();

  });

$("#pixel_canvas").on("click", ".td", function colorGrid () {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
});

});
