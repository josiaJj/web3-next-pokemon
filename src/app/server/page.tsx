import React from 'react';

const fetchPokemonList = async () => {
  const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`, {
    method: 'GET',
  });
  return response.json();
};
