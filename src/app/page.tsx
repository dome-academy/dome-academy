import { ClashDisplay } from "@/utils/font";
import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={
        `border-x-2 border-x-neutral-950 dark:border-x-slate-50 mx-4 md:mx-16 min-h-screen mb-0` +
        ClashGrotesk.className
      }
    >
      <header className='pt-12 md:pt-24 px-4 text-center'>
        <h1
          className={
            "text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-semibold mb-4 text-slate-900 dark:text-slate-100 max-w-4xl mx-auto " +
            ClashDisplay.className
          }
        >
          Where talent meets development
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
            name='email'
            className='bg-transparent outline-none border-none h-full py-4 px-3 flex-1 md:text-lg'
            inputMode='email'
            placeholder='johndoe@mail.com'
          />
          <button className='appearance-none px-3 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold text-sm sm:text-base md:text-lg'>
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
      <section
        className={
          "grid grid-flow-col bg-gray-50 dark:bg-neutral-950 -mx-4 md:-mx-16  text-slate-900 dark:text-slate-200 gap-x-5 lg:gap-x-8 font-semibold uppercase py-8 justify-start items-center border-y-2 border-neutral-950 dark:border-slate-50 " +
          ClashDisplay.className
        }
      >
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-purple-600 dark:text-purple-500'>
          Connect
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-yellow-500 dark:text-yellow-400'>
          Learn
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-red-600 dark:text-red-500'>
          Create
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-green-600 dark:text-green-400'>
          Grow
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-purple-600 dark:text-purple-500'>
          Connect
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-yellow-500 dark:text-yellow-400'>
          Learn
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-red-600 dark:text-red-500'>
          Create
        </h2>
        <div className='h-4 w-4 bg-gray-950 dark:bg-slate-50' />
        <h2 className='text-2xl md:text-4xl lg:text-6xl text-green-600 dark:text-green-400'>
          Grow
        </h2>
      </section>
      <section className='py-6'>
        <div
          className={
            "mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 " +
            ClashGrotesk.className
          }
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='bg-gray-50 dark:bg-neutral-950 p-8 md:p-12 lg:px-16 lg:py-24 border-2 border-neutral-950 dark:border-slate-50'>
              <div className='mx-auto max-w-xl text-left'>
                <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-50 md:text-3xl xl:text-4xl'>
                  Join the growth community of innovators, developers and
                  entreprenuers
                </h2>

                <p className='hidden text-slate-700 dark:text-slate-300 sm:mt-4 sm:block xl:text-lg'>
                  As a member of Dome Academy, you have access to community
                  meetings, mentorship and collaboration with seasoned
                  instructors and experts.
                </p>

                <div className='mt-4 md:mt-8'>
                  <button className='appearance-none px-3 text-black dark:text-white hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold inline-block py-3 border-2 border-neutral-950 dark:border-slate-50'>
                    Join waitlist
                  </button>
                </div>
              </div>
            </div>

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
