import Layout from '@/component/user/Layout/Layout'
import React from 'react'
import Rides from './Rides'

const page = () => {
  return (
    <Layout Children={<Rides/>}/>
  )
}

export default page