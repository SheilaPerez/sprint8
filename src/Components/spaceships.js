import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Spaceships = () => {
    const [ships, setShips] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(res => {
            console.log(res)
            setShips(res.data.results)
        })
    }, []);

    return (
        <>
            {ships.map((ship) => {
                return (
                    <>
                        <p>NAME -> {ship.name}</p> 
                        <p>MODEL -> {ship.model}</p>    
                    </>
                )
            })}
        </>
    )
}

export default Spaceships;