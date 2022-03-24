import { ImageShip } from '../Styles/styled';

const ShipDetail = ({ ship }) => {
    const getShipImg = (shipUrl) => {
        const slicedUrl = shipUrl.slice(0, shipUrl.length - 1);
        const shipId = slicedUrl.substring(slicedUrl.length, slicedUrl.lastIndexOf('/')+1)
        return `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`
    }

    return (
        <>
            <ImageShip src={getShipImg(ship.url)} />
            <p>Name: {ship.name}</p>
            <p>Capacity: {ship.cargo_capacity}</p>
            <p>Cost: {ship.cost_in_credits}</p>
            <p>crew: {ship.crew}</p>
        </>
    )
}

export default ShipDetail;