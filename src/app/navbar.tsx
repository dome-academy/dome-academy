import { ClashDisplay } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
        <button
          className={
            "appearance-none px-3 text-black dark:text-white hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold inline-block py-3 border-l-2 border-neutral-950 dark:border-slate-50 " +
            ClashDisplay.className
          }
        >
          Join waitlist
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
