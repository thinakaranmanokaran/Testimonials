import React, { useState } from 'react';
import axios from 'axios';
import { Button, OTPInput } from '../../';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom"

const OTPForm = ({ API_URL, email }) => {
    const [otpValue, setOtpValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const handleOtpChange = (value) => {
        setOtpValue(value);
    };



    const verifyOTP = async () => {
        if (otpValue.length !== 6) {
            setErrorMsg('Please enter the full 6-digit OTP');
            return;
        }
        // alert("Verifying:", identifier, otpValue);

        setLoading(true);
        setErrorMsg('');

        try {
            const res = await axios.post(`${API_URL}/api/public/verify-hashedotp`, {
                email: email, // email passed from Register
                otp: otpValue,
            });

            const token = res.data.token;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            console.log("Decoded user:", decoded);

            alert('OTP verified successfully!');
            // Redirect or show login here
            navigate("/")
        } catch (err) {
            const msg = err.response?.data?.message || 'Failed to verify OTP';
            setErrorMsg(msg);
            console.error('OTP verification failed:', msg);
            // alert(identifier, otpValue);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col space-y-4 items-center justify-center">
            <h2 className="text-xl font-semibold">Enter the 6-digit code</h2>
            {/* <p className="text-sm text-gray-600 mt-2 w-3/4">
                We've sent a verification code to your email: <span className="font-medium text-black">{identifier}</span>.
                Please check your inbox and enter the code below to verify your account.
            </p> */}

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
                        axios.post(`${API_URL}/api/public/send-otp`, { email: email }).then(() =>
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
