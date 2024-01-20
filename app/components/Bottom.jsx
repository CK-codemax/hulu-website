
import Selector from "./Selector";

export default function Bottom() {
  return (
    <div className="bg-black">
        
        <div>
        <p className="text-white mb-4 font-bold text-[40px] text-center">Select Your Plan</p>

        <p className="text-white text-wrap w-[800px] text-center mx-auto"> No hidden fees, equipment rentals, or installation appointments.</p>

        <p className="text-white text-wrap w-[800px] text-center mx-auto font-bold"> Switch plans or cancel anytime.**</p>
          

        <Selector />




        </div>
    </div>
  )
}
