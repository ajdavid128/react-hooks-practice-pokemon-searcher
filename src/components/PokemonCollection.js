import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({props}) {

  const pokemonArray = props.map((eachPokemon) => {
    // console.log(eachPokemon);
    return <PokemonCard key={eachPokemon.id} props={eachPokemon} />
  })


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonArray}
    </Card.Group>
  );
}

export default PokemonCollection;
