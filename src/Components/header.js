import { LogoImg, ImgDiv, LoginBtn, SignInBtn, LogSign, P } from '../Styles/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClickLogin  = () => {
        navigate("/login");
    }

    const handleClickSignIn = () => {
        navigate("/sign");
    }
    return (
        <>
            <LogSign>
                <LoginBtn onClick={handleClickLogin}>log in</LoginBtn>
                <P>//</P>
                <SignInBtn onClick={handleClickSignIn}>sign in</SignInBtn>
            </LogSign>
            <ImgDiv>
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"></LogoImg>
            </ImgDiv>  

        </>

    )
}

export default Header;