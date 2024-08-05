import Image from 'next/image';
import pic from "../public/ashish.png";
import Myicon from "@/components/icons";
import Type from '@/components/type'
export default function myIcon(){
    return (
        <div >
            <Image alt="Ashish" src={pic} className='w-60  p-5  rounded-full mx-auto shadow-2xl'></Image>
            <Myicon />
            <Type/>
        </div>
    );
}

//transform transition-all hover:scale-90
//border-4 sm:border-8 border-violet-900