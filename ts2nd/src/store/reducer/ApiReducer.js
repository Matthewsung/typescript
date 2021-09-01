import React from 'react'
const initialState ={ };
const ApiReducer = (state = initialState, action) => {
  switch (action.type){
    case  "getapi" :
      return(
        1
      )
    default : return state
  }
    
}
export default ApiReducer
