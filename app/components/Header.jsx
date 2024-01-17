import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="w-full pb-14">

        {/*Top*/}
        <div className="flex items-center justify-between w-full sm:pr-16 sm:pl-4 mt-2">
        <Logo/>
        <Link className="uppercase px-4 transition-colors duration-500 ease-in-out py-2 hover:text-gray-50 hover:bg-gray-500 rounded-md text-gray-400 text-sm font-bold tracking-widest" href={'/'}>Log in</Link>
        </div>

        {/*Middle*/}
        <div className="flex w-full space-x-12 mt-20 justify-center">
        <div className=" flex flex-col items-center">
            <p className="uppercase tracking-widest text-sm text-[#00ed82] font-semibold mb-6">disney duo basic</p>
            <div className="flex space-x-1 items-center mb-3">
                <Logo />
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
    
               </div>
               <p className="text-gray-50 font-semibold w-[269px] text-wrap text-center text-2xl mb-5">
                Both with ads, for $9.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] hover:bg-[#00ed82] hover:bg-opacity-75 transition-colors duration-500 ease-in-out w-[340px] text-center px-[24px] py-2 rounded-md font-bold uppercase tracking-widest text-sm " href={'/'}>get them both</Link>
        </div>

        <div className="flex flex-col items-center">
            <p className="mb-6 uppercase tracking-widest text-sm text-[#00ed82] font-semibold">disney trio basic</p>
            <div className="flex space-x-1 items-center mb-3">
            <Logo />
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/disney-logo.png" width={200} height={100} />
    
                <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
    src="/espn-logo.png" width={200} height={100} />
    
            </div>
            <p className="text-gray-50 font-semibold w-[269px] text-wrap text-center text-2xl mb-5">
                All with ads, for $14.99/month.
               </p>
               <Link className="text-gray-800 bg-[#1ce783] hover:bg-opacity-75 w-[340px] text-center px-[24px] hover:bg-[#00ed82] transition-colors duration-500 ease-in-out text-sm py-2 rounded-md font-bold uppercase tracking-widest " href={'/'}>get all three</Link>
            </div>
        </div>
       
       {/*Bottom*/}
       <div className="flex flex-col w-full items-center mt-6 space-y-10">
        <Link href={'/'} className="text-gray-300 underline text-xs">Terms apply</Link>

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
