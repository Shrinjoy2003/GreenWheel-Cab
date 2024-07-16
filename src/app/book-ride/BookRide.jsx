import React, { useState } from 'react'
import BookRideNavbar from './BookRideNavbar'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from '@mui/material';
import AvailableCab from './AvailableCab';

const ValidationSchema = Yup.object().shape(
  {
    pickupLocation: Yup.string().required("pickup location is required"),
    destinationLocation: Yup.string().required("Destination location is required"),
  });
const BookRide = () => {
  const handleOnSubmit = (values) => {
    console.log(values)
  }
  const onFocused = (e) => {
    const name=e.target.name
    setActiveField(name);

  }
  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
    },
    ValidationSchema,
    onSubmit: values => {
      if(formik.isValid)
      {
        handleOnSubmit(values)
      }
    },
  });

  const[activeField,setActiveField]=useState('');

  return (
    <div className='w-full'>
      <BookRideNavbar />

      <div className='px-3 lg:px-5 mt-10'>

        <form className='space-y-3 ' onSubmit={formik.handleSubmit}>
          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>Form</p>
              <input type="text"
                name='PickupLocation'
                placeholder='Enter pickup Location'
                value={formik.values.pickupLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("pickupLocation", value)
                  dispatc(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />
              {
                activeField === "pickupLocation" && 
                formik.values.pickupLocation &&(
                  <div className=''>
                    <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={"pickup_lattitude"}
                    Longitude_key={"pickup_longitude"}
                    area_key={"pickup_area"}
                    />
                  </div>
                )}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className=''>
                <p className='text-xs text-red-500 px-2'>
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>


          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>To</p>
              <input type="text"
                name='DestinationLocation'
                placeholder='Enter Destination Location'
                value={formik.values.destinationLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("destinationLocation", value)
                  // dispatc(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />
              {/* {
                activeField === "pickupLocation" && BookRide.result?.length >0 &&(
                  <div className=''>
                    <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={"pickup_lattitude"}
                    Longitude_key={"pickup_longitude"}
                    area_key={"pickup_area"}
                    />
                  </div>
                )} */}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className=''>
                <p className='text-xs text-red-500 px-2'>
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>
          <Button className='' sx={{
            width:"100%",
            padding : ".7rem 0rem",
          }}
          variant='contained'
          color="secondary"
          type="submit"
          >
            Find Driver
          </Button>

        </form>
      </div>

      <div className='-z-10 px-2 lg:px-5 mt-5'>
        <p>Available Cabs</p>
        <div className=''>
          <AvailableCab/>
          <AvailableCab/>
          <AvailableCab/>
          <AvailableCab/>
          <AvailableCab/>
          
        </div>
         


      </div>

    </div>
  )
}

export default BookRide
