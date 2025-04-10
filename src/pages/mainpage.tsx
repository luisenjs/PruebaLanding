import { BigCard } from "@/components/bigcard";
import { ShoeCard } from "@/components/shoecard";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="flex flex-col gap-4 py-10 px-5 sm:px-[15vw]">
            <BigCard />
            <div className=" flex flex-col gap-3 not-sm:max-w-full">
                <h2 className="text-2xl">Explore our latest drops</h2>
                <div className="flex gap-4 overflow-x-auto flex-nowrap">
                    {
                        shoes.map((shoe, index) => (
                            <Card key={index} onClick={() => { seemore(shoe) }}>
                                <CardContent>
                                    <ShoeCard img={shoe.img.main} name={shoe.title} description={shoe.description} price={shoe.price} />
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}