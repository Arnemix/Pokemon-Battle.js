import Attack from "./Attack.js";
export class Pokemon {
    constructor(name) {
        this.name = name;
        switch (name) {
            case "Salameche":
                this.type = "feu";
                this.attacks = [new Attack("Flammèche", 10, 25), new Attack("Brasier", 20, 3), new Attack("Flamme", 15, 10), new Attack("Combustion", 35, 1)];
                this.hp = 100;
                this.sprite = "public/images/assets/pokemons/salameche.gif";
                this.reverseSprite = "public/images/assets/pokemons/salameche-reverse.gif";
                break;
            case "Carapuce":
                this.type = "eau";
                this.attacks = [new Attack("Pistolet à eau", 10, 25), new Attack("Bulles d'eau", 15, 10), new Attack("Hydrocanon", 15, 10), new Attack("Tornade", 35, 1)];
                this.hp = 100;
                this.sprite = "public/images/assets/pokemons/carapuce.gif";
                this.reverseSprite = "public/images/assets/pokemons/carapuce-reverse.gif";
                break;
            case "Bulbizarre":
                this.type = "plante";
                this.attacks = [new Attack("Fouet Lianes", 10, 26), new Attack("Enracinement", 20, 3), new Attack("Balles Graines"), new Attack("Sève Stellaire", 35, 1)];
                this.hp = 100;
                this.sprite = "public/images/assets/pokemons/bulbizarre.gif";
                this.reverseSprite = "public/images/assets/pokemons/bulbizarre-reverse.gif";
                break;
        }
    }
    attack(attack, enemy){
        
    }
}
