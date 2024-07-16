'use client'
import { Instagram } from '@mui/icons-material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className='mt-40'>
      <div>
        <div className='container  py-8'>
          <div className='grid grid-cols-1 md:flex justify-around'>
            <div className='footer-links'>
              <img src="" alt="" />
              <div className='flex items-center mt-5'>
                <InstagramIcon className='' style={{ fontSize: 40 }} />
                <YouTubeIcon className='ml-5' style={{ fontSize: 40 }} />
                <FacebookIcon className='ml-5' style={{ fontSize: 40 }} />
              </div>
            </div>
            <div className='footer-links'>
              <h3 className='text-lg font-semibold'>Explore</h3>
              <ul className='mt-4'>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white' >Home</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white' >Book a Ride</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white' >About Us</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white' >Careers</a>
                </li>
              </ul>
            </div>
            <div className='footer-links'>
              <h3 className='text-lg font-semibold'>Customer Support</h3>
              <ul className='mt-4'>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white'>Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 py-4'>
        <div className='container mx-auto'>
          <p className='text-center text-gray-400 text-sm'>
            &copy;{new Date().getFullYear()} GreenWheel Cabs. All right reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer