import React from 'react'
import { PublicNavigation } from '../../datasets'
import images from '../../assets/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center bg-white p-3 px-6 w-full fixed top-0 min-h-12 ' >
                <Link to="/" className='flex items-center space-x-2 ' >
                    <img src={images.Logo} className=' bg-bgyellow p-2.5 w-12 rounded-2xl  '  alt="" srcset="" />
                    <div className='text-4xl font-logo pt-1'  >Rumoro</div>
                </Link>
                <div>
                    <div className='flex items-center space-x-8 font-para_inter text-sm '  >
                        {
                            PublicNavigation.map((Data, index) => (
                                <Link to={Data.link} className={`${Data.title === "Register" ? "bg-bgyellow px-4 py-2 rounded-full  ml-6" : "text-base group relative overflow-hidden"}`} key={index}>
                                    <div>{Data.title}</div>
                                    <div className={`${Data.title === "Register" ? "" : "bg-bgdark w-full h-0.5 -mt-0.5 absolute -left-[100%] group-hover:left-0 transition-all duration-300  "}`} ></div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header