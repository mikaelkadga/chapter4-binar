let boxElements = document.querySelectorAll('.box')
const btn = document.getElementsByTagName('button')[0]
let turn = "x"
boxElements = Array.from(boxElements)


start();
btn.addEventListener('click', start)


const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

function findWinner() {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return(boxElements[index].innerText.trim() === turn)
        })
    })
}

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
            if(findWinner()){
                alert(`${turn} won`)
            }
            turn = turn === "x" ? "o" : "x"
        }, {once: true})
    })
}

    


