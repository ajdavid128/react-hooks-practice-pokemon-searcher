import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonData, setPokemonData] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => setPokemonData(data))
  }, [])

  function handleSearch(pokemon) {
    setSearchPokemon(pokemon)
    // console.log(pokemon)
  }

  const filteredPokemon = pokemonData.filter((eachPokemon) => { 
    return eachPokemon.name.includes(searchPokemon.toLowerCase()) 
  })
  


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search propFunction={handleSearch}/>
      <br />
      <PokemonCollection props={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
