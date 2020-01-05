$(document).ready(function() {
  $("#date").text(moment().format("dddd MMMM Do YYYY"));
  console.log(moment().hours());

  $("button").on("click", function() {
    var inputvalue = $(this)
      .parent()
      .siblings(".inputdiv")
      .children()
      .val();

    var key = $(this)
      .parent()
      .siblings(".inputdiv")
      .children()
      .attr("id");

    localStorage.setItem(key, inputvalue);
  });

  $("#7").val(localStorage.getItem("7"));
  $("#8").val(localStorage.getItem("8"));
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));

  //if past it grey, present red and future green
  var currentTime = parseInt(moment().hours());
  var inputArray = $("input");
  for (var i = 0; i < inputArray.length; i++) {
    var timeSlot = parseInt($(inputArray[i]).attr("id"));
    if (timeSlot > currentTime) {
      $(inputArray[i]).css("background-color", "green");
    } else if (timeSlot < currentTime) {
      $(inputArray[i]).css("background-color", "grey");
    } else {
      $(inputArray[i]).css("backround-color", "red");
    }
  }
  console.log(moment().hours());
  //current time compare time slot we are looking at

  //input fields need to change color
});
