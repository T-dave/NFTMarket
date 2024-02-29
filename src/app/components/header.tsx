import React from 'react'
import styles from "./style/header.module.css"
import Image from "next/image";
import Middle from './headerMiddle'

function Header() {
  return (
    <div className='pt-8'>
        <p className='text-slate-300 font-medium text-sm text-center'>Non Fungible Tokens</p>
        <Middle/>
        <div className='flex justify-center mt-10'>
            <div className='self-center mr-20'>
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width={85}
                            height={45}
                        />
             </div>
             <div className='self-center mr-20'>
                        <Image
                            src="/logo2.png"
                            alt="logo"
                            width={85}
                            height={45}
                        />
                </div>
                <div className='self-center mr-20'>
                        <Image
                            src="/logo3.png"
                            alt="logo"
                            width={85}
                            height={45}
                        />
                </div>
                <div className='self-center'>
                        <Image
                            src="/logo4.png"
                            alt="logo"
                            width={85}
                            height={45}
                        />
                </div>
        </div>
    </div>
  )
}

export default Header