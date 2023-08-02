let namePlayer = document.getElementById('name_player')
const playerRes = document.getElementById('player_res')
const compRes = document.getElementById('comp_res')
const modal2 = document.getElementById('modal_2')
const modalDiv = document.getElementById('modal_div')
const playerName = prompt('What is your name ?')

if (playerName) {
    namePlayer.innerHTML = `${playerName}`
} else {
    namePlayer.innerHTML = 'Player'
}

const choices = ['rock', 'scissors', 'paper']
let playerResult = 0 ;
let computerResult = 0;


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function play(playerChoice) {
    const computer = computerChoice();
    document.getElementById('computer-choice').innerHTML = `   
    <i id="scissors" class="fa-solid fa-5x fa-hand-${computer}"></i>`

    if (playerChoice === computer) {
        document.getElementById('winner').innerHTML = 'Draw !';

    } else if ((playerChoice === 'rock' && computer === 'scissors') ||
        (playerChoice === 'scissors' && computer === 'paper') ||
        (playerChoice === 'paper' && computer === 'rock')) {

            
       document.getElementById('winner').innerHTML = `${playerName ? playerName : "You" } win !`


       playerResult += 1
       playerRes.innerHTML = playerResult;
       modalPlayer(playerResult)
    }else{
        document.getElementById('winner').innerHTML = 'Computer win !'
        computerResult += 1
        compRes.innerHTML = computerResult;
        modalComputer(computerResult)
    }

}

document.getElementById('rock').addEventListener('click' , function () {
    play('rock')
})


document.getElementById('scissors').addEventListener('click' , function () {
    play('scissors')
})


document.getElementById('paper').addEventListener('click' , function () {
    play('paper')
})


function modalPlayer (computerResult) {
  if(computerResult == 3 ){
    modalDiv.style.display = 'flex'
    modal2.innerHTML = ` <h1 class="modal_text">You win</h1>
    <form>
       <button>New game</button>
    </form>`
  }
}

function modalComputer (playerResult) {
    if(playerResult == 3 ){
      modalDiv.style.display = 'flex'
      modal2.innerHTML = ` <h1 class="modal_text">Computer win</h1>
      <form>
         <button>New game</button>
      </form>`
    }
  }
  