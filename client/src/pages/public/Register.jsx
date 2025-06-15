import React, { useEffect, useState } from 'react'
import images from '../../assets/images'
import { Button, InputBox, OTPForm, RegisterForm, SigninForm, ValidationForm } from '../../components';
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { motion, AnimatePresence } from 'framer-motion';

const Register = () => {
    const [currentView, setCurrentView] = useState(() => {
        const stored = localStorage.getItem('currentView');
        if (stored) {
            try {
                const { view, timestamp } = JSON.parse(stored);
                const now = new Date().getTime();
                if (now - timestamp < 3600000) { // within 1 hour
                    return view;
                } else {
                    localStorage.removeItem('currentView'); // expired
                }
            } catch {
                localStorage.removeItem('currentView'); // corrupted
            }
        }
        return 'initial';
    }); // 'initial' | 'verify' | 'register' | 'signin'
    const [verifiedUsername, setVerifiedUsername] = useState('');
    const [identifier, setIdentifier] = useState('');
    const API_URL = import.meta.env.VITE_URL;

    useEffect(() => {
        const data = {
            view: currentView,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('currentView', JSON.stringify(data));
    }, [currentView]);

    const variants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 30, transition: { duration: 0.3 } }
    };


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
        return (
            <AnimatePresence mode="wait">
                {currentView === 'verify' && (
                    <motion.div
                        key="verify"
                        initial="initial"
                        animate="animate" className='w-full flex justify-center items-center'
                        exit="exit"
                        variants={variants}
                    >
                        <ValidationForm
                            API_URL={API_URL}
                            setVerifiedUsername={setVerifiedUsername}
                            setIdentifier={setIdentifier}
                            handleOpenSignin={() => setCurrentView('signin')}
                            setGoToRegister={() => setCurrentView('register')}
                        />
                    </motion.div>
                )}

                {currentView === 'register' && (
                    <motion.div
                        key="register"
                        initial="initial"
                        animate="animate"
                        exit="exit" className='w-full  flex justify-center items-center'
                        variants={variants}
                    >
                        <RegisterForm
                            API_URL={API_URL}
                            identifier={identifier}
                            setIdentifier={setIdentifier} handleOpenSignin={() => setCurrentView('signin')}
                            handleOpenOTPForm={() => setCurrentView('otpform')}
                        />
                    </motion.div>
                )}

                {currentView === 'otpform' && (
                    <motion.div
                        key="otpform"
                        initial="initial"
                        animate="animate"
                        exit="exit" className='w-full  flex justify-center items-center'
                        variants={variants}
                    >
                        <OTPForm identifier={identifier} API_URL={API_URL} />
                    </motion.div>
                )}

                {currentView === 'signin' && (
                    <motion.div
                        key="signin"
                        initial="initial"
                        animate="animate"
                        exit="exit" className='w-full  flex justify-center items-center'
                        variants={variants}
                    >
                        <SigninForm
                            API_URL={API_URL}
                            verifiedUsername={verifiedUsername}
                            handleOpenRegister={() => setCurrentView('register')}
                        />
                    </motion.div>
                )}

                {currentView === 'initial' && (
                    <motion.div
                        key="initial"
                        initial="initial"
                        animate="animate"
                        exit="exit" className='w-full  flex justify-center items-center'
                        variants={variants}
                    >
                        <InitialOptions />
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    return (
        <div className='bg-bggrey h-full w-full min-h-screen'>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className='bg-white h-full w-full max-w-3/4 max-h-3/4 overflow-auto shadow-md flex rounded-4xl relative overflow-y-hidden'>
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

                    <div className='w-2/4 h-full overflow-hidden relative z-10'>
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
