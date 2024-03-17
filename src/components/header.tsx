"use client"
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import pic from "../public/ashish.png"
import Spline from '@splinetool/react-spline';

import { motion } from "framer-motion"

import Socials from './socials'
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black pt-9  rounded-3xl ml-9 mr-9  ">


            <div className='text-center pt-9 '>

                <div className='flex justify-center'>
                    <motion.div
                        initial = {{opacity:0 , scale:0}}
                        animate = {{opacity:1 , scale:1}}
                        transition={{
                            type: 'spring',
                            stiffness:125,
                            delay:1,
                        }}
                    >
                        <Image alt="Ashish" src={pic} className='w-sm border-4 sm:border-8 p-5 border-violet-900 rounded-full m-5 transform transition-all hover:scale-90 '></Image>
                    </motion.div>
                </div>
                
                <div className='flex justify-center gap-5 sm:gap-12  p-5'>
                    <a href='https://github.com/tisAshish'><Socials icon={<FaGithub className='hover:bg-violet-900  bg-slate-400 rounded-full  w-16 h-16 p-1  transform transition-all hover:rotate-45' />} /></a>
                    <a href='https://leetcode.com/TisAshish/'><Socials icon={<SiLeetcode className='hover:bg-violet-900 bg-slate-400 rounded-full  w-16 h-16 p-2 transform transition-all hover:rotate-45' />} /></a>
                    <a href='mailto:ashishlalcs@gmail.com'><Socials icon={<MdEmail className='hover:bg-violet-900 bg-slate-400 rounded-full  w-16 h-16 p-2 transition ease-out duration-300 transform transition-all hover:rotate-45' />} /></a>
                </div>

                <div className='flex justify-center'>
                    <div className='text-left'>

                       <div>
                            <h1 className='pt-5 pb-5 text-5xl lg:text-8xl font-light text-slate-400'>Hi, I am <span className='text-violet-800 font-bold'>Ashish Lal</span></h1>
                       </div>

                        <TypeAnimation
                            sequence={[
                                'I am a Postgraduate',
                                1000,
                                'I am a Digital Artist',
                                1000,
                                'I am a Web-Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: '200%', display: 'inline-block', color: '#64748b'
                            }}
                            repeat={Infinity}
                        />
                    </div>
                </div>


            </div>

            <motion.div
                       initial = {{opacity:0 , scale:0}}
                       animate = {{opacity:1 , scale:1}}
                       transition={{
                           type: 'spring',
                           stiffness:125,
                           delay:2,
                       }}
            >
                <Spline scene="https://prod.spline.design/DQx13JtmADzuBnYx/scene.splinecode" />
            </motion.div>


        </div>
    );
}

