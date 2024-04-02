import React from 'react';
import classes from './PokemonList.module.sass';
import Pokemon from '../pokemon/Pokemon';


const PokemonList = ({pokemonList}) => {
    return (
        <li className={classes.list}>
            {
                pokemonList.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)
            }
        </li>
    );
};

export default PokemonList