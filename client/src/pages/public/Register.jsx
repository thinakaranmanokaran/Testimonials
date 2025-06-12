import React, { useEffect, useState } from 'react'
import images from '../../assets/images'
import { Button, InputBox, RegisterForm, SigninForm, ValidationForm } from '../../components';
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Register = () => {
    const [currentView, setCurrentView] = useState(() => {
        return localStorage.getItem('currentView') || 'initial';
    }); // 'initial' | 'verify' | 'register' | 'signin'
    const [verifiedUsername, setVerifiedUsername] = useState('');
    const [identifier, setIdentifier] = useState('');
    const API_URL = import.meta.env.VITE_URL;

    useEffect(() => {
        localStorage.setItem('currentView', currentView);
    }, [currentView]);

    const InitialOptions = () => (
        <div className='w-full flex justify-center items-center flex-col font-para_inter'>
            <div className='flex flex-col items-center w-full max-w-80 space-y-4'>
                <h4 className='text-base text-center mb-5'>Please choose your Registration method.</h4>

                <button className='flex items-center justify-center p-1 pr-3 rounded-full border-textgrey border-[1px] w-full cursor-pointer'>
                    <img src={images.GoogleLogo} className='w-10 h-10' alt='Google Logo' />
                    <span>Register using Google</span>
                </button>

                <div className='w-full flex justify-center items-center space-x-2'>
                    <div className='bg-textgrey w-full h-[1px] mt-1 opacity-30'></div>
                    <div className='text-textgrey opacity-60 text-sm'>or</div>
                    <div className='bg-textgrey w-full h-[1px] mt-1 opacity-30'></div>
                </div>

                <button
                    className='flex items-center justify-center p-1 pr-3 rounded-full bg-bgyellow border-textgrey border-[1px] w-full space-x-2 cursor-pointer'
                    onClick={() => setCurrentView('verify')}
                >
                    <img src={images.Logo} className='w-6 h-10' alt='Rumoro Logo' />
                    <span>
                        Create an Account in <span className='font-semibold'>Rumoro</span>
                    </span>
                </button>

                <div className='space-x-1 text-sm'>
                    <span className='text-textgrey opacity-75'>Already have an Account?</span>
                    <span className='underline cursor-pointer' onClick={() => setCurrentView('signin')}>
                        SignIn
                    </span>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        if (currentView === 'verify') {
            return (
                <ValidationForm
                    API_URL={API_URL}
                    setVerifiedUsername={setVerifiedUsername}
                    setIdentifier={setIdentifier}
                    handleOpenSignin={() => setCurrentView('signin')}
                    setGoToRegister={() => setCurrentView('register')}
                />
            );
        }

        if (currentView === 'register') {
            return (
                <RegisterForm
                    API_URL={API_URL}
                    identifier={identifier}
                    handleOpenSignin={() => setCurrentView('signin')}
                />
            );
        }

        if (currentView === 'signin') {
            return (
                <SigninForm
                    API_URL={API_URL}
                    verifiedUsername={verifiedUsername}
                    handleOpenRegister={() => setCurrentView('register')}
                />
            );
        }

        return <InitialOptions />;
    };

    return (
        <div className='bg-bggrey h-full w-full min-h-screen'>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className='bg-white h-full w-full max-w-3/4 max-h-3/4 overflow-auto shadow-md flex rounded-4xl relative'>
                    {currentView !== 'initial' && (
                        <button
                            className='absolute top-3 left-3 bg-[#00000010] p-2 hover:rotate-45 transition-transform duration-300 cursor-pointer rounded-full text-2xl'
                            onClick={() => setCurrentView('initial')}
                        >
                            <GoArrowLeft />
                        </button>
                    )}
                    <div className='w-3/5 p-4'>
                        <div className='w-full flex items-center h-full flex-col font-para_inter'>
                            <div className='h-40 flex items-center'>
                                <h1 className='text-4xl font-title_inter tracking-tighter'>Welcome to Rumoro</h1>
                            </div>
                            {renderContent()}
                        </div>
                    </div>

                    <div className='w-2/4 h-full overflow-hidden'>
                        <img
                            src={images.Register}
                            className='h-full w-full object-cover object-center'
                            alt='Register Visual'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
