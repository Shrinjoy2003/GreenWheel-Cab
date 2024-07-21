"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar, Button, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import KeyIcon from '@mui/icons-material/Key';

const RideDetails = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <div>
            <div className='flex items-center px-2 lg:px-2 py-2'>
                <WestIcon onClick={goBack} className="cursor-pointer" />
                <p className='text-center w-full '>ABCDE12345</p>
            </div>

            <div className='px-2 lg:px-5 py-5'>
                <div className='border rounded-md'>
                    <div className='flex items-center border-b p-3'>
                        <span className='pr-5 opacity-70 text-xs font-semibold'>
                            PICKUP :{" "}
                        </span>
                        <span>esplnade markert kolkata</span>
                    </div>
                    <div className='flex items-center border-b p-3'>
                        <span className='pr-5 opacity-70 text-xs font-semibold'>
                            DROP :{" "}
                        </span>
                        <span>Dakshineawar metro kolkata</span>
                    </div>
                </div>
            </div>

            <p className='p-2 bg-green-400 text-white text-center'>
                Picking arriving in 1min
            </p>

            <div className='flex items-center justify-center w-full h-[42vh]'>
                <p className='text-center w-full'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0663396276276!2d88.368917!3d22.64887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzU2LjAiTiA4OMKwMjEnNTguMCJF!5e0!3m2!1sen!2sin!4v1690313923714!5m2!1sen!2sin'
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading='lazy'
                    >
                    </iframe>
                </p>
            </div>

            <div className='px-2 lg:px-5 mt-2'>
                <div className='border rounded-md'>
                    <div className='flex justify-between w-full border-b p-3'>
                        <div className='flex items-center'>
                            <Avatar alt='Remy sharp' src='' />
                            <div className='pl-4'>
                                <p>Swift Desire Electric</p>
                                <p className='text-xs font-semibold opacity-60'>Mini Green Cab</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs'>WB18-0285</p>
                            <p className='font-semibold'>0285</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-full p-3'>
                        <div className='flex items-center'>
                            <Avatar alt='Remy Sharp' src='' />
                            <div className='pl-4'>
                                <p>Ram Bhaiya</p>
                                <p className='text-xs flex items-center'>
                                    4.7 <StarIcon className="text-yellow-500 text-sm" />
                                </p>
                            </div>
                        </div>
                        <div>
                            <IconButton color='success' aria-label='call-driver'>
                                <CallIcon />
                            </IconButton>
                        </div>
                    </div>
                    {true ? (
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ width: "100%", padding: ".5rem 0rem" }}
                        >
                            Pay Now
                        </Button>
                    ) : (
                        <div className='flex justify-between items-center bg-yellow-600 text-white py-2'>
                            <div className='flex items-center'>
                                <KeyIcon />
                                <p className='ml-4'>OTP</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RideDetails;
