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
      <body className='bg-gray-50 dark:bg-slate-900 w-screen overflow-x-hidden'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
