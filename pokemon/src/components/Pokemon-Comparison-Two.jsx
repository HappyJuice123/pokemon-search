const PokemonInfoTwo = ({ pokemonTwo }) => {
  if (pokemonTwo) {
    return (
      <article>
        <p>{pokemonTwo.name[0].toUpperCase() + pokemonTwo.name.slice(1)}</p>
        <p>Pokémon id: {pokemonTwo.id}</p>
        <p>
          Type:{" "}
          {pokemonTwo.types[0].type.name[0].toUpperCase() +
            pokemonTwo.types[0].type.name.slice(1)}
        </p>
        <p>Favourite Move: {pokemonTwo.moves[0].move.name.toUpperCase()}</p>
        <img
          src={pokemonTwo.sprites.front_default}
          alt={pokemonTwo.name}
          id="pokemonTwo-icon"
        ></img>
      </article>
    );
  }
};

export default PokemonInfoTwo;
