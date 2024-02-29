import React from 'react'
import Image from "next/image";
import { Button2 } from './buttons';

const Footer = () => {
  return (
    <div className='h-80 flex justify-between border rounded-3xl border-slate-900'>
        <div className='flex flex-col justify-between w-1/3 p-5'>
            <div>
            <Image
                src="/logo.png"
                alt="logo"
                width={213}
                height={34}
                />
            </div>
            <div className='flex'>
                <p className='font-normal text-sm text-slate-300 p-6 pl-0 pb-0'>Support</p>
                <p className='font-normal text-sm text-slate-300 p-6 pb-0'>Term of service</p>
                <p className='font-normal text-sm text-slate-300 p-6 pb-0'>License</p>
            </div>
        </div>
        <div className='flex flex-col justify-between border-l-2 border-r-2 w-1/3 p-5 border-slate-900'>
            <div>
                <p className='font-semibold text-base text-white mb-2'>Auctions</p>
                <p className='font-semibold text-base text-white mb-2'>Roadmap</p>
                <p className='font-semibold text-base text-white mb-2'>Discover</p>
                <p className='font-semibold text-base text-white'>Community</p>
                <div className='flex mt-8'>
                    <Button2 text={"My acccount"}/>
                </div>
            </div>
            <div className='flex'>
                <Image
                    src="/facebook.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className='mr-3'
                />
                <Image
                    src="/linkedin.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className='mr-3'
                />
                <Image
                    src="/github.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className='mr-3'
                />
                <Image
                    src="/twitter.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className='mr-3'
                />
                <Image
                    src="/instagram.png"
                    alt="logo"
                    width={20}
                    height={20}
                />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-1/3 p-5'>
            <p className='font-normal text-base text-slate-300'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
            <div className='flex bg-white rounded-2xl p-4 justify-between'>
                <textarea name="search" id="" cols="30" rows="1" placeholder='Newsteller'></textarea>
                <p className='font-semibold text-base text-indigo-800'>Sign in</p>
            </div>
        </div>
    </div>
  )
}

export default Footer