import { Name, Model, Div, DivBoxName } from '../Styles/styled';

const ShipList = ({ ships, ClickedName }) => {

    const handleClickShipName = (ship) => {
        ClickedName(ship);
    }

    return (
        <Div>
            {ships.map((ship, index) => {
                return (
                    <DivBoxName>  
                        <Name onClick={() => handleClickShipName(ship)}>{ship.name}</Name>
                        <Model>{ship.model}</Model>    
                    </DivBoxName>
                )
            })}
        </Div>
    )
}

export default ShipList;
