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
            <header className="fixed z-10 h-1/12 w-full flex p-6 md:p-5 items-center justify-between md:px-[10vw] border-b border-b-gray-200 bg-white">
                <div onClick={() => { navigate("/") }} className="flex gap-2">
                    <img src="/src/assets/Vector.svg" alt="logo" />
                    <span className="font-semibold">SUN CO.</span>
                </div>
                <button onClick={() => { navigate("/cart") }} className="flex gap-3 border rounded-lg h-8 w-44 items-center justify-center"><ShoppingBag />View Cart{cart.length != 0 ? <span className="bg-red-400 rounded-full h-6 w-6">{cart.length}</span> : <></>}</button>
            </header>
            <main className="pt-20 h-full">
                <ShoeProvider>
                    <Outlet />
                </ShoeProvider>
            </main>
        </div>
    )
}