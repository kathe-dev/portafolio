import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Katherine | Portfolio',
  description: 'Katherine is a front-end developer with interest in art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-pink-50 text-brown-900 relative h-[5000px] pt-28 sm:pt-36'}>
        <div  className="heart -z-10 absolute top-[33rem] right-[15rem] sm:right-[25rem] md:right-[35rem] lg:right-[55rem] 2xl:right-[75rem]
        scale-[4] blur-[0.8rem] sm:scale-[5] md:scale-[6] lg:scale-[7] 2xl:scale-[8] "></div> 
        <div  className="heart-pink -z-10 absolute top-[7rem] sm:top-[13rem] left-[18rem] sm:left-[33rem] md:left-[43rem] lg:left-[53rem] 
        xl:left-[63rem] 2xl:left-[73rem] scale-[4] blur-[0.8rem] sm:scale-[5] md:scale-[6] lg:scale-[7] 2xl:scale-[8]"></div> 

        <Header />  
        {children}
        </body>
    </html>
  )
}
