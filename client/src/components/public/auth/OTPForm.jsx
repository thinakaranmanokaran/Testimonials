import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Button, OTPInput } from '../../';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const OTPForm = ({ API_URL, email }) => {
    const [otpValue, setOtpValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [timeLeft, setTimeLeft] = useState('05:00');
    const [isExpired, setIsExpired] = useState(false);

    const navigate = useNavigate();

    const storedEmail = useMemo(() => {
        if (email) {
            localStorage.setItem('email', email);
            return email;
        }
        return localStorage.getItem('email');
    }, [email]);

    const handleOtpChange = (value) => {
        setOtpValue(value);
    };

    useEffect(() => {
        let expiryTime = parseInt(localStorage.getItem('otp_expiry'), 10);
        if (!expiryTime || isNaN(expiryTime)) {
            expiryTime = Date.now() + 5 * 60 * 1000;
            localStorage.setItem('otp_expiry', expiryTime);
        }

        const interval = setInterval(() => {
            const remaining = expiryTime - Date.now();

            if (remaining <= 0) {
                clearInterval(interval);
                setTimeLeft('00:00');
                setIsExpired(true);
                localStorage.removeItem('otp_expiry');
                alert('OTP has expired. Please request a new one.');
                return;
            }

            const minutes = String(Math.floor(remaining / 60000)).padStart(2, '0');
            const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
            setTimeLeft(`${minutes}:${seconds}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const verifyOTP = async () => {
        if (isExpired) {
            setErrorMsg('OTP has expired. Please request a new one.');
            return;
        }

        if (otpValue.length !== 6) {
            setErrorMsg('Please enter the full 6-digit OTP');
            return;
        }

        setLoading(true);
        setErrorMsg('');

        try {
            const res = await axios.post(`${API_URL}/api/public/verify-hashedotp`, {
                email: storedEmail,
                otp: otpValue,
            });

            const token = res.data.token;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            console.log('Decoded user:', decoded);

            alert('OTP verified successfully!');
            navigate('/');
        } catch (err) {
            const msg = err.response?.data?.message || 'Failed to verify OTP';
            setErrorMsg(msg);
            console.error('OTP verification failed:', msg);
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        try {
            await axios.post(`${API_URL}/api/public/send-otp`, { email: storedEmail });
            alert('OTP resent to your email');

            const newExpiry = Date.now() + 5 * 60 * 1000;
            localStorage.setItem('otp_expiry', newExpiry);
            setIsExpired(false); // reset state
        } catch (err) {
            console.error('Failed to resend OTP:', err);
            alert('Failed to resend OTP. Please try again later.');
        }
    };

    return (
        <div className="flex flex-col space-y-4 items-center justify-center w-4/5 -mt-10">
            <h2 className="text-2xl font-mid_inter tracking-tighter">Check Your Email</h2>
            <div className="tracking-tight text-center text-textgrey">
                <span className="opacity-75">We've sent a verification code to </span>
                <span className="text-bgdark opacity-100 font-mid_inter">{storedEmail || 'your email'}</span>
                <span className="opacity-75">. The code has just landed in your inbox!</span>
            </div>

            <div className="flex flex-col items-center space-y-4">
                <OTPInput onChangeOTP={handleOtpChange} />
                <Button
                    text="Verify"
                    onClick={verifyOTP}
                    loading={loading}
                    inputValue={otpValue}
                    validate="yes"
                    disabled={isExpired}
                />
            </div>

            <div className="tracking-tight flex text-textgrey">
                <span className="opacity-75">This code will expire in </span>
                <span className="text-bgdark opacity-100 font-mid_inter w-12 ml-1">{timeLeft}</span>
            </div>

            {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}

            <p className="mt-4 text-gray-600 text-sm">
                Didn’t receive the code?{' '}
                <span onClick={handleResendOTP} className="text-blue-600 underline cursor-pointer">
                    Resend
                </span>
            </p>
        </div>
    );
};

export default OTPForm;
