import Image from "next/image";
import Logo from "./Logo";
import { useState } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, MinusIcon } from "@heroicons/react/24/outline";
import LineBreak from "./LineBreak";

export default function DisneyBundle() {

    const [showAddOns, setShowAddOns] = useState(false)

    function setShow(){
        setShowAddOns(!showAddOns)
    }

  return (<div>

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

<LineBreak />
 <div className="text-white w-[75%] h-[200px] overflow-y-scroll scrollbar-hide mx-auto">

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Monthly price. Save up to $17.98/mo.*</p>
          <p className="text-center flex flex-col justify-center items-center">
            <span className="text-xs text-gray-500 line-through">$15.98/mo.</span> 
            <span>$9.99/mo.*</span>
        </p>

        <p className="text-center flex flex-col justify-center items-center">
            <span className="text-xs text-gray-500 line-through">$26.97/mo.</span> 
            <span>$14.99/mo.*</span>
        </p>

        <p className="text-center flex flex-col justify-center items-center">
            <span className="text-xs text-gray-500 line-through">$42.97/mo.</span> 
            <span>$24.99/mo.*</span>
        </p>
          
    </div> 

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Subscriptions included in each plan</p>
          <p className="text-center flex flex-col justify-center items-center">
          Disney+ and Hulu,<br /> both with ads
        </p>

        <p className="text-center flex flex-col justify-center items-center">
        Disney+, Hulu, and<br/> ESPN+, all with ads
        </p>

        <p className="text-center flex flex-col justify-center items-center">
        Disney+ and Hulu<br/> without ads, ESPN+ <br />with ads
        </p>
          
    </div> 

   <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Hulu streaming library with tons of episodes and movies</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Endless entertainment with Disney+Endless entertainment with Disney+</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Live sports with ESPN+, now in the Hulu appLive sports with ESPN+, now in the Hulu app</p>
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Most new episodes on Hulu the day after they air†</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 

     <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Access to award-winning Hulu Originals</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 


     <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Watch on your favorite devices, including TV, laptop, phone, or tablet</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 


     <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">No ads in Hulu streaming library</p>
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 


     <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">No ads on Disney+</p>
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 


     <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Download and watch on Hulu</p>
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Download and watch on Disney+</p>
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <MinusIcon className="h-6 mx-auto text-gray-400" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
    </div> 







    
<div className="grid grid-cols-3 grid-rows-1 text-[14px] text-left w-full pt-2 pb-8 items-center border-b border-gray-500">
<p className="text-white mx-auto mb-5 text-wrap text-left w-[550px] block text-[10px]">
*Savings compared to regular monthly price of each service. <span className="cursor-pointer underline">Terms apply</span>.<br />
**Switches from Live TV to Hulu take effect as of the next billing cycle<br />
†For current-season shows in the streaming library only


 </p>
</div> 
{showAddOns === true && (<>
    <p className="text-white mb-4 mt-20 font-bold text-[30px] text-left">Available Add-ons</p>
    <p className="text-white text-wrap text-[14px] border-b border-gray-500 pb-5 w-full text-left">

    Add-ons available at an additional cost.
    <br />
Add them up after you sign up for Hulu.
    </p>

    <div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Max</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">CINEMAX®</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">Paramount+ with SHOWTIME</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
</div> 

<div className="grid grid-cols-4 grid-rows-1 text-[14px] font-semibold text-left w-full py-5 items-center border-b border-gray-500">
          <p className="text-left text-wrap">STARZ®</p>
          <CheckIcon className="h-6 mx-auto text-[#1ce783]" />
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
