import React,{ useEffect, useState } from 'react';
import Recipe from './Recipe';

import logo from './logo.svg';
import './App.css';

const App = () =>{
  const APP_ID = "a9ce6f69"
  const APP_KEY = "adb27996525c63cb79b523b7bead2ad5"

  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // const [counter, setCounter]= useState(0);
//state
  const[recipes , setRecipes] =useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery]=useState('chicken');

    useEffect(() => {
    // console.log("Effect has been run")
    getRecipes(); }, [query]);

    const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
      setRecipes(data.hits)
      //console.log(data.hits)

    }

    const searchRecipes = e =>{
      setSearch(e.target.value);
      console.log(search);
    }


    const getSearch=e =>{
      e.preventDefault();
      setQuery(search);
      setSearch("")
    }

  return (<div className ="App">
    {/* <h1> Hello React</h1> */}
    <form onSubmit ={getSearch} className="search-form">
      <input className ="search-bar" type="text" value={search} onChange={searchRecipes} />
      <button  className="search-button" type="submit"> Search </button>
      {/* <h1 onClick={() => setCounter(counter +1)}>{counter}</h1> */}
    </form>
    <div className='recipes'>
    {recipes.map(recipe => (
      <Recipe  
      key ={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredient={recipe.recipe.ingredients} />
    ))}
    </div>
  </div>
  );
};
export default App;
