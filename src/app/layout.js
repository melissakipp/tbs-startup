import Header from './header';
import Footer from './footer';

import './globals.css'

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='solidBg'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
