'use client'

import FooterCols from "./FooterCols"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const browse = ['Streaming Library',
'Live TV',
'Live News',
'Live Sports',]

const browse1 = ['TV Shows',
'Movies',
'Originals',
'Network',
'Kids',]

const browse2 = [
    'max',
    'cinemax',
    'Paramount+ with SHOWTIME',
    'STARZ',
]

const browse3 = [
    'Disney Bundle Trio Basic',
    'Disney Bundle Trio Premium',
    'Disney Bundle Duo Basic',
    'Student Discount',
]

const help = ['Account & Billing',
'Plans & Prices',
'Supported Devices',
'Accessibility',]

const about = [
    'Shop Hulu',
    'Press',
    'Jobs',
    'Contact',
    'Guides | What to Watch',
]

const footerTexts = [
'© 2024 Hulu, LLC',
'About Ads',
'Subscriber Agreement',
'Privacy Policy',
'Do Not Sell or Share My Personal Information',
'Your US State Privacy Rights',
'TV Parental Guidelines',
'Sitemap',
]


export default function Footer() {

  const [opened, setOpened] = useState('')

 
  return (
    <div className="bg-gray-200 pb-16 pt-16 w-full">
       <div className="hidden sm:grid grid-rows-1 sm:w-[90%] xl:w-[75%] mx-auto border-b border-gray-400 pb-24 grid-cols-6 ">
           <div>
            <p className="uppercase font-bold text-gray-800 text-[14px]">browse</p>
            <FooterCols list={browse}/>
           </div>

           <div className="pt-5">
           <FooterCols list={browse1}/>
           </div>

           <div className="pt-5">
           <FooterCols list={browse2}/>
           </div>

           <div className="pt-5">
           <FooterCols list={browse3}/>
           </div>

           <div>
            <p className="uppercase font-bold text-gray-800 text-[14px]">help</p>
            <FooterCols list={help}/>
           </div>

           <div>
            <p className="uppercase font-bold text-gray-800 text-[14px]">about</p>
            <FooterCols list={about}/>
           </div>
    </div>





           <div className="w-full sm:hidden px-6 mx-auto border-b border-gray-400 pb-24 ">

            <div>
            {opened !== 'browse' ? (<div onClick={() => setOpened('browse')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
            <p className="uppercase font-bold text-gray-800 text-[14px]">browse</p>
            <ChevronDownIcon className="h-5  text-gray-800" />
            </div>) : 
            (<>
            <div onClick={() => setOpened('')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
             <p className="uppercase font-bold text-gray-800 text-[14px]">browse</p>
            <ChevronUpIcon className="h-5  text-gray-800" />
            </div>
             <div className="flex flex-col space-y-2 justify-start items-start">
             {browse.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
             <br />
             {browse1.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
            <br />
             {browse2.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
            <br />
             {browse3.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
  
             </div>
            </>)}
            </div>

            <div>
            {opened !== 'help' ? (<div onClick={() => setOpened('help')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
            <p className="uppercase font-bold text-gray-800 text-[14px]">help</p>
            <ChevronDownIcon className="h-5  text-gray-800" />
            </div>) : 
            (<>
            <div onClick={() => setOpened('')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
             <p className="uppercase font-bold text-gray-800 text-[14px]">help</p>
            <ChevronUpIcon className="h-5  text-gray-800" />
            </div>
             <div className="flex flex-col space-y-2 justify-start items-start">
             {help.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
          
             </div>
            </>)}
            </div>

            <div>
            {opened !== 'about' ? (<div onClick={() => setOpened('about')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
            <p className="uppercase font-bold text-gray-800 text-[14px]">about</p>
            <ChevronDownIcon className="h-5  text-gray-800" />
            </div>) : 
            (<>
            <div onClick={() => setOpened('')} className="flex justify-between py-5 mb-3 items-center border-b border-gray-500">
             <p className="uppercase font-bold text-gray-800 text-[14px]">about</p>
            <ChevronUpIcon className="h-5  text-gray-800" />
            </div>
             <div className="flex flex-col space-y-2 justify-start items-start">
             {about.map((item) => <li className="cursor-pointer text-[14px] list-none capitalize text-wrap text-gray-700" key={item}>{item}</li>)}
          
             </div>
            </>)}
            </div>
        

         
       </div>

       <div className="w-[95%] sm:w-[75%] mx-auto mt-16">
        <div className="flex items-center space-x-10">
          <FaFacebookF className="text-[20px] text-gray-600 cursor-pointer" />
          <FaTwitter className="text-[20px] text-gray-600 cursor-pointer"/>
          <FaYoutube className="text-[20px] text-gray-600 cursor-pointer"/>
          <FaInstagram className="text-[20px] text-gray-600 cursor-pointer"/>
        </div>

        <div className="flex flex-wrap space-x-3  mt-12 justify-start items-start ">
        {footerTexts.map((text) => <p key={text} className="whitespace-nowrap  py-2 text-nowrap cursor-pointer text-left text-gray-600 text-xs">{text}</p> )}
        </div>
       </div>
    </div>
  )
}
