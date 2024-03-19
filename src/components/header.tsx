"use client"

import Image from 'next/image'
import pic from "../public/ashish.png"
import Spline from '@splinetool/react-spline';

import { motion } from "framer-motion"


import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {
    return (
        <div className=" bg-black  w-screen h-screen pb-0">


            <div className='relative flex justify-center '>


                <motion.div
                    className='absolute z-2  mt-0 bg-black '>

                    <Spline scene="https://prod.spline.design/SQKybbKWYHHKJSNX/scene.splinecode" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 1,
                    }}
                    className='absolute z-1  mt-52 p-5'>
                    <Image alt="Ashish" src={pic} className='w-sm border-4 sm:border-8 p-5 border-violet-900 rounded-full  transform transition-all hover:scale-90 '></Image>
                                    
                    <div className='flex justify-center gap-5 sm:gap-12  p-9 pt-5'>
                        <a href='https://github.com/tisAshish'><FaGithub className='hover:bg-violet-900  bg-slate-400 rounded-full  w-16 h-16 p-1  transform transition-all hover:rotate-45' /></a>
                        <a href='https://leetcode.com/TisAshish/'><SiLeetcode className='hover:bg-violet-900 bg-slate-400 rounded-full  w-16 h-16 p-2 transform transition-all hover:rotate-45' /></a>
                        <a href='mailto:ashishlalcs@gmail.com'><MdEmail className='hover:bg-violet-900 bg-slate-400 rounded-full  w-16 h-16 p-2  transform transition-all hover:rotate-45' /></a>

                    </div>
 

                </motion.div>


            </div>

        </div>
    );
}

//<Spline scene="https://prod.spline.design/DQx13JtmADzuBnYx/scene.splinecode" />