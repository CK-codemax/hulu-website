import Image from "next/image";
import Logo from "./Logo";

export default function LiveTV() {
  return  (
    <div className="-translate-y-2 flex text-white items-end ml-[35%]">
        <div className="flex flex-col items-center">
        <div className="flex space-x-1 scale-[62%] items-center translate-y-5">
    <Logo />
        <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/disney-logo.png" width={200} height={100} />

        <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/espn-logo.png" width={200} height={100} />

    </div>
            <p className="font-bold mb-3">Hulu + Live TV</p>
            <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$76.99 / MONTH</p>
        </div>

        <div className="flex flex-col items-center">
        <div className="flex space-x-1 scale-[62%] items-center translate-y-5">
    <Logo />
        <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/disney-logo.png" width={200} height={100} />

        <Image className="object-contain w-[70px] sm:w-[100px] h-auto" alt='hulu-logo'
src="/espn-logo.png" width={200} height={100} />

    </div>
            <p className="font-bold mb-3">Hulu (No Ads) + Live TV</p>
            <p className="cursor-pointer py-2 text-center font-bold hover:bg-gray-300 transition-colors duration-300 ease-in-out text-black bg-white w-[300px] rounded-md">$89.99 / MONTH</p>
        </div>
 </div>
)
}
