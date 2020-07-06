$(document).ready(function(){
    $(".btnJS").hover(function(){
        $(this).css({"background-color":"darkkhaki"})}
        ,function(){
            $(this).css({"background-color":"#fff"})}
        );

    $(".btnJS").click(function(){
        $(this).css({"background-color":"rgb(131, 124, 64)"})}
        );

    $(".okJS").click(function(){
        $(this).css({"background-color":"rgb(90, 76, 218)"})}
        );

    $("#btnReqFood").click(function(){
        $(this).css({"background-color":"rgb(90, 76, 218)" , "color":"cadetblue"})}
        );
            
    $("#clickReq").click(function(){
        $(this).css({ "color":"cadetblue"})}
        );
   
        /*window.onscroll = function() {
            $(".navfixedScroll").css({"background-color":"rgba(245, 245, 245, 0.904)"})
        };*/

        window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navfixedScroll");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
        
});



