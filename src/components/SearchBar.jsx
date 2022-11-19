import React, {useState} from "react";

//Search Bar 
function SearchBar({get}) {

    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    
    //Search bar dove è possibile cercare un Pokemon
    function searchPokemon() {
        if (search) {
            get(search)
            setError(false);
            setSearch("");
        } else {
            setError(true);
        }
    }

    return(
      <div className="search-bar">
        <h2>Cerca un pokemon</h2>
        <input type="search" id="search-pokemon" placeholder="e.g.bulbasaur" value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}/>
        {error && <span className="error" id="search-error">Inserire nome del pokemon</span>}
        <button id="search" onClick={searchPokemon} >cerca</button>
      </div>
    )
}

export default SearchBar;