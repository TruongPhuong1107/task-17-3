import Link from 'next/link';
import React from 'react';

function CardFree() {
  return (
    <div className='w-96 h-96 py-3 bg-bgs-card shadow-lg rounded-2xl'>
      <div className='flex flex-col justify-center items-center children:my-4'>
        <div className='w-20 h-20 bg-bgs-home flex justify-center items-center rounded-full'>
          <div className='w-10 h-10 relative text-maincolor'>
            <div className='absolute top-0 left-0 object-cover object-center  hue-rotate-20 brightness-110'>
              <svg className='text-maincolor' width={40} height={40}>
                <use href='/img/lock.svg#icon-lock' />
              </svg>
            </div>
          </div>
        </div>
        <button className='w-48 h-fit py-2 text-xl  bg-bgs-btn rounded-full text-white uppercase text-center'>
          Free
        </button>
        <div className='text-4xl text-heading-2'> SSL Certificate</div>
        <Link href={''}>
          <div className='block font-sans border-b-bordering border-b text-2xl font-thin tracking-wider'>
            More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardFree;
