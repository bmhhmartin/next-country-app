import React from 'react';
import { Image } from 'next/image';
import getSingleCountry from '@/libs/getSingleCountry';

const page = async({params}) => {

    const ccn3 = params.ccn3;

    const country = await getSingleCountry(ccn3);

    console.log(country);



    return (
        <div className='container mx-auto py-5 h-full min-h-full'>
            <h1 className='font-bold text-red-600 py-5 text-2xl dark:text-orange-400'>Single Country</h1>
            
            <h2>asdsf</h2>
            <h3>asdfasf {country.common}</h3>

        </div>
    );
};

export default page;