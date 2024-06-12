import React from 'react'
import Footer from './Footer'

const Contact = () => {
    return (
        <div>
            <div className='mt-10 grid w-full lg:grid-cols-2  w-screen md:grid-cols-1'>
                <div>
                    <img className='h-[580px] mt-2 object-none' decoding="async" src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" />
                </div>
                <div>
                    <div className='mx-4 '>
                        <div className='text-l font-semibold text-red-500 '>We Are Happy To Answer You</div>
                        <div className='text-3xl font-bold mt-4'>Contact</div>
                        <div className='grid grid-cols-2 mt-4'>
                            <div ><span className='text-l font-bold'>Address:</span><br></br><span className='font-semibold leading-10 text-gray-500 text-l'>121 King St, Melbourne VIC 3000, Australia</span></div>
                            <div>
                                <div className='mt-2'><span className='text-l font-bold'>Tel :</span><span className='font-semibold text-gray-500 text-l'> 888 321 9874</span></div>
                                <div className='mt-2'><span className='text-l  font-bold'>Email :</span><span className='font-semibold text-gray-500 text-l'>info@example.com</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <div className='text-l text-red-500 font-semibold'>Need Help</div>
                        <div className='font-bold text-3xl mt-4 '>Send Your Request</div>
                        <div>
                            <div className='p-2'> <input className='border-1 w-full border placeholder-gray-500  border-gray-300 rounded-sm mt-4 p-2 text-left' type="text" placeholder='Name' /></div>
                            <div className='p-2'> <input className='border-1 w-full border border-gray-300 rounded-sm mt-4 p-2 text-left' type="email" placeholder='Email Adress' /></div>
                            <div className='p-2'> <input className='border-1 w-full border border-gray-300 rounded-sm mt-4 p-2 text-left' type="tel" placeholder='Phone' /></div>
                            <div className='p-2'> <input className='border-1 w-full h-24 border border-gray-300 rounded-sm mt-4 p-2 text-start' type="text" placeholder='Message' /></div>
                        </div>
                        <div className='mt-6'>
                            <button className='text-white bg-black w-full h-10'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Contact