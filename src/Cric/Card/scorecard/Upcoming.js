import React from 'react'
import Nav from '../../Nav/Nav'
import { useState, useEffect } from 'react';

function Upcoming() {

    const [Upcoming, setUpcoming] = useState([])
    const getGames = async () => {

        const Key = '8c11149e-5691-41a0-9c5b-f120e005cfc8'
        const url = `https://api.cricapi.com/v1/series?apikey=${Key}`
        const response = await fetch(url);
        const finalResponse = await response.json()
        setUpcoming((finalResponse.data));

    }
    useEffect(() => {

        getGames()


    }, [])



    return (
        <div>
            <Nav></Nav>

            <h2 style={{ textAlign:"center", marginTop:"10px" ,color:"Red"}}>Upcoming Series</h2>

            {
                Upcoming && Upcoming.map((u) => {
                    return (<>
                        <div class="card">
                            <div class="card-header">
                                Start from : {u.startDate}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{u.name}</h5>
                                <p class="card-text"></p>
                                <table class="table table-success table-striped">
                                    <thead>
                                        <tr>

                                            <th scope="col">Odi</th>
                                            <th scope="col">T20</th>
                                            <th scope="col">Test</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>{u.odi}</td>
                                            <td>{u.t20}</td>
                                            <td>{u.test}</td>
                                        </tr>
                                        
                                    </tbody>
                                   
                                </table>
                                <div class="card-header">
                                            End Date : {u.endDate}
                                        </div>
                            </div>
                        </div>
                    </>)
                })
            }


        </div>
    )
}

export default Upcoming