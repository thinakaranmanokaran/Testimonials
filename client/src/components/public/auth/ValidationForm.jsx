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

    const handleCheck = async () => {
        if (!identifier.trim()) {
            setErrorMsg('Please enter a valid username or email.');
            setResult(null);
            return;
        }

        setLoading(true);
        setErrorMsg('');
        setResult(null);

        try {
            const res = await axios.post(`${API_URL}/api/public/identifier`, { identifier });

            if (res.data.exists) {
                setResult({ found: true, user: res.data.user });
                setVerifiedUsername(res.data.user.username || identifier);
                handleOpenSignin();
            } else {
                setResult({ found: false });
                setErrorMsg('No account found with this username or email.');
                setIdentifier(identifier);
                setGoToRegister(true);
            }
        } catch (error) {
            if (error.response?.status === 404) {
                setResult({ found: false });
                setErrorMsg('No account found with this username or email.');
                setIdentifier(identifier);
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
