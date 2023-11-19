import { useState } from 'react';
import Input from '../utils/Input';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>
            <h1>Sign up</h1>
            <Input label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} />
            <Input label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} />
            <Input label="Username" placeholder="Username" value={username} setValue={setUsername} />
            <Input label="Password" placeholder="Password" value={password} setValue={setPassword} />
            <Input label="Confirm Password" placeholder="Password" value={confirmPassword} setValue={setConfirmPassword} />
            <button>Sign up</button>
        </div>);
}

export default Signup;