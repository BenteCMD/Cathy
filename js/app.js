// verschijnen on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))




// logo animatie

var logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    logo.style.left = 240 + value * 1.5 + 'px'
    logo.style.top = 30 + value * 1 + 'px'

    setTimeout(() => {
        logo.style.transform = "rotate" + "(" + value * .5 + ".1deg" + ")"
},  150)
    
})

// header nav verschijnt

var scrollTrigg = 590
var nav = document.querySelector("header")

function headerVerschijnt() {
    if (window.scrollY >= scrollTrigg || window.pageYOffset >= scrollTrigg) { 
        nav.style.display="block"
    } else {
        nav.style.display= "none"
    }
}

window.addEventListener("scroll", headerVerschijnt)



//hamburger menu

var hamburger = document.querySelector("#menu")
var headernav = document.querySelector("header nav ul")

function toonMenu() {
    headernav.classList.toggle("toonmenu")
}

hamburger.addEventListener("click", toonMenu)