import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Shipslist from './shipsList';
import ViewMore from './viewMore';


const Spaceships = ({ onClickShipName }) => {
    const [apiResult, setApiResult] = useState({});
    const [ships, setShips] = useState([]);
    const [nextApi, setNextApi] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPageApi('https://swapi.dev/api/starships/');
    }, []);

    useEffect(() => {
        fetchPageApi(nextApi);
    }, [nextApi]);

    const fetchPageApi = (url) => {
        axios.get(url)
        .then(res => {
            console.log(res)
            setApiResult(res.data);
            setShips(res.data.results);
        })
    }

    const handleClickName = (ship) => {
        onClickShipName(ship);
        navigate("/detail");
    }

    const nextClick = () => {
        setNextApi(apiResult.next);
    }

    return (
        <>
            <Shipslist ships={ships} ClickedName={handleClickName}></Shipslist>
            <ViewMore handleClickNext={nextClick}/>
        </>
    )
}

export default Spaceships;