import { POKEMON_FAIL, POKEMON_SUCCESS, PokemonType ,PokemonDispatchType} from "../actions/pokemonActionsType";

interface InitialState{
  success:boolean,
  pokemon?:PokemonType
};

const initialState: InitialState={
  success: false
};

const pokemonReducer =(state = initialState, action:PokemonDispatchType) :InitialState =>{
  switch(action.type){
    case POKEMON_FAIL:
      return {
        ...StaticRange,
        success:false
      }
    case POKEMON_SUCCESS:
      const { abilities,sprites } = action.payload
      return{
        ...state,
        success:true,
        pokemon:{
          abilities,
          sprites
        }
      }
    default:
      return state;
  }
}
export default pokemonReducer;