import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { ArrowDownIcon, Bars3Icon } from '@heroicons/react/24/outline'


export default function Header() {

  // let bgImage;

  // if(window.matchMedia("(max-width : 637px)").matches){
  //   bgImage = 'https://cnbl-cdn.bamgrid.com/assets/4e3cb21e012549ce1d54e194184cec4f4915d1ff87e0963e96651cdeff1f3e6f/original'
  // }

  // // if((window.matchMedia("(max-width: 637px)")).matches){
  // //   bgImage = 'https://cnbl-cdn.bamgrid.com/assets/4e3cb21e012549ce1d54e194184cec4f4915d1ff87e0963e96651cdeff1f3e6f/original'
  // // }else  if((window.matchMedia("(min-width: 638px)")).matches){
  // //    bgImage = 'https://cnbl-cdn.bamgrid.com/assets/526124a79cff66402dd054d3391099b4546892083c29d25a2d17c8193cc439bf/original'
  // // }else if((window.matchMedia("(min-width: 1278px)")).matches){
  // //   bgImage = 'https://cnbl-cdn.bamgrid.com/assets/62ed936344e6ffbac48c896b2bd327fe171521dd941b6ddc8402e2eae50116fc/original'
  // // }

  // const style = {
  //   backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(${bgImage})`,
  // }

  return (
    <header className="w-full header h-full bg-cover bg-no-repeat pb-14">

        {/*Top*/}
        <div className="flex items-center pr-6 justify-between w-full sm:pr-16 sm:pl-4">
        <Logo/>
       <div className="px-2 xl:hidden py-1 cursor-pointer bg-gray-700 rounded-sm">
       <Bars3Icon className="h-5 text-white" />
       </div>
        <Link className="uppercase hidden xl:inline-flex px-4 transition-colors duration-500 ease-in-out py-2 hover:text-gray-50 hover:bg-gray-500 rounded-md text-gray-400 text-sm font-bold tracking-widest" href={'/'}>Log in</Link>
        </div>

        {/*Middle*/}
        <div className="flex w-full px-6 space-x-6 mt-20 justify-center">
        <div className=" flex w-[50%] sm:w-[40%] xl:w-[30%] flex-col justify-center items-center">
            <p className="uppercase tracking-widest w-full text-sm text-wrap text-[#00ed82] font-semibold mb-6 text-center">disney duo basic</p>
            <div className="flex px-2 -space-x-3 justify-center items-center mb-3">
            <Image className="object-contain w-[80px] xl:w-[100px] h-auto" alt='hulu-logo'
    src="/hulu-logo.png" width={200} height={100} />

<Image className="object-contain -translate-y-[2px] sm:-translate-y-[6px]  w-[50px] sm:w-[80px]  xl:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
              
               </div>
               <p className="text-gray-50 font-semibold w-[70%] text-wrap text-center text-lg xl:text-2xl mb-5">
                Both with ads, for $9.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] text-wrap hover:bg-[#00ed82] hover:bg-opacity-75 transition-colors duration-500 ease-in-out w-[90%] text-center px-[5px] xl:px-[24px] py-1 xl:py-2 rounded-md font-bold uppercase tracking-widest text-sm " href={'/'}>get them<br className="sm:hidden" /> both</Link>
        </div>

          <div className=" flex w-[50%] sm:w-[40%] xl:w-[30%] flex-col justify-center items-center">
            <p className="uppercase tracking-widest w-full text-sm text-wrap text-[#00ed82] font-semibold mb-6 text-center">disney trio basic</p>
            <div className="flex space-x-1 h-[50px]  justify-center items-center sm:mb-4 xl:mb-5">
            <Image className="object-contain w-[80px] translate-x-2 xl:w-[100px] h-auto" alt='hulu-logo'
    src="/hulu-logo.png" width={200} height={100} />

<Image className="object-contain -translate-y-[2px] sm:-translate-y-[6px]  w-[50px] sm:w-[80px]  xl:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
              
                <Image className="object-contain w-[50px] sm:w-[80px]  xl:w-[100px] h-auto" alt='hulu-logo'
    src="/espn-logo.png" width={200} height={100} />
                
    
            </div>
            <p className="text-gray-50 font-semibold w-[70%] text-wrap text-center text-lg xl:text-2xl mb-5">
                All with ads, for $14.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] text-wrap hover:bg-[#00ed82] hover:bg-opacity-75 transition-colors duration-500 ease-in-out w-[90%] text-center px-[5px] xl:px-[24px] py-1 xl:py-2 rounded-md font-bold uppercase tracking-widest text-sm " href={'/'}>get all <br className="sm:hidden" />three</Link>
            </div> 
        </div>
       
       {/*Bottom*/}
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
