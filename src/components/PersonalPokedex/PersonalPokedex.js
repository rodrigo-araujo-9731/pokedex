import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonCard';

function PersonalPokedex() {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [pokemons, setPokemons] = useState();
  //   const [prevBtnURl, setPrevBtnUrl] = useState();
  //   const [nextBtnURl, setNextBtnUrl] = useState();

  //   useEffect(() => {
  //     axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
  //       //   setPrevBtnUrl(res.data.previous);
  //       //   setNextBtnUrl(res.data.next);
  //       setPokemons(res.data.results);
  //       console.log(pokemons);
  //     });
  //   }, []);

  const pokemonsList = () => {
    const getPokeList = axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        // setPokemons(res.data.results);
        console.log(res.results);
      });
  };

  window.addEventListener('load', pokemonsList);
  //   const Pagination = (e) => {
  //     if (e.target.textContent === 'Next') {
  //       setCurrentPageUrl(nextBtnURl);
  //     }

  //     if (e.target.textContent === 'Previous') {
  //       setCurrentPageUrl(prevBtnURl);
  //     }
  //   };

  return (
    <div>
      {/* {pokemons.map((pokemon) => (
        <PokemonList pokemon={pokemon} />
      ))} */}

      {/* {
            pokemons.map((elem, index) => (
                      <ChampionCard
                        key={index}
                        champion={this.state.champions.data[elem]}
                      />
        } */}
      <button onClick={pokemonsList} className='show'>
        Show list
      </button>
      {/* <div className='page-buttons'>
        <button onClick={Pagination} className='previous'>
          Previous
        </button>
        <button onClick={Pagination} className='next'>
          Next
        </button>
      </div> */}
    </div>
  );
}

export default PersonalPokedex;
