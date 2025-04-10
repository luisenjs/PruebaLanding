import { Shoe } from "@/interfaces/shoeinterface";
import { createContext } from "react";


type CartContextType = {
    cart: Shoe[];
    addShoe: (shoe: Shoe) => void;
    removeShoe: (shoe: Shoe) => void;
    getTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addShoe: () => { },
    removeShoe: () => { },
    getTotal: () => 0,
})

export function CartProvider({ children }: { children: React.ReactNode }) {

    const cart: Shoe[] = [];

    function addShoe(shoe: Shoe) {
        cart.push(shoe);
    }

    function removeShoe(shoe: Shoe) {
        const index = cart.findIndex(item => item.id === shoe.id);
        if (index !== -1) {
            cart.splice(index, 1);
        }

    }

    function getTotal() {
        let total = 0;
        cart.forEach(shoe => {
            total += shoe.price
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addShoe, getTotal, removeShoe }}>
            {children}
        </CartContext.Provider>
    )
}