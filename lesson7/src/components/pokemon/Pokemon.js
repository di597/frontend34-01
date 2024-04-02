import React, { useEffect, useState } from "react";
import classes from "./Pokemon.module.sass";
import ModalPokemon from "../../modalPokemon/ModalPokemon";

const Pokemon = ({ pokemon }) => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [pokemonOne, setPokemonOne] = useState({});

  const handleShow = () => {
    setShow(!show);
  };

  const getApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("Error", e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi().then((pokemon) => setPokemonOne(pokemon));
  }, []);
  return (
    <>
      <li className={classes.pokemonItem}>
        {loading ? (
          "loading"
        ) : (
          <div className={classes.pokemonItem_info}>
            <img
              src={pokemonOne?.sprites?.other?.dream_world?.front_default}
              alt="pokemon"
              className={classes.img}
            />
            <p className={classes.name}>{pokemon.name}</p>
          </div>
        )}

        <button className={classes.btn} onClick={handleShow}>
          Подробнее
        </button>
      </li>
      {show && (
        <ModalPokemon handleShow={handleShow}>
          <div className={classes.pokemonItem_info}>
            <img
              src={pokemonOne?.sprites?.other?.dream_world?.front_default}
              alt="pokemon"
              className={classes.img}
            />
            <p className={classes.name}>{pokemon.name}</p>
          </div>
          <div className={classes.skills}>
            <p>
              Abilities:{" "}
              <span>
                {pokemonOne?.abilities
                  ?.map((value) => value.ability.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              Stats:{" "}
              <span>
                {pokemonOne?.stats?.map((value) => value.stat.name).join(", ")}
              </span>
            </p>
            <p>
              Types:{" "}
              <span>
                {pokemonOne?.types?.map((value) => value.type.name).join(", ")}
              </span>
            </p>
            <p>
              Some-moves:{" "}
              <span>
                {pokemonOne?.moves
                  ?.slice(0, 5)
                  .map((value) => value.move.name)
                  .join(", ")}
              </span>
            </p>
          </div>
        </ModalPokemon>
      )}
    </>
  );
};

export default Pokemon;
