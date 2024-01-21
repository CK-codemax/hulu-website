'use client'

import { useState } from "react"
import LineBreak from "./LineBreak"
import Logo from "./Logo"
import Image from "next/image"
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline"


const huluTexts = ['Streaming Library with tons of TV episodes and moviesStreaming Library with tons of TV episodes and movies',
'Most new episodes the day after they air†',
'Access to award-winning Hulu Originals',
'Watch on your favorite devices, including TV, laptop, phone, or tablet',
'Up to 6 user profiles',
'Watch on 2 different screens at the same time',
'No ads in streaming libraryNo ads in streaming library',
''
]

export default function Selector() {
    const [opened, setOpened] = useState('hulu')
    

  return (<div className="pb-[100px]">

<div className=" text-white mb-4 font-semibold text-sm items-center h-[45px] w-[300px] justify-between bg-gray-800 flex rounded-full mx-auto mt-8">
            <p onClick={() => setOpened('hulu')} className={` ${opened === 'hulu' && 'text-black bg-white'} selector`}>Hulu</p>
            <p onClick={() => setOpened('disney-bundle')} className={` ${opened === 'disney-bundle' && 'text-black bg-white'} selector`}>Disney Bundle</p>
            <p onClick={() => setOpened('live-tv')} className={` ${opened === 'live-tv' && 'text-black bg-white'} selector`}>Live TV</p>
          
        </div>

       <LineBreak />

       
        {opened === 'hulu' && (<div>
            <div className="mt-5 flex pb-5 text-white space-x-6 items-end ml-[35%]">
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
         
         <LineBreak />
         <div className="text-white w-[75%] h-[200px] overflow-y-scroll scrollbar-hide mx-auto">

            <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Monthly price</p>
                  <p className="text-center">$7.99/mo.</p>
                  <p className="text-center">$17.99/mo.</p>
            </div> 

           <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Streaming Library with tons of TV episodes and movies</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
            </div> 

            <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Most new episodes the day after they air†</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
            </div> 

            <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Access to award-winning Hulu Originals</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
            </div> 

            <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Watch on your favorite devices, including TV, laptop, phone, or tablet</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
        </div> 

        <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Up to 6 user profilesUp to 6 user profiles</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
        </div> 
        
        <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Watch on 2 different screens at the same time</p>
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
        </div> 
        
        <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">No ads in streaming library</p>
                  <MinusIcon className="h-6 mx-auto text-gray-400" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
        </div> 

        <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
                  <p className="text-left text-wrap">Download and watch</p>
                  <MinusIcon className="h-6 mx-auto text-gray-400" />
                  <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
        </div> 


          
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
