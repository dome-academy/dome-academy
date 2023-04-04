import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Dome Academy | Colloborate together and build great things",
  description: "Connect, Learn, Create and Grow with a community of like minds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 dark:bg-neutral-950'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
