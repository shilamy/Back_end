import { useState} from 'react'
import { navLinks } from '../constants';
import {close,menu} from '../assets'

const Navbar = () => {
   
const [toggle, setToggle] = useState(false);
  

  return (
    <>
  
    <nav className="w-full flex py-6 justify-between items-center shadow-lg navbar">
      <h1 className="font-poppins font-semibold text-white w-[124px] h-[32px]"> KR-WALLET</h1>
      <ul className="list-none  sm:flex hidden justify-end items-center flex-2">
      {navLinks.map((nav,index) =>(
        <li key={nav.id}
        className={`font-roboto font-normal cursor-pointer text-[16px] text-white 
        ${index === navLinks.length -0 ? "mr-0":"mr-10"}`}>
         <a href={`#${nav.id}`}>{nav.title}</a>
        </li>

      ))}
      <div className='flex gap-4'>
      <a href={"login"}>
        <button type='button' className='px-4 py-2  text-black bg-lime-300 rounded-lg'>
         Login
        </button>
        </a>
        <a href={"register"}>
        <button type='button' className='px-4 py-2  text-black bg-orange-300 rounded-lg'>
         Join Us
        </button>
        </a>
      </div>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
   <img src={toggle ? close : menu}
    alt="menu" className="w-[28px] h-[28px]
    object-contain"
    onClick={() => setToggle((prev) => !prev )}
   />
<div
    className= {`${toggle ? 'flex' :  'hidden'}
    p-6 bg-black-gradient absolute top-20 right-0 
    mx-4 my-2 min-w-[140px] rounded-xl sidebar`} 
   >

<ul className="list-none flex flex-col justify-end items-center flex-1">  
    {navLinks.map((nav,index)=>(

      <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px]  text-white
       ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
      >
      <a href={`#${nav.id}`}>{nav.title}</a>

      </li>

    ))} 
    <div>
    <a href={"login"}>
      <button type='button' className='px-6 py-2 text-black bg-lime-300 rounded-[10px] outline-none'>
      Login
      </button>
      </a>
      <a href={"register"}>
        <button type='button' className='px-4 py-2  text-black bg-orange-300 rounded-lg'>
         Join Us
        </button>
        </a>
    </div>
    </ul>
   </div>
</div>
    </nav>
   </>
  )
}

export default Navbar