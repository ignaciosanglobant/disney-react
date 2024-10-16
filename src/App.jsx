import Card from "./components/Card/Card";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [currentView, setCurrentView] = useState(0);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then(resp => resp.json())
      .then(data => setData(data.results));
  },[]);

  useEffect( ()=> {
    //this only work once for page 2 should implement logic to change to next page after 20 items
    if(currentView === 19) {
      fetch('https://rickandmortyapi.com/api/character/?page=2')
        .then(resp => resp.json())
        .then(data => setData((prevData)=> [...prevData, ...data.results]));
    }
  },[currentView])

  const changeCharacter = (direction) => {
    direction === 'right' ? setCurrentView(currentView+1) :  setCurrentView(currentView-1)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
        {data.length > 0 ? 
         <Card name={data[currentView].name} 
            location={data[currentView].location.name} 
            type={data[currentView].type} 
            image={data[currentView].image} 
            handleChange={changeCharacter}
            index={currentView}/> :
            <p>Loading...</p>}
    </div>
  );
}
