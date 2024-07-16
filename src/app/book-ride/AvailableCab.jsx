import React from 'react'

const AvailableCab = () => {
  return (
    <div> 
        <div className='flex items-center border rounded-md py-2 px-5 courser-pointer -z-10'>
            <img className='w-10' src="https://pngimg.com/d/hyundai_PNG11221.png" alt="" />
            <p className='font-semibold text-xs'> 1 min </p>
        </div>

        <div className='pl-5 text-sm'>
            <p className='font-semibold'>Prime Green SUV</p>
            <p className='text-xs -z-10'>
                SUV With Free Wifi and top Drivers
            </p>
        </div>

    </div>
  )
}

export default AvailableCab