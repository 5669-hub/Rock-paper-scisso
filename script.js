window.addEventListener('DOMContentLoaded', () => {

  const startBtn = document.getElementById('startBtn');
  const introSound = document.getElementById('introSound');
  const intro = document.querySelector('.intro');
  const main = document.querySelector('.main');

  const saveNameBtn = document.getElementById('saveNameBtn');
  const usernameInput = document.getElementById('username');
  const playerLabel = document.getElementById('player-label');
  const restartbtn = document.querySelector('.restart');
  let username = "";

  startBtn.addEventListener('click', () => {
    introSound.play().catch(err => console.log("Error playing sound:", err));

    intro.style.opacity = "0";
    intro.style.transition = "1s";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000);
  });


  // 📝 Save user name
  saveNameBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();

    if (username === "") {
      playerLabel.textContent = "You:";
    } else {
      playerLabel.textContent = `${username} :`;
    }
  });



  // 🎮 GAME LOGIC
  const choices = document.querySelectorAll('.choice');
  const playerChoiceDisplay = document.getElementById('player-choice');
  const computerChoiceDisplay = document.getElementById('computer-choice');
  const winnerDisplay = document.getElementById('winner');
  const playerScoreDisplay = document.getElementById('player-score');
  const computerScoreDisplay = document.getElementById('computer-score');

  let playerScore = 0;
  let computerScore = 0;

  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      const playerChoice = choice.id;
      const computerChoice = getComputerChoice();
      const winner = getWinner(playerChoice, computerChoice);
  
      playerChoiceDisplay.textContent = playerChoice;
      computerChoiceDisplay.textContent = computerChoice;
  
      if (winner === "player") {
        winnerDisplay.textContent = "You win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;   
      }
      else if (winner === "computer") {
        winnerDisplay.textContent = "Computer wins!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;  
      }
      else {
        winnerDisplay.textContent = "It's a draw!";
      }
    });
  });
  
  restartbtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
  
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
  
    playerChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    winnerDisplay.textContent = "Game restarted!";

    if (username === "") {
      playerLabel.textContent = "You :";
    } else {
      playerLabel.textContent = `${username} :`;
    }
  });
  
  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
  }

  function getWinner(player, computer) {
    if (player === computer) return "draw";

    else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) return "player";

    else return "computer";
  }

});
