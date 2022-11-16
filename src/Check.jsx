import React from 'react'
import { useState } from 'react'

function Check() {
    const [Checking, SetChecking] = useState({ name: "",  age:"", Status: "" });
    const [Name, SetName] = useState();
     const [data , setdata] = useState([]);
      
     const  pushData= ()=>{
        setdata([...data,Checking]);
     }




  return (
    <div>
      
   
    <div className="App">
      <h1>This is CheckBox page</h1>
      <input
      required
        type="checkbox"
        value={Checking.Status}
         onChange={ e =>SetChecking( {...Checking,Status: e.target.checked })}
      />Apple <br />
     
      
      <input type="text" placeholder="Name" value={Checking.name}
        onChange = {e => SetChecking({...Checking, name: e.target.value})}
       
      />
         
      <input type="text" placeholder="Age" value={Checking.age}
        onChange = {e => SetChecking({...Checking, age: e.target.value})}
       
      />

        
      
      {/* <h2>name = {Checking.name}</h2>
      <h2>Age= {Checking.Status}</h2> */}
      <button onClick={pushData} >Select</button>
      {
            data.map((y)=>{
                return(
                    <>
                      {
                        (y.Status===true)?(<h1>{y.name}</h1>):("")
                    
                      }
                    </>
                )
            })
        }
    </div>









    </div>
  )
}

export default Check