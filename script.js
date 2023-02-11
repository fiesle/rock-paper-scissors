const RPS = ["rockBtn","paperBtn","scissorsBtn"];

const picPlayer = document.querySelector('.pic-player');
const picComputer = document.querySelector('.pic-computer');


function pickRPS(playerPick, computerSelection){
  if(playerPick.className==="rockBtn"){
    picPlayer.src="images/rock.png";
    
  }
  else if(playerPick.className==="paperBtn"){
    picPlayer.src="images/paper.png";
  }
  else{
    picPlayer.src="images/scissors.png";
    
  }   

  if(computerSelection==="rockBtn"){
    picComputer.src="images/rock.png";
  }
  else if(computerSelection==="paperBtn"){
    picComputer.src="images/paper.png";
  }
  else{
    picComputer.src="images/scissors.png";
  }
}

function computerPick(){
  return (RPS[[Math.floor(Math.random()*RPS.length)]]);
}

function takeWinner(){
    if(i>j){
      result.textContent=`You won! ${i}-${j}`;
    }
    else if(j>i)
      result.textContent=`You lost! ${i}-${j}`;
    else
      result.textContent="It's a tie! 2-2";
}


const playertextScore =document.querySelector('.playerScore');
const computertextScore =document.querySelector('.computerScore');
const text = document.querySelector('.text');
const result= document.querySelector('.result');

let i =0;
let j =0;

function startGame(playerPick, computerSelection){

    pickRPS(playerPick,computerSelection);

    if(playerPick.className ===computerSelection ){
          playertextScore.textContent=++i;
          computertextScore.textContent=++j;
          text.textContent="It's a tie!"
          maxRound++;
      }
      else if(playerPick.className==="rockBtn"){
          if(computerSelection==="paperBtn"){
              computertextScore.textContent=++j;
              text.textContent="You lost! Paper beats Rock";
          }
          else{
              playertextScore.textContent=++i;
              text.textContent="You won! Rock beats Scissors";
          }
      }

      else if(playerPick.className==="paperBtn"){
          if(computerSelection==="rockBtn"){
              playertextScore.textContent=++i;
              text.textContent="You won! Paper beats Rock";
          }
          else{
              computertextScore.textContent=++j;
              text.textContent="You lost! Scissors beats Paper";
          }
      }
      else if(playerPick.className==="scissorsBtn"){
          if(computerSelection==="rockBtn"){
              computertextScore.textContent=++j;
              text.textContent="You lost! Rock beats Scissors";
          }
          else{
              playertextScore.textContent=++i;
              text.textContent= "You won! Scissors beats Paper";
          }
      }
    maxRound++;
}

let maxRound = 1;

function playRound(playerPick){
  if(maxRound<5){
    let computerSelection = computerPick();
    startGame(playerPick, computerSelection);
    
  }
    if(maxRound>4){
      takeWinner();
    }
}

function restartGame(){
  i=0;
  j=0;
  maxRound=1;
  
  playertextScore.textContent=0;
  computertextScore.textContent=0;
  text.textContent ="Please pick one! Rock, Paper, or Scissors? Best of 5!"
  result.textContent="";
}




