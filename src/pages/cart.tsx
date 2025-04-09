import { BagItemCard } from "@/components/bagitemcard";
import { CartContext } from "@/context/cartcontext"
import { useContext } from "react"

export function Cart() {

    const { cart, getTotal } = useContext(CartContext);

    return (
        <div className="flex gap-2 py-10 px-[10vw]">
            <div className="flex flex-col w-2/3 gap-5">
                {
                    cart.map(item => (
                        <BagItemCard img={item.img} name={item.title} description={item.description} price={item.price} />
                    ))
                }
            </div>
            <div className="flex flex-col gap-5 w-1/3">
                <h3 className="text-4xl font-semibold">Summary</h3>
                <div className="w-full flex flex-col gap-2">
                    <span className="flex justify-between text-xl">Subtotal:<span>${getTotal()}</span></span>
                    <span className="flex justify-between text-xl">Shipping and delivery:<span>$20.00</span></span>
                    <span className="flex justify-between text-xl">Tax:<span>${getTotal() * 0.15}</span></span>
                    <span className="flex justify-between text-xl">Discount:<span className="text-orange-400">-$6.00</span></span>
                </div>
                <span className="flex justify-between text-xl">Total:<span>${getTotal() + 14 + (getTotal() * 0.15)}</span></span>
                <button className="bg-black rounded-xl w-full text-white py-3">Checkout {"->"}</button>
            </div>
        </div>
    )
}