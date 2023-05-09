const fetchPokemon = (searchTerm) => {
  if (searchTerm) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then(
      (res) => {
        return res.json();
      }
    );
  } else {
    return fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`).then((res) => {
      return res.json();
    });
  }
};

export default fetchPokemon;
