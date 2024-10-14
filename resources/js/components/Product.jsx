import React from 'react'
import { card } from "../assets";
import styles, { layout } from "../style";

const Product = () => (
  <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
  <img src={card} alt="billing" className="w-[90%] h-[100%] relative z-[5]" />
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
  <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Easily control your <br className="sm:block hidden" /> Finances &
      Assets.
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
    Analytics Dashboard,Provides a summary of individual financial performance, group savings, and loan distribution.
    </p>
    </div>
 </section>
   )

export default Product