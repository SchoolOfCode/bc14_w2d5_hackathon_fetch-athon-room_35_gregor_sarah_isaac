// create a pokemon battling game
// have an h1 linking to an online pokedex (https://www.pokemon.com/us/pokedex/)
// fetch the first pokemon (at random) using the pokeapi
//      this will be the computer's pokemon
// throw up a prompt asking the user to enter a pokemon name
//     convert their input to lowercase
//     if their input is not a valid pokemon name, throw up an alert and ask them to try again
//     fetch the user's pokemon
// display both pokemon's names and base_stat hp and sprite on screen
// make use of the base_stat hp to determine the winner
// throw up an alert with the winner's name
// have a button that allows the user to play again
// have a button that allows the user to quit
// have a button that allows the user to see the pokemon's stats

//// potential next steps ////
// player starts by picking a team of 6
// player picks a pokemon from their team to battle
// computer chooses one of their 6 (that have been chosen at random)
// if player pokemon faints, they can choose another pokemon from their team
// if computer pokemon faints, they can choose, at random, another pokemon from their team

/* bonus task: create a for loop that pulls the name of each pokemon and stores them in a dropdown list that can 
be used to select userPokemon
*/
let player = 1;
let computer = 0;
let computerNominatedPokemon = {};
let playerNominatedPokemon = {};
let playerImage = document.querySelector("#player-image");
let computerImage = document.querySelector("#computer-image");

let userPokemon1 = prompt("Enter a gen 1 pokemon name");
// choose a random number between 1 and 151 for the computer's pokemon
let computerPokemon1 = Math.floor(Math.random() * 151 + 1);
// create an async function to fetch the pokemon
async function fetchPokemon(pokemon, user) {
  let apiRequest1 = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  );
  let apiData1 = await apiRequest1.json();

  if (user === 1) {
    playerNominatedPokemon.name = apiData1.name;
    playerNominatedPokemon.baseHP = apiData1.stats[0].base_stat;
    playerNominatedPokemon.sprite = apiData1.sprites.front_default;
    console.log(playerNominatedPokemon.baseHP);
    //playerImage.src = playerNominatedPokemon.sprite;
  } else {
    computerNominatedPokemon.name = apiData1.name;
    computerNominatedPokemon.baseHP = apiData1.stats[0].base_stat;
    computerNominatedPokemon.sprite = apiData1.sprites.front_default;
    console.log(computerNominatedPokemon.baseHP);
    //computerImage.src = computerNominatedPokemon.sprite;
  }
}
// call the function
fetchPokemon(computerPokemon1, computer);
fetchPokemon(userPokemon1, player);
console.log(computerNominatedPokemon);
console.log(playerNominatedPokemon);

// create a function to battle the pokemon

function battle() {
  if (playerNominatedPokemon.baseHP && computerNominatedPokemon.baseHP) {
    // checking if truthy values for both HPs
    if (playerNominatedPokemon.baseHP > computerNominatedPokemon.baseHP) {
      alert(`${playerNominatedPokemon.name} wins!`);
    } else if (
      playerNominatedPokemon.baseHP < computerNominatedPokemon.baseHP
    ) {
      alert(`${computerNominatedPokemon.name} wins!`);
    } else {
      alert("It's a tie!");
    }
  } else {
    setTimeout(battle, 10); // if either HP is falsy, wait 10ms and try battle function again
  }
}

battle();
