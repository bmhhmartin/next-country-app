'use client';
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);

  const themeHandle = ()=>{
    setTheme(prevCheck => !prevCheck)
  }

  return (
    <html lang="en">
      <body className={theme === true ? 'dark' : 'bg-custom'}>
        <Header themeOption={themeHandle}></Header>
        {children}
        <ProgressBar height="4px" color="#F11F1F" options={{ showSpinner: false }} shallowRouting/>
        <Footer></Footer>
      </body>
    </html>
  )
}
