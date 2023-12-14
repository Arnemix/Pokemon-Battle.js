import { Pokemon } from "./objects/Pokemon.js";

let pokemonsChoice = document.querySelectorAll(".card");
let player;
let enemy;

pokemonsChoice.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
        let pokemonName = pokemon.querySelector("p").textContent;
        player = new Pokemon(pokemonName);
        console.log(player);
    });
});
