import React, { useRef, useState, useEffect } from 'react';

const OTPInput = ({ length = 6, onChangeOTP }) => {
    const [otp, setOTP] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        onChangeOTP(otp.join(''));
    }, [otp]);

    const handleChange = (element, index) => {
        const val = element.value.replace(/\D/, ''); // Numbers only
        if (val) {
            const newOTP = [...otp];
            newOTP[index] = val;
            setOTP(newOTP);

            // Move focus to next input
            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOTP = [...otp];
            if (otp[index]) {
                newOTP[index] = '';
                setOTP(newOTP);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
        const newOTP = [...otp];
        pasteData.forEach((char, idx) => {
            if (!/\D/.test(char)) {
                newOTP[idx] = char;
            }
        });
        setOTP(newOTP);
        inputRefs.current[pasteData.length - 1]?.focus();
    };

    return (
        <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bgdark transition"
                />
            ))}
        </div>
    );
};

export default OTPInput;
