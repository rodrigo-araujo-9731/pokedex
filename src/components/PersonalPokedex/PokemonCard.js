import { Axios } from 'axios';
import React, { useState, useEffect } from 'react';

function PokemonCard({ props }) {
  const [pokeImg, setPokeImg] = useState('');

  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((res) => {
      setPokeImg(res.data.sprites.front_default);
    });
  }, [props]);

  return (
    <div className='pokemon-card'>
      <img src={pokeImg} alt={props.name} />
      <br />
      {props.name}
    </div>
  );
}

export default PokemonCard;
