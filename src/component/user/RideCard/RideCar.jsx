import React from 'react'
import { Avatar, Button, IconButton } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
const RideCar = () => {
  return (
    <div className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'
    // onClick={() => Router.push('/ride-detail/${ride.id}')}
    >
        <div className='flex items-center'>
            <img 
            src="https://p7.hiclipart.com/preview/131/1010/472/maruti-suzuki-dzire-suzuki-swift-car-car.jpg" 
            className='w-20 h-20'
            />
            <div className='ml-5 space-y-1'>
                <p className='text-sm font-semibold'>Today 10:08 PM</p>
                <p className='text-xs font-semibold opacity-60'>cab KSLW983</p>
                <p className='text-sm opacity-60'>kolkata Esplnade Market</p>
                <p className='text-sm font-semibold'>Dakshineswar Station</p>
            </div>
        </div>
        {true ?
        (
            <div>
                <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem"/>
            </div>
        ) : (
            <div className='flex flex-col justify-between pl-5'>
                <p className='text-green-500 mb-5'>Scedule...</p>
                <Avatar 
                alt='Remy sharp' 
                src='' 
                />
            </div>
        )}
    </div>
  )
}

export default RideCar