"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        <span>Hello, </span> <span className='font-bold'> I'm Katherine. </span> <span> I'm a <span className='font-bold'> computer scientist </span> , with great interest in <span className='font-bold'>web development</span>; I enjoy learning about user interface (UI) design, art, and videogames. I enjoy collaborating in multidisciplinary teams, where I firmly believe in the importance of learning from each other. I believe that the diversity of perspectives always enriches our projects and drives us forward in the pursuit of creative and effective solutions. I enjoying building sites. My focus is <span className='font-bold'>ReactJS, and Angular </span> </span>

        </p>

        <p>

        </p>
    </motion.section>
  )
}
