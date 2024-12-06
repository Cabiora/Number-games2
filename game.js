let maxNumber = parseInt(localStorage.getItem('maxNumber'));
if (!maxNumber) {
    maxNumber = 100; 
    localStorage.setItem('maxNumber', maxNumber);
}
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0;
let maxAttempts = 5;  

switch (maxNumber) {
    case 100:
        maxAttempts = 5;  
        break;
    case 300:
        maxAttempts = 3;  
        break;
    case 500:
        maxAttempts = 2;  
        break;
    case 10000:
        maxAttempts = 1;  
        break;
}

document.getElementById('gameDescription').textContent = `J'ai choisi un nombre entre 1 et ${maxNumber}. À toi de deviner lequel ! Tu as ${maxAttempts} tentatives.`;
function updateAttemptsCounter(){
    document.getElementById('attemptsCounter').textContent = `Essais restants : ${maxAttempts - attempts}`;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;
    let message = '';

    console.log(`Tentative ${attempts}: ${userGuess} (Max tentatives: ${maxAttempts})`);

    if (userGuess === randomNumber) {
        message = `Bravo ! Vous avez deviné le nombre en ${attempts} essais.`;
    } else if (userGuess > randomNumber) {
        message = 'Trop haut ! Essayez encore.';
    } else if (userGuess < randomNumber) {
        message = 'Trop bas ! Essayez encore.';
    }

    if (userGuess % 2 === 0) {
        message += ' Le nombre est pair.';
    } else {
        message += ' Le nombre est impair.';
    }

    if (attempts >= maxAttempts) {
        localStorage.setItem('randomNumber', randomNumber);
        window.location.href = 'Gameover.html';
    }

    document.getElementById('message').textContent = message;
    updateAttemptsCounter();
}

updateAttemptsCounter();
