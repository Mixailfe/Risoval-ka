const CEEL_AMOUNT = 64
let container = document.querySelector('.container')
let current_color = 'red'

for (let i=0; i < CEEL_AMOUNT; i += 1) {
    let newElement = document.createElement('div')
    newElement.classList.add('cell')
    newElement.addEventListener('click', function(event){
     event.target.style.backgroundColor = current_color
    })
    container.appendChild(newElement)
}

circleBtn.addEventListener('click', function() {
    current_color = "blue"
})

curcleBtn.addEventListener('click', function() {
    current_color = "red"
})

corcleBtn.addEventListener('click', function() {
    current_color = "white"
})

carcleBtn.addEventListener('click', function() {
    current_color = "yellow"
})

cyrcleBtn.addEventListener('click', function() {
    current_color = "black"
})
