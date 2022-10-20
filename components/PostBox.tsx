import { useSession } from 'next-auth/react';
import React from 'react';
import Avatar from './Avatar';
import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function PostBox() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form className='stick top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
      <div className='flex items-center space-x-3'>
        <Avatar />

        <input
          {...register('postTitle', { required: true })}
          disabled={!session}
          className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
          type='text'
          placeholder={
            session ? 'Create a post by entering a title!' : 'Sign in to post'
          }
        />

        <PhotoIcon className={`h-6 cursor-pointer text-gray-300`} />
        <LinkIcon className='h-6 text-gray-300' />
      </div>

      {!!watch('postTitle') && (
        <div className='flex flex-col py-2'>
          {/* Body */}
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Body</p>
            <input
              className='m-2 flex-1 bg-blue-50 p-2 outline-none'
              {...register('postBody')}
              type='text'
              placeholder='Text (optional)'
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default PostBox;
