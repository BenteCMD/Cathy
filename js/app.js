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



//oog muis laten volgen

var pupil = document.getElementById("pupil")

document.onmousemove = function(eye){
    var x = eye.clientX * 100 / window.innerWidth + "%" 
    var y = eye.clientY * 100 / window.innerHeight + "%" 
  
    pupil.style.left = x
    pupil.style.top = y
    pupil.style.transform = "translate(-"+x+",-"+y+")"
}
