import { Shoe } from "@/interfaces/shoeinterface";
import { createContext } from "react";


type CartContextType = {
    cart: Shoe[];
    addShoe: (shoe: Shoe) => void;
    getTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addShoe: () => { },
    getTotal: () => 0,
})

export function CartProvider({ children }: { children: React.ReactNode }) {

    const cart: Shoe[] = [];

    function addShoe(shoe: Shoe) {
        cart.push(shoe);
    }

    function getTotal() {
        let total = 0;
        cart.forEach(shoe => {
            total += shoe.price
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addShoe, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}