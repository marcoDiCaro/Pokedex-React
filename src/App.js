import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonDetails from "./components/PokemonDetails";
import Pokedex from "./components/pokedex";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  //Proprio pokedex
  const [pokedex, setPokedex] = useState([]);
  const [errorPokedex, setErrorPokedex] = useState(false);

  const [errorContent, setErrorContent] = useState("Impossibile aggiungere pokemon al pokedex perchè già registrato");

  //Se presenti prelevo dati pokemon dal local storage
  useEffect( () => {
    if(localStorage.getItem("pokedex")) {
      setPokedex(JSON.parse(localStorage.getItem("pokedex")))
    }
  }, [])

  //Preleviamo i dati del pokemon sfruttando l'API PokéAPI (https://pokeapi.co/)
  async function getPokemon(search) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const resData = await fetch(url + search)
      .then((res) => {
        if (res.status === 200) {
          setError(false);
          return res.json();
        } else if (res.status === 404) {
            setError(true)
        }
      })
      .then((data) => data);

    if (typeof resData === "object") {
      setPokemon(resData);
    }
  }

  //Aggiungo pokemon nel pokedex
  function addPokedex() {
    //Controllo che il pokemon che voglio aggiungere nel pokedex non sia già presente
    const checkPokedex = pokedex.filter(elem => elem.name === pokemon.name)
    if(checkPokedex.length === 1) {
      setErrorPokedex(true);
    } else {
      //Controllo che il pokedex non abbia raggiunto il limite massimo di 10 pokemon
      if(pokedex.length === 10) {
        setErrorContent("Impossibile aggiungere pokemon al pokedex perchè si è raggiunto il numero massimo");
        setErrorPokedex(true);
      } else {
        setPokedex([...pokedex, pokemon]);
        setErrorPokedex(false);

        //Salvo pokedex nel local storage, così che sia disponibile anche dopo il refresh o al riavvio dell'app
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
      }
    }
  }

  //Elimino pokemon dal pokedex
  function deletePokemon(indexPokemon) {
    const newPokedex = pokedex.filter((pokemon, index) => index !== indexPokemon);
    setPokedex(newPokedex);

    //Salvo pokedex nel local storage, così che sia disponibile anche dopo il refresh o al riavvio dell'app
    localStorage.setItem("pokedex", JSON.stringify(newPokedex));
  }

  return (
    <div>
      <SearchBar get={getPokemon}/>
      {error && <span className="error">Pokemon non trovato</span>}
      {pokemon && <PokemonDetails dataPokemon={pokemon} addHandler={addPokedex} />}
      {errorPokedex && <span className="error" id="pokedex-error">{errorContent}</span>}
      <Pokedex myPokedex={pokedex} mostraPokemon={setPokemon} deletePokemon={deletePokemon} />
    </div>
  );
}

export default App;
