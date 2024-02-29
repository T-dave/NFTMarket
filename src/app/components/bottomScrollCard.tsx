import React from 'react'
import Image from "next/image";

const BottomScrollCard = ({src}) => {
  return (
    <div className='px-3 '>
        <Image
            src={src}
            alt="logo"
            width={89}
            height={89}
        />
        <p className='font-normal text-sm text-slate-300 text-center'>1.51 ETH</p>
    </div>
  )
}

export default BottomScrollCard