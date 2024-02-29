import React from 'react'
import Image from "next/image";
import { Button1, Button2 } from './buttons';

function Overline2() {
  return (
    <div className='flex px-40 py-16 border-b border-slate-800'>
        <div className='self-center'>
                <Image
                    src="/overline2.png"
                    alt="logo"
                    width={684}
                    height={616}
                />
        </div>
        <div className='flex self-center justify-end'>
            <div className='w-2/3'>
                <p className='font-semibold text-sm text-slate-300 mb-4'>Overline</p>
                <p className='font-semibold text-5xl text-white mb-4'>Habitant tristique aliquam in vel scelerisque</p>
                <p className='font-semibold text-sm text-slate-300'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className='flex mt-3'>
                    <Button2 text={"Get Started"}/>
                    <div className='mx-3'/>
                    <Button1 text={"Learn More"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overline2