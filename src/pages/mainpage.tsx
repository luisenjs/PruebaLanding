import { BigCard } from "@/components/bigcard";
import { ShoeCard } from "@/components/shoecard";
import { ShoeContext } from "@/context/shoecontext";
import { Shoe } from "@/interfaces/shoeinterface";
import { useContext } from "react";
import { useNavigate } from "react-router";

export function MainPage() {

    const { shoes, seeDetails } = useContext(ShoeContext);

    const navigate = useNavigate();

    function seemore(shoe: Shoe) {
        seeDetails(shoe);
        navigate("/details")
    }

    return (
        <div className="flex flex-col gap-4 px-5 sm:px-[20vw]">
            <BigCard />
            <div className=" flex flex-col gap-3 not-sm:max-w-full">
                <h2 className="text-2xl">Explore our latest drops</h2>
                <div className="flex gap-4">
                    {
                        shoes.map((shoe, index) => (
                            <ShoeCard key={index} onclick={() => { seemore(shoe) }} img={shoe.img} name={shoe.title} description={shoe.description} price={shoe.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}