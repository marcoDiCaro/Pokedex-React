import React, {useState, useEffect} from "react";
import StatsPokemon from "./StatsPokemon";


//Card di template informazioni base del pokemon
function PokemonDetails({ dataPokemon, addHandler }) {
  const { name, weight, height, stats } = dataPokemon;
  const [imgPokemon, setImgPokemon] = useState(null);

  useEffect(() => setImgPokemon(dataPokemon.sprites.front_default), [dataPokemon])

  return (
    <article className="dettaglio-pokemon">
      <header>
        <h2>Ecco i tuoi risultati per [{name}]</h2>
        <div className="informazioni-pokemon">
          <ul className="informazioni">
            <li>Nome: {name}</li>
            <li>Peso: {weight}</li>
            <li>altezza: {height}</li>
          </ul>
        </div>
      </header>
      <hr />
      <div className="article-body">
        <img
          id="pokemon-sprite"
          src={imgPokemon}
          alt="img-pokemon"
        />
        <div className="sprites-buttons">
          {/* Cambio immagine del pokemon in modalità default */}
          <button
            className="button button-outline button-images"
            onClick={() => setImgPokemon(dataPokemon.sprites.front_default)}
          >
            default
          </button>
          {/* Cambio immagine del pokemon in modalità shiny */}
          <button
            className="button button-outline button-images"
            onClick={() => setImgPokemon(dataPokemon.sprites.front_shiny)}
          >
            shiny
          </button>
        </div>
        <div className="stats-pokemon">
          <h3>Statitistiche</h3>
          <div className="stats">
            <StatsPokemon stats={stats} />
          </div>
        </div>
      </div>
      <footer>
        <button id="add-pokedex" onClick={addHandler}>aggiungilo al pokedex</button>
      </footer>
    </article>
  );
}

export default PokemonDetails;
