import React from 'react'
import { useState ,useEffect  } from 'react'

function App() {
  const [games , setgames] = useState([]);
const fecthApi = async()=>{
   const Lists = await fetch('https://api.cricapi.com/v1/cricScore?apikey=76e7f88b-f92a-4fba-b382-ca8a671ba4cd');
  setgames(await Lists.json());
  //  console.log(Everylist)
}

    
   useEffect(() => {
    
  fecthApi();
   }, [])
   



  return (
    <div>
     {/* {
      Object.entries(games.data).map((elem)=>{
         console.log(elem.id)

        return(<>
       
        
        </>)
      })
     } */}



    </div>
  )
}

export default App