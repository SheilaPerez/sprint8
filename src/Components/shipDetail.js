const ShipDetail = ({ship}) => {
    return (
        <>
            <p>Name: {ship.name}</p>
            <p>Capacity: {ship.cargo_capacity}</p>
            <p>Cost: {ship.cost_in_credits}</p>
            <p>crew: {ship.crew}</p>
        </>
    )
}

export default ShipDetail;