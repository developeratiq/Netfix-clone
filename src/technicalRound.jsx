import React from 'react'
import { useState } from 'react';

function TechnicalRound() {
    const [ArrayList, setArrayList] = useState([]);
    const [newArray, setnewArray] = useState([]);


    const dekho = (e)=>{
          const dataValue = e.target.value;
          const check = e.target.checked;
        console.log(dataValue , check)

         if(check){
            setArrayList([...ArrayList,dataValue])

         } else{
           setArrayList(ArrayList.filter((e)=>(e!==dataValue)))
           

         }


    }

const Submit = (e)=>{
    e.preventDefault();
  console.log(ArrayList)
  setnewArray(ArrayList)



}


  return (
    <div> 
        <div className="form" onSubmit={Submit}>
            <form action="">
            <input type="checkbox"  name='admi' value="Akhlaque" onChange={dekho}/> 
            <label htmlFor="">Akhlaque</label> <br />
            <input type="checkbox"  name='admi' value="Atique" onChange={dekho}/> 
            <label htmlFor="">Atique</label> <br />

            <input type="checkbox"  name='admi' value="Chutwa"onChange={dekho}/> 
            <label htmlFor="">Chutwa</label>
            <br />

    <button type='submit'> Dekhte HAi</button>


            </form>




        </div>
        {
         newArray.map(e=> <h1>{e}</h1>)

        }

     


    </div>
  )
}

export default TechnicalRound