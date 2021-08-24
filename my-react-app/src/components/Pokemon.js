import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Pokemon = ({thisPokemon}) => {

    const[allPokemon, setAllPokemon] = useState({
        name:"",
        sprites: {
            front_default:""
        }
    
    });

    const getPokemon = (url) => {
        axios.get(url)
        .then((response) => {
            console.log (response);
            setAllPokemon(response.data);
        })
        .catch ((err) => {
            console.log(err)
        })
    }

    useEffect (() => {
        getPokemon(thisPokemon.url)
    })

    return(
        <div class="cards">
                <p>#{allPokemon.id}</p>
                <img src={allPokemon.sprites.front_default}></img>
                   <p> <b>{allPokemon.name}</b></p>
        </div>
    )
}
export default Pokemon;