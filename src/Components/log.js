import { DivCount, Input, AccountBtn, Count } from '../Styles/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clickLogin, setClickLogin] = useState(false);
    useEffect(() => {
        const registerUser = localStorage.getItem('user');
        if (registerUser.email === email && registerUser.password === password) {
            navigate("/spaceships");
        }
        
    }, [clickLogin]);

    return (
        <DivCount>
            <Count>log in</Count>
            <Input type="email" value={email} onChange={(target) => {setEmail(target.value)}} placeholder="Email Address"></Input>
            <Input type="password" value={password} onChange={(target) => {setPassword(target.value)}} placeholder="Password"></Input>
            <AccountBtn type="button" onClick={() => setClickLogin(true)}>Sign In</AccountBtn>
        </DivCount>

    )
}

export default Login;