import {ActionType} from '../actionType'
import {Actions} from '../actions'

const initialState = 0;
const reducer = (state:number = initialState, action:Actions)=>{
  switch(action.type){
    case ActionType.ADD:
      return state + 1
    case ActionType.REMOVE:
      return state - 1
    case ActionType.RETURN:
      return 0;
    default :
      return state;
  }
}
export default reducer;