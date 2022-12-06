import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <nav className='navbar'>
            <ul class="nav nav-tabs">
                {/* <li class="nav-item">
                    <h2 className='home'>CricAtiq</h2>
                </li> */}

                <div className="flex2">




                    <nav class="navbar navbar-light ">
                        <a class="navbar-brand" href="#">
                            <img className='png' src="../image/png.png" width="30" height="30" alt="" />
                        </a>
                        <li class="nav-item">
                            <NavLink className='flex21' to="/"><h8>Live</h8></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className='flex21' to="/upcoming"><h8>UpcomingSeries</h8></NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink className='flex21' to="/news"><h8>News</h8></NavLink>

                        </li>


                    </nav>

                    
                        {
                            isAuthenticated && <li className='name_list'><p className='name'> Welcome {user.name}</p>
                            </li>
                        }

                    

                </div>


                {
                    isAuthenticated ? <button className='logout' onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                    </button> : <button className='login' onClick={() => loginWithRedirect()}>Log In</button>

                }




            </ul>


        </nav>
    )
}

export default Nav 