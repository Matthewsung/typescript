import {ActionType} from '../actionType'

interface ADD {
  type:ActionType.ADD,
  payload:number
}

interface REMOVE {
  type:ActionType.REMOVE,
  payload:number
}
interface RETURN {
  type:ActionType.RETURN,
  payload:number
}
export type Actions= ADD | REMOVE | RETURN;
