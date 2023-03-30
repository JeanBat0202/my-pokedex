


function NavBar ({setPokemonIndex, pokemonList, pokemonIndex}){
    const handleNextClick = () => {
        setPokemonIndex(pokemonIndex +1);
      };
      const handlePrevClick = () => {
        setPokemonIndex(pokemonIndex -1);
      };
    

    return (<nav>
    {pokemonIndex > 0 && 
        (<button onClick={handlePrevClick}>Précédent</button>)}
       {pokemonIndex < pokemonList.length - 1 && 
        (<button onClick={handleNextClick}>Suivant</button>)}
        </nav>)
}

export default NavBar;