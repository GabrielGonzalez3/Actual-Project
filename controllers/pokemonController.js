import { getAllPokemon } from "../services/pokemonService.js";

export function getPokemonPage(req, res) {
    const pokemon = getAllPokemon();

    res.render("pokemon", {
        pokemon
    });
}