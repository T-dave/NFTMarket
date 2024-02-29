import React from 'react'
import Image from "next/image";
import styles from "./style/navbar.module.css";
import Link from 'next/link';

function NavBar() {
  return (
    <div className='flex flex-row justify-between p-5 text-slate-300'>
        <div className='self-center'>
        <Link href="/">
            <Image
                src="/logo.png"
                alt="logo"
                width={213}
                height={24}
                />
        </Link>
        </div>
            <div className='flex flex-row self-center'>
                <p className='pr-10'>Auctions</p>
                <p className='pr-10'>Roadmap</p>
                <p className='pr-10'>Discover</p>
                <p>Community</p>
            </div>

            <div className='flex flex-row self-center'>
                <button className='mr-5 border-2 py-4 px-6 rounded-xl'>
                    <p>Contact</p>
                </button>
                <button className={styles.button}>
                    <p className='text-white'>My Account</p>
                </button>
            </div>
    </div>
  )
}

export default NavBar