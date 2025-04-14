import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

export function BigCard() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col-reverse sm:flex-row justify-around gap-3 w-full md:h-96 bg-[#EAEEEF] rounded-4xl">
            <div className="flex flex-col gap-4 p-10 justify-between">
                <div className="flex flex-col gap-3 not-sm:text-center">
                    <h3 className="text-orange-400 text-3xl font-semibold ">25% OFF</h3>
                    <h2 className="text-5xl font-semibold">Summer Sale</h2>
                    <p className="text-gray-500">Discover our summer styles with discount</p>
                </div>
                <Button onClick={()=>{navigate("cart")}}>Shop Now<ArrowRight /></Button>
            </div>
            <img className="h-full p-5" src="/src/assets/theshoe.png" alt="" />
        </div>
    )
}