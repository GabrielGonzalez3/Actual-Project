class Pokemon{
    constructor(id, pokemonName, primaryType, secondaryType = null, image){
        this.id = id;
        this.pokemonName = pokemonName;
        this.primaryType = primaryType;
        this.secondaryType = secondaryType;
        this.image = image;
    }
}

const pokemon = [
    new Pokemon(25, "Pikachu", "Electric", null, "/images/pikachu.png"),
    new Pokemon(6, "Charizard", "Fire", "Flying", "/images/charizard.png"),
    new Pokemon(9, "Blastoise", "Water", null, "/images/blastoise.png"),
    new Pokemon(3, "Venusaur", "Grass", "Poison", "/images/venusaur-f.png"),
    new Pokemon(94, "Gengar", "Ghost", "Poison", "/images/gengar.png"),
    new Pokemon(448, "Lucario", "Fighting", "Steel", "/images/lucario.png"),
    new Pokemon(149, "Dragonnite", "Dragon", "Flying", "/images/dragonite.png"),
    new Pokemon(254, "Sceptile", "Grass", null, "/images/sceptile.png"),
    new Pokemon(257, "Blaziken", "Fire", "Fighting", "/images/blaziken-f.png"),
    new Pokemon(260, "Swampert", "Water", "Ground", "/images/swampert.png")
];

export function getAllPokemon(){
    return pokemon;
}