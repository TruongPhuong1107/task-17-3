import Link from 'next/link';
import React from 'react';

function Card() {
  return (
    <div className='w-96 h-80 py-3 bg-bgs-card shadow-2xl rounded-2xl'>
      <div className='flex flex-col justify-center items-center children:my-4'>
        <div className='w-20 h-20 bg-bgs-home flex justify-center items-center rounded-full'>
          <div className='w-10 h-10 relative'>
            <img
              src='/img/lock.svg'
              className='absolute top-0 left-0 object-cover object-center fill-orange-800'
            />
          </div>
        </div>
        <div className='text-4xl text-heading-2'> SSL Certificate</div>
        <Link href={''}>
          <div className='block border-b-bordering border-b text-2xl font-sans font-thin tracking-wider'>
            More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
