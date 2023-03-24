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




let userPokemon1 = prompt("Enter a pokemon name");
// choose a random number between 1 and 1008 for the computer's pokemon
let computerPokemon1 = Math.floor((Math.random() * 1008) + 1);
// create an async function to fetch the computer's pokemon
async function fetchComputerPokemon() {
    let apiRequest1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${computerPokemon1}/`);
    let apiData1 = await apiRequest1.json();
    console.log(apiData1);
}

fetchComputerPokemon();

