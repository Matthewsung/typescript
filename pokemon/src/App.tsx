import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './store'
import {fetchPokemonData} from './actions/pokemonActions'
function App() {
  const [pokemonName, setPokemonName]= useState("");

  const pokemonReducer = useSelector((state:ReducerType) => state.pokemonReducer);
  const dispatch = useDispatch();
  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement> )=> setPokemonName(event.target.value) 
  const searchBtn = ()=> {
    dispatch(fetchPokemonData(pokemonName))
  }
  return (
    <div className="App">
      <input type="text" value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchBtn}>포켓몬 찾기</button>
        {pokemonReducer.success && <div>
          <p>{pokemonName}</p>
          {pokemonReducer.pokemon?.abilities.map((value) => {
            return <div><p>{value.ability.name}</p><p>{value.slot}</p></div>
          })}
          <img src={pokemonReducer.pokemon?.sprites.front_default}  alt="포켓몬 사진"/>
        </div>}
    </div>
  );
}

export default App;
