'use client'
import React from 'react'
import BookRide from './BookRide'
import Layout from '@/component/user/Layout/Layout'
Layout
const page = () => {
  return (
    <div>
        <Layout Children={<BookRide/>}></Layout>
    </div>
  )
}

export default page
