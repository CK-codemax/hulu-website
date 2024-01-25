import FooterCols from "./FooterCols"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


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
  return (
    <div className="bg-gray-100 pb-16 pt-16 w-full">
       <div className="grid grid-rows-1 w-[75%] mx-auto border-b border-gray-400 pb-24 grid-cols-6 ">
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

       <div className="w-[75%] mx-auto mt-16">
        <div className="flex items-center space-x-10">
          <FaFacebookF className="text-[20px] text-gray-600 cursor-pointer" />
          <FaTwitter className="text-[20px] text-gray-600 cursor-pointer"/>
          <FaYoutube className="text-[20px] text-gray-600 cursor-pointer"/>
          <FaInstagram className="text-[20px] text-gray-600 cursor-pointer"/>
        </div>

        <div className="flex flex-wrap mt-12 justify-start items-start ">
        {footerTexts.map((text) => <p key={text} className="whitespace-nowrap px-3 py-2 text-nowrap cursor-pointer text-left text-gray-600 text-xs">{text}</p> )}
        </div>
       </div>
    </div>
  )
}
