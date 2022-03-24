import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Shipslist from './shipsList';


const Spaceships = ({ onClickShipName }) => {
    const [ships, setShips] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(res => {
            console.log(res)
            setShips(res.data.results)
        })
    }, []);

    const handleClickName = (ship) => {
        onClickShipName(ship);
        navigate("/detail");
    }

    return (
        <>
            <Shipslist ships={ships} ClickedName={handleClickName}></Shipslist>
        </>
    )
}

export default Spaceships;