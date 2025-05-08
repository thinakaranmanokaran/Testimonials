import React from 'react'

const Stats = ({ number= 200, title="Users" }) => {
    return (
        <div className='flex flex-col items-center ' >
            <div className='font-title text-8xl flex flex-col items-center ' >
                <div>{number}+</div>
                <div className=' text-4xl text-textgrey ' >{title}</div>
            </div>
        </div>
    )
}

export default Stats