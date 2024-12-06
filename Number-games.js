function startGame() {
    const difficulty = document.getElementById('difficulty').value;
    localStorage.setItem('maxNumber', difficulty);
    window.location.href = 'game.html';
}