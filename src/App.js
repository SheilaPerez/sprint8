import React, { useState, useEffect } from 'react';
import Spaceships from './Components/spaceships';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ShipDetail from './Components/shipDetail';
import Header from './Components/header';
import { AppDiv } from './Styles/styled';
import HomeNav from './Components/homeNav';
import TextHome from './Components/textHome';
import Login from './Components/login';
import Signin from './Components/signin';

function App() {
  const [shipClicked, setShipClicked] = useState({});
  const [userLogged, setUserLogged] = useState(false)

  const handleOnClickShipName = (ship) => {
    setShipClicked(ship);
  }

  const userHasLoggedIn = () => {
    setUserLogged(true);
  }



  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("isUserLogedIn")))
    setUserLogged(JSON.parse(localStorage.getItem("isUserLogedIn")));
  }, [])

  return (
    <AppDiv>
      <Router>
      <Header></Header>
      <HomeNav></HomeNav>
        <Routes>
          <Route exact path="/" element={<TextHome></TextHome>}></Route>
          <Route path="/spaceships" element={!userLogged ? <Navigate to='/login' replace /> : <Spaceships onClickShipName={handleOnClickShipName} ></Spaceships>}></Route>
          <Route path="/detail" element={<ShipDetail ship={shipClicked}></ShipDetail>}></Route>
          <Route path="/sign" element={<Signin></Signin>}></Route>
          <Route path="/login" element={userLogged ? <Navigate to='/' replace /> : <Login onSuccessLogin={userHasLoggedIn}/>}></Route>
        </Routes>
      </Router>   
      
      
    </AppDiv>
  );
}

export default App;
