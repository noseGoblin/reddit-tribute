import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='relative h-10 w-20'>
      <Image
        objectFit='contain'
        src='https://www.redditinc.com/assets/images/site/reddit-logo.png'
        layout='fill'
      />
    </div>
  );
}

export default Header;
