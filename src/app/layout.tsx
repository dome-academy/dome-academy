import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
