import React from 'react'
import Image from "next/image";
import Envelope from './envelope';

const Stat = () => {
  return (
    <div className='my-20'>
         <div className='flex justify-center mb-20'>
            <div className='flex flex-col mr-24'>
                <div className='self-center'>   
                <Image
                        src="/stat1.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </div>
                <p className='font-semibold text-4xl text-white'>300k</p>
                <p className='font-semibold text-base text-slate-400 text-center'>Users Active</p>
            </div>
            <div className='flex flex-col mr-24'>
                <div className='self-center'>   
                <Image
                        src="/stat2.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </div>
                <p className='font-semibold text-4xl text-white'>52.5k</p>
                <p className='font-semibold text-base text-slate-400 text-center'>Artworks</p>
            </div>
            <div className='flex flex-col mr-24'>
                <div className='self-center'>   
                <Image
                        src="/stat3.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </div>
                <p className='font-semibold text-4xl text-white'>17.5k</p>
                <p className='font-semibold text-base text-slate-400 text-center'>Artists</p>
            </div>
            <div className='flex flex-col'>
                <div className='self-center'>   
                <Image
                        src="/stat4.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </div>
                <p className='font-semibold text-4xl text-white'>35.58</p>
                <p className='font-semibold text-base text-slate-400 text-center'>Eth Spent</p>
            </div>
        </div>
        <div className='px-24'>
            <Envelope/>
        </div>
    </div>
  )
}

export default Stat