import { HeiLogo } from '../../public/assets/';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-red-50 via-blue-50 to-green-50'>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center justify-between text-center'>
          <div className='mb-10 flex justify-between gap-5'>
            <Image src={HeiLogo} alt='HeiLogo' width={70} height={50} />
            <h1 className='ml-2 bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 bg-clip-text text-center text-5xl font-semibold text-transparent'>
              WEB3 - STD22064 - Pokemon
            </h1>
          </div>
          <div className='mt-10 flex justify-between gap-5'>
            <Link
              href={'/client'}
              className='rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-2xl'
            >
              Client
            </Link>
            <Link
              href={'/server'}
              className='rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-2xl'
            >
              Server
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
