'use strict';


const displayMessage = message =>{
  document.querySelector('.message').textContent = message;
}

const generateRandomNumber = () =>{
   return Math.trunc(Math.random() * 20) + 1;
}


let secretNumber = generateRandomNumber();
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width= '30rem'
    let highscore = +document.querySelector('.highscore').textContent;
    highscore += score;
    document.querySelector('.highscore').textContent = highscore;
  }
  else if(guess !== secretNumber){
    if(score > 0)
    {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '📈 Too high!': '📈 Too low!');
    }
  }
  else{
      displayMessage('💥 You lost the game');
      document.querySelector('.score') = 0;
      document.querySelector('.highscore').textContent = 0;
  }
});


document.querySelector('.again').addEventListener('click',()=>{
  secretNumber = generateRandomNumber();
  if(score < 1)
  {
    document.querySelector('.highscore').textContent = 0;
    score = 20;
    
  }
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width= '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = null;
})





