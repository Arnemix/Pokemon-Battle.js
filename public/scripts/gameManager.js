import { Pokemon } from "./objects/Pokemon.js";
import { fightTheme, customFightTheme, mainTheme } from "./soundManager.js";

// Variables du jeu
let pokemonsChoice = document.querySelectorAll(".card");
let player;
let enemy;
const pokemons = ["Salameche", "Carapuce", "Bulbizarre"];
let preGameContainer = document.querySelector("#pre-game-container");
let gameContainer = document.querySelector("#game-container");
let playerArenaDiv = document.querySelector(".player-pokemon");
let enemyArenaDiv = document.querySelector(".enemy-pokemon");
let playerSprite = document.querySelector(".player-pokemon-img img");
let enemySprite = document.querySelector(".enemy-pokemon-img img");

// <------------------- Fonctions utils du jeu ------------------->
mainTheme.play();

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

const showArena = () => {
    gameContainer.style.display = "flex";
};

// <------------------- Lancement du jeu ------------------->

const startGame = () => {
    mainTheme.pause();
    fightTheme.play();
    enemy = new Pokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    hidePreGameContainer();
    showArena();
    playerSprite.src = player.reverseSprite;
    enemySprite.src = enemy.sprite;
};
