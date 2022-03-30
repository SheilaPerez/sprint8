import { ImageShip, DetailsShip, DivDetails, NameShip } from '../Styles/styled';

const ShipDetail = ({ ship }) => {
    const getShipImg = (shipUrl) => {
        const slicedUrl = shipUrl.slice(0, shipUrl.length - 1);
        const shipId = slicedUrl.substring(slicedUrl.length, slicedUrl.lastIndexOf('/')+1)
        return `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`
    }

    return (
        <DivDetails>
            <ImageShip src={getShipImg(ship.url)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://i.pinimg.com/474x/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457--error-star-wars.jpg";
                }}
            />
            <NameShip>{ship.name}</NameShip>
            <DetailsShip>Model: {ship.model}</DetailsShip>
            <DetailsShip>Capacity: {ship.cargo_capacity}</DetailsShip>
            <DetailsShip>Cost: {ship.cost_in_credits}</DetailsShip>
            <DetailsShip>crew: {ship.crew}</DetailsShip>
            <DetailsShip>Manufacturer: {ship.manufacturer}</DetailsShip>

        </DivDetails>
    )
}

export default ShipDetail;