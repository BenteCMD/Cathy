// project openen

var uitelkaarThumb = document.querySelector("#uitelkaar-thumb") 
var uitelkaarProj = document.querySelector("#uitelkaar-project")
var kruis = document.querySelector(".kruis")

function openProject() {
    uitelkaarProj.style.display = "block"

    setTimeout(() => {
        uitelkaarProj.style.transform = "translateX(0px)"
        uitelkaarProj.style.transition = "1s"
       
      }, 200)
    
      setTimeout(() => {
        kruis.style.display = "block"
    }, 1000)
}

uitelkaarThumb.addEventListener("click", openProject)


function sluitProject() {
    uitelkaarProj.style.transform = "translateX(-1500px)"
    uitelkaarProj.style.transition = "1s"
    kruis.style.display = "none"

    setTimeout(() => {
        uitelkaarProj.style.display = "none"
},  1300)
}

kruis.addEventListener("click", sluitProject)


// hoofden uit elkaar

var hoofdVrouw = document.querySelector("#schreeuw img:first-of-type")
var hoofdMan = document.querySelector("#schreeuw img:nth-of-type(2)")
const mediaQuery = window.matchMedia('(max-width: 500px)')



window.addEventListener('scroll', () => {
    let value = window.scrollY

    hoofdVrouw.style.right = value * 1 + 'px'
    hoofdMan.style.left = value * .85 + 'px'

    if (mediaQuery.matches) {
        hoofdVrouw.style.right = "13em"
        hoofdMan.style.left = "9em"
    }
})


// proces h2 sliding by

var proces = document.querySelector("#h2-uitelkaar")

window.addEventListener('scroll', () => {
    let valuee = window.scrollY - 950

    proces.style.right = valuee * -1 + 'px'
})



// scrolleffect

var project = document.querySelector("#schreeuw")
var toppage = document.querySelector("#main")

var arrow = document.querySelector("#pijl")
var backtotop = document.querySelector(".back-to-top")

function naarProject() {
    project.scrollIntoView({behavior: 'smooth'})
}

arrow.addEventListener("click", naarProject)


function backToTop() {
    toppage.scrollIntoView({behavior: 'smooth'})
}

backtotop.addEventListener("click", backToTop)



