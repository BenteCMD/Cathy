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



// // logo animatie



let scrollTrigger = 0
var logo = document.querySelector('.logo');

function jumpToCorner() {

  if (window.scrollY <= scrollTrigger) {
    logo.classList.add("remove-shrinkjump")
    logo.classList.remove("shrinkjump")
   
} else if(window.scrollY >= scrollTrigger) {
  logo.classList.remove("remove-shrinkjump")
  logo.classList.add("shrinkjump")
}

}

window.addEventListener("scroll", jumpToCorner)