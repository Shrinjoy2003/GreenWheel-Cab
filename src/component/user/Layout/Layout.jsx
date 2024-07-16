'use client'
import React from 'react'
import { Grid } from '@mui/material'

const Layout = ({Children}) => {
  return (
    <div>
        <div className='h-screen '>
        <Grid container>
            <Grid item xs={12} md={8} lg={5}>
                {Children}
            </Grid>
            <Grid item className='h-screen w-full' xs={0} md={4} lg={7}>
                <img className='w-full h-full object-cover object-right-top' src="https://cdn.thezebra.com/zfront/media/production/images/Charging-electric-car.width-1500.format-jpeg.jpg" alt="" />
            </Grid>
        </Grid>
 
    </div>
    </div>
  )
}

export default Layout