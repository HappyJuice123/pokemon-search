import { useState } from "react";

const SearchPokemon = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleChange = (event) => {
    setNewSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };

  return (
    <section className="search-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar">Search Pokémon: </label>
        <input
          id="search-bar"
          onChange={handleChange}
          value={newSearchTerm}
          placeholder="Search Pokemon..."
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchPokemon;
