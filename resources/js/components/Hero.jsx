import React from 'react'
import styles from '../style.js'
import CustomButton from './CustomButton.jsx';
const Hero = () => {
  return (
    <section id="home"
     className={`${styles.paddingY} justify-center items-center mt-10 gap-x-6 `}>
        <div className={`text-center flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className=" text-balance text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
        Your Chama Activities, <span className="text-blueGreen">Simplified</span></h1>
       

    <p className= {`${styles.paragraph}max-w-[470px] mt-5`}>
    Designed to help manage group contribution and helping members to apply for loans, track repayments, 
    <br/>including viewing of interest details. 
    </p>
<div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
  <a href="#"><CustomButton/></a>
  <div className= {`${styles.paddingX}`}>
  <a href="#" className=" font-poppins text-[18px] font-semibold leading-[23px] text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
  </div>
</div>


    </div>
    </section>
  )
}

export default Hero