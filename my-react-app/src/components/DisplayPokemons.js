import React from 'react';
import Pokemon from './Pokemon';

const DisplayPokemon = ({pokemon}) => {

    return(
        <div class="display">
                {
                    pokemon.map((val, idx) => 
                        // console.log ('test');
                        <Pokemon key={idx} thisPokemon={val} />
                    )
                }
        </div>
    )
}

export default DisplayPokemon;