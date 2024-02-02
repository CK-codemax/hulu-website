'use client'
import { useState } from "react"
import { motion } from "framer-motion"

export default function ImageSelector() {

  const [opened, setOpened] = useState('live-sports')
 
 
  return (<div className="relative w-full min-h-screen overflow-hidden h-[800px] bg-[#0b0c0f] pt-5 pb-20">
        <div className="absolute z-10 top-[75px] left-[50%] -translate-x-[50%] xl:-translate-x-[0] mx-auto xl:top-[200px] xl:left-24 flex space-x-6">
            <p onClick={() => setOpened('live-sports')} className={` uppercase cursor-pointer text-nowrap font-bold text-xs sm:text-sm  ${opened === 'live-sports' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Live Sports</p>
            
            <p onClick={() => setOpened('breaking-news')} className={` uppercase cursor-pointer text-nowrap font-bold text-xs sm:text-sm   ${opened === 'breaking-news' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Breaking News</p>
        
            <p onClick={() => setOpened('biggest-events')} className={` uppercase cursor-pointer text-nowrap font-bold text-xs sm:text-sm   ${opened === 'biggest-events' ? 'text-white underline underline-offset-[16px] decoration-4' : 'hover:text-gray-600 text-gray-500'}`}>Biggest Events</p>
        
        </div>
         <div className={`absolute ${opened === 'live-sports' && 'live-sports'} ${opened === 'biggest-events' && 'biggest-events'} ${opened === 'breaking-news' && 'breaking-news'} bg-cover w-full min-h-screen h-[702px] bg-no-repeat`}/>
         {opened === 'live-sports' && (<motion.div initial={{
          y : 50,
          opacity : 0,
         }} animate={{
          y : 0,
          opacity : 1,
         }} transition={{
          duration : 0.5,
         }} className={`absolute w-full top-[180px] xl:-translate-x-[0] xl:left-24 xl:top-[280px]`}>
          <p className="text-white mb-4 font-bold text-center text-[30px] sm:text-[35px] xl:text-[40px] xl:text-left">Live Sports</p>
          <p className="text-white text-wrap text-center w-[90%] sm:w-[75%] xl:w-[550px] xl:mx-0 xl:text-left mx-auto mb-4">Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, TNT, NFL Network and more.</p>
          

          
         <p className="text-gray-400 text-center w-[90%] sm:w-[75%] mx-auto mb-5 text-wrap xl:mx-0 xl:text-left xl:w-[550px] block text-xs">
         Live TV plan required. Regional restrictions, blackouts and additional terms apply. <span className="underline cursor-pointer">See details</span>
         </p>
         </motion.div>)}

        {opened === 'breaking-news' && (<motion.div initial={{
          y : 50,
          opacity : 0,
         }} animate={{
          y : 0,
          opacity : 1,
         }} transition={{
          duration : 0.5,
         }} className="absolute w-full top-[180px] xl:-translate-x-[0] xl:left-24 xl:top-[280px]">
          <p className="text-white mb-4 font-bold text-center text-[30px] sm:text-[35px] xl:text-[40px] xl:text-left">Breaking News</p>
          <p className="text-white text-wrap text-center w-[90%] sm:w-[75%] xl:w-[550px] xl:text-left mx-auto xl:mx-0 mb-4">Keep pace with {"what's"} going on locally and globally with trusted opinions from all the top news networks.</p>
          

          
         <p className="text-gray-400 text-center w-[90%] sm:w-[75%] mx-auto mb-5 text-wrap xl:mx-0 xl:text-left xl:w-[550px] block text-xs">
         Live TV plan required. Regional restrictions, blackouts and additional terms apply. <span className="underline cursor-pointer">See details</span>
         </p>
         </motion.div>)}

         {opened === 'biggest-events' && (<motion.div initial={{
          y : 50,
          opacity : 0,
         }} animate={{
          y : 0,
          opacity : 1,
         }} transition={{
          duration : 0.5,
         }} className="absolute w-full top-[180px] xl:-translate-x-[0] xl:left-24 xl:top-[280px]">
          <p className="text-white mb-4 font-bold text-center text-[30px] sm:text-[35px] xl:text-[40px] xl:text-left">Biggest Events</p>
          <p className="text-white text-wrap text-center w-[90%] sm:w-[75%] xl:w-[550px] xl:mx-0 xl:text-left mx-auto mb-4">Spectacular, {"can't"}-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.</p>
          

          
         <p className="text-gray-400 text-center w-[90%] sm:w-[75%] mx-auto mb-5 text-wrap xl:mx-0 xl:text-left xl:w-[550px] block text-xs">
         Live TV plan required. Regional restrictions, blackouts and additional terms apply. <span className="underline cursor-pointer">See details</span>
         </p>
         </motion.div>)} 
  </div>
   
  )
}
