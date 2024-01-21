'use client'
import { useState } from "react"

export default function ImageSelector() {

  const [opened, setOpened] = useState('live-sports')
 /* let bgImage;
  if(opened === 'live-sports'){
    bgImage = 'https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original'
  }*/
 const bgImage = opened === 'live-sports' && 'https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original' || 
  opened === 'breaking-news' && 'https://cnbl-cdn.bamgrid.com/assets/4a3aa8e2de730150aba6be81a274da9d447c513fbb0a788dad007b5fe1e0877a/original' || 
  opened === 'biggest-events' && 'https://cnbl-cdn.bamgrid.com/assets/1cfd5743e36004288a408e977a0a9e44b57668b2bfdc525956772ce9d8769288/original'
  
  const style = {
    backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(${bgImage})`,
  }
  return (<div className="relative w-full min-h-screen h-[800px] bg-[#0b0c0f] pt-5 pb-20">
        <div className="absolute z-10 top-[200px] left-24 flex space-x-6">
            <p onClick={() => setOpened('live-sports')} className={` uppercase cursor-pointer font-bold text-sm  ${opened === 'live-sports' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Live Sports</p>
            
            <p onClick={() => setOpened('breaking-news')} className={` uppercase cursor-pointer font-bold text-sm ${opened === 'breaking-news' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Breaking News</p>
        
            <p onClick={() => setOpened('biggest-events')} className={` uppercase cursor-pointer font-bold text-sm ${opened === 'biggest-events' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Biggest Events</p>
        
        </div>
         <div style={style} className={`absolute bg-cover w-full min-h-screen h-[702px] bg-no-repeat`}>
        ochuko
    </div>
  </div>
   
  )
}
