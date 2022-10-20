import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PostBox from '../components/PostBox';

const Home: NextPage = () => {
  return (
    <div className='my-7 max-w-5xl mx-auto'>
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      {/* PostBox */}
      <PostBox />

      <div>{/* Feed */}</div>
    </div>
  );
};

export default Home;
