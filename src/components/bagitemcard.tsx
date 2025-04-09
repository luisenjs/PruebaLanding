type bagitemcardprops = {
    img: string;
    name: string;
    description: string;
    price: number;
}

export function BagItemCard({ img, name, description, price }: bagitemcardprops) {
    return (
        <div className="w-full h-44 flex gap-5 justify-start rounded-3xl hover:bg-gray-100">
            <img className="w-44" src={img} alt={name} />
            <div className="w-full gap-4 flex flex-col justify-between">
                <div className=" w-full flex gap-4 justify-between">
                    <div className="flex flex-col gap-1 px-5">
                        <span>{name}</span>
                        <span className="text-gray-500">{description}</span>
                    </div>
                    <span>${price}</span>
                </div>
                <div className="flex gap-5 justify-start p-5">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}