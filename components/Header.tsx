import Image from 'next/image';
import React from 'react';
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
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
    </div>
  );
}

export default Header;
