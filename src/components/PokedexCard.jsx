import React from "react";

function PokedexCard({ myPokemon, mostra, indexPokemon, deletePokemon }) {
  const { name, sprites } = myPokemon;
  return (
    <div className="card">
      <h4 className="card-name">{name}</h4>
      <img
        className="card-img"
        src={sprites.front_default}
        alt="card-pokedex-img"
      />
      <div className="card-buttons">
        {/* Rivedere le statistiche del pokemon cliccando su Mostra */}
        <button className="button-images mostra" onClick={() => mostra(myPokemon)}>mostra</button>
        {/* Eliminare pokemon dal proprio pokedex cliccando su Elimina */}
        <button className="button button-outline elimina" onClick={() => deletePokemon(indexPokemon)}>elimina</button>
      </div>
    </div>
  );
}

export default PokedexCard;
