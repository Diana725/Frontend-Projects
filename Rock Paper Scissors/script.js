const totalScore = {computerScore: 0, playerScore: 0}
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {
    let score;
  if (playerChoice == computerChoice){
    score=0;
  }else if (playerChoice=='Rock'&& computerChoice== 'Scissors'){
score=1;
  }else if (playerChoice=='Paper'&& computerChoice== 'Rock'){
    score=1;
  }else if (playerChoice=='Scissors'&& computerChoice== 'Paper'){
  score=1;
     }else {
        score = -1;
     }
  return score
}
function getComputerScore(playerChoice, computerChoice){
    let score2;
    if (playerChoice == computerChoice){
        score2=0;
      }else if (computerChoice=='Rock'&& playerChoice== 'Scissors'){
    score2=1;
      }else if (computerChoice=='Paper'&& playerChoice== 'Rock'){
        score2=1;
      }else if (computerChoice=='Scissors'&& playerChoice== 'Paper'){
      score2=1;
         }else {
            score2 = -1;
         }
      return score2;
      
}
function showResult(score, score2, playerChoice, computerChoice) {
    const resultDiv= document.getElementById('result');
    const handsDiv= document.getElementById('hands');
    const playerScoreDiv= document.getElementById('player-score');
    if (score == -1){
        resultDiv.innerText = "You Lose!"
    }else if (score ==0){
        resultDiv.innerText= "It's a tie!"
    }else {
        resultDiv.innerText= "You Won!" 
    }
    handsDiv.innerText= `👩${playerChoice} vs 🤖${computerChoice}`
    playerScoreDiv.innerText=`Your Score: ${totalScore['playerScore']} Computer Score: ${totalScore['computerScore']}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice ();
  const score=getResult(playerChoice, computerChoice);
  const score2=getComputerScore(playerChoice, computerChoice);
  totalScore['playerScore'] +=score;
  totalScore['computerScore'] +=score2;
    showResult(score, score2, playerChoice, computerChoice)
}

function playGame() {

const rpsButtons = document.querySelectorAll('.rpsButton');
rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
rpsButtons.forEach(rpsButton => {
    rpsButton.onclick=()=>onClickRPS(rpsButton.value)
})
const endGameButton = document.getElementById('endGameButton');
endGameButton.onclick = () => endGame(totalScore);
}
function endGame(totalScore) {
  totalScore['playerScore'] =0;
  totalScore['computerScore'] =0;
  
  const resultDiv= document.getElementById('result');
  const handsDiv= document.getElementById('hands');
  const playerScoreDiv= document.getElementById('player-score');
  resultDiv.innerText='';
  handsDiv.innerText='';
  playerScoreDiv.innerText='';
}

playGame()