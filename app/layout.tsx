import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={'${inter.className} bg-pink-50 text-brown-900 '}>
      <div  className="heart  absolute top-[33rem] right-[-31rem] scale-[7] blur-[10rem] "></div>
        {children}
        </body>
    </html>
  )
}
