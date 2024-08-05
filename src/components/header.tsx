"use client"


import Spline from '@splinetool/react-spline';

import { motion } from "framer-motion";
import Myimage from "@/components/myImage";

export default function Header() {
    return (
        <div className=" bg-slate-200 w-screen h-screen pb-0 ">


            <div className='relative flex justify-center '>


                <motion.div
                    className='absolute  bg-transparent h-screen flex overflow-hidden '>

                    <Spline className='w-10'
                    scene="https://prod.spline.design/SQKybbKWYHHKJSNX/scene.splinecode" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 1,
                    }}
                    className='absolute mt-32 md:mt-28'>
                    <Myimage />
                </motion.div>

            </div>

        </div>
    );
}

//<Spline scene="https://prod.spline.design/DQx13JtmADzuBnYx/scene.splinecode" />