import React from 'react'
import Image from "next/image";
import styles from "./style/header.module.css"

function Middle() {
  return (
    <div className={styles.middle}>
        <div className='flex flex-col text-white font-semibold text-9xl'>
            <div className='flex flex-row self-center'>
                <p className='self-center'>A new NFT</p>
                <div className='self-center'>
                    <Image
                    src="/middle1.png"
                    alt="logo"
                    width={40}
                    height={91}
                    />
                </div>

            </div>
            <div className='flex flex-row self-center'>
                <div className='self-center'>
                    <Image
                    src="/middle2.png"
                    alt="logo"
                    width={62}
                    height={62}
                    />
                </div>
                <p className='self-center'>Experience</p>
            </div>
        </div>
        <p className='text-slate-300 font-normal text-2xl text-center p-10'>Discover, collect and sell</p>
        <div className='flex content-center justify-center'>
            <div className='flex rounded-2xl bg-white w-2/5 p-4 justify-between'>
                <div className='flex'>
                <textarea name="search" id="" cols="30" rows="1" placeholder='Items, collections and creators'></textarea>
                <div className='flex justify-between'>
                    <div className='flex border-l-2 border-slate-400 pl-3'>
                        <p className='mr-10'>Category</p>
                        <div className='self-center'>
                        <Image
                            src="/down.png"
                            alt="logo"
                            width={7.12}
                            height={3.54}
                        />
                        </div>
                    </div>
                </div>
            </div>
                <div className='self-center'>
                        <Image
                            src="/search.png"
                            alt="logo"
                            width={24}
                            height={24}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle