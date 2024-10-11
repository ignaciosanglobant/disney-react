import Card from "./components/Card/Card";
import "./App.css";

export default function App() {
  // https://rickandmortyapi.com/api/character/?page=1

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Card />
    </div>
  );
}
