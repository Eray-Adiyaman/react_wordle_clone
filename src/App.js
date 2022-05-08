import { useEffect,useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution,setSolution]= useState(null);

useEffect(()=>{
  fetch("http://localhost:3001/solutions")
  .then(response => response.json())
  .then(data => 
    //random int between 0-14 for solutions db
    {const randomSolution = data[Math.floor(Math.random()*data.length)]
      setSolution(randomSolution)
    })
},[setSolution])


  return (
    <div>
          <h1>React Wordle Clone</h1>
          {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
