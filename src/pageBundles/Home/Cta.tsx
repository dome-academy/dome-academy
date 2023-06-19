import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section
      className={
        "border-t-2 border-y-neutral-950 dark:border-y-slate-50 " +
        ClashGrotesk.className
      }
    >
      <div className='border-x-2 border-x-neutral-950 dark:border-x-slate-50 text-slate-900 dark:text-slate-200  mx-4 md:mx-16 py-8 md:py-14'>
        <div className='flex flex-col lg:flex-row items-center px-4 md:px-8 gap-x-20 xl:gap-x-36'>
          <div className='aspect-[5/3] border-2 border-r-8 border-b-8 border-neutral-950 dark:border-slate-50 bg-black relative overflow-hidden rounded-3xl w-full sm:w-4/5 lg:w-1/2'>
            <Image
              src='/images/study-group.webp'
              alt='group-learning'
              className='object-cover'
              fill
            />
          </div>
          <div className='mt-6 text-center lg:text-left lg:mt-0'>
            <h1
              style={ClashDisplay.style}
              className='text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 text-slate-900 dark:text-slate-50'
            >
              Register for Free
            </h1>
            <p className='max-w-[420px]'>
              If you have made it this far, you must be at least a little
              curious. Ignite Your Learning Adventure, Enroll today with Dome
              Academy.
            </p>
            <Link
              href='/login'
              className={
                "appearance-none px-3 mt-6 lg:mt-12 uppercase inline-flex items-center text-slate-800 dark:text-slate-100 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold py-3 border-2 border-neutral-950 dark:border-slate-50 " +
                ClashGrotesk.className
              }
            >
              <span>Get started</span>{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
