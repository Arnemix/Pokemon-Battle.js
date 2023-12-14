import { Pokemon } from "./objects/Pokemon.js";

let pokemonsChoice = document.querySelectorAll(".card");
let player;
let enemy;
const pokemons = ["Salameche", "Carapuce", "Bulbizarre"];
let preGameContainer = document.querySelector("#pre-game-container");

pokemonsChoice.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
        let pokemonName = pokemon.querySelector("p").textContent;
        player = new Pokemon(pokemonName);
        startGame();
    });
});

const hidePreGameContainer = () => {
    preGameContainer.style.display = "none";
    // console.log(preGameContainer.style);
};

const startGame = () => {
    enemy = new Pokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    hidePreGameContainer();
};
