import React, { useState } from 'react'
import images from '../../assets/images'
import { InputBox } from '../../components';

const Register = () => {

    const [verify, setVerify] = useState(false);

    const handleVerify = () => {
        setVerify(true);
    }

    const RegisterForm = () => {
        return (
            <div className='w-full' >
                <div  className='w-full grid grid-cols-2 gap-4 ' >
                    <InputBox type='text' label='Name' />
                    <InputBox  type='email' label='Email' />
                    <InputBox  type='password' label='Password' />
                    <InputBox  type="number" label='Mobile No.'  />
                </div>
            </div>
        )
    }

    const VerificationForm = () => {
        return(
            <div className='w-full' >
                <InputBox type='text' label='Username' />
            </div>
        )
    }

    return (
        <div className='bg-bggrey h-full w-full min-h-screen' >
            <div className='flex justify-center items-center h-screen w-full  ' >
                <div className='bg-white h-full w-full max-w-3/4 max-h-3/4 overflow-auto shadow-md flex rounded-4xl ' >
                    <div className='w-3/5 p-4  ' >


                        <div className='w-full flex justify-center space-y-10 items-center h-full flex-col font-para_inter ' >
                            <div>
                                <h1 className='text-4xl font-title_inter tracking-tighter ' >Welcome to Rumoro</h1>
                            </div>
                            {
                                verify ?
                                    <div className='flex flex-col items-center w-full max-w-80 space-y-5 ' >
                                        <h4 className='text-base text-center' >Please choose your Registration method.</h4>

                                        <button className='flex items-center justify-center p-1 pr-3 rounded-full border-textgrey border-[1px] w-full cursor-pointer' >
                                            <img src={images.GoogleLogo} className='w-10 h-10' alt="" srcset="" />
                                            <span>Register using Google</span>
                                        </button>
                                        <div className='w-full flex justify-center items-center space-x-2 ' >
                                            <div className="bg-textgrey w-full h-[1px] mt-1 opacity-30 "></div>
                                            <div className="text-textgrey opacity-60 text-sm">or</div>
                                            <div className="bg-textgrey w-full h-[1px] mt-1 opacity-30  "></div>
                                        </div>
                                        <button className='flex items-center justify-center p-1 pr-3 rounded-full bg-bgyellow border-textgrey border-[1px] w-full space-x-2 cursor-pointer' onClick={handleVerify} >
                                            <img src={images.Logo} className='w-6 h-10' alt="" srcset="" />
                                            <span>Create a Account in <span className='font-semibold' >Rumoro</span> </span>
                                        </button>
                                        <div className='space-x-1 text-sm' >
                                            <span className='text-textgrey opacity-75' >Already have an Account?</span><span className='underline' >SignIn</span>
                                        </div>
                                    </div>
                                    : <VerificationForm />
                            }
                        </div>

                    </div>
                    <div className='w-2/4  h-full  overflow-hidden' >
                        <img src={images.Register} className='h-full w-full object-cover object-center ' alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register