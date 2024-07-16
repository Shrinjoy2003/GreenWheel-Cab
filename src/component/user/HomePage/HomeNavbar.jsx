'use client'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const HomeNavbar = () => {
    return (
        <nav className='bg-green-950 py-4'>
            <div className='container max-auto px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center mx-5'>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" alt="Logo" className='ml-5' />

                        </div>
                        <div>
                            <ul className='flex items-center'>
                                <li className='mr-6'>
                                    <a href="#" className='text-white hover:text-blue-200'>Green Car S1</a>
                                </li>
                                <li className='mr-6'>
                                    <a href="#" className='text-white hover:text-blue-200'>Green Car Electric</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='bg-gray-600 text-white hover:bg-blue-900 text-sm font-semibold px-4 py-3'>
                            Book A Green Ride
                        </button>
                        <button className='bg-white text-black hover:bg-blue-300 text-sm font-semibold px-5 py-3 ml-5'>
                            free S1 Test Ride
                        </button>
                        <MenuIcon className="ml-5 text-white text-3xl" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HomeNavbar
