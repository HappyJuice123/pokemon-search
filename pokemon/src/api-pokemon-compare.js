export const fetchPokemonOne = (pokemonOneSearch) => {
  if (pokemonOneSearch) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonOneSearch}`).then(
      (res) => {
        return res.json();
      }
    );
  }
};

export const fetchPokemonTwo = (pokemonTwoSearch) => {
  if (pokemonTwoSearch) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTwoSearch}`).then(
      (res) => {
        return res.json();
      }
    );
  }
};
