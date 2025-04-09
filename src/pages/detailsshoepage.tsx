import { CartContext } from "@/context/cartcontext";
import { ShoeContext } from "@/context/shoecontext"
import { useContext } from "react"
import Swal from "sweetalert2";

export function DetailsShoePage() {

    const { selectedShoe } = useContext(ShoeContext);

    const { addShoe } = useContext(CartContext);

    function addingtoCart() {
        addShoe(selectedShoe!)
        Swal.fire({
            title: "Agregado al carrito",
            icon: "success",
        })
    }

    return (
        <div className="flex flex-col gap-20 pb-10 px-5 sm:px-[10vw]">
            <div className="w-full flex not-sm:flex-col gap-20">
                <img className="sm:w-1/2 h-60 object-cover rounded-2xl" src={selectedShoe?.img.car1} alt="shoe" />
                <div className="sm:w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-xl">
                                {selectedShoe?.title}
                            </span>
                            <span className="text-gray-500">
                                {selectedShoe?.description}
                            </span>
                            <span className="font-semibold">
                                ${selectedShoe?.price}
                            </span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Quantity</p>
                            <span>coso</span>
                        </div>
                    </div>
                    <button onClick={addingtoCart} className="w-full text-center bg-black text-white font-semibold rounded-xl py-3">Add to Cart</button>
                </div>
            </div>
            <div className="w-full flex not-sm:flex-col gap-20">
                <div className="sm:w-1/2 flex flex-col gap-3 justify-center text-gray-500">
                    <h3 className=" text-black font-bold text-2xl">Description</h3>
                    <p>Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.</p>
                    <div>
                        <li>Regular fit</li>
                        <li>Lace closure</li>
                        <li>Rubber outsole with vulcanized look</li>
                        <li>Imported</li>
                    </div>
                </div>
                <img className="sm:w-1/2" src={selectedShoe?.img.desc} alt="shoe" />
            </div>
        </div>
    )
}