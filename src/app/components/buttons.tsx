import React from 'react'
import styles from './style/header.module.css'

export function Button1({text}) {
  return (
    <div className='py-4 px-6 border rounded-xl border-slate-700'>
        <p className='font-semibold text-base text-slate-300 text-center'>{text}</p>
    </div>
  )
}

export function Button2({text}) {
    return (
      <div className={styles.button2}>
          <p className='font-semibold text-base text-slate-300 text-center'>{text}</p>
      </div>
    )
  }
