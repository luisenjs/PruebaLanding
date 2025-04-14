import { BagItemCard } from "@/components/bagitemcard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartContext } from "@/context/cartcontext"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContext } from "react"
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export function Cart() {

    const { cart, getTotal } = useContext(CartContext);

    const navigate = useNavigate();

    function pay() {
        Swal.fire({
            title: "Compra realizada",
            icon: "success",
            buttonsStyling: false,
            customClass: {
                confirmButton: buttonVariants({ variant: "default", size: "default", className: "w-44" }),
            },
        })
    }

    return (
        <div className="flex flex-col sm:gap-10 px-5 sm:px-[15vw]">
            <Button className="sm:w-fit" onClick={() => { navigate("/") }}><ArrowLeft />Volver a la página de inicio</Button>
            <div className="flex not-sm:flex-col-reverse gap-10">
                <div className="flex flex-col sm:w-2/3 gap-5">
                    <h2 className="text-3xl font-semibold">Your Bag</h2>
                    <div className="flex flex-col gap-5">
                        {
                            cart.map(item => (
                                <Card>
                                    <CardContent>
                                        <BagItemCard shoe={item} />
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full sm:w-1/3">
                    <Card>
                        <CardContent className="flex flex-col gap-10">
                            <h3 className="text-3xl font-semibold">Summary</h3>
                            <div className="w-full flex flex-col gap-3">
                                <span className="flex justify-between text-xl">Subtotal:<span>${getTotal().toFixed(2)}</span></span>
                                <span className="flex justify-between text-xl">Shipping and delivery:<span>$20.00</span></span>
                                <span className="flex justify-between text-xl">Tax:<span>${(getTotal() * 0.15).toFixed(2)}</span></span>
                                <span className="flex justify-between text-xl">Discount:<span className="text-orange-400">-${(cart.length * 6).toFixed(2)}</span></span>
                            </div>
                            <span className="flex justify-between text-xl">Total:<span>${(getTotal() + 20 - cart.length * 6 + (getTotal() * 0.15)).toFixed(2)}</span></span>
                            <Button onClick={pay}>Checkout<ArrowRight /></Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}