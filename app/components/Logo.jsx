import Image from "next/image";
export default function Logo() {
  return (
    <Image className="object-contain w-[90px] sm:w-[130px] h-auto" alt='hulu-logo'
    src="/hulu-logo.png" width={200} height={100} />
    
  )
}

