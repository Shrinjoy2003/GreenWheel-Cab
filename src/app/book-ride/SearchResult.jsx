import { Divider } from '@mui/material'
import React from 'react'


const SearchResult = ({area_key,setActiveField,item,latitude_key,longitude_key}) => {
    return (
        <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar'>
            {[1, 1, 1, 1, 1].map((item) => (
                <>
                    <SearchResultCard area_key={area_key} setActiveField={setActiveField} key={item} latitude_key={latitude_key} longitude_key={longitude_key} />
                </>
            ))}
        </div>
    );
};

export default SearchResult;
