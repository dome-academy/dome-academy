import WaitlistModal from "@/components/WaitlistModal";
import Footer from "../components/Layouts/footer";
import "./globals.css";
import Navbar from "../components/Layouts/navbar";
import Script from "next/script";

export const metadata = {
  title: "Dome Academy | Collaborate together and build great things",
  description: "Connect, Learn, Create and Grow with a community of like minds",
  keywords: "Tech, Learn, Academy, Collaboration, web development",
  openGraph: {
    title: "Dome Academy | Collaborate together and build great things",
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
    title: "Dome Academy | Collaborate together and build great things",
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
        {/* <WaitListInitializer email='' showModal={false} /> */}
        <Navbar />
        <WaitlistModal />

        {children}
        <Footer />
      </body>
      <Script
        async
        data-domain='domeinitiative.com'
        src='https://plausible.io/js/script.js'
      />
    </html>
  );
}
