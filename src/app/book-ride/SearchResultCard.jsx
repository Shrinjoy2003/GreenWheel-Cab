import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Make sure you have this import if you're using Material-UI icons
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchResultCard = ({ item, latitude_key, longitude_key, setActiveField, area_key }) => {
  const pickup_latitude_1 = 19.0785451;
  const pickup_longitude_1 = 72.878176;
  const pickup_area_1 = "Kolkata, Kolkata Esplanade, West Bengal, India";
  
  const pickup_latitude_2 = 19.0785451;
  const pickup_longitude_2 = 72.878176;
  const pickup_area_2 = "Kolkata, Dakshineswar, West Bengal, India";
  
  const searchParams=useSearchParams();
  const router=useRouter()
  const pathname=usePathname()

  const handleSelect = () => {
    // Handle the selection of the search result item

    const params=new URLSearchParams(searchParams)

    params.set([latitude_key],pickup_latitude_1)
    params.set([longitude_key],pickup_longitude_1)
    params.set([area_key],pickup_area_1)

    router.replace(pathname+"?"+params.toString())
    // console.log("pathname -",pathname,"seatchParams -",searchParams)

    // setActiveField(item[area_key]);
  };

  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
      <div className='pr-5'>
        <LocationOnIcon />
      </div>
      <div>
        <p className='font-semibold'>Esplnade</p>
        <p className='font-semibold opacity-60'>
          {/* {`Latitude: ${item[latitude_key]}, Longitude: ${item[longitude_key]}`} */}
          Esplnade
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
