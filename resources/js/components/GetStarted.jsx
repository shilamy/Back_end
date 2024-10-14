import React from 'react'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`custom-btn ${styles.flexCenter} rounded-lg min-w-[130px] bg-darkblue-gradient
    cursor-pointer`}>
        <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text[18px] leading[23px]">
            <span className={`py-2 px-4 font-poppins font-bold text-[12px] text-primary bg-secondary rounded-[10px] outline-none ${styles}`}>REGISTER</span>
        </p></div>
    </div>
  )
}

export default GetStarted