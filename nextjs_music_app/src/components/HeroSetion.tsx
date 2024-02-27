import Link from 'next/link';
import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function HeroSetion() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-white'>
            <div className=' p-4 relative z-10 w-full text-center'>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master The Art Of Music</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive Into Our Comprihansive Music Course and Transform Your Musical Journey today.
                    Whether You are Biggner or Looking To refine Your Skills.
                    Join Us to Unlock Your True Potential.
                </p>
                <div className='mt-4'>
                    <Link href={"/Courses"}>
                        <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>Expolore Courses</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default HeroSetion;