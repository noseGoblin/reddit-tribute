import Image from 'next/image';
import React from 'react';
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0'>
        <Image
          objectFit='contain'
          src='https://www.redditinc.com/assets/images/site/reddit-logo.png'
          layout='fill'
        />
      </div>

      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='ml-2 hidden flex-1'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      {/* Search box */}
      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type='text'
          placeholder='Search Reddit'
        />
        <button type='submit' hidden />
      </form>
    </div>
  );
}

export default Header;
