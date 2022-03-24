import React, { useState } from 'react';
import Spaceships from './Components/spaceships';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShipDetail from './Components/shipDetail';

function App() {
  const [shipClicked, setShipClicked] = useState({});

  const handleOnClickShipName = (ship) => {
    setShipClicked(ship);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Spaceships onClickShipName={handleOnClickShipName} ></Spaceships>}></Route>
          <Route path="/detail" element={<ShipDetail ship={shipClicked}>adsf</ShipDetail>}></Route>
        </Routes>
        

      </Router>
      
      
    </div>
  );
}

export default App;
