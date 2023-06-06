import CoursesGroup from "@/pageBundles/Home/CoursesGroup";
import { ClashGrotesk } from "@/utils/font";
import Banner from "@/pageBundles/Home/Banner";
import People from "@/pageBundles/Home/People";
import Features from "@/pageBundles/Home/Features";

// border-x-2 border-x-neutral-950 dark:border-x-slate-50 mx-4 md:mx-16

export default function Home() {
  return (
    <main className={` min-h-screen mb-0 sticky` + ClashGrotesk.className}>
      <Banner />
      <People />
      <CoursesGroup />
      <Features />
    </main>
  );
}
