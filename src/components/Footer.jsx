import React from 'react'
// import image from './assets/footericons.jpg'

const Footer = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 m-10 mb-0 w-screen  md:grid-cols-2 sm:grid-cols-1'>
                <div className='m-4 mx-8 mt-8'>
                    <div><img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" className='size-26' alt="" loading="lazy" /></div>
                    <p className='mt-8 text-gray-700 font-semibold'>
                        Molesite vitae massa felies, aliquam lectus at.Utricies et, quis sit fermentum.
                    </p>
                </div>
                <div className='m-4'>
                    <div className='text-xl font-bold text-gray-700'>Quick Link</div>
                    <ul>
                        <li><button className='text-l mt-4  text-gray-500'>About</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Product</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Resposibility</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Carrer</button></li>
                    </ul>
                </div>
                <div className='m-4'>
                    <div className='text-xl font-bold text-gray-700'>Services</div>
                    <ul>
                        <li><button className='text-l mt-4  text-gray-500'>Account</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Checkout Page</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Help Center</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Terms&Condition</button></li>
                    </ul>
                </div>
                <div className='m-4'>
                    <div className='text-xl font-bold text-gray-700'>More</div>
                    <ul>
                        <li><button className='text-l mt-4  text-gray-500'>Gift Card</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Lookbook</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Rewards Program</button></li>
                        <li><button className='text-l mt-4  text-gray-500'>Wedding Dress</button></li>
                    </ul>
                </div>
                <div className='w-screen m-6 bg-gray-100'>
                    {/* <img src={} alt="" className='w-52' /> */}
                </div>
            </div>
        </>
    )
}
export default Footer