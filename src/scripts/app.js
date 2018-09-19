
//HAMBURGER MENU
// close hamburger menu when an a tag is clicked
$('.menu a').on('click touchstart', function() {
    document.getElementById('toggle').checked = false;
})


// STICKY HEADER
window.onscroll = function () { myFunction() };
const header = document.getElementById("nav");
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// ANIMATED SCROLL
$(function () {
    new WOW().init();
});
