import React from 'react'
import {Navbar, Hero,Stats, Business, Product, Clients, CardDeal,Team, TryIt,Footer} from '../components';
import "/resources/css/app.css"
import styles from '../style'


const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    
    <Navbar/>
    </div>
    </div>
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>

    <Hero/>
    </div>
    </div>
    </div>

    <div className='bg-primary w-full overflow-hidden'>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Stats/>
    </div>
    </div>
    </div>
    
    <div className='bg-primary w-full overflow-hidden'>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
 
    <Business/>
    <Product/>
    <Clients/>
    <CardDeal/>
    <Team/>
    <TryIt/>
    <Footer/>

    
    
    </div>
    </div>
    </div>
    </div>
    
  
    
  )
}

export default Home