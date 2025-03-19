let score = {
  wins : 0,
  losses : 0,
  ties: 0,
};

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

updateScore();

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    score.wins++;
    msg.style.backgroundColor = "rgba(15, 124, 93, 0.895)";
  } else {
    msg.innerHTML = `You lost! ${compChoice} beats your ${userChoice}`;
    score.losses++;
    msg.style.backgroundColor = "rgba(124, 30, 15, 0.9)";
  }
};

const drawGame = (userChoice) => {
  msg.innerHTML = `It's a tie! You both chose ${userChoice}`;
  score.ties++;
  msg.style.backgroundColor = "rgba(124, 124, 124, 0.9)"
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if(userChoice === compChoice){ 
    drawGame(userChoice);
    updateScore();
  } else {
    let userWin = true;

    if (userChoice === "rock"){ 
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper"){ 
      userWin = compChoice === "rock" ? true : false;
    } else { 
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  const determineMoves = document.querySelector(".moves");
  determineMoves.innerHTML = `
  You <img src = "./images/${userChoice}.png" class="move_icon">
  <img src = "./images/${compChoice}.png" class="move_icon">Computer
  `;

  updateScore();
};



function updateScore() {
  document.querySelector(".js_score").innerHTML  = `
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

choices.forEach((choice) => {
  console.log(choice);

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
  
});
