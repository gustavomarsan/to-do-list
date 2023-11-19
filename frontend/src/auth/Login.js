import { useState } from 'react';
import Input from '../utils/Input';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Login</h1>
            <Input label="Email" placeholder="email" value={email} setValue={setEmail} />
            <Input label="Password" placeholder="password" value={password} setValue={setPassword} />
            <button>Login</button>
        </div>
    )
}

export default Login;