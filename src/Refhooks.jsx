import React from 'react'
import Input from './Input'
import { useEffect,useRef } from 'react'

function Refhooks() {

     const Field= useRef(null);
   useEffect(() => {
       
    Field.current.focus()
     
   }, [])
   


  return (
    <div>
      <Input ref={Field}></Input>
    </div>
  )
}

export default Refhooks