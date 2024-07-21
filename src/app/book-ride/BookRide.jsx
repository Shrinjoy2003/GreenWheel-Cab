import React, { useState } from 'react';
import BookRideNavbar from './BookRideNavbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import AvailableCab from './AvailableCab';
import SearchResult from './SearchResult';

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required("Destination location is required"),
});

const BookRide = () => {
  const [activeField, setActiveField] = useState('');

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  const onFocused = (e) => {
    const name = e.target.name;
    setActiveField(name);
  };

  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
      destinationLocation: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        handleOnSubmit(values);
      }
    },
  });

  return (
    <div className='w-full'>
      <BookRideNavbar />

      <div className='px-3 lg:px-5 mt-10'>
        <form className='space-y-3' onSubmit={formik.handleSubmit}>
          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>From</p>
              <input
                type='text'
                name='pickupLocation'
                placeholder='Enter pickup location'
                value={formik.values.pickupLocation}
                onChange={(event) => {
                  formik.setFieldValue('pickupLocation', event.target.value);
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />
              {activeField === 'pickupLocation' && formik.values.pickupLocation && (
                <div className='absolute top-full left-0 w-full'>
                  <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={'pickup_latitude'}
                    longitude_key={'pickup_longitude'}
                    area_key={'pickup_area'}
                    items={[]} // Pass the actual search results here
                  />
                </div>
              )}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div>
                <p className='text-xs text-red-500 px-2'>{formik.errors.pickupLocation}</p>
              </div>
            )}
          </div>

          <div>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>To</p>
              <input
                type='text'
                name='destinationLocation'
                placeholder='Enter destination location'
                value={formik.values.destinationLocation}
                onChange={(event) => {
                  formik.setFieldValue('destinationLocation', event.target.value);
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none'
                onFocus={onFocused}
              />
              {activeField === 'destinationLocation' && formik.values.destinationLocation && (
                <div className='absolute top-full left-0 w-full'>
                  <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={'destination_latitude'}
                    longitude_key={'destination_longitude'}
                    area_key={'destination_area'}
                    items={[]} // Pass the actual search results here
                  />
                </div>
              )}
            </div>
            {formik.touched.destinationLocation && formik.errors.destinationLocation && (
              <div>
                <p className='text-xs text-red-500 px-2'>{formik.errors.destinationLocation}</p>
              </div>
            )}
          </div>

          <Button
            sx={{ width: '100%', padding: '.7rem 0rem' }}
            variant='contained'
            color='secondary'
            type='submit'
          >
            Find Driver
          </Button>
        </form>
      </div>

      <div className='-z-10 px-2 lg:px-5 mt-5'>
        <p>Available Cabs</p>
        <div>
          {[...Array(5)].map((_, index) => (
            <AvailableCab key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRide;
