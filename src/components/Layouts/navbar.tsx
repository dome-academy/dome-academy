"use client";
import { useWaitlistStore } from "@/store/waitlistStore";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { setWaitlistStore } = useWaitlistStore();
  return (
    <header className='border-b-2 bg-gray-50 dark:bg-neutral-950 border-neutral-950 dark:border-slate-50 px-4 md:px-16'>
      <nav className='flex w-full text-slate-900 dark:text-slate-100 border-x-2 border-neutral-950 dark:border-slate-50 justify-between'>
        <Link
          href='/'
          className='px-4 md:px-6 flex gap-x-0.5 items-center scale-105 h-full py-4'
        >
          <Image src='/images/logo.png' height={40} width={40} alt='logo' />
          <h1
            className={
              `text-lg md:text-xl text-gray-900 dark:text-gray-200 font-semibold ` +
              ClashDisplay.className
            }
          >
            Dome
          </h1>
        </Link>
        <ul className='flex'>
          <li className='hidden md:block'>
            <Link
              href='/about'
              className={
                "flex justify-center min-w-[120px] px-3 items-center scale-105 h-full text-black dark:text-white hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold border-l-2 border-neutral-950 dark:border-slate-50 " +
                ClashGrotesk.className
              }
            >
              About
            </Link>
          </li>
          <button
            onClick={() => setWaitlistStore(true)}
            className={
              "appearance-none min-w-[120px] px-3 md:px-6  text-black dark:text-white hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold inline-block border-l-2 border-neutral-950 dark:border-slate-50 " +
              ClashDisplay.className
            }
          >
            Join waitlist
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
