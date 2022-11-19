import React from "react";
import PokedexCard from "./PokedexCard";

function pokedexTemplate(myPokedex, mostraPokemon, deletePokemon) {
    if(myPokedex.length > 0) {
        return myPokedex.map((pokemon, index) => <PokedexCard myPokemon={pokemon} mostra={mostraPokemon} key={index} indexPokemon={index} deletePokemon={deletePokemon} />)
    }
}

//Pokedex
function Pokedex({myPokedex, mostraPokemon, deletePokemon}) {
    return (
        <div className="myPokedex">
            <h2 className="pokedex-title">Il tuo Pokedex</h2>
            {myPokedex.length === 0 && <p>Al momento non è presente nessun pokemon</p>}
            <div className="box-pokemon">
                {pokedexTemplate(myPokedex, mostraPokemon, deletePokemon)}
            </div>
        </div>
    )
}

export default Pokedex;