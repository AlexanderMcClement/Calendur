$(document).ready(function(){
console.log("script is link");
console.log(moment().format());
console.log(moment().format('YYYY MM DD')
);
$('#date').text(moment().format('YYYY MM DD'))
console.log(moment().hours())

$('button').on("click" , function(){
    console.log($(this).parent().siblings('.inputdiv').children().val())

})

});

