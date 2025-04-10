import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cartcontext";
import { ShoeProvider } from "@/context/shoecontext";
import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router";

export function MainLayout() {

    const navigate = useNavigate();

    const { cart } = useContext(CartContext);

    return (
        <div className="h-screen w-screen">
            <header className="fixed z-10 sm:h-1/12 w-full flex p-6 md:p-5 items-center justify-between md:px-[15vw] border-b border-b-gray-200 bg-white">
                <div onClick={() => { navigate("/") }} className="flex gap-2">
                    <img src="/src/assets/Vector.svg" alt="logo" />
                    <span className="font-semibold">SUN CO.</span>
                </div>
                <Button variant="outline" onClick={() => { navigate("/cart") }} className="w-44"><ShoppingBag />View Cart{cart.length != 0 ? <span className="bg-orange-400 rounded-full h-6 w-6">{cart.length}</span> : <></>}</Button>
            </header>
            <main className="pt-20 h-full w-screen">
                <ShoeProvider>
                    <Outlet />
                </ShoeProvider>
            </main>
        </div>
    )
}