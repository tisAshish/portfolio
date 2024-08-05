"use client"
import { Weight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Type() {
    return (
        <div className='bg-transparent mt-5 '>
                    <div className='flex justify-center'>
                        <div className='text-left font-thin'>

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
                                    fontSize: '200%', display: 'inline-block', color: '#E2E8F0', 
                                }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
        </div>
    );
}

/*
<div>
<h1 className='pt-5 pb-5 text-5xl lg:text-8xl font-light text-slate-400'>Hi, I am <span className='text-violet-800 font-bold'>Ashish Lal</span></h1>
</div>
color: '#64748b'
color: '#E2E8F0'
*/