import { BagItemCard } from "@/components/bagitemcard";
import { CartContext } from "@/context/cartcontext"
import { ArrowRight } from "lucide-react";
import { useContext } from "react"
import Swal from "sweetalert2";

export function Cart() {

    const { cart, getTotal } = useContext(CartContext);

    function pay() {
        Swal.fire({
            title: "Compra realizada",
            icon: "success",
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    }

    return (
        <div className="flex not-sm:flex-col-reverse gap-10 sm:gap-5 sm:py-10 px-5 sm:px-[10vw]">
            <div className="flex flex-col sm:w-2/3 gap-5">
                {
                    cart.map(item => (
                        <BagItemCard img={item.img} name={item.title} description={item.description} price={item.price} />
                    ))
                }
            </div>
            <div className="flex flex-col gap-5 sm:w-1/3">
                <h3 className="text-3xl font-semibold">Summary</h3>
                <div className="w-full flex flex-col gap-3">
                    <span className="flex justify-between text-xl">Subtotal:<span>${getTotal()}</span></span>
                    <span className="flex justify-between text-xl">Shipping and delivery:<span>$20.00</span></span>
                    <span className="flex justify-between text-xl">Tax:<span>${getTotal() * 0.15}</span></span>
                    <span className="flex justify-between text-xl">Discount:<span className="text-orange-400">-$6.00</span></span>
                </div>
                <span className="flex justify-between text-xl">Total:<span>${getTotal() + 14 + (getTotal() * 0.15)}</span></span>
                <button onClick={pay} className="bg-black rounded-xl w-full text-white py-3 flex justify-center gap-2">Checkout<ArrowRight /></button>
            </div>
        </div>
    )
}