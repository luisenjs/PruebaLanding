import { CartContext } from "@/context/cartcontext";
import { useContext } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Shoe } from "@/interfaces/shoeinterface";
import Swal from "sweetalert2";

type bagitemcardprops = {
    shoe: Shoe;
}

export function BagItemCard({ shoe }: bagitemcardprops) {

    const { removeShoe } = useContext(CartContext);

    function remove() {
        removeShoe(shoe);
        Swal.fire({
            title: "Shoe removed from cart",
            icon: "success",
            buttonsStyling: false,
            customClass: {
                confirmButton: buttonVariants({ variant: "default", size: "default", className: "w-44" }),
            },
        })
    }

    return (
        <div className="w-full h-44 flex gap-5 justify-start rounded-3xl">
            <img className="aspect-square" src={shoe.img.main} alt={shoe.title} />
            <div className="w-full gap-4 flex flex-col justify-between">
                <div className=" w-full flex gap-4 justify-between">
                    <div className="flex flex-col gap-1 px-5">
                        <span>{shoe.title}</span>
                        <span className="text-gray-500">{shoe.description}</span>
                    </div>
                    <span>${shoe.price}</span>
                </div>
                <div className="flex gap-5 justify-start px-5">
                    <Button onClick={remove} variant="outline">Remove</Button>
                </div>
            </div>
        </div>
    )
}