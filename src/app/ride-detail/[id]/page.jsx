"use client"
import Layout from '@/component/user/Layout/Layout'
import React, { useEffect } from 'react'
import RideDetails from './RideDetails'

const page = (props) => {

 
  useEffect(()=>{
    console.log("props",props)
  },[])
  return (
    <Layout Children={<RideDetails/>}/>
  )
}

export default page