import React from 'react'
import Layout from '@/component/user/Layout/Layout'
import Profile from './Profile'



const page = () => {
  return (
    <div>
        <Layout Children={<Profile/>}/>
    </div>
  )
}

export default page