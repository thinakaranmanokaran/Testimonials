import React from 'react'
import images from '../../assets/images'

const Register = () => {
    return (
        <div className='bg-bggrey h-full w-full min-h-screen' >
            <div className='flex justify-center items-center h-screen w-full  ' >
                <div className='bg-white h-full w-full max-w-3/4 max-h-3/4 overflow-auto  flex p-4 rounded-4xl ' > 
                    <div className='w-3/5  ' >
                        <div>Register</div>
                    </div>
                    <div className='w-2/5  h-full rounded-3xl overflow-hidden' >
                        <img src={images.Register} className='h-full w-full object-cover object-center ' alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register