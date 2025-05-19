import React from 'react'

const Title = ({ title="Get started with Motion for React", size="5xl" }) => {
    return (
        <div className={`text-${size} font-title_inter tracking-tighter w-2/4`} >{title}</div>
    )
}

export default Title