import WaitlistModal from "@/components/WaitlistModal";
import Footer from "./footer";
import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Dome Academy | Collaborate together and build great things",
  description: "Connect, Learn, Create and Grow with a community of like minds",
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
    </html>
  );
}
