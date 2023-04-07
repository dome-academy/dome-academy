import { ClashDisplay } from "@/utils/font";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className='border-b-2 border-neutral-950 dark:border-slate-50 px-4 md:px-16'>
      <nav className='flex w-full  text-slate-900 dark:text-slate-100 py-4 md:py-8 border-x-2 border-neutral-950 dark:border-slate-50 justify-center'>
        <Link href='/' className='ml-10'>
          <h1
            className={
              `text-lg md:text-xl text-red-600 font-semibold ` +
              ClashDisplay.className
            }
          >
            Dome
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
