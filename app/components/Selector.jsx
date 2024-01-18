'use client'

import { useState } from "react"
import LineBreak from "./LineBreak"

export default function Selector() {
    const [opened, setOpened] = useState('hulu')
    

  return (<div className="pb-[100px]">

<div className=" text-white mb-4 font-semibold text-sm items-center h-[45px] w-[300px] justify-between bg-gray-800 flex rounded-full mx-auto mt-8">
            <p onClick={() => setOpened('hulu')} className={` ${opened === 'hulu' && 'text-black bg-white'} selector`}>Hulu</p>
            <p onClick={() => setOpened('disney-bundle')} className={` ${opened === 'disney-bundle' && 'text-black bg-white'} selector`}>Disney Bundle</p>
            <p onClick={() => setOpened('live-tv')} className={` ${opened === 'live-tv' && 'text-black bg-white'} selector`}>Live TV</p>
          
        </div>

       <LineBreak />

       <div className="text-white">
        {opened === 'hulu' && (
            <div className="mt-5 flex space-x-6 items-end ml-[35%]">
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
       </div>
  </div>
   
  )
}
