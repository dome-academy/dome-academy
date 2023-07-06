import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ClashDisplay } from "@/utils/font";

const DomeLogo = () => {
  return (
    <Link
      href='/'
      className='px-4 md:px-6 flex gap-x-0.5 items-center scale-105 h-full py-3'
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
  );
};

export default DomeLogo;
