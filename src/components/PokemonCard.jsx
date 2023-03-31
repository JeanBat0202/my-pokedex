import App from "../App.jsx";
import propTypes from "prop-types";




function PokemonCard({pokemon}){
    
    if (pokemon.imgSrc ){
    return(
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.name}/>
            <figcaption>'{pokemon.name}'</figcaption>
        </figure>
    )
    } else {
      return(
        <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
    </figure>
      )
    }
}


PokemonCard.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    imgSrc: propTypes.string,
  }).isRequired,
}

export default PokemonCard;