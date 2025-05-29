import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const InputBox = ({ type = "text", label = "name", showPassword = "no" }) => {
    const [value, setValue] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

    return (
        <div className="relative w-full ">
            <input
                type={inputType}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`peer p-3 pt-4 border-2 border-bgdark rounded-xl w-full placeholder-transparent focus:outline-none ${type === "password" || isPasswordVisible ? "pr-10" : "pr-3"} `}
            />
            <label
                className={`absolute left-3 transition-all duration-300 bg-white px-1 text-bgdark pointer-events-none 
          ${value ? '-top-1.5 text-sm' : 'top-1/2 -translate-y-1/2 text-base'} 
          peer-focus:-top-1.5 peer-focus:text-sm peer-focus:-translate-y-0`}
            >
                {label}
            </label>
            {
                showPassword === 'yes' && (
                    <div className='absolute p-1 right-0 h-full  w-12  top-0 '>
                        <button className=' focus:border-2 rounded-xl w-full h-full cursor-pointer flex justify-center items-center ' onClick={togglePasswordVisibility} >
                            { isPasswordVisible ? <VscEyeClosed className='size-6' /> : <VscEye className='size-6' /> }
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default InputBox;
