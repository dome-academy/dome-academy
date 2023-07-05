import Image from "next/image";
import { ClashDisplay, ClashGrotesk } from "@/utils/font"; //

const AboutPage = () => {
  return (
    <main
      className={
        "border-x-2 border-x-neutral-950 dark:border-x-slate-50 ml-4 md:ml-16 min-h-screen mb-0 sticky divide-y-2 divide-neutral-950 dark:divide-slate-50 " +
        ClashGrotesk.className
      }
    >
      <header className='flex flex-col xl:flex-row divide-y-2 xl:divide-x-2 xl:divide-y-0 divide-neutral-950 dark:divide-slate-50 w-full'>
        <section className='py-20 px-8 md:pl-10 lg:py-40 w-full xl:w-3/5 xl:grid xl:items-center'>
          <div className='max-w-3xl'>
            <h1
              className={
                "text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-slate-800 dark:text-slate-200 xl:w-11/12 " +
                ClashDisplay.className
              }
            >
              We are growth community of innovators, developers and
              entreprenuers
            </h1>
            <p className=' text-slate-700 dark:text-slate-300 mt-4  xl:text-lg w-3/4'>
              As a member of Dome Academy, you have access to community
              meetings, mentorship and collaboration with seasoned instructors
              and experts.
            </p>
          </div>
        </section>
        <section className='w-full xl:w-2/5 grid grid-cols-2 grid-rows-2 gap-0 bg-black dark:bg-white'>
          <div className='bg-white/30 h-auto relative aspect-[5/4] xl:aspect-square'>
            <Image
              src='/images/ds.webp'
              alt='Something'
              className='object-cover border-b-2 border-r-2 border-neutral-950 dark:border-slate-50 filter brightness-125'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
          <div className='bg-white/30 h-auto relative aspect-[5/4] xl:aspect-square'>
            <Image
              src='/images/pm.webp'
              alt='Something'
              className='object-cover border-b-2 border-neutral-950 dark:border-slate-50'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
          <div className='bg-white/30 h-auto relative col-span-2'>
            <Image
              src='/images/people-working.jpg'
              alt='Something'
              className='object-cover'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
        </section>
      </header>
      <section className='lg:py-16'>
        <figure className='w-full col-span-2 aspect-[3/2] lg:aspect-video overflow-hidden max-w-4xl mx-auto relative lg:border-2 border-neutral-950 dark:border-slate-50 group'>
          <figcaption className='inset-0 absolute bg-gradient-to-br from-blue-600/70 to-red-600/80 dark:from-blue-900/80 dark:to-red-700/60 z-20 flex flex-col justify-center md:items-center md:text-center px-4'>
            <h1 className='text-slate-100 font-bold text-3xl md:text-4xl'>
              Join our Community
            </h1>
            <p className='text-slate-100 text-base md:text-lg max-w-xl'>
              As a member of Dome Academy, you have access to community
              meetings, mentorship and collaboration with seasoned instructors
              and experts.
            </p>
            <div className='mt-4 md:mt-8'>
              <a
                href='https://bit.ly/join-dome'
                target='_blank'
                className='appearance-none px-3 text-slate-100 hover:bg-slate-50 hover:text-black font-semibold inline-block py-3 border-2 border-slate-50'
              >
                Become a member
              </a>
            </div>
          </figcaption>
          <Image
            className='scale-110 transition-all duration-300 cursor-pointer object-cover bg-gradient-to-b from-yellow-400/10 via-red-500/10 to-pink-500/10'
            src='/images/guy-with-laptop.webp'
            alt=''
            fill
          />
        </figure>
      </section>
      <div />
    </main>
  );
};

export default AboutPage;
