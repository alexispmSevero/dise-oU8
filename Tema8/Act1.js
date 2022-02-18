$(document).ready(function(){
    $(".caja1").click(function() {
        alert("caja1");
  });

  $(".caja2").dblclick(function() {
    alert("caja2");
});

$(".caja3").mouseenter(function() {
    $(".caja3").fadeOut(5000);
});

$(".caja4").mouseleave(function() {
    $(".caja4").css("background-color","brown");
});

$(".caja5").hover(function() {
    $(".caja5").css("background-color","yellow");
},
function() {
    $(".caja5").css("background-color","orange");
});

$(".caja6").mousedown(function() {
    $(".caja6").html("<b>pulsado</b>")
});

$(".caja7").mouseup(function() {
    $("caja7").html("<b>soltado</b>")
});
});