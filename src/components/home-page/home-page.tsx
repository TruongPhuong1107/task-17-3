import React from 'react';
import CardFree from './card-free';
import Card from './card';
import HeaderHomePage from './header';
const HomePage = () => {
  return (
    <div className='py-10 px-32 w-screen h-full bg-bgs-home'>
      <HeaderHomePage />
      <div className='flex h-5/6 '>
        <div className='w-3/6 flex items-center'>
          <div className='w-5/6 relative'>
            <img className='w-full' src='/img/main-img.png'></img>
          </div>
        </div>
        <div className='children:ml-4 w-3/6 flex h-fit justify-center items-center '>
          <div className=' flex flex-wrap flex-col children:mb-4'>
            <CardFree />
            <Card />
          </div>
          <div className='flex flex-wrap flex-col-reverse children:mb-4'>
            <CardFree />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
