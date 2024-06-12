import React from 'react'
import { useState, useEffect } from 'react'


const Signin = () => {
    const [username, setUsername] = useState(false)

    const Signup = () => {
        return (
            <div className='mt-10 w-full flex justify-center font-semibold'>
                <div className='w-[500px]'>
                    <div className=' text-center h-16 flex justify-around '>
                        <button className='w-[250px] rounded-sm  text-white bg-black text-xl'>Signin</button>
                        <button className='w-[250px] rounded-sm text-gray-400  bg-white text-xl'>Signup</button>
                    </div>
                    <div className='m-6 mt-10 text-left'>
                        <div>
                            <div><span className='text-bold text-l '>Username</span><span className='leading-[50px] text-red-600'>*</span><br /><input className='border border-gray-300 w-full p-2 rounded-md font-normal' type="text" required name='Username Or Email' placeholder='Username' /></div>
                            <div className='mt-4'><span className='text-bold text-l'>Email address</span><span className='leading-[50px] text-red-600'>*</span><br /><input className='border  border-gray-300 w-full p-2 rounded-md font-normal' type="email" required name='Email address' placeholder='Email address' /></div>
                            <div className='mt-4'><span className='text-bold text-l'>Passsword </span><span className='leading-[50px] text-red-600'>*</span><br /><input className='border  border-gray-300 w-full p-2 rounded-md font-normal' type="text" required name='Password' placeholder='Password' /></div>
                        </div>
                        <div className='mt-6 font-normal'>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span><button className='font-semibold'>privacy policy</button></span>.
                        </div>
                    </div>
                    <div className='m-6'>
                        <button className='text-xl  w-full bg-black h-16 text-white rounded-sm hover:text-black hover:bg-white hover:border hover:border-black hover:duration-1000'>Signup</button>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        Signup();
    }, [username]);

    return (

        <div>
            {
                username ? (
                    <div className='w-full flex justify-center font-semibold'>
                        <div className='w-[500px]'>
                            <button onClick={() => setUsername(false)}>{Signup}</button> 
                        </div>
                    </div>
                ) :
                    (
                        <>
                            <div className='mt-10 w-full flex justify-center font-semibold'>
                                <div className='w-[500px]'>
                                    <div className=' text-center h-16 flex justify-around '>
                                        <button className='w-[250px] rounded-sm text-gray-400  text-xl'>Signin</button>
                                        <button className='w-[250px] rounded-sm text-white  bg-black text-xl' onClick={() => setUsername(true)}>Signup</button>
                                    </div>
                                    <div className='m-6 mt-10'>
                                        <div>
                                            <div><span className='text-bold text-l'>Username or Email </span><span className='leading-[50px] text-red-600'>*</span><br /><input className='border border-gray-300 w-full p-2 rounded-md font-normal' type="text" required name='Username Or Email' placeholder='Username' /></div>
                                            <div className='mt-4'><span className='text-bold text-l'>Passsword </span><span className='leading-[50px] text-red-600'>*</span><br /><input className='border  border-gray-300 w-full p-2 rounded-md font-normal' type="text" required name='Password' placeholder='Password' /></div>
                                        </div>
                                        <div className='mt-6 flex justify-around'>
                                            <span><input type="checkbox" /><span className='mx-2'>Remember Me</span></span>
                                            <span><button>Lost your password?</button></span>
                                        </div>
                                    </div>
                                    <div className='m-6'>
                                        <button className='text-xl  w-full bg-black h-16 text-white rounded-sm hover:text-black hover:bg-white hover:border hover:border-black hover:duration-1000'>Login</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}
export default Signin