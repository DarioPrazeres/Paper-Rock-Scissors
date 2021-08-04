const computerplay = document.querySelector(".computerplay");
const yourplay = document.querySelector(".yourplay");
const you = document.querySelector("#you");
const pc = document.querySelector("#pc");
const score = document.querySelector("#score");
const round= document.querySelector("#round");

var victory=0;
var loss=0;
var numberplay=0;
function playerSelected(selection){
    
  var computer = computerSelected();  
  changeBack(selection);
  scoreGame(computer, selection);
  if(numberplay === 5){
      if(victory < loss){
            round.innerHTML = `Lost the Round`;
            victory = 0;
            loss = 0;
        }else if(victory > loss){
            round.innerHTML = `you Win the Round`;
            victory = 0;
            loss = 0;
        }else{
            round.innerHTML = `Tie Round! Try again`;
        }    
  }
}
function scoreGame(computer,selection){
    numberplay++;
    if(computer === selection){
        score.innerHTML = `Tie`;
    }else if(selection === 'SCISSORS' && computer === 'PAPER'){
            score.innerHTML = `You Win`;
            victory++;
            you.innerHTML = `you: ${victory}`;
    }else if(selection === 'ROCK' && computer === 'SCISSORS'){
        score.innerHTML = `You Win`;
        victory++;
        you.innerHTML = `you: ${victory}`;
    }else if(selection === 'PAPER' && computer === 'ROCK'){
        score.innerHTML = `You Win`;
        victory++;
        you.innerHTML = `you: ${victory}`;
    }else if(computer === 'SCISSORS' && selection === 'PAPER' ){
        score.innerHTML = `You lost`;
        loss++;
        pc.innerHTML = `Computer: ${loss}`;
    }else if(computer === 'ROCK' && selection === 'SCISSORS' ){
        score.innerHTML = `You lost`;
        loss++;
        pc.innerHTML = `Computer: ${loss}`;
    }else if(computer === 'PAPER' && selection === 'ROCK' ){
        score.innerHTML = `You lost`;
        loss++;
        pc.innerHTML = `Computer: ${loss}`;
    }

}

function computerSelected(){
    var n = Math.floor(Math.random() * 3);
    switch(n){
        case 0:
          computerplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/rock.png')";
          return 'ROCK';  
          break;
        case 1:
            computerplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/paper.png')";
            return 'PAPER';  
            break;
        case 2:
            computerplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/scissors.png')";
            return 'SCISSORS';  
            break;      
    }
}
function changeBack(selection){
    switch(selection){
        case 'ROCK':
           yourplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/rock.png')";
           break;
        case 'PAPER':
            yourplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/paper.png')";
            break; 
        case 'SCISSORS':
            yourplay.style.backgroundImage = "url('../Paper-Rock-Scissors/img/scissors.png')";
            break;      
    }
}