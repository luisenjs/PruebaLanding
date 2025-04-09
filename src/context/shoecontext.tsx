import { Shoe } from "@/interfaces/shoeinterface";
import { createContext, useState } from "react";


type ShoeContextType = {
    shoes: Shoe[];
    selectedShoe?: Shoe;
    seeDetails: (shoe: Shoe) => void;
}

export const ShoeContext = createContext<ShoeContextType>({
    shoes: [],
    seeDetails: () => { }
})

export function ShoeProvider({ children }: { children: React.ReactNode }) {

    const [selectedShoe, setSelectedShoe] = useState<Shoe>();

    const shoes = [
        {
            img: "/src/assets/shoe1.png",
            title: "Off-White",
            description: "Out of Office \"OoO\" Sneakers",
            price: 775,
        },
        {
            img: "/src/assets/shoe2.png",
            title: "Nike",
            description: "Nike Gamma Force",
            price: 200,
        },
        {
            img: "/src/assets/shoe3.png",
            title: "Nike",
            description: "Cosmic Unity 3",
            price: 160,
        },
        {
            img: "/src/assets/shoe4.png",
            title: "adidas",
            description: "DAILY 3.0 SHOE",
            price: 98.99,
        }
    ]

    function seeDetails(shoe: Shoe) {
        setSelectedShoe(shoe);
    }

    return (
        <ShoeContext.Provider value={{ shoes, selectedShoe, seeDetails }}>
            {children}
        </ShoeContext.Provider>
    )
}