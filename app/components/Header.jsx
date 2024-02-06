'use client'
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { ArrowDownIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from "react";


export default function Header() {
const [openMenu, setOpenMenu] = useState(false)
const modalRef = useRef();

function handleOpenMenu(){
  setOpenMenu(open => !open)
}

useEffect(
  function(){
   function handleClick(e){
    if(!openMenu)return
    if(modalRef.current && !modalRef.current.contains(e.target)){
      console.log('click outside', e.target)
      setOpenMenu(false)
    }

   }

   document.addEventListener('click', handleClick)
  // if(openMenu === true){
  //   document.querySelector('#close-modal').addEventListener('click', handleClick, true)
  // }

   return () => document.removeEventListener('click', handleClick)
  },
  [openMenu]
)

 
  return (
    <header className="w-full border-box header h-full bg-cover bg-no-repeat pb-14">

        {/*Top*/}
        <div className="flex relative items-center pr-6 justify-between sm:pr-16 sm:pl-4">
        <Logo/>
        <div onClick={handleOpenMenu} className="px-2 lg:hidden py-1 cursor-pointer bg-gray-700 rounded-sm">
       <Bars3Icon className="h-5 text-white" />
       </div>
        {/* Also works
       <div onClick={() => setOpenMenu(true)} className="px-2 lg:hidden py-1 cursor-pointer bg-gray-700 rounded-sm">
       <Bars3Icon className="h-5 text-white" />
       </div> */}

        <Link className="uppercase hidden lg:inline-flex px-4 transition-colors duration-500 ease-in-out py-2 hover:text-gray-50 hover:bg-gray-500 rounded-md text-gray-400 text-sm font-bold tracking-widest" href={'/'}>Log in</Link>
        
        </div>
       
        {openMenu && (
         <div ref={modalRef} className="bg-gray-700 w-[280px] lg:hidden absolute top-14 right-6 sm:right-16 rounded-md px-2 py-2">
         <p className="capitalize tracking-widest text-center font-semibold px-4 py-2  hover:text-white hover:bg-gray-500 rounded-md text-gray-300">get the hulu app</p>
         <p  className="uppercase tracking-widest text-center  font-semibold px-4 py-2  hover:text-white hover:bg-gray-500 rounded-md text-gray-300">log in</p>
         <p  className="uppercase font-semibold text-center  tracking-widest  text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-4 py-2">get all three</p>
        </div>
      )}
        {/* Middle*/}
        <div className="flex w-full overflow-hidden px-2 space-x-2 sm:px-6 sm:space-x-6 mt-20 justify-center">
        <div className=" flex w-[50%] sm:w-[40%] xl:w-[30%] flex-col justify-center items-center">
            <p className="uppercase tracking-widest w-full text-sm text-wrap text-[#00ed82] font-semibold mb-6 text-center">disney duo basic</p>
             <div className="flex mx-auto w-[83px] sm:w-[161px] xl:w-[191px] justify-center items-center mb-4 sm:mb-[22px]">
            <Image src={'https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original'} alt="affiliated-logos" width={400} height={113} className="object-contain"/>
               </div> 
               <p className="text-gray-50 font-semibold w-[70%] text-wrap text-center text-lg xl:text-2xl mb-5">
                Both with ads, for $9.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] text-wrap hover:bg-[#00ed82] hover:bg-opacity-75 transition-colors duration-500 ease-in-out w-[90%] text-center px-[5px] xl:px-[24px] py-1 xl:py-2 rounded-md font-bold uppercase tracking-widest text-sm " href={'/'}>get them<br className="sm:hidden" /> both</Link>
        </div>

          <div className=" flex w-[50%] sm:w-[40%] xl:w-[30%] flex-col justify-center items-center">
            <p className="uppercase tracking-widest w-full text-sm text-wrap text-[#00ed82] font-semibold mb-6 text-center">disney trio basic</p>
            <div className="flex mx-auto sm:w-[242px] w-[125px] xl:w-[287px] justify-center items-center mb-3">
            <Image src={'https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg'} alt="affiliated-logos" width={1140} height={256} className="object-contain"/>
               </div>
            <p className="text-gray-50 font-semibold w-[70%] text-wrap text-center text-lg xl:text-2xl mb-5">
                All with ads, for $14.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] text-wrap hover:bg-[#00ed82] hover:bg-opacity-75 transition-colors duration-500 ease-in-out w-[90%] text-center px-[5px] xl:px-[24px] py-1 xl:py-2 rounded-md font-bold uppercase tracking-widest text-sm " href={'/'}>get all <br className="sm:hidden" />three</Link>
            </div> 
        </div>
{/*        
       Bottom */}
       <div className="flex flex-col w-full items-center mt-6 space-y-10">
        <Link href={'/'} className="text-gray-400 underline text-xs">Terms apply</Link>

        <Link href={'/'} className="text-gray-100 underline text-sm tracking-widest uppercase">signup for hulu only</Link>

        <div>
            <p className="text-white text-xs uppercase tracking-widest font-semibold">view more plans</p>
            <div className="flex w-[75px] h-[75px] border rounded-full mx-auto mt-4 items-center justify-center">
                <ArrowDownIcon className="h-7 text-white"/>
            </div>
        </div> 

  </div>
    </header>
  )
}
