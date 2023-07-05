import { ClashGrotesk } from "@/utils/font";
import Image from "next/image";

export const metadata = {
  title: "Sign in to Dome Academy",
  description: "Connect, Learn, Create and Grow with a community of like minds",
  keywords: "Tech, Learn, Academy, Collaboration, web development",
  openGraph: {
    title: "Sign in to Dome Academy",
    description:
      "Connect, Learn, Create and Grow with a community of like minds",
    images: ["images/cover.PNG"],
    siteName: "Dome Academy",
    url: "https://domeinitiative.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Connect, Learn, Create and Grow with a community of like minds",
    title: "Sign in to Dome Academy",
    images: ["images/cover.PNG"],
    site: "@joindomeacademy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 dark:bg-slate-950 w-screen overflow-x-hidden'>
        <main className={` min-h-screen mb-0 flex ` + ClashGrotesk.className}>
          <section className='h-screen grid bg-gray-50 dark:bg-neutral-950 w-full lg:w-1/2 xl:w-2/5 text-slate-900 dark:text-slate-200 place-items-center'>
            {children}
          </section>
          <figure className='hidden lg:block h-screen relative flex-1'>
            <div className='inset-0 absolute bg-gradient-to-br from-blue-600/70 to-red-600/80 dark:from-blue-900/80 dark:to-red-700/60 z-20 flex flex-col justify-center md:items-center md:text-center px-4' />
            <Image
              src='/images/study-group.webp'
              alt='group-learning'
              className='object-cover'
              fill
            />
          </figure>
        </main>
      </body>
    </html>
  );
}
