import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonList from "./components/Pokemon-list";
import SearchPokemon from "./components/Search-pokemon";
import PokemonComparison from "./components/Pokemon-Comparison";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header />
      <SearchPokemon setSearchTerm={setSearchTerm} />
      <PokemonList searchTerm={searchTerm} />
      <PokemonComparison />
    </div>
  );
}

export default App;
