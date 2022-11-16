
import './App.css';
import NewComp from './comp1/NewComp';
import AllData from './comp1/Array.json';
import { useState ,useEffect} from 'react';
import { Link , Route ,Routes } from 'react-router-dom';
import Other from './comp1/Other';





function App() {
  const [datas, setdatas] = useState();

  const meradata = ()=>{

    setdatas(AllData);
  }
 useEffect(() => {
  
 meradata();
  
 }, [])
 




  return (
   <>
     <Routes>
         
          <Route path='/score' element={<Other></Other>}> </Route>
        

     </Routes>







   <h1>how are you</h1>
       {
          datas&&datas.map(x=>{
            return(
              <>
              <div className='abc' id={x.id}>

                {     

              (x.id==="1002")?(""):(
              
              
                
              
              <NewComp name = {x.name}  index = {x.id}  send = {AllData}/>
             
              )
               
            } </div>
              
             
              
              </>
            )
            
          })

       }


   
   
   </>
  );
}

export default App;
