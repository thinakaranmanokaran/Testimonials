import React, { useState } from 'react';
import axios from 'axios';
import { Button, OTPInput } from '../../';

const OTPForm = ({ API_URL, identifier }) => {
    const [otpValue, setOtpValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleOtpChange = (value) => {
        setOtpValue(value);
    };



    const verifyOTP = async () => {
        if (otpValue.length !== 6) {
            setErrorMsg('Please enter the full 6-digit OTP');
            return;
        }
        
        setLoading(true);
        setErrorMsg('');
        
        try {
            const res = await axios.post(`${API_URL}/api/public/verify-otp`, {
                email: identifier, // email passed from Register
                otp: otpValue,
            });
            
            alert('OTP verified successfully!');
            // Redirect or show login here
        } catch (err) {
            const msg = err.response?.data?.message || 'Failed to verify OTP';
            setErrorMsg(msg);
            console.error('OTP verification failed:', msg);
            alert(identifier, otpValue);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col space-y-4 items-center justify-center">
            <h2 className="text-xl ">Enter the 6-digit code</h2>
            <OTPInput onChangeOTP={handleOtpChange} />
            {/* <button
                onClick={verifyOTP}
                disabled={loading}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                {loading ? 'Verifying...' : 'Verify OTP'}
            </button> */}

            <Button text='Verify' onClick={verifyOTP} loading={loading} inputValue={otpValue} validate="yes" />
            {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
            <p className="mt-4 text-gray-600 text-sm">
                Didn’t receive code?{' '}
                <span
                    onClick={() =>
                        axios.post(`${API_URL}/api/public/send-otp`, { email: identifier }).then(() =>
                            alert('OTP resent to your email')
                        )
                    }
                    className="text-blue-600 cursor-pointer"
                >
                    Resend
                </span>
            </p>
        </div>
    );
};

export default OTPForm;
