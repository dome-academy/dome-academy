import { ClashDisplay } from "@/utils/font";
import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <header className='pt-12 md:pt-16 lg:pt-24 px-4 text-center'>
      <div
        className={
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 md:mb-10 text-slate-900 dark:text-slate-200 max-w-7xl mx-auto space-y-3 " +
          ClashDisplay.className
        }
      >
        <div className='flex flex-wrap items-center justify-center '>
          <h1>
            Where <span className='text-red-600 dark:text-red-500'>talent</span>
          </h1>{" "}
          <div className='mx-5 aspect-video w-[89px] md:w-[153px] relative'>
            <Image
              src='/images/guy-with-laptop.webp'
              alt='guy-with-laptop'
              fill
              className='object-cover border-4 rounded-[30px] border-neutral-950 dark:border-slate-50'
            />
          </div>
          <h1 className='mt-2 lg:mt-0'>
            meets{" "}
            <span className='text-green-600 dark:text-green-400'>growth</span>
          </h1>
        </div>

        <div className='flex flex-wrap items-center justify-center'>
          <div className='aspect-video w-[70px] md:w-[143px] relative'>
            <Image
              src='/images/people-working.jpg'
              alt='guy-with-laptop'
              fill
              className='object-cover border-4 rounded-[30px] border-neutral-950 dark:border-slate-50'
            />
          </div>
          <div className='-ml-2 z-20 mr-2 md:mr-3 lg:mr-5 rounded-full bg-slate-900 dark:bg-slate-200 text-fuchsia-500 dark:text-fuchsia-700 text-3xl md:text-5xl h-10 md:h-16 aspect-square grid place-items-center'>
            &
          </div>
          <h1 className='text-yellow-500 dark:text-yellow-300'>development.</h1>
          <div className='hidden md:inline-block md:ml-3 lg:ml-5 aspect-square h-[80px] relative'>
            <Image
              src='/images/pm.webp'
              alt='guy-with-laptop'
              fill
              className='object-cover border-4 rounded-[30px] border-neutral-950 dark:border-slate-50'
            />
          </div>
          <div className='hidden md:inline-block md:-ml-2 aspect-[4/3] h-[80px] relative'>
            <Image
              src='/images/guy-smiling.jpg'
              alt='guy-with-laptop'
              fill
              className='object-cover border-4 rounded-[30px] border-neutral-950 dark:border-slate-50'
            />
          </div>
        </div>
      </div>
      <p
        className={
          "text-base md:text-lg xl:text-xl max-w-xl mx-auto text-slate-700 dark:text-slate-300 mb-8 md:mb-12 " +
          ClashGrotesk.className
        }
      >
        Unlock your potential with Dome. Learn in public, work on real world
        problems with others and build your portfolio.
      </p>
      <Link
        href='/login'
        className={
          "appearance-none px-3 uppercase inline-flex items-center text-slate-800 dark:text-slate-100 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold py-3 border-2 border-neutral-950 dark:border-slate-50 " +
          ClashGrotesk.className
        }
      >
        <span>Start Learning</span>{" "}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          className='ml-1'
          viewBox='0 0 256 256'
        >
          <path d='M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z'></path>
        </svg>
      </Link>
    </header>
  );
};

export default Banner;
