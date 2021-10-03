// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// toggle texto
$(".toggletext1").click(function() {
    $(".ctxt1").toggle();
   });

$(".toggletext2").click(function() {
    $(".ctxt2").toggle();
   });

$(".toggletext3").click(function() {
    $(".ctxt3").toggle();
   });
//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})