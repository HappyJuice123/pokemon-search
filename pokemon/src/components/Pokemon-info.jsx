import { StatChart } from "./Stat-Chart";

const PokemonInfo = ({ pokemon }) => {
  return (
    <article>
      <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
      <p>Pokémon id: {pokemon.id}</p>
      <p>
        Type:{" "}
        {pokemon.types[0].type.name[0].toUpperCase() +
          pokemon.types[0].type.name.slice(1)}
      </p>
      <p>Favourite Move: {pokemon.moves[0].move.name.toUpperCase()}</p>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        id="pokemon-icon"
      ></img>
      <StatChart pokemon={pokemon} />
    </article>
  );
};

export default PokemonInfo;
