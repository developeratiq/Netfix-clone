import React from 'react'
import { useReducer } from 'react'



const initalState = 0;

   const reducer=(state , action)=>{
         switch(action){

          case "increment":
          return state+1
          case "decrement":
            return state-1
            case "reset":
              return initalState

              default:
                return state

         }

   }

function UserR() {

   const[count, dispatch]= useReducer(reducer,initalState)
  return (
    <div>
      <h1>useReducer</h1>
      <h1>Count:{count}</h1>
        <button onClick={()=>dispatch("increment")}>increment</button>
        <button onClick={()=>dispatch("decrement")}>decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>


    </div>
  )
}

export default UserR