import { useNavigate } from 'react-router-dom';
import { NavHome, NavShip, DivNav } from '../Styles/styled';

const HomeNav = () => {
    const navigate = useNavigate()

    const clickHome = () => {
        navigate("/");
      }
    
      const clickShip = () => {
        navigate("/spaceships");
      }

    return (
        <DivNav>
            <NavHome onClick={clickHome}>Home</NavHome>
            <NavShip onClick={clickShip}>Spaceship</NavShip>
        </DivNav>
    )
}

export default HomeNav;