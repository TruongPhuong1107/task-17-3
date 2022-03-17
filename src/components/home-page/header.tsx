import React from 'react';

const HeaderHomePage = () => {
  return (
    <div className='children:my-5 font-sans'>
      <h1 className='text-8xl font-bold text-maincolor '>
        Hosting solution with benefits
      </h1>
      <p className='text-4xl'>
        Turn your ideas reality with Static. <br />
        With a lot of powerful features, we guarantee simplicity and clarity.
      </p>
      <p className='text-4xl'>
        Image from <span className=' border-b border-b-slate-900'>Freepik</span>
      </p>
      <button className='w-60 py-4 h-fit text-2xl text-white bg-maincolor rounded-full tracking-wider'>
        Read More
      </button>
    </div>
  );
};

export default HeaderHomePage;
