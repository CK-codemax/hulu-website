import { ArrowLongRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Middle() {
  return (
  
  <>
   <div className="w-full pt-8 pb-6 bg-gradient-to-b from-[#1ce783] to-gray-900 ">
        <p className="text-white tracking-widest text-l font-bold uppercase mb-8 text-center">build the plan that's right for you</p>
        <p className="text-white cursor-pointer hover:bg-gray-200 hover:text-gray-800 mx-auto text-center text-sm font-bold tracking-widest uppercase py-2 w-[300px] bg-transparent border-2 border-gray-200 rounded-md">start building</p>
    </div>

    <div className="bg-black pb-10 pt-28">
         <p className="text-[#1ce783] mb-4 text-center text-xs font-semibold uppercase tracking-widest">included in all your plans</p>

         <p className="text-white mb-4 font-bold text-[40px] text-center">All The TV You Love</p>

         <p className="text-white text-wrap w-[800px] text-center mx-auto">Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>

    </div>

    <div className="bg-black pb-10 pt-28">
         <p className="text-[#1ce783] mb-4 text-center text-xs font-semibold uppercase tracking-widest">HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</p>

         <p className="text-white mb-4 font-bold text-[40px] text-center">Live TV Makes It Better</p>

         <p className="text-white text-wrap w-[800px] text-center mx-auto mb-4">Get 95+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+.</p>

         <Link className="text-gray-800 block mx-auto mb-5 bg-[#1ce783] hover:bg-opacity-75 w-[240px] text-center hover:bg-[#00ed82] transition-colors duration-500 ease-in-out text-sm py-2 rounded-md font-bold uppercase tracking-widest " href={'/'}>get hulu + live tv</Link>

         <Link href={'/'} className="text-gray-400 mx-auto mb-5 text-wrap text-center w-[1000px] block underline text-xs">
          Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current, regular monthly price). Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows. See details.
         </Link>
        <div className="text-gray-300 w-full cursor-default justify-center underline flex items-center space-x-2">
        <p className="uppercase font-semibold text-l">view channels in your area </p>
         <ArrowLongRightIcon className="h-5" />
        </div>

            

    </div>
  </>
   
  )
}
