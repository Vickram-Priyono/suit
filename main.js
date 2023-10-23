/*function computerChoice (string) {
  let number = Math.random()
  let hasil;

  if (number < 0.4) {
    hasil = `gunting`;
  } else if (number < 0.7) {
    hasil = `kertas`;
  } else {
    hasil = `batu`;
  }

  return string = hasil;
}*/

function getRandomChoice () {
  let randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return `batu`

    case 1:
      return `kertas`

    case 2:
      return `gunting`
  }
}

let playerSelection;
const computerSelection = getRandomChoice();


function playRound(playerSelection, computerSelection) {
  playerSelection = prompt();

  if (playerSelection === `gunting` && computerSelection === `kertas`) {
    return `musuh memilih kertas. anda menang`;
  } else if (playerSelection === `gunting` && computerSelection === `batu`) {
    return `musuh memilih batu. anda kalah`;
  } else if (playerSelection === `gunting` && computerSelection === `gunting`){
    return `musuh memilih gunting. anda seri`;
  } else if (playerSelection === `batu` && computerSelection === `kertas`) {
    return `musuh memilih kertas. anda kalah`;
  } else if (playerSelection === `batu` && computerSelection === `batu`) {
    return `musuh memilih batu. anda seri`;
  } else if (playerSelection === `batu` && computerSelection === `gunting`) {
    return `musuh memilih gunting. anda menang`
  } else if (playerSelection === `kertas` && computerSelection === `kertas`) {
    return `musuh memilih kertas. anda seri`
  } else if (playerSelection === `kertas` && computerSelection === `batu`) {
    return `musuh memilih batu. anda menang`
  } else if (playerSelection === `kertas` && computerSelection === `gunting`) {
    return `musuh memilih gunting. anda kalah`
  } else {
    return `anda tidak memilih apapun. game dibatalkan`
  }
}

console.log(playRound(playerSelection, computerSelection))
