type bagitemcardprops = {
    img: string;
    name: string;
    description: string;
    price: number;
}

export function BagItemCard({ img, name, description, price }: bagitemcardprops) {
    return (
        <div className="w-full h-44 flex justify-between px-5 rounded-3xl hover:bg-gray-100">
            <div className="flex">
                <img className="w-44" src={img} alt={name} />
                <div className="flex flex-col gap-1">
                    <span>{name}</span>
                    <span className="text-gray-500">{description}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span>${price}</span>
            </div>
        </div>
    )
}