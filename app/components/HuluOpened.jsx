'use client'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, MinusIcon } from "@heroicons/react/24/outline";
import LineBreak from "./LineBreak";
import { useState } from "react";

export default function HuluOpened() {

    const [showAddOns, setShowAddOns] = useState(false)

    function setShow(){
        setShowAddOns(!showAddOns)
    }

  return (<div>
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

<div className="grid grid-cols-3 grid-rows-1 text-[14px] text-left w-full pt-2 pb-8 items-center border-b border-gray-500">
<p className="text-white mx-auto mb-5 text-wrap text-left w-[550px] block text-[10px]">
 †For current-season shows in the streaming library only
 <br />
 **Switches from Live TV to Hulu take effect as of the next billing cycle
 </p>
</div> 
{showAddOns === true && (<>
    <p className="text-white mb-4 mt-20 font-bold text-[30px] text-left">Available Add-ons</p>
    <p className="text-white text-wrap text-[14px] border-b border-gray-500 pb-5 w-full text-left">

    Add-ons available at an additional cost.
    <br />
Add them up after you sign up for Hulu.
    </p>

    <div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Max</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">CINEMAX®</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Paramount+ with SHOWTIME</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-3 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">STARZ®</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 
</>
 

)}

{showAddOns === false ? (
    <div onClick={setShow} className="text-[18px] flex items-center justify-center text-center w-full py-5 cursor-pointer border-b border-gray-500">
          <p className="text-left text-wrap">Show Add-ons</p>
         <ChevronDownIcon className="h-7 " />
</div> 

) : 

(
    <div onClick={setShow} className="text-[18px] flex items-center justify-center text-center w-full py-5 cursor-pointer border-b border-gray-500">
          <p className="text-left text-wrap">Hide Add-ons</p>
         <ChevronUpIcon className="h-7 " />
</div> 

)}

  
 </div>


 </div>
)

}
