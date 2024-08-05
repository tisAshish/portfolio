
"use client"
import { motion } from "framer-motion"
export default function Middle() {
    
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };
    
    const skillsData = [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind",
        "Framer Motion",
        "Python",
        "C++",
        "Java"
    ];
    
    
    return (
        <section className="text-center p-10">

            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index} className=" font-light bg-slate-200 px-2 py-1 rounded-lg shadow-lg md:px-16"
                        variants={fadeInAnimationVariants}
                        initial= "initial"
                        whileInView="animate"

                        custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
}
//            <h1 className="text-3xl m-5 font-semibold">SKILLS</h1>