import React from 'react'

const Button = ({ text="submit", className }) => {
    return (
        <button className={`bg-bgdark text-white w-full h-14 cursor-pointer  rounded-2xl  flex justify-center items-center  ${className}`} >
            <span>{text}</span>
            {/* <span className='w-6 h-6 border-[#ffffff60] border-t-white border-[3px] animate-spin  rounded-full ' ></span> */}
        </button>
    )
}

export default Button