import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SigninForm = ({ verifiedUsername, API_URL, handleOpenRegister }) => {
    const [username, setUsername] = useState(verifiedUsername || '');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ username: '', password: '', general: '' });

    const navigate = useNavigate();

    const handleSignIn = async () => {
        if (!username || !password) {
            setErrorMsg({
                username: !username ? 'Username is required' : '',
                password: !password ? 'Password is required' : '',
                general: 'Please fill in all fields',
            });
            return;
        }

        setLoading(true);
        setErrorMsg({ username: '', password: '', general: '' });

        try {
            const res = await axios.post(`${API_URL}/api/public/signin`, { username, password });
            alert('Login successful:', res.data);
            const token = res.data.token;
            localStorage.setItem('token', token);
            
            navigate('/'); // Redirect to home or dashboard after successful login
        } catch (error) {
            const status = error.response?.status;
            const message = error.response?.data?.message || 'Login failed';

            if (status === 404) {
                setErrorMsg({ username: message, password: '', general: '' });
            } else if (status === 401) {
                setErrorMsg({ username: '', password: message, general: '' });
            } else if (status === 500) {
                setErrorMsg({ username: '', password: '', general: 'Server error. Please try again later.' });
            } else {
                setErrorMsg({ username: '', password: '', general: message });
            }
        } finally {
            setLoading(false);
        }
    };


    const handleUsernameChange = (val) => {
        setUsername(val);
        if (errorMsg.username) setErrorMsg({ ...errorMsg, username: '' });
    };

    const handlePasswordChange = (val) => {
        setPassword(val);
        if (errorMsg.password) setErrorMsg({ ...errorMsg, password: '' });
    };


    return (
        <div className='space-y-4 w-3/4'>
            <InputBox type='text' label='Username' value={username} setValue={handleUsernameChange} error={errorMsg.username} />
            <InputBox
                type='password'
                showPassword='yes'
                label='Password'
                value={password}
                error={errorMsg.password}
                setValue={handlePasswordChange}
            />
            {/* {errorMsg.general && (
                <div className='text-red-500 text-sm text-center'>{errorMsg.general}</div>
            )} */}
            <Button onClick={handleSignIn} validate={false} loading={loading} className='w-full' inputValue={password} />
            <div className='space-x-1 text-[15px] flex justify-center mt-3'>
                <span className='text-textgrey opacity-75'>If you're sure, you don't have an Account?</span>
                <span className='underline cursor-pointer' onClick={handleOpenRegister}>Register</span>
            </div>
        </div>
    );
};

export default SigninForm;
