import React, { useState } from 'react';
import Spaceships from './Components/spaceships';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShipDetail from './Components/shipDetail';
import Header from './Components/header';
import { AppDiv } from './Styles/styled';
import HomeNav from './Components/homeNav';
import TextHome from './Components/textHome';
import Login from './Components/log';
import Signin from './Components/signin';

function App() {
  const [shipClicked, setShipClicked] = useState({});
 

  const handleOnClickShipName = (ship) => {
    setShipClicked(ship);
  }

  return (
    <AppDiv>
      <Router>
      <Header></Header>
      <HomeNav></HomeNav>
        <Routes>
          <Route exact path="/" element={<TextHome></TextHome>}></Route>
          <Route path="/spaceships" element={<Spaceships onClickShipName={handleOnClickShipName} ></Spaceships>}></Route>
          <Route path="/detail" element={<ShipDetail ship={shipClicked}></ShipDetail>}></Route>
          <Route path="/sign" element={<Signin></Signin>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
      
      
    </AppDiv>
  );
}

export default App;
