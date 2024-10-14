import React from 'react'
import styles from '../style';

const CustomButton = () => {
  return (
    <div className={`custom-btn ${styles.flexStart} rounded-lg min-w-[130px] bg-darkblue-gradient
    cursor-pointer`}>
     <div className={`${styles.flexStart} flex-row`}>
  <p className="font-poppins font-medium text-[18px] leading-[23px]">
    <span className="text-white">EXPLORE
    </span>
  
  </p>

  </div>
    </div>
  )
}

export default CustomButton