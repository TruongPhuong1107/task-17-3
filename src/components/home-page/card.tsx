import Link from 'next/link';
import React from 'react';

function Card({ isFree, iconId }: { isFree?: boolean; iconId: string }) {
  return (
    <div className='w-4/5 sm:w-96 py-3 bg-bgs-card shadow-lg rounded-xl'>
      <div className='flex flex-col justify-center items-center children:my-4 '>
        <div className='w-20 h-20 bg-bgs-home flex justify-center items-center rounded-full '>
          <div className='w-10 h-10 relative '>
            <div className='absolute top-0 left-0 object-cover object-center'>
              <svg className='text-maincolor w-10 h-10'>
                <use href={`/img/icons.svg#${iconId}`} />
              </svg>
            </div>
          </div>
        </div>
        {isFree && (
          <button className='w-48 py-2 text-xl  bg-bgs-btn rounded-full text-white uppercase text-center '>
            Free
          </button>
        )}
        <div className='text-4xl text-heading-2'>SSL Certificate</div>
        <Link href='/detail'>
          <div className='border-b-bordering border-b text-2xl font-sans font-thin tracking-wider '>
            More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
