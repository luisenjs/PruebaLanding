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
            img: {
                main: "/src/assets/shoe1.png",
                desc: "/src/assets/descpshoe1.png",
                car1: "/src/assets/shoe1.1.png",
                car2: "/src/assets/shoe1.2.png",
                car3: "/src/assets/shoe1.3.png"
            },
            title: "Off-White",
            description: "Out of Office \"OoO\" Sneakers",
            price: 775,
        },
        {
            img: {
                main: "/src/assets/shoe2.png",
                desc: "/src/assets/descpshoe2.png",
                car1: "/src/assets/shoe2.1.png",
                car2: "/src/assets/shoe2.2.png",
                car3: "/src/assets/shoe2.3.png"
            },
            title: "Nike",
            description: "Nike Gamma Force",
            price: 200,
        },
        {
            img: {
                main: "/src/assets/shoe3.png",
                desc: "/src/assets/descpshoe3.png",
                car1: "/src/assets/shoe3.1.png",
                car2: "/src/assets/shoe3.2.png",
                car3: "/src/assets/shoe3.3.png"
            },
            title: "Nike",
            description: "Cosmic Unity 3",
            price: 160,
        },
        {
            img: {
                main: "/src/assets/shoe4.png",
                desc: "/src/assets/descpshoe4.png",
                car1: "/src/assets/shoe4.1.png",
                car2: "/src/assets/shoe4.2.png",
                car3: "/src/assets/shoe4.3.png"
            },
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