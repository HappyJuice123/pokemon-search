import { useState, useEffect } from "react";
import fetchPokemon from "../api";
import PokemonInfo from "./Pokemon-info";

const PokemonList = ({ searchTerm }) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonExists, setPokemonExists] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemon(searchTerm)
      .then((results) => {
        setPokemonExists(true);
        setIsLoading(false);
        setPokemon(results);
      })
      .catch(() => {
        setPokemonExists(false);
      });
  }, [searchTerm]);

  if (!pokemonExists) {
    return <h3>No Results Found</h3>;
  }

  if (isLoading) {
    return <h3>Your Pokémon is loading...</h3>;
  }

  if (searchTerm) {
    return (
      <section>
        <h3>Search results:</h3>
        <PokemonInfo pokemon={pokemon} />
      </section>
    );
  } else {
    return (
      <section>
        <h3 id="fav-pokemon">My Favourite Pokemon is</h3>
        <PokemonInfo pokemon={pokemon} />
      </section>
    );
  }
};
export default PokemonList;
