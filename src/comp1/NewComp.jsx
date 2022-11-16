import React from 'react'
import './c1.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewComp(props) {
  const [sending, setsending] = useState()


  const changeState = (yeId) => {
        setsending(yeId)
  }
  return (
    <>
      {
        props.send && props.send.map(y => {

          return (<>
            <div className="container1">
              <h1>abc</h1>
                <Link to="/score">
                
              <button onClick={() => changeState(y.id)}>click me</button>
              </Link>
            </div>

          </>

          )
        })



      }


    </>
  )
}

export default NewComp