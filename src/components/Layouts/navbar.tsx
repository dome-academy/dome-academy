import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import Link from "next/link";
import DomeLogo from "../Navigation/DomeLogo";

const Navbar = () => {
  return (
    <header className='border-b-2 bg-gray-50 dark:bg-neutral-950 border-neutral-950 dark:border-slate-50'>
      <nav className='flex w-full text-slate-900 dark:text-slate-100  justify-between md:pl-12'>
        <DomeLogo />
        <ul
          className={
            "hidden md:flex items-center gap-x-9 xl:gap-x-12 font-medium " +
            ClashGrotesk.className
          }
        >
          <li>
            <Link href='/' className='hover:text-fuchsia-500'>
              Learn
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-fuchsia-500'>
              About
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-fuchsia-500'>
              Community
            </Link>
          </li>
          <li>
            <a
              className='hover:text-fuchsia-500'
              href='https://domeacademy.substack.com/'
              target='_blank'
            >
              Blog
            </a>
          </li>
        </ul>
        <ul className='flex'>
          <li>
            <Link
              href='/login'
              className={
                "flex justify-center min-w-[120px] px-3 items-center scale-105 h-full text-black dark:text-white hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold border-l-2 border-neutral-950 dark:border-slate-50 " +
                ClashGrotesk.className
              }
            >
              Sign in
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='/join'
              className={
                "appearance-none inline-flex h-full justify-center dark:bg-gray-50 bg-neutral-950 items-center min-w-[120px] px-3 md:px-6  dark:text-black text-white font-semibold border-l-2 border-neutral-950 dark:border-slate-50 " +
                ClashDisplay.className
              }
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
