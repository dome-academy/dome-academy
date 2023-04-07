import { ClashDisplay } from "@/utils/font";
import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={
        `text-center border-x-2 border-x-neutral-950 dark:border-x-slate-50 mx-4 md:mx-16 min-h-screen ` +
        ClashGrotesk.className
      }
    >
      <header className='pt-24 px-4'>
        <h1
          className={
            "text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold mb-4 text-slate-900 dark:text-slate-200 max-w-4xl mx-auto " +
            ClashDisplay.className
          }
        >
          Learn alongside others who support you
        </h1>
        <p
          className={
            "text-base md:text-lg xl:text-xl max-w-xl mx-auto text-slate-900 dark:text-slate-200 mb-6 " +
            ClashGrotesk.className
          }
        >
          Connect with other learners, learn from industry experts, create
          projects that make an impact and grow your career or personal goals.
        </p>
        <form
          className={
            "flex max-w-xl text-slate-900 dark:text-slate-200 border-2 border-neutral-950 dark:border-slate-50 divide-x-2 divide-neutral-950 dark:divide-slate-50 mx-auto " +
            ClashGrotesk.className
          }
        >
          <input
            type='email'
            className='bg-transparent outline-none border-none h-full py-3 px-3 flex-1 md:text-lg'
            inputMode='email'
            placeholder='johndoe@mail.com'
          />
          <button className='appearance-none px-3 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold'>
            Join waitlist
          </button>
        </form>
      </header>
      <section className='grid grid-cols-2 gap-4 lg:grid-cols-4 my-12 px-4'>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative'>
          <Image
            src='/images/people-working.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative'>
          <Image
            src='/images/ladies-collaborating.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative'>
          <Image
            src='/images/guy-with-laptop.webp'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative'>
          <Image
            src='/images/guy-smiling.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
          />
        </div>
      </section>
    </main>
  );
}
