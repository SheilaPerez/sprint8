import { useEffect, useState } from 'react';
import { DivCount, Input, Count, AccountBtn } from '../Styles/styled';

const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginClicked, setLoginClicked] = useState(false);

    useEffect(() => {
        const userSession = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userSession));
    }, [loginClicked])
    
    const handleClickLogIn = () => {
        console.log('entra')
        setLoginClicked(true)
    }

    return (
        <DivCount>
            <Count>Create your account</Count>
            <Input type="text" value={name} placeholder="First Name" onChange={(e) => {setName(e.target.value)}}></Input>
            <Input type="email" value={email} placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}></Input>
            <Input type="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></Input>
            <AccountBtn type="button" onClick={handleClickLogIn}>Create Account</AccountBtn>
        </DivCount>
    )
}

export default Signin;