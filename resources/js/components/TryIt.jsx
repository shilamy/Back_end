import styles from "../style"
import {GetStarted} from "../components";


const TryIt = () => {

  
  return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-darkBlue rounded-[20px] box-shadow`}>
  <div className="flex-1 flex flex-col">
  <h2 className={styles.heading2}>Take a leap and try our service now!</h2>
  <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
  Our Chama management system  ensure coordination, transparency, efficiency 
  allowing members to  access it from anywhere in their region. 
  </p>
  </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

<GetStarted/>

  </div>
    
  </section>
  )
};
export default TryIt