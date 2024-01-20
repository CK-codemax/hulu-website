import Image from "next/image";
import Feed from "./Feed";

export default function Feeds() {
  return (
    <div className="w-full px-2 grid grid-rows-1 grid-cols-4 gap-4 bg-black">
        <div className="rounded-lg hover:border-4 border-gray-500 cursor-pointer relative p-1">
            <div className="absolute top-7 left-5 z-10">
                <p className="text-white mb-3 font-bold text-xs">New & Classic</p>
                <p className="text-white">Movies</p>
            </div>
            <Image src='https://cnbl-cdn.bamgrid.com/assets/8c630a19daa8615918152082839724f4dab6538939ba7d3bb45f8faa97acf1b9/original' className="object-contain  transition-opacity duration-300 ease-in-out w-full rounded-md hover:opacity-75" width={324} height={496} alt="feed-image"/>
        </div>
        <div className="rounded-lg p-1 hover:border-4 border-gray-500 cursor-pointer relative">
        <div className="absolute top-7 left-5 z-10">
                <p className="text-white mb-3 font-bold text-xs">Groundbreaking</p>
                <p className="text-white">Hulu Originals</p>
            </div>
            <Image src='https://cnbl-cdn.bamgrid.com/assets/6293f29d56ae0519362951fa38cf62f61004662eb674e61d99e93e7f064d74ff/original' className="object-contain w-full hover:opacity-75  transition-opacity duration-300 ease-in-out  rounded-md" width={324} height={496} alt="feed-image"/>
        </div>
        <div className="rounded-lg p-1 group hover:border-4 border-gray-500 cursor-pointer relative">
        <div className="absolute top-7 left-5 z-10">
                <p className="text-white mb-3 font-bold text-xs">Ad-on</p>
                <p className="text-white">Premiums</p>
            </div>
            <Image src='https://cnbl-cdn.bamgrid.com/assets/f3f84cde435747f424ce4ad52d351efc96b5da4765af2f76afa9b86fb5bc9a37/original' className="object-contain w-full hover:opacity-75 rounded-md  transition-opacity duration-300 ease-in-out " width={324} height={496} alt="feed-image"/>
        </div>
        <div className="rounded-lg group hover:border-4 border-gray-500 cursor-pointer p-1 relative">
        <div className="absolute top-7 left-5 z-10">
                <p className="text-white mb-3 font-bold text-xs">Past & Current Seasons</p>
                <p className="text-white">TV Shows</p>
            </div>
            <Image src='https://cnbl-cdn.bamgrid.com/assets/82fd53644e709344c9e9c1f4ba66519505ecea256294d59a0637bda76ae1436b/original' className="object-contain hover:opacity-75 w-full  transition-opacity duration-300 ease-in-out  rounded-md" width={324} height={496} alt="feed-image"/>
        </div>
    </div>
  )
}



//cnbl-cdn.bamgrid.com/assets/7a93b953315e186a518a4aa6dcd3792ecb007b8a5c5b1d540828e8bdfb2614f3/original
//cnbl-cdn.bamgrid.com/assets/ec577557f24e2e08f9c0977d1ce40e24fe39392d5960787418887b6d539b8d6a/original