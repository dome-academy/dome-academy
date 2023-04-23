import WaitlistCard from "@/components/WaitlistCard";
import WaitlistForm from "@/components/WaitlistForm";
import { ClashDisplay } from "@/utils/font";
import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={
        `border-x-2 border-x-neutral-950 dark:border-x-slate-50 mx-4 md:mx-16 min-h-screen mb-0 sticky` +
        ClashGrotesk.className
      }
    >
      <header className='pt-12 md:pt-24 px-4 text-center'>
        <h1
          className={
            "text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-semibold mb-4 text-slate-900 dark:text-slate-200 max-w-4xl mx-auto  " +
            ClashDisplay.className
          }
        >
          <span className='text-yellow-500 dark:text-yellow-400'>Learn</span> &{" "}
          <span className='text-green-600 dark:text-green-400'>grow</span>{" "}
          alongside{" "}
          <span className='text-purple-600 dark:text-purple-500'>others</span>{" "}
          who <span className='text-red-600 dark:text-red-500'>support</span>{" "}
          you
        </h1>
        <p
          className={
            "text-base md:text-lg xl:text-xl max-w-xl mx-auto text-slate-700 dark:text-slate-300 mb-6 " +
            ClashGrotesk.className
          }
        >
          Connect with other learners, learn from industry experts, create
          projects that make an impact and grow your career or personal goals.
        </p>
        <WaitlistForm />
      </header>
      <section className='grid grid-cols-2 gap-4 lg:grid-cols-4 my-12 md:pt-10 lg:py-10 px-4'>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative'>
          <Image
            src='/images/people-working.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative hidden md:block'>
          <Image
            src='/images/ladies-collaborating.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative hidden md:block'>
          <Image
            src='/images/guy-with-laptop.webp'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative'>
          <Image
            src='/images/guy-smiling.jpg'
            alt='Something'
            className='object-cover border-2 border-neutral-950 dark:border-slate-50'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
      </section>
      <section className='bg-gray-50 dark:bg-neutral-950 border-y-2 border-neutral-950 dark:border-slate-50 -mx-4 md:-mx-16 relative'>
        <div
          className={
            "inline-grid grid-flow-col w-full text-slate-900 dark:text-slate-200 gap-x-5 lg:gap-x-8 font-bold uppercase py-8 justify-start items-center animate-marquee3 md:animate-marquee  relative " +
            ClashDisplay.className
          }
        >
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-600 dark:text-purple-500'>
            Connect
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-400'>
            Learn
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-red-600 dark:text-red-500'>
            Create
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 dark:text-green-400'>
            Grow
          </h2>
        </div>
        <div
          className={
            "hidden md:inline-grid grid-flow-col w-full text-slate-900 dark:text-slate-200 gap-x-5 lg:gap-x-8 font-bold uppercase py-8 justify-start items-center animate-marquee2 absolute inset-0  " +
            ClashDisplay.className
          }
        >
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-600 dark:text-purple-500'>
            Connect
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-400'>
            Learn
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-red-600 dark:text-red-500'>
            Create
          </h2>
          <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-green-600 dark:text-green-400'>
            Grow
          </h2>
        </div>
      </section>
      <section className='py-6'>
        <div
          className={
            "mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 " +
            ClashGrotesk.className
          }
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <WaitlistCard />

            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 xl:grid-cols-2'>
              <figure className='h-40 w-full object-cover sm:h-56 md:h-full relative'>
                <Image
                  alt='Student'
                  src='/images/ladies-collaborating.jpg'
                  className='object-cover border-2 border-neutral-950 dark:border-slate-50'
                  fill
                />
              </figure>
              <figure className='h-40 w-full object-cover sm:h-56 md:h-full relative'>
                <Image
                  alt='Student'
                  src='/images/guy-with-laptop.webp'
                  className='object-cover border-2 border-neutral-950 dark:border-slate-50'
                  fill
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
