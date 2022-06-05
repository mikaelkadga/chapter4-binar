let boxElements = document.querySelectorAll('.box')
const btn = document.getElementsByTagName('button')[0]
let turn = "x"
boxElements = Array.from(boxElements)


start();
btn.addEventListener('click', start)


function start() {
    turn = "x"
    boxElements.forEach((box) => {
        box.innerText = ""
    })
    handleClick()
}

function handleClick() {
    boxElements.forEach((box) => {
        box.addEventListener("click", function() {
            box.innerText = turn
            turn = turn === "x" ? "o" : "x"
        }, {once: true})
    })
}

    


