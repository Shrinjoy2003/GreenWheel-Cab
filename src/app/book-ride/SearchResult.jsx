import { Divider } from '@mui/material'
import React from 'react'
import SearchResultCard from './SearchResultCard';


const SearchResult = ({ area_key, setActiveField, items, latitude_key, longitude_key }) => {
    return (
        <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar'>
            {[1,1,1,1,1].map((item, index) => (
                <SearchResultCard 
                    key={index} 
                    area_key={area_key} 
                    setActiveField={setActiveField} 
                    latitude_key={latitude_key} 
                    longitude_key={longitude_key} 
                    item={item} 
                />
            ))}
        </div>
    );
};


export default SearchResult;
