import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import PokemonCard from './components/PokemonCard.jsx'
import { nominalTypeHack } from 'prop-types'



function App(){

  const[pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex +1);
  };
  const handlePrevClick = () => {
    setPokemonIndex(pokemonIndex -1);
  };

  return(
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
     {pokemonIndex > 0 && 
      (<button onClick={handlePrevClick}>Précédent</button>)}
     {pokemonIndex < pokemonList.length - 1 && 
      (<button onClick={handleNextClick}>Suivant</button>)}
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
