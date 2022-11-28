import Image from 'next/image';
import React from 'react';
import {
  ChevronDownIcon,
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeEuropeAfricaIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function Header() {
  const { data: session } = useSession();

  return (
    <div className='sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Link href='/'>
          <Image
            objectFit='contain'
            src='https://www.redditinc.com/assets/images/site/reddit-logo.png'
            layout='fill'
          />
        </Link>
      </div>

      <div className='mx-7 flex items-center xl:min-w-[300px] cursor-pointer'>
        <Link href='/'>
          <HomeIcon className='h-5 w-5' />
        </Link>
        <Link href='/'>
          <p className='ml-2 hidden sm:inline flex-1'>Home</p>
        </Link>
        <Link href='/'>
          <ChevronDownIcon className='h-5 w-5' />
        </Link>
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

      <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeEuropeAfricaIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatBubbleOvalLeftEllipsisIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <MegaphoneIcon className='icon' />
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <Bars3Icon className='icon' />
      </div>

      {/* Sign in/out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className='hidden curson-point items-center space-x-2 border border-gray-100 p-2 lg:flex cursor-pointer'
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              objectFit='contain'
              src='https://links.papareact.com/23l'
              layout='fill'
              alt=''
            />
          </div>
          <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
          </div>

          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className='hidden curson-point items-center space-x-2 border border-gray-100 p-2 lg:flex'
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              objectFit='contain'
              src='https://links.papareact.com/23l'
              layout='fill'
              alt=''
            />
          </div>

          <p className='text-gray-400'>Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
