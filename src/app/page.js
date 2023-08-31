import getSomeCountry from '@/libs/getSomeCountry';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page =  async () => {


  const countries = await getSomeCountry();

  return (
    <div>
          <div className="container px-4 mx-auto">
            <h1 className='font-bold text-red-600 py-5 text-2xl dark:text-orange-400'>All Countries</h1>
            {/* <div className='mb-5'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full bg-slate-400 text-white"/>
            </div> */}

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {
                  countries.map((country, index)=>(
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-full bg-gray-300 dark:bg-gray-50" key={index}>
                      <Image src={country.flags.png} height={300} width={500} layout="responsive" placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896' alt="flag"/>
                      <div className="px-6 py-4 relative bg-gray-300 dark:bg-gray-50">
                        <div className='absolute right-2 bottom-2'>
                          <Image src={country.coatOfArms.svg} height={50} width={50} alt="currency" />
                        </div>
                        <ul>
                          <li className="font-bold text-gray-600 text-xl mb-2">{country.name.common}</li>
                          <li className="text-green-600 text-base"><span className='font-semibold'>Official Name: </span> {country.name.official}</li>
                          <li className="text-red-600"><span className='font-semibold'>Independent : </span> {country.independent ? <span className='bg-green-600 text-white px-2'>Yes</span> : <span className='bg-red-600 text-white px-2'>No</span>}</li>
                          <li className="text-purple-600"><span className='font-semibold'>Capital : </span> {country.capital}</li>
                          <li className="text-pink-600"><span className='font-semibold'>Timezone : </span> {country.timezones}</li>
                          <li className="text-gray-600"><span className='font-semibold'>Region : </span> {country.continents}</li> 
                          <li><Link className="font-semibold text-slate-800 dark:text-slate-950 hover:underline" href={country.maps.googleMaps}>Google Map</Link></li>
                          <li className='mt-3'><Link className="bg-blue-600 px-4 py-2 text-white" href={`/alpha/${country.ccn3}`}>Details</Link></li>
                        </ul>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
    </div>
  );
};

export default page;