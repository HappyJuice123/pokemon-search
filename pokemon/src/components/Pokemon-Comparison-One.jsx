import { StatChartCompare } from "./Stat-Chart-Compare";
import PokemonInfoTwo from "./Pokemon-Comparison-Two";

const PokemonInfoOne = ({ pokemonOne, pokemonTwo }) => {
  if (pokemonOne) {
    return (
      <section>
        <article className="pokemon-one">
          <p>{pokemonOne.name[0].toUpperCase() + pokemonOne.name.slice(1)}</p>
          <p>Pokémon id: {pokemonOne.id}</p>
          <p>
            Type:{" "}
            {pokemonOne.types[0].type.name[0].toUpperCase() +
              pokemonOne.types[0].type.name.slice(1)}
          </p>
          <p>Favourite Move: {pokemonOne.moves[0].move.name.toUpperCase()}</p>
          <img
            src={pokemonOne.sprites.front_default}
            alt={pokemonOne.name}
            id="pokemonOne-icon"
          ></img>
        </article>
        <section className="pokemon-two">
          <PokemonInfoTwo pokemonTwo={pokemonTwo} />
        </section>
        <section className="stat-chart-compare">
          <StatChartCompare pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} />
        </section>
      </section>
    );
  }
};

export default PokemonInfoOne;
