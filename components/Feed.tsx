import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_POSTS } from '../graphql/queries';

function Feed() {
  const { data, error } = useQuery(GET_ALL_POSTS);

  const posts: Post[] = data?.getPostList;

  return <div>Hello</div>;
}

export default Feed;
