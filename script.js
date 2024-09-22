const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Smooth scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            scroll.scrollTo(targetElement);
        }
    });
});

// Reset scroll position to top on page load
window.addEventListener('load', () => {
    scroll.scrollTo(0); // Scroll to the top
});

// Optional: Scroll event listener (for custom behavior)
scroll.on('scroll', ({ scroll }) => {
    // You can track the scroll position if needed
});




function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var cross = document.querySelector("#cross")
    var bar = document.querySelector("#bar")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            bar.style.display = "none"
            full.style.top = 0
            navimg.style.display = "none"
            flag = 1
            cross.style.display = "block"


        } else {
            full.style.top = "-100%"
            navimg.style.display = "block"
            flag = 0
            cross.style.display = "none"
            bar.style.display = "block"
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}







// accordion


const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;

        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';

        }

    })
})

















// accordion

// current-time

let time = document.getElementById("current-time");


setInterval(() => {

    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();



},1000)











// current-time




swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()






