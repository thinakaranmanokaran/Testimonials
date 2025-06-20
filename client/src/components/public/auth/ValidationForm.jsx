import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';

const ValidationForm = ({ API_URL, setVerifiedUsername, setIdentifier, setEmail, setVerifiedEmail, handleOpenSignin, setGoToRegister }) => {
    const [identifier, setLocalIdentifier] = useState('');
    const [localemail, setLocalEmail] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [value, setValue] = useState('');
    const [validate, setValidate] = useState('yes');

    const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    const whitespaceRegex = /\s/;
    const capitalRegex = /[A-Z]/;

    const handleCheck = async () => {
        // Validation block
        const input = value.trim();

        if (!input) {
            setErrorMsg('Please enter a valid username or email.');
            setResult(null);
            return;
        }

        if (whitespaceRegex.test(input)) {
            setErrorMsg('No spaces allowed.');
            return;
        }

        if (isEmail(input)) {
            if (input.length > 50) {
                setErrorMsg('Email max 50 characters.');
                return;
            }
        } else {
            // Assuming it's a username
            if (input.length > 16) {
                setErrorMsg('Username max 16 characters.');
                return;
            }
            if (capitalRegex.test(input)) {
                setErrorMsg('Username must not have capital letters.');
                return;
            }
        }

        setLoading(true);
        setErrorMsg('');
        setResult(null);

        try {
            const res = await axios.post(`${API_URL}/api/public/identifier`, { identifier: input });

            if (res.data.exists) {
                setResult({ found: true, user: res.data.user });
                const user = res.data.user;
                setVerifiedUsername(user.username || input);
                setIdentifier(user.username || input);
                setEmail(user.email || input);                
                setVerifiedEmail(user.email || input);                
                handleOpenSignin();
            }// } else {
            //     setResult({ found: false });
            //     const { type } = error.response?.data || {};
            //     setErrorMsg(`No account found with this ${type === 'email' ? "email" : "username"}.`);
            //     alert("catch")
            //     if (type === 'email') {
            //         setEmail(input);
            //     } else {
            //         setIdentifier(input);
            //     }

            //     setGoToRegister(true);
            // }
        } catch (error) {
            const { type, message } = error.response?.data || {};

            if (error.response?.status === 404) {
                setResult({ found: false });
                setErrorMsg(`No account found with this ${type === 'email' ? "email" : "username"}.`);
                if (type === 'email' || isEmail(input)) {
                    setEmail(input);
                } else {
                    setIdentifier(input);
                }                
                setGoToRegister(true);
            } else {
                console.error('Error identifying user:', error);
                setErrorMsg(message || 'Server error');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4 w-3/4">
            <InputBox
                type="text"
                label={errorMsg || "Username or Email"}
                error={errorMsg}
                setError={setErrorMsg}
                value={value}
                validate={validate}
                setValue={(val) => {
                    setValue(val);
                    setLocalIdentifier(val);
                    setLocalEmail(val);
                }}
            />

            <Button
                onClick={handleCheck}
                loading={loading}
                inputValue={value}
                validate={validate === 'yes'}
                className="w-full"
            />

            <h4 className="text-base text-center mb-5 tracking-tight">
                To verify that your account exists.
            </h4>

            <div className="space-x-1 text-[15px] flex justify-center -mt-2">
                <span className="text-textgrey opacity-75">If you're sure you don't have an account?</span>
                <span className="underline cursor-pointer" onClick={() => setGoToRegister(true)}>Register</span>
            </div>
        </div>
    );
};

export default ValidationForm;
