function getComp() {
    const comp = Math.random();

    if( comp < 0.34 ) return  'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'paper';
    return 'scissors';
}


function getResult(comp, player) {
    if( player == comp ) return 'DRAW';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if( player == 'paper' ) return ( comp == 'rock' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if( player == 'scissors' ) return ( comp == 'paper' ) ? 'PLAYER 1 WIN' : 'COM WIN';
}

function setBackground(comp, player) {
    const imgBackgroundPlayer = document.querySelector(`.player1 .${player}`);
    imgBackgroundPlayer.classList.add('game-icon');

    const imgBackgroundComp = document.querySelector(`.comp .${comp}`);
    imgBackgroundComp.classList.add('game-icon');
}

function setGame(option) {
    const comp = getComp();
    const player = option.classList[0];
    const result = getResult(comp, player);
    console.log('comp: ' + comp);
    console.log('player: ' + player);
    console.log('result:'  + result);

    setBackground(comp, player);

    const viewResult = document.querySelector('.result');
    const versus = document.querySelector('.versus');
    if(result) {
        versus.style.display = 'none';
        viewResult.style.display = 'flex';
        viewResult.innerHTML = result;
        endGame();
    }
}

function playGame() {
    const options = document.querySelectorAll('.player1 .image');
    options.forEach(option => {
        option.addEventListener('click', setGame.bind(this, option))
    }, {once: true})
}

function endGame() {
    const options = document.querySelectorAll('.player1 .image');
    options.forEach(option => {
        option.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
    })
}

function restart() {
    const viewResult = document.querySelector('.result');
    const versus = document.querySelector('.versus');

    versus.style.display = 'block';
    viewResult.style.display = 'none';
    viewResult.innerHTML = '';

    const comp = document.querySelectorAll('.comp .image')
    comp.forEach(c => {
        c.classList.remove('game-icon');
        c.removeAttribute('style');
    })
    const player = document.querySelectorAll('.player1 .image')
    player.forEach(p => {
        p.classList.remove('game-icon');
        p.removeAttribute('style');
    })
}

playGame();

const restartButton = document.querySelector('.restart')
restartButton.addEventListener('click', restart)