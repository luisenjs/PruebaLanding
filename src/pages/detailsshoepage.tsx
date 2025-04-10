import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CartContext } from "@/context/cartcontext";
import { ShoeContext } from "@/context/shoecontext"
import { Minus, Plus } from "lucide-react";
import { useContext, useState } from "react"
import Swal from "sweetalert2";

export function DetailsShoePage() {

    const { selectedShoe } = useContext(ShoeContext);

    const { addShoe } = useContext(CartContext);

    const [cant, setCant] = useState(1);

    function addingtoCart() {
        for (let i = 1; i <= cant; i++) {
            addShoe(selectedShoe!)
            Swal.fire({
                title: "Agregado al carrito",
                icon: "success",
                buttonsStyling: false,
                customClass: {
                    confirmButton: buttonVariants({ variant: "default", size: "default", className: "w-44" }),
                }
            })
        }
    }

    return (
        <div className="flex flex-col gap-20 py-10 px-5 sm:px-[15vw]">
            <div className="w-full flex not-sm:flex-col gap-20">
                <div className="sm:w-1/2 max-h-60 flex items-center justify-center rounded-2xl">
                    <Carousel className="w-full h-full">
                        <CarouselContent className="h-full flex">
                            <CarouselItem className="h-full flex">
                                <div className="p-1 h-full flex-grow">
                                    <Card className="h-full flex">
                                        <CardContent className="flex items-center justify-center h-full">
                                            <img src={selectedShoe?.img.car1} alt={selectedShoe?.img.car1} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full flex">
                                <div className="p-1 h-full flex-grow">
                                    <Card className="h-full flex">
                                        <CardContent className="flex items-center justify-center h-full">
                                            <img src={selectedShoe?.img.car2} alt={selectedShoe?.img.car2} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full flex">
                                <div className="p-1 h-full flex-grow">
                                    <Card className="h-full flex">
                                        <CardContent className="flex items-center justify-center h-full">
                                            <img src={selectedShoe?.img.car3} alt={selectedShoe?.img.car3} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

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
                            <div className="flex gap-5 items-center justify-start py-2">
                                <Button disabled={cant == 1} variant="secondary" onClick={() => setCant(cant - 1)}><Minus /></Button>
                                <span className="text-xl font-bold">{cant}</span>
                                <Button variant="secondary" onClick={() => setCant(cant + 1)}><Plus /></Button>
                            </div>
                        </div>
                    </div>
                    <Button onClick={addingtoCart}>Add to Cart</Button>
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