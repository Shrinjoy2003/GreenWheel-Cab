'use client'
import React from 'react'
import './Banner.css'
import { CircleNotifications } from '@mui/icons-material'
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Banner = () => {
    return (
        <div className='h-[90vh]'>
            <div className='cropped-image'></div>
            <div className='bannerMiniContainer px-40'>
                <p className='text text-5xl font-bold text-white w-[25rem] mb-5'>
                    Moving people, and the world
                </p>
                <div className='py-5 bg-white w-[25rem] flex space-x-7 justify-around'>
                    <p>Daily</p>
                    <p>Rental</p>
                    <p>OutStation</p>
                </div>
                <div className='bg-white pt-5'>
                    <div className='flex items-center justify-around'>

                        <div className='flex items-center py-2 px-14 border-slate-900'>
                            <CircleIcon className='pr-8 text-red-700' style={{ fontSize: 40 }} />
                            <p>Current Location</p>
                        </div>

                        <div className='flex items-center py-2 px-14 border-slate-900'>
                            <CircleIcon className='pr-8 text-red-700' style={{ fontSize: 40 }} />
                            <p>Enter Destination</p>
                        </div>

                        <div cnClick={() => Router.push("/")} className='searchGreenCabButtron courser-pinter flex items-center py-4 px-14 border border-slate-900 justify-around'>
                            <p className='text-white font-semibold'>Search<span className='text-green-400'>Green Cab</span></p>
                            <ArrowRightAltIcon className="text-green-400"/>
                        </div>

                    </div>
                    <div className='m-10 border'>
                    <img className="w-full"  src="https://static.vecteezy.com/system/resources/previews/028/850/437/non_2x/electric-vehicles-and-wind-farms-the-concept-of-environmentally-friendly-transport-of-the-future-and-green-energy-electric-cars-and-wind-generators-ai-generated-free-photo.jpg" alt="" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Banner