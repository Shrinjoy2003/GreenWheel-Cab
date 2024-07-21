"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar, Button, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import RideCar from '@/component/user/RideCard/RideCar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WifiIcon from '@mui/icons-material/Wifi';

const Profile = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  }

  return (
    <div className='px-2 lg:px-5 py-2'>
      <div className='flex items-center'>
        <WestIcon onClick={goBack} className="cursor-pointer"/>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>R</Avatar>
        <p>Shrinjoy Das</p>
        <p>6289648329</p>

      </div>
      <div className='border rounded-sm mt-5'>
        <RideCar />
        <div className='flex flex-col items-center p-3'>
          <Button onClick={() => router.push("/your-rides")} varient='text'>See all rides</Button>
        </div>
      </div>

      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
          <AccountBalanceWalletIcon className='text-green-600' />
          <p className='ml-4'>GreenWheel money</p>
        </div>

      </div>

      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
          <ContactPhoneIcon />
          <p className='ml-4'>Emergrncy Contact</p>
        </div>
      </div>

      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
          <WifiIcon />
          <p className='ml-4'>GreenWheel Wi-Fi Credentials</p>
        </div>
      </div>


      <div>
        <Button  className='w-full bg-red-500 text-white mt-2' variant='contained' color='error'>Logut</Button>
      </div>

    </div>
  );
}

export default Profile