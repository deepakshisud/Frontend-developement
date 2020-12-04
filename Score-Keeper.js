const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');

const p1Display = document.querySelector('#p1score');
const p2Display = document.querySelector('#p2score');

let p1Score = 0;

p1Button.addEventListener('click', function() {
    p1Score+=1;
    p1Display.textContent = p1Score ;
})