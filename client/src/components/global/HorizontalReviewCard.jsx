import React from 'react'
import images from '../../assets/images'

const HorizontalReviewCard = ({ image = images.HeroUser, name= "Robert Jr.", feedback= "The attention to detail and clarity of execution were outstanding. It felt like working with someone who truly understood my brand.", stars= 4, link= "" }) => {
    return (
        <div className='bg-white shadow-md p-4 rounded-3xl items-center flex space-x-3 w-fit min-w-80 max-w-96 ' >
            <div>
                <img src={image} className='min-w-16 w-16 max-w-16 h-16 object-cover object-center rounded-full' alt="" srcset="" />
            </div>
            <div>
                <div className='text-lg font-title_inter text-textdark ' >{name}</div>
                <div className='text-base font-para_inter text-textgrey tracking-tight leading-tight line-clamp-2' >{feedback}</div>
            </div>
        </div>
    )
}

export default HorizontalReviewCard