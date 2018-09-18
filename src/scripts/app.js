const hello = 'World';
console.log(hello);

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

// animated transitions on scroll 
$(function () {
    new WOW().init();
});

// When screen hits 940px, hide the h3 in projectContent and unhide it in projectImage

const projectView = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth < 940) {
        document.querySelector('.projectContent h3').classList.add('hide');
        document.querySelector('.projectImage h3').classList.remove('hide');
    }
}

projectView();