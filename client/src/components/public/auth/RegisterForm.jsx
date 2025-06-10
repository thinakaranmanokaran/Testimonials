import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const RegisterForm = ({ identifier, API_URL, handleOpenSignin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(identifier);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleRegister = async () => {
        if (!name || !email || !username || !password) {
            setErrorMsg("Please fill all the fields.");
            return;
        }

        setLoading(true);
        setErrorMsg('');

        try {
            const res = await axios.post(`${API_URL}/api/public/register`, {
                name, email, username, password,
            });

            const token = res.data.token;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            console.log("Decoded user:", decoded);

            alert('Registered successfully!');
            setName('');
            setEmail('');
            setUsername('');
            setPassword('');
        } catch (err) {
            console.error('Registration failed:', err);
            alert('Registration failed:', err);
            setErrorMsg(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full grid grid-cols-2 gap-4'>
                <InputBox type='text' label='Name' value={name} setValue={setName} />
                <InputBox type='email' label='Email' value={email} setValue={setEmail} />
                <InputBox type='text' label='Username' value={username} setValue={setUsername} />
                <InputBox type='password' showPassword='yes' label='Password' value={password} setValue={setPassword} />
                <Button className="col-span-2" onClick={handleRegister} disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </Button>
            </div>
            {errorMsg && <p className="text-red-500 text-sm mt-2 text-center col-span-2">{errorMsg}</p>}
            <div className='space-x-1 text-[15px] flex justify-center mt-4'>
                <span className='text-textgrey opacity-75'>Already have an Account?</span>
                <span className='underline cursor-pointer' onClick={handleOpenSignin}>SignIn</span>
            </div>
        </div>
    );
};

export default RegisterForm;
