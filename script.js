$(document).ready(function() {
  $("#date").text(moment().format("YYYY MM DD"));
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

  $("#7").val(localStorage.getItem("7"))
  $("#8").val(localStorage.getItem("8"))
  $("#9").val(localStorage.getItem("9"))
  $("#10").val(localStorage.getItem("10"))
  $("#11").val(localStorage.getItem("11"))
  $("#12").val(localStorage.getItem("12"))
  $("#13").val(localStorage.getItem("13"))
  $("#14").val(localStorage.getItem("14"))
  $("#15").val(localStorage.getItem("15"))
  $("#16").val(localStorage.getItem("16"))
  $("#17").val(localStorage.getItem("17"))

  

});
