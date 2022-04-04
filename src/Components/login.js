import { DivCount, Input, AccountBtn, Count } from '../Styles/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onSuccessLogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clickLogin, setClickLogin] = useState(false);

    useEffect(() => {
        const registerUser = JSON.parse(localStorage.getItem('user'));
        if (registerUser && (registerUser.email === email && registerUser.password === password)) {
            localStorage.setItem("isUserLogedIn", true);
            onSuccessLogin();
            navigate("/");
        } else {
            setClickLogin(false);
        }
    }, [clickLogin]);

    return (
        <DivCount>
            <Count>log in</Count>
            <Input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email Address"></Input>
            <Input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"></Input>
            <AccountBtn type="button" onClick={() => setClickLogin(true)}>Sign In</AccountBtn>
        </DivCount>

    )
}

export default Login;