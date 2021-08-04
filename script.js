const computerplay = document.querySelector(".computerplay");
const yourplay = document.querySelector(".yourplay");
const you = document.querySelector("#you");
const pc = document.querySelector("#pc");

const score = document.querySelector("#score");
const round= document.querySelector("#round");
var tie = 0;

var victory=0;
var loss=0;
var numberplay=0;
function playerSelected(selection){
     
  var computer = computerSelected();  
  changeBack(selection);
  scoreGame(computer, selection);
  if(numberplay== 5){

      if(victory < loss){
            round.innerHTML = `Lost the Round! Victory: ${victory}, Loss: ${loss}, Tie: ${tie}`;
           
        }else if(victory > loss){
            round.innerHTML = `you Win the Round! Victory: ${victory}, Loss: ${loss}, Tie: ${tie}`;

        }else if(victory === loss){
            round.innerHTML = `Tie Round! Try again! Victory: ${victory}, Loss: ${loss}, Tie: ${tie}`;

        }     
            victory = 0;
            loss = 0;
            numberplay = 0;
            tie = 0;
  }
}
function scoreGame(computer,selection){
    numberplay++;
    if(computer === selection){
        tie++;
        score.innerHTML = `Tie`;
    }else if(selection === 'SCISSORS' && computer === 'PAPER'){
            victory++;
            score.innerHTML = `You Win`;            
            you.innerHTML = `you: ${victory}`;
    }else if(selection === 'ROCK' && computer === 'SCISSORS'){        
             victory++;
             score.innerHTML = `You Win`;
             you.innerHTML = `you: ${victory}`;
    }else if(selection === 'PAPER' && computer === 'ROCK'){
            victory++;
            score.innerHTML = `You Win`;        
            you.innerHTML = `you: ${victory}`;
    }else if(computer === 'SCISSORS' && selection === 'PAPER' ){
            loss++;
            score.innerHTML = `You lost`;        
            pc.innerHTML = `Computer: ${loss}`;
    }else if(computer === 'ROCK' && selection === 'SCISSORS' ){
            loss++;
            score.innerHTML = `You lost`;       
            pc.innerHTML = `Computer: ${loss}`;
    }else if(computer === 'PAPER' && selection === 'ROCK' ){
            loss++;
            score.innerHTML = `You lost`;        
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