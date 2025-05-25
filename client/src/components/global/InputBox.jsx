import React, { useState } from 'react';

const InputBox = ({ type="text", label="name" }) => {
    const [value, setValue] = useState('');

    return (
        <div className="relative w-full ">
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="peer p-3 pt-4 border-2 border-bgdark rounded-xl w-full placeholder-transparent focus:outline-none"
            />
            <label
                className={`absolute left-3 transition-all duration-300 bg-white px-1 text-bgdark pointer-events-none 
          ${value ? '-top-1 text-xs' : 'top-1/2 -translate-y-1/2 text-base'} 
          peer-focus:-top-1 peer-focus:text-xs peer-focus:-translate-y-0`}
            >
                {label}
            </label>
        </div>
    );
};

export default InputBox;
