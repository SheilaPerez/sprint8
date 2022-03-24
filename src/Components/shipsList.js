import { Name,NameModel, Model } from '../Styles/styled';

const ShipList = ({ ships, ClickedName }) => {

    const handleClickShipName = (ship) => {
        ClickedName(ship);
    }

    return (
        < >
            {ships.map((ship, index) => {
                return (
                    <div>  
                        <Name onClick={() => handleClickShipName(ship)}>{index+1} Name: <NameModel>{ship.name}</NameModel></Name> 
                        <Model>Model:<NameModel>{ship.model}</NameModel></Model>    
                    </div>
                )
            })}
        </>
    )
}

export default ShipList;
