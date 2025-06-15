import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const RegisterForm = ({ identifier, API_URL, handleOpenSignin, handleOpenOTPForm, setIdentifier }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(identifier);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        general: ''
    });

    const handleRegister = async () => {
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const alphaRegex = /[A-Za-z]/;
        const whitespaceRegex = /\s/;
        const capitalRegex = /[A-Z]/;

        const newErrors = {
            name: '',
            email: '',
            username: '',
            password: '',
            general: ''
        };

        // Name validation
        if (!name) {
            newErrors.name = 'Enter your name';
        } else if (/\d/.test(name)) {
            newErrors.name = 'No numbers in name';
        } else if (specialCharRegex.test(name)) {
            newErrors.name = 'No symbols in name';
        } else if (whitespaceRegex.test(name)) {
            newErrors.name = 'No spaces';
        }

        // Email validation
        if (!email) {
            newErrors.email = 'Enter your email';
        } else if (whitespaceRegex.test(email)) {
            newErrors.email = 'No spaces';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email';
        } else if (email.length > 50) {
            newErrors.email = 'Max 50 characters';
        }

        // Username validation
        if (!username) {
            newErrors.username = 'Enter a username';
        } else if (username.length > 16) {
            newErrors.username = 'Max 16 characters';
        } else if (whitespaceRegex.test(username)) {
            newErrors.username = 'No spaces';
        } else if (capitalRegex.test(username)) {
            newErrors.username = 'No capital letters allowed';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Enter a password';
        } else if (password.length < 7) {
            newErrors.password = 'Min 7 characters';
        } else if (!specialCharRegex.test(password)) {
            newErrors.password = 'Add 1 special char';
        } else if (!numberRegex.test(password)) {
            newErrors.password = 'Add 1 number';
        } else if (!alphaRegex.test(password)) {
            newErrors.password = 'Add 1 letter';
        } else if (whitespaceRegex.test(password)) {
            newErrors.password = 'No spaces';
        }


        if (Object.values(newErrors).some(Boolean)) {
            setErrorMsg(newErrors);
            return;
        }

        setLoading(true);
        setErrorMsg({ name: '', email: '', username: '', password: '', general: '' });

        try {
            const res = await axios.post(`${API_URL}/api/public/register`, {
                name, email, username, password
            });

            alert('Registered successfully!');
            setName('');
            setEmail('');
            setUsername('');
            setPassword('');

            // After successful registration
            // await axios.post(`${API_URL}/api/public/send-otp`, { email });
            setIdentifier(email);  // ✅ This updates the parent with email for OTPForm
            handleOpenOTPForm();  // ✅ Now OTPForm will receive correct identifier


        } catch (err) {
            const status = err.response?.status;
            const msg = err.response?.data?.message || 'Registration failed';

            if (status === 400 && msg === 'All fields are required') {
                setErrorMsg({ ...errorMsg, general: msg });
            } else if (status === 409) {
                if (msg.includes('Email')) {
                    setErrorMsg({ ...errorMsg, email: msg });
                } else if (msg.includes('Username')) {
                    setErrorMsg({ ...errorMsg, username: msg });
                } else {
                    setErrorMsg({ ...errorMsg, general: msg });
                }
            } else if (status === 500) {
                setErrorMsg({ ...errorMsg, general: 'Something went wrong. Please try again later.' });
            } else {
                setErrorMsg({ ...errorMsg, general: msg });
            }

            console.error('Registration failed:', err);
            alert('Registration failed:', err);
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

    const handleNameChange = (val) => {
        setName(val);
        if (errorMsg.name) setErrorMsg({ ...errorMsg, name: '' });
    };

    const handleEmailChange = (val) => {
        setEmail(val);
        if (errorMsg.email) setErrorMsg({ ...errorMsg, email: '' });
    };

    return (
        <div className='w-full'>
            <div className='w-full grid grid-cols-2 gap-4'>
                <InputBox type='text' label='Name' value={name} setValue={handleNameChange} error={errorMsg.name} />
                <InputBox type='email' label='Email' value={email} setValue={handleEmailChange} error={errorMsg.email} />
                <InputBox type='text' label='Username' value={username} setValue={handleUsernameChange} error={errorMsg.username} />
                <InputBox
                    type='password'
                    showPassword='yes'
                    label='Password'
                    value={password}
                    setValue={handlePasswordChange}
                    error={errorMsg.password}
                />
                <Button
                    className="col-span-2"
                    onClick={handleRegister}
                    loading={loading}
                    inputValue={name && username && email && password}
                />
            </div>

            {errorMsg.general && (
                <p className="text-red-500 text-sm mt-2 text-center col-span-2">{errorMsg.general}</p>
            )}

            <div className='space-x-1 text-[15px] flex justify-center mt-4'>
                <span className='text-textgrey opacity-75'>Already have an Account?</span>
                <span className='underline cursor-pointer' onClick={handleOpenSignin}>SignIn</span>
            </div>
        </div>
    );
};

export default RegisterForm;
