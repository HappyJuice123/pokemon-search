import { useState, useEffect } from "react";
import PokemonInfoOne from "./Pokemon-Comparison-One";
import { fetchPokemonOne } from "../api-pokemon-compare";
import { fetchPokemonTwo } from "../api-pokemon-compare";

const PokemonComparison = () => {
  const [pokemonOneSearch, setPokemonOneSearch] = useState("ditto");
  const [pokemonTwoSearch, setPokemonTwoSearch] = useState("ditto");

  const [pokemonOneSearchTerm, setPokemonOneSearchTerm] = useState("ditto");
  const [pokemonTwoSearchTerm, setPokemonTwoSearchTerm] = useState("ditto");

  const [pokemonOne, setPokemonOne] = useState(null);
  const [pokemonTwo, setPokemonTwo] = useState(null);

  const [pokemonOneExists, setPokemonOneExists] = useState(true);
  const [pokemonTwoExists, setPokemonTwoExists] = useState(true);

  useEffect(() => {
    fetchPokemonOne(pokemonOneSearch)
      .then((results) => {
        setPokemonOneExists(true);
        setPokemonOne(results);
        setPokemonOneSearchTerm("");
      })
      .catch(() => {
        setPokemonOneExists(false);
      });
    // pokemon 2
    fetchPokemonTwo(pokemonTwoSearch)
      .then((results) => {
        setPokemonTwoExists(true);
        setPokemonTwo(results);
        setPokemonTwoSearchTerm("");
      })
      .catch(() => {
        setPokemonOneExists(false);
      });
  }, [pokemonOneSearch, pokemonTwoSearch]);

  const handlePokemonOneChange = (event) => {
    setPokemonOneSearchTerm(event.target.value);
  };

  const handlePokemonTwoChange = (event) => {
    setPokemonTwoSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPokemonOneSearch(pokemonOneSearchTerm);
    setPokemonTwoSearch(pokemonTwoSearchTerm);
  };

  return (
    <section className="pokemon-comparison">
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon-compare-one">Pokemon One: </label>
        <input
          id="pokemon-compare-one"
          placeholder="Search Pokemon..."
          value={pokemonOneSearchTerm}
          onChange={handlePokemonOneChange}
          required
        />
        <label htmlFor="pokemon-compare-two">Pokemon Two: </label>
        <input
          id="pokemon-compare-two"
          placeholder="Search Pokemon..."
          value={pokemonTwoSearchTerm}
          onChange={handlePokemonTwoChange}
          required
        />
        <button type="submit">Compare</button>
      </form>
      {pokemonOneExists && pokemonTwoExists ? (
        <section className="comparison">
          <PokemonInfoOne pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} />
        </section>
      ) : (
        <p>One or more of your pokemons do not exist</p>
      )}
    </section>
  );
};
export default PokemonComparison;
