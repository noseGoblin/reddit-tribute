import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';

type Props = {
  topic: string;
  index: number;
};

function SubredditRow({ index, topic }: Props) {
  return (
    <div className='flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b'></div>
  );
}

export default SubredditRow;
