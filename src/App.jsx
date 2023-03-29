import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from './components/PokemonCard.jsx'



function App(){
  return(
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
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
