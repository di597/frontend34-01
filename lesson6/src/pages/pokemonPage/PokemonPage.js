import React, { useEffect, useState } from 'react';
import classes from "./PokemonPage.module.css";
import Button from "../../components/button/Button";

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, [pokemon.url]);

    return (
        <div className={classes.pokemonCard}>
            {pokemonData && (
                <>
                    <div className={classes.pokemonCardContent}>
                        <div className={classes.cardHead}>
                            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}/>
                            <h3>{pokemonData.name}</h3>
                        </div>

                        <button className={classes.detailsButton}>Подробнее</button>
                    </div>
                </>
            )}
        </div>
    );
};

const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        const getApi = async () => {
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setPokemons(data.results);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        getApi();
    }, []);

    return (
        <div className={classes.pokemonPage}> {/* Применяем класс из CSS-модуля */}
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonPage;
