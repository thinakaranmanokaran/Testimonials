import React from 'react'
import { PublicNavigation } from '../../datasets'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center ' >
                <div>
                    <div className='text-4xl font-logo'  >Rumoro</div>
                </div>
                <div>
                    <div className='flex items-center space-x-8 font-para_urban text-sm'  >
                        {
                            PublicNavigation.map((Data, index) => (
                                <div className={`${Data.title === "Register" ? "bg-bgyellow px-4 py-2 rounded-full  ml-6" : "text-base group relative overflow-hidden"}`} key={index}>
                                    <div>{Data.title}</div>
                                    <div className={`${Data.title === "Register" ? "" : "bg-bgdark w-full h-0.5 -mt-0.5 absolute -left-[100%] group-hover:left-0 transition-all duration-300  "}`} ></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header