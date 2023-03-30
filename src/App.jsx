import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import PokemonCard from './components/PokemonCard.jsx'
import { nominalTypeHack } from 'prop-types'

import NavBar from './components/NavBar.jsx'

function App(){

  const[pokemonIndex, setPokemonIndex] = useState(0);

  return(
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex ={pokemonIndex} pokemonList={pokemonList}/>
    </div>
  );
}



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



// function App(props){
//   return(
//     <div>
//       <props.PokemonCard/>
//     </div>
//   );
// }


export default App;
