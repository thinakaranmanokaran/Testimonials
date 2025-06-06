import React, { useState } from 'react'
import images from '../../assets/images'
import { Button, InputBox } from '../../components';
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Register = () => {

    const [verify, setVerify] = useState(false);
    const [gotoRegister, setGoToRegister] = useState(false);
    const [gotoSignin, setGoToSignin] = useState(false);
    const [verifiedUsername, setVerifiedUsername] = useState('');
    const [identifier, setIdentifier] = useState('');

    const API_URL = import.meta.env.VITE_URL;
    // alert(API_URL);
    const handleVerify = () => {
        setVerify(true);
    }

    const handleOpenRegister = () => {
        setVerify(false);
        setGoToSignin(false);
        setGoToRegister(true);
    };

    const handleOpenSignin = () => {
        setVerify(false);
        setGoToRegister(false);
        setGoToSignin(true);
    };

    const handleOpenInitial = () => {
        setVerify(false);
        setGoToRegister(false);
        setGoToSignin(false);
    };



    const RegisterForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState(identifier); // from parent state
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
        const [errorMsg, setErrorMsg] = useState('');

        const handleRegister = async () => {
            if (!name || !email || !username || !password) {
                setErrorMsg("Please fill all the fields.");
                return;
            }

            setLoading(true);
            setErrorMsg('');

            try {
                const res = await axios.post(`${API_URL}/api/public/register`, {
                    name,
                    email,
                    username,
                    password,
                });

                const token = res.data.token;
                localStorage.setItem('token', token);

                const decoded = jwtDecode(token);
                console.log("Decoded user:", decoded);

                // You can navigate or show success here
                alert('Registered successfully!');
                // handleOpenInitial(); // Optional: Go back to initial screen
                setName('');
                setEmail('');
                setUsername('');
                setPassword('');
            } catch (err) {
                console.error('Registration failed:', err);
                alert('Registration failed:', err);
                setErrorMsg(err.response?.data?.message || 'Registration failed');
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className='w-full'>
                <div className='w-full grid grid-cols-2 gap-4'>
                    <InputBox type='text' label='Name' value={name} setValue={setName} />
                    <InputBox type='email' label='Email' value={email} setValue={setEmail} />
                    <InputBox type='text' label='Username' value={username} setValue={setUsername} />
                    <InputBox type='password' showPassword='yes' label='Password' value={password} setValue={setPassword} />
                    <Button className="col-span-2" onClick={handleRegister} disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </div>

                {errorMsg && (
                    <p className="text-red-500 text-sm mt-2 text-center col-span-2">{errorMsg}</p>
                )}

                <div className='space-x-1 text-[15px] flex justify-center mt-4'>
                    <span className='text-textgrey opacity-75'>Already have an Account?</span>
                    <span className='underline cursor-pointer' onClick={handleOpenSignin}>SignIn</span>
                </div>
            </div>
        );
    };


    const VerificationForm = () => {
        const [identifier, setIdentifier] = useState('');
        const [result, setResult] = useState(null);
        const [loading, setLoading] = useState(false);
        const [errorMsg, setErrorMsg] = useState('');
        const [value, setValue] = useState('');

        const handleCheck = async () => {
            if (!identifier.trim()) {
                setErrorMsg('Please enter a valid username or email.');
                setResult(null);
                return;
            }

            setLoading(true);
            setErrorMsg('');
            setResult(null);

            try {
                const res = await axios.post(`${API_URL}/api/public/identifier`, {
                    identifier
                });

                if (res.data.exists) {
                    setResult({ found: true, user: res.data.user });
                    setVerifiedUsername(res.data.user.username || identifier); // set verified username
                    handleOpenSignin(); // 👉 go to SignIn form
                } else {
                    setResult({ found: false });
                    setIdentifier(identifier); // pass value to register form
                    setGoToRegister(true); // 👉 go to Register form
                }
            } catch (error) {
                console.error('Error identifying user:', error);
                setErrorMsg(error.response?.data?.message || 'Server error');
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="space-y-4 w-3/4">
                <InputBox
                    type="text"
                    label="Username or Email"
                    value={value}
                    setValue={(val) => {
                        setValue(val);
                        setIdentifier(val);
                    }}
                />

                <Button onClick={handleCheck} disabled={loading} className="w-full">
                    {loading ? 'Checking...' : 'Check Account'}
                </Button>

                {errorMsg && (
                    <p className="text-red-500 text-sm text-center">{errorMsg}</p>
                )}

                <h4 className="text-base text-center mb-5 tracking-tight">
                    To verify that your account exists.
                </h4>

                <div className="space-x-1 text-[15px] flex justify-center -mt-2">
                    <span className="text-textgrey opacity-75">
                        If you're sure you don't have an account?
                    </span>
                    <span className="underline cursor-pointer" onClick={handleOpenRegister}>
                        Register
                    </span>
                </div>

            </div>
        );
    };


    const SignInForm = () => {
        return (
            <div className=' space-y-4 w-3/4' >
                <InputBox type='text' label='Username' value={verifiedUsername} setValue={() => { }} />
                <InputBox type='password' showPassword='yes' label='Password' />
                <Button />
                <div className='space-x-1 text-[15px] flex justify-center mt-3' >
                    <span className='text-textgrey opacity-75'>If you're sure, you don't have an Account?</span>
                    <span className='underline cursor-pointer' onClick={handleOpenRegister}>Register</span>
                </div>
            </div>
        )
    }


    const InitialOptions = () => {
        return (
            <div className='w-full flex justify-center  items-center  flex-col font-para_inter ' >

                <div className='flex flex-col items-center w-full max-w-80 space-y-4 ' >
                    <h4 className='text-base text-center mb-5' >Please choose your Registration method.</h4>

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
                        <span className='text-textgrey opacity-75' >Already have an Account?</span><span className='underline cursor-pointer' onClick={handleOpenSignin}>SignIn</span>
                    </div>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        if (!gotoRegister && !verify && !gotoSignin) return <InitialOptions />;
        if (verify && !gotoRegister && !gotoSignin) return <VerificationForm />;
        if (gotoRegister && !verify && !gotoSignin) return <RegisterForm />;
        if (!gotoRegister && !verify && gotoSignin) return <SignInForm />;
        return null;
    };



    return (
        <div className='bg-bggrey h-full w-full min-h-screen' >
            <div className='flex justify-center items-center h-screen w-full  ' >
                <div className='bg-white h-full w-full max-w-3/4 max-h-3/4 overflow-auto shadow-md flex rounded-4xl relative' >
                    {
                        (gotoRegister || verify || gotoSignin) && (
                            <button className='absolute top-3 left-3 bg-[#00000010] p-2 hover:rotate-45 transition-transform duration-300 cursor-pointer rounded-full text-2xl ' onClick={handleOpenInitial} ><GoArrowLeft className='' /></button>)
                    }
                    <div className='w-3/5 p-4  ' >
                        <div className='w-full flex   items-center h-full flex-col font-para_inter ' >
                            <div className=' h-40 flex items-center' >
                                <h1 className='text-4xl font-title_inter tracking-tighter ' >Welcome to Rumoro</h1>
                            </div>
                            {renderContent()}
                            {/* <InitialOptions /> */}
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