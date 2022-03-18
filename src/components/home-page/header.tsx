import React from 'react';

const HeaderHomePage = () => {
  return (
    <div className='xl:children:mb-7 font-fred children:my-4'>
      <h1 className='xl:text-8xl font-bold text-maincolor text-7xl'>
        Hosting solution with benefits
      </h1>
      <p className='xl:text-4xl text-3xl'>
        Turn your ideas reality with Static. <br />
        With a lot of powerful features, we guarantee simplicity and clarity.
      </p>
      <p className='xl:text-4xl text-3xl'>
        Image from <span className=' border-b border-b-slate-900'>Freepik</span>
      </p>
      <button className='xl:w-60 xl:py-4 xl:text-2xl text-white bg-maincolor rounded-full tracking-wider text-2xl w-56 py-2'>
        Read More
      </button>
    </div>
  );
};

export default HeaderHomePage;
