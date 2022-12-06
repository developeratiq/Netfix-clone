import React from 'react'
import Card from './Card/Card'
import CricketCard from './Card/scorecard/CricketCard'
import './cric.css'
import Popup from './Card/scorecard/Popup'
// import './Api/Api'

import { useEffect, useState } from 'react'
import { Api } from './Api/Api'
import Nav from './Nav/Nav'
import { stripBasename } from '@remix-run/router'

function Cric() {

   const [altgames, setaltgames] = useState([])
   const [toggle, settoggle] = useState(false);



  const managePopUp = ()=>{
   settoggle(true);
  }
  


   //fetching matches 
   const getGames = async () => {

      const api = `8c11149e-5691-41a0-9c5b-f120e005cfc8`;
      const url = `https://api.cricapi.com/v1/currentMatches?apikey=${api}`
      const response = await fetch(url);
      const finalResponse = await response.json()
      setaltgames((finalResponse.data));

   }
   // console.log(altgames)


   // fetching all news 


   useEffect(() => {
      Api();
      getGames();

   }, [])




   return (<>
  
          <Nav></Nav>
       
      <h1 className='main_heading'>All Matches</h1>
      <hr />
      {
         altgames && altgames.map((cb) => {

            return (
               <>

                  <section className='cardsection' >
                     <div class="card">
                        <h5 class="card-header">{cb.matchType}<span className='date'>{cb.date} </span></h5>
                        {(cb.matchEnded === true ) ? (<button className='statusButton'>Completed</button>) : (<button className='live'>Live🟢</button>)}
                        {(cb.matchEnded === false && cb.matchStarted ===true ) ? (<button className='live'> Not Started Yet</button>): ("")}
                        <div class="card-body">
                           <h5 class="card-title">{cb.name}  </h5>
                           <p class="card-text complete"> {cb.status}</p>
                           {
                              cb.score && cb.score.map((sc) => {
                                 return (
                                    <>
                                       <h5 class="card-title">  {sc.inning}: &nbsp; &nbsp;{sc.r}/{sc.w}  : &nbsp; {sc.o}-Overs  </h5>
                                    </>
                                 )
                              })
                           }

                        </div>
                        {/* <button onClick={managePopUp}>getdet</button> */}

                        <Popup trigger={toggle} settrigger = {settoggle}></Popup>
                     </div>



                  </section>

                  {/* {

                     cb.score&&cb.score.map((sc)=>{
                        return(
                           <>
                            <h1>cb heer</h1>
                           
                           
                           </>
                        )
                     })
                  } */}


               </>
            )
         })

      }


   </>
   )
}

export default Cric