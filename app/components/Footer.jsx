import FooterCols from "./FooterCols"
import LineBreak from "./LineBreak"


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
    </div>
  )
}
