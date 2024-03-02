"use client";

import React from 'react'
import Image from 'next/image'
import fotoKatheMaquillada from '../public/fotoKatheMaquillada.jpg'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center ">
            <div className="relative ">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, type: "tween" }}
                >
                    <Image  src={fotoKatheMaquillada} alt="Katherine photo" width={200} height={200} quality="90" priority={true}
                    className="rounded-full h-24 w-24 border-[0.35rem] border-ivory-200 object-cover shadow-xl z-20 "  />
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}    
                > 🎮 </motion.span>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
        <span>Hello, </span> <span className='font-bold'> I'm Katherine. </span> <span> I'm a <span className='font-bold'> computer scientist </span> , with great interest in <span className='font-bold'>web development</span> I enjoying building sites. My focus is <span className='font-bold'>ReactJS </span> </span>
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3  px-4 text-lg font-medium"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <Link href="#contact" className="group bg-brown-800 text-ivory-200 px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:outline-none focus:scale-110 hover:scale-110 hover:bg-brown-900 active:scale-105 transition"
            > Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> </Link>

            <a className="group text-brown-800 bg-ivory-200 px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:outline-none focus:scale-110 hover:scale-110 hover:bg-ivory-400 active:scale-105 transition cursor-pointer" href="/CV.pdf" download={true}
            > Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition "/> </a>
            
            <a className="group text-brown-700 bg-ivory-200 p-4 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:outline-none focus:scale-110 hover:scale-[1.15] hover:text-brown-800 hover:bg-ivory-400 active:scale-105 transition" href="https://www.linkedin.com/in/kathdev/" target='_blank' 
            > <BsLinkedin/> </a>
            
            <a className="group text-brown-700 bg-ivory-200 p-4 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:outline-none focus:scale-110 hover:scale-[1.15] hover:text-brown-800 hover:bg-ivory-400 active:scale-105 transition" href="https://github.com/kathe-dev" target='_blank'
            > <FaGithubSquare/> </a>
        </motion.div>

    </section>
  )
}
