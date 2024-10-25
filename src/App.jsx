import Card from "./components/Card/Card";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [currentView, setCurrentView] = useState(0);
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)
// addd another state with last view

 /* useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then(resp => resp.json())
      .then(data => setData(data.results));
  },[]); */

  useEffect(() =>{
    //first fetch
    fetchingData()
  }, [])

  useEffect( ()=> {
    async function fetchPage () {
      console.log('check on condition: ', currentView)
      if(currentView+1 % 20 === 0) {
        console.log('in if')
        await fetchingData(page+1);
        setPage(page+1)
      }
    }
    fetchPage()
  },[currentView])


  const fetchingData = async(pageToFetch = 1) => {
    setLoading(true)
    console.log('fetching')
    console.log('in page: ',page)
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageToFetch}`)
    const respJson = await resp.json();
    
    setData((prevData)=> {
      console.log(prevData)
      if (!prevData.length === 0 ) {
        if(!prevData.includes(respJson.results)){ return [...prevData, ...respJson.results]}
      } else {
        return respJson.results
      }
    }) 

    setLoading(false)
  }

  

  const changeCharacter = (direction) => {
    direction === 'right' ? setCurrentView(currentView+1) :  setCurrentView(currentView-1)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
        {loading  ? 
            <p>Loading...</p> :
            <Card name={data[currentView].name} 
            location={data[currentView].location.name} 
            type={data[currentView].type} 
            image={data[currentView].image} 
            handleChange={changeCharacter}
            index={currentView}/> }
    </div>
  );
}
