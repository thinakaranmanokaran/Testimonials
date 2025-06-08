import React, { useState } from 'react';

const Button = ({
    text = "Submit",
    className,
    onClick,
    loading = false,
    inputValue = "",
    validate = false,
    minLength = 6,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const isInvalid = validate && inputValue.trim().length < minLength;
    const isDisabled = !inputValue.trim() || isInvalid || loading;

    const handleClick = () => {
        if (isDisabled || loading || isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (onClick) onClick();
        }, 5000);
    };

    return (
        <button
            className={`bg-bgdark text-white h-14 rounded-2xl w-full flex justify-center items-center gap-2 
                ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} 
                ${className}`}
            onClick={isDisabled ? null : onClick}
            disabled={isDisabled}
        >
            {loading ? (
                <span className='w-6 h-6 border-[#ffffff60] border-t-white border-[3px] animate-spin rounded-full'></span>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default Button;