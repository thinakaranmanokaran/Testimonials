import React, { useState, useEffect } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const InputBox = ({
    type = "text",
    label = "name",
    showPassword = "no",
    value,
    onChange,
    setValue,
    error, setError,
    validate = "no"
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

    useEffect(() => {
        if (validate === "yes") {
            if (value && value.length < 6) {
                setError("Minimum 6 characters required");
            } else {
                setError("");
            }
        }
    }, [value, validate]);

    return (
        <div className="relative w-full">
            <input
                type={inputType}
                value={value}
                onChange={onChange || ((e) => setValue && setValue(e.target.value))}
                className={`peer p-3 pt-4 border-2 ${error ? "border-red-400" : "border-bgdark"} rounded-xl w-full placeholder-transparent focus:outline-none ${type === "password" || isPasswordVisible ? "pr-10" : "pr-3"
                    }`}
            />
            <label
                className={`absolute left-3 transition-all duration-300 bg-white px-1 ${error ? "text-red-400" : "text-bgdark"} pointer-events-none 
                ${value ? '-top-1.5 text-sm' : 'top-1/2 -translate-y-1/2 text-base'} 
                peer-focus:-top-1.5 peer-focus:text-sm peer-focus:-translate-y-0`}
            >
                {error ? error : label}
            </label>

            {showPassword === 'yes' && (
                <div className="absolute p-1 right-0 h-full w-12 top-0">
                    <button
                        type="button"
                        className="focus:border-2 rounded-xl w-full h-full cursor-pointer flex justify-center items-center"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <VscEyeClosed className="size-6" />
                        ) : (
                            <VscEye className="size-6" />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default InputBox;
