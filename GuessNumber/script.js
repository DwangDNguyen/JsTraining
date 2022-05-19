const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const again = document.querySelector('.again');

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
var grade = 20;
let maxScore = 0;

check.onclick = function () {
  //No input number
  if (!Number(guess.value)) {
    message.textContent = 'No Number ⛔';
    console.log(guess.value);
  }

  //Player win
  else if (Number(guess.value) === Secretnumber) {
    message.textContent = '🎉 Correct Number';
    console.log(guess.value);
    number.textContent = Secretnumber;
    body.style.backgroundColor = '#60b347';
    if (grade > maxScore) {
      maxScore = grade;
      highscore.textContent = maxScore;
    }
  }
  //player wrong
  else if (Number(guess.value) !== Secretnumber) {
    if (grade > 1) {
      Number(guess.value) > Secretnumber
        ? (message.textContent = 'Too High')
        : (message.textContent = 'Too Low');
      grade = grade - 1;
      score.textContent = grade;
      console.log(guess.value);
    } else {
      message.textContent = 'GAME OVER';
      score.textContent = 0;
    }
  }
};
console.log(guess.value);

again.onclick = function () {
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  grade = 20;
  body.style.backgroundColor = '#222';
  score.textContent = grade;
  message.textContent = 'Start guessing...';
  guess.value = '';
  number.textContent = '?';
};
