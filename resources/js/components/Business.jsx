import React from 'react'
import styles, {layout} from "../style";
import GetStarted from './GetStarted';
import { features } from '../constants';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className= {`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-secondary`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-2">
        <h4 className="font-poppins font-semibold text-gradient text-[18px] leading-[24px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-gradient text-[14px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );

const Business = () => (
    <section id="features" className ={layout.section}>
     <div className={layout.sectionInfo}>
        <h2 className= {`bg-lightBlue-gradient rounded-[10px] ${styles.heading2}`}>Automated Transaction, <br/> and Real Time Updates</h2>
        <p  className= {`font font-poppins text-[15px]  text-white xs:leading[26px]  max-w-[470px] mt-5`}>
          Our Chama Management App, the ultimate solution 
          for streamlining your group's financial 
         activities with ease and efficiency!
         Our user-friendly interface ensures a seamless experience,
          allowing you to effortlessly manage deposits, withdrawals, and loan applications from your mobile or desktop device. 
          With robust security measures in place, including strong user authentication and data encryption, your financial information is always protected
        </p>  
        <GetStarted/>  
     </div>
     <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature,index)=>(
    <FeatureCard key={features.id} {...feature} index={index}/>
))}
</div>



     </section>
);

export default Business