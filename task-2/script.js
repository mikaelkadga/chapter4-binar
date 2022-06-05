const boxElements = document.querySelectorAll('.box')
const btn = document.getElementsByTagName('button')[0]
let turn = "x"

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

function findWinner() {
    const winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (const combination of winningCombination) {
        const [a, b, c] = combination;

        if(box[a] && (box[a]===box[b] && box[a]=== box[c])) {
            alert(`${box[a]} is a winner`)
        }
    }
    
}


