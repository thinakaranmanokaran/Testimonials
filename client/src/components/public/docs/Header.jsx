import React from 'react'
import { Link } from "react-router-dom";
import images from '../../../assets/images';

const Header = () => {
    return (
        <div className='  backdrop-blur-lg w-full fixed top-0 z-20 h-12 flex items-center px-4 ' >
            <div className='flex items-center h-full w-full  justify-between' >
                <div>
                    <Link to="/" >
                        <img src={images.Logo} alt="" className='w-9' srcset="" />
                    </Link>
                </div>
                <div className='flex space-x-4 font-para_inter text-sm text-textgrey items-center ' >
                    <Link>Docs</Link>
                    <Link>Example</Link>
                    <Link className='bg-bgyellow text-black px-3 py-1.5 rounded-xl  ' >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Header