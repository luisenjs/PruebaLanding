import { CartContext } from "@/context/cartcontext";
import { ShoeContext } from "@/context/shoecontext"
import { useContext } from "react"

export function DetailsShoePage() {

    const { selectedShoe } = useContext(ShoeContext);

    const { addShoe } = useContext(CartContext);

    return (
        <div className="flex flex-col gap-10 px-5 sm:px-[20vw]">
            <div className="w-full flex not-sm:flex-col gap-4">
                <img className="sm:w-1/2" src={selectedShoe?.img} alt="shoe" />
                <div className="sm:w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <span>
                            {selectedShoe?.title}
                        </span>
                        <span>
                            {selectedShoe?.description}
                        </span>
                        <span>
                            {selectedShoe?.price}
                        </span>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <span>coso</span>
                    </div>
                    <button onClick={() => { addShoe(selectedShoe!) }} className="w-full text-center bg-black text-white font-semibold rounded-xl py-3">Add to Cart</button>
                </div>
            </div>
            <div className="w-full flex not-sm:flex-col gap-4">
                <div className="sm:w-1/2 flex flex-col gap-3">
                    <h3 className="font-bold text-2xl">Description</h3>
                    <p>Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.</p>
                    <div>
                        <li>Regular fit</li>
                        <li>Lace closure</li>
                        <li>Rubber outsole with vulcanized look</li>
                        <li>Imported</li>
                    </div>
                </div>
                <img className="sm:w-1/2" src="/src/assets/descp.png" alt="shoe" />
            </div>
        </div>
    )
}