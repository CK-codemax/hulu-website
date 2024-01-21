'use client'

import { useState } from "react"
import LineBreak from "./LineBreak"
import HuluOpened from "./HuluOpened"
import DisneyBundle from "./DisneyBundle"
import LiveTV from "./LiveTV"


export default function Selector() {
    const [opened, setOpened] = useState('hulu')
    

  return (<div className="pb-[100px]">

<div className=" text-white mb-4 font-semibold text-sm items-center h-[45px] w-[300px] justify-between bg-gray-800 flex rounded-full mx-auto mt-8">
            <p onClick={() => setOpened('hulu')} className={` ${opened === 'hulu' && 'text-black bg-white'} selector`}>Hulu</p>
            <p onClick={() => setOpened('disney-bundle')} className={` ${opened === 'disney-bundle' && 'text-black bg-white'} selector`}>Disney Bundle</p>
            <p onClick={() => setOpened('live-tv')} className={` ${opened === 'live-tv' && 'text-black bg-white'} selector`}>Live TV</p>
          
        </div>

       <LineBreak />

       
        {opened === 'hulu' && <HuluOpened />}
        {opened === 'disney-bundle' && <DisneyBundle />}

{opened === 'live-tv' && <LiveTV />}
  </div>
   
  )
}
