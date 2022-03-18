import React from 'react';
import CardFree from './card-free';
import Card from './card';
import HeaderHomePage from './header';
const HomePage = () => {
  return (
    <div className='px-[5%] pt-[1%] h-full bg-bgs-home '>
      <HeaderHomePage />
      <div className='flex flex-col 2xl:flex-row'>
        <div className=' flex items-center justify-center w-full 2xl:justify-start '>
          <div className='w-full '>
            <img className='w-full h-full' src='/img/main-img.png'></img>
          </div>
        </div>
        <div className='2xl:children:ml-4  flex justify-center 2xl:items-center flex-col 2xl:flex-row w-full children:ml-0 '>
          <div className=' flex flex-wrap 2xl:flex-col  items-center children:mb-4 md:flex-row justify-center md:children:ml-5'>
            <Card iconId='icon-lock' isFree />
            <Card iconId='icon-editor' />
          </div>
          <div className='flex flex-wrap 2xl:flex-col-reverse items-center children:mb-5 justify-center md:children:ml-5 md:flex-row-reverse'>
            <Card iconId='icon-earth' isFree />
            <Card iconId='icon-storage' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
