class Pokemon{
    constructor(id, pokemonName, primaryType, secondaryType = null){
        this.id = id;
        this.pokemonName = pokemonName;
        this.primaryType = primaryType;
        this.secondaryType = secondaryType;
    }
}

const pokemon = [
    new Pokemon(1, "Pikachu", "Electric"),
    new Pokemon(2, "Charizard", "Fire", "Flying"),
    new Pokemon(3, "Blastoise", "Water"),
    new Pokemon(4, "Venusaur", "Grass", "Poison"),
    new Pokemon(5, "Gengar", "Ghost", "Poison"),
    new Pokemon(6, "Lucario", "Fighting", "Steel")
];

export function getAllPokemon(){
    return pokemon;
}