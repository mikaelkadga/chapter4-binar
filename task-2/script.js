let boxElements = document.querySelectorAll('.box')
const btn = document.getElementsByTagName('button')[0]
let turn = "x"
boxElements = Array.from(boxElements)
const wrapper = document.getElementsByClassName('wrapper')[0]
// wrapper.innerText = "halo"

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
            return(boxElements[index].innerText === turn)
        })
    })
}

function checkDraw() {
    return boxElements.every(box => {
        // console.log(box)
        return box.innerText === "x" || box.innerText === "o"
    })
}

function endGame() {
    boxElements.forEach(box => {
        box.removeEventListener("click", handleClick, { once: true });
    });
}

function handleClick(e) {
    const boxTarget = e.target;
    boxTarget.innerText = turn
    if(findWinner()){
        wrapper.append(`${turn} win`)
        endGame();
    } else if(checkDraw()) {
        wrapper.append(`draw`)
    }
    turn = turn === "x" ? "o" : "x"
}

function start() {
    turn = "x"
    wrapper.innerText = ""
    boxElements.forEach((box) => {
        box.innerText = "";
        box.addEventListener("click", handleClick, {once: true})
    })
}


start();
btn.addEventListener('click', start)

    


