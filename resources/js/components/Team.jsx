import React from 'react'
import { team } from '../constants'
import styles
 from '../style'
const Team = () =>
(
    <section id="team" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
       
        {team.map((member)=>(
            <div key={member.name} className={`flex flex-col items-center ${styles.flexCenter} sm:w-[192px] w-[120px] sm:h-[192px] h-[120px] m-5`}>
            <img src={member.profile} alt={`${member.name} profile`} className="sm:w-[100px] w-[100px] object-contain" />
          <h3 className="text-lg text-primary font-bold">{member.name}</h3>
          <p className="text-sm text-black">{member.role}</p>
        </div>
        ))}
    </div>

    </section>
)
export default Team