'use client'

import { useState } from "react"
import LineBreak from "./LineBreak"
import Logo from "./Logo"
import Image from "next/image"

export default function Selector() {
    const [opened, setOpened] = useState('hulu')
    

  return (<div className="pb-[100px]">

<div className=" text-white mb-4 font-semibold text-sm items-center h-[45px] w-[300px] justify-between bg-gray-800 flex rounded-full mx-auto mt-8">
            <p onClick={() => setOpened('hulu')} className={` ${opened === 'hulu' && 'text-black bg-white'} selector`}>Hulu</p>
            <p onClick={() => setOpened('disney-bundle')} className={` ${opened === 'disney-bundle' && 'text-black bg-white'} selector`}>Disney Bundle</p>
            <p onClick={() => setOpened('live-tv')} className={` ${opened === 'live-tv' && 'text-black bg-white'} selector`}>Live TV</p>
          
        </div>

       <LineBreak />

       
        {opened === 'hulu' && (
            <div className="mt-5 flex text-white space-x-6 items-end ml-[35%]">
                <div className="flex flex-col items-center">
                    <p className="text-black mb-5 bg-[#1ce783] rounded-full text-[10px] font-bold px-4 py-1 text-center inline-block">MOST POPULAR</p>
                    <p className="text-[10px] font-bold mb-1">30 DAY FREE TRIAL</p>
                    <p className="font-bold mb-3">Hulu (With Ads)</p>
                    <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$7.99 / MONTH</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold mb-1">30 DAY FREE TRIAL</p>
                    <p className="font-bold mb-3">Hulu (No Ads)</p>
                    <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$17.99 / MONTH</p>
                </div>
         </div>
        )}

        {opened === 'disney-bundle' && (
          <div className="-translate-y-2 flex text-white items-end ml-[25%] -space-x-20">
          <div className="flex flex-col justify-center items-center">
          <div className="flex scale-75 items-center translate-y-5 sm:px-[50px]">
      <Logo />
          <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/disney-logo.png" width={200} height={100} />

      </div>
              <p className="font-bold mb-3">Disney Bundle Duo Basic</p>
              <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[230px] rounded-md">$9.99 / MONTH</p>
          </div>

          <div className="flex flex-col items-center justify-center">
          <div className="flex scale-[62%] items-center translate-y-5">
      <Logo />
          <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/disney-logo.png" width={200} height={100} />

          <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/espn-logo.png" width={200} height={100} />

      </div>
              <p className="font-bold mb-3">Disney Bundle Trio Basic</p>
              <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[230px] rounded-md">$14.99 / MONTH</p>
          </div>

          <div className="flex flex-col items-center justify-center">
          <div className="flex scale-[62%] items-center translate-y-5">
      <Logo />
          <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/disney-logo.png" width={200} height={100} />

          <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/espn-logo.png" width={200} height={100} />

      </div>
              <p className="font-bold mb-3">Disney Bundle Trio Premium</p>
              <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[230px] rounded-md">$24.99 / MONTH</p>
          </div>
   </div>
        )}

{opened === 'live-tv' && (
            <div className="-translate-y-2 flex text-white items-end ml-[35%]">
                <div className="flex flex-col items-center">
                <div className="flex space-x-1 scale-[62%] items-center translate-y-5">
            <Logo />
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
    
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/espn-logo.png" width={200} height={100} />
    
            </div>
                    <p className="font-bold mb-3">Hulu + Live TV</p>
                    <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$76.99 / MONTH</p>
                </div>

                <div className="flex flex-col items-center">
                <div className="flex space-x-1 scale-[62%] items-center translate-y-5">
            <Logo />
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
    
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/espn-logo.png" width={200} height={100} />
    
            </div>
                    <p className="font-bold mb-3">Hulu (No Ads) + Live TV</p>
                    <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$89.99 / MONTH</p>
                </div>
         </div>
        )}
  </div>
   
  )
}
