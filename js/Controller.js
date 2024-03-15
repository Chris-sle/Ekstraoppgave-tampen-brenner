function startGame() {
    startScreen = false;
    mainView();
    setTimeout(() => {
        winCondition()
    }, 0)
}

function newRound() {
    placeRandom()
    mainView()
    setTimeout(() => {
        winCondition()
    }, 0)
}

function winCondition() {
const gameField = document.getElementById('gameField');
const secretPoint = document.getElementById('secretPoint');
const torch = document.getElementById('torch');

gameField.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    if (typeof secretX !== 'undefined' && typeof secretY !== 'undefined') {
        const distance = Math.sqrt(Math.pow(secretX - x, 2) + Math.pow(secretY - y, 2));

        const transparency = 1 - Math.min(1, distance / 300);
        
        torch.style.backgroundColor = `rgba(255, 68, 0, ${transparency})`;

        if (distance < 10) {
            secretPoint.style.visibility = 'visible';
            alert('Gratulerer! Du fant det hemmelige punktet.');
            gameField.removeEventListener('mousemove', e.currentTarget.onmousemove);
            }
        }
    })
};

function placeRandom() {
    const gameField = document.getElementById('gameField')
    const secretPoint = document.getElementById('secretPoint');
    secretX = Math.floor(Math.random() * gameField.offsetWidth);
    secretY = Math.floor(Math.random() * gameField.offsetHeight);

    secretPoint.style.left = `${secretX}px`;
    secretPoint.style.top = `${secretY}px`;
    secretPoint.style.visibility = 'hidden';
};