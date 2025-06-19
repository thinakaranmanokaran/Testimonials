import React, { useState } from 'react';
import { InputBox, Button } from '../../../components';
import axios from 'axios';

const ValidationForm = ({ API_URL, setVerifiedUsername, setIdentifier, handleOpenSignin, setGoToRegister }) => {
    const [identifier, setLocalIdentifier] = useState('');
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
                setVerifiedUsername(res.data.user.username || input);
                handleOpenSignin();
            } else {
                setResult({ found: false });
                setErrorMsg('No account found with this username or email.');
                setIdentifier(input);
                setGoToRegister(true);
            }
        } catch (error) {
            if (error.response?.status === 404) {
                setResult({ found: false });
                setErrorMsg('No account found with this username or email.');
                setIdentifier(input);
            } else {
                console.error('Error identifying user:', error);
                setErrorMsg(error.response?.data?.message || 'Server error');
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
