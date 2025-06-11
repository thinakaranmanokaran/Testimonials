import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';

const SigninForm = ({ verifiedUsername, API_URL, handleOpenRegister }) => {
    const [username, setUsername] = useState(verifiedUsername || '');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSignIn = async () => {
        if (!username || !password) {
            setErrorMsg('Please enter both email and password.');
            return;
        }

        setLoading(true);
        setErrorMsg('');

        try {
            const res = await axios.post(`${API_URL}/api/public/signin`, { username, password });
            alert('Login successful:', res.data); 
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMsg(error.response?.data?.message || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='space-y-4 w-3/4'>
            <InputBox type='text' label='Username' value={username} setValue={setUsername} />
            <InputBox
                type='password'
                showPassword='yes'
                label={errorMsg || 'Password'}
                value={password}
                error={errorMsg}
                setValue={setPassword}
            />
            <Button onClick={handleSignIn}  validate={false} loading={loading}  className='w-full' inputValue={password}/>
            <div className='space-x-1 text-[15px] flex justify-center mt-3'>
                <span className='text-textgrey opacity-75'>If you're sure, you don't have an Account?</span>
                <span className='underline cursor-pointer' onClick={handleOpenRegister}>Register</span>
            </div>
        </div>
    );
};

export default SigninForm;
