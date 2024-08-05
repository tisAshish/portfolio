
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function icons(){
    return (
        <div className='flex flex-wrap justify-center gap-5 sm:gap-12  p-9 pt-4'>
            <a href='https://github.com/tisAshish'><FaGithub className='hover:bg-violet-900  bg-slate-400 rounded-full  w-14 h-14 p-1  transform transition-all hover:rotate-45  shadow-2xl' /></a>
            <a href='https://leetcode.com/TisAshish/'><SiLeetcode className='hover:bg-violet-900 bg-slate-400 rounded-full  w-14 h-14 p-2 transform transition-all hover:rotate-45' /></a>
            <a href='mailto:ashishlalcs@gmail.com'><MdEmail className='hover:bg-violet-900 bg-slate-400 rounded-full  w-14 h-14 p-2  transform transition-all hover:rotate-45' /></a>
        </div>
    );
}