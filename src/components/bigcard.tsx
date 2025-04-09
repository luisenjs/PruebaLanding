import { ArrowRight } from "lucide-react";

export function BigCard() {
    return (
        <div className="flex flex-col-reverse sm:flex-row justify-around gap-3 w-full md:h-80 bg-[#EAEEEF] rounded-4xl">
            <div className="flex flex-col gap-4 p-10 justify-between">
                <div className="flex flex-col gap-3 not-sm:text-center">
                    <h3 className="text-orange-400 text-3xl font-semibold ">25% OFF</h3>
                    <h2 className="text-5xl font-semibold">Summer Sale</h2>
                    <p className="text-gray-500">Discover our summer styles with discount</p>
                </div>
                <button className="bg-black rounded-xl w-full text-white py-3 flex justify-center gap-2">Shop Now<ArrowRight /></button>
            </div>
            <img className="h-full p-5" src="/src/assets/theshoe.png" alt="" />
        </div>
    )
}