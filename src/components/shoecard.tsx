type shoecardprops = {
    img: string;
    name: string;
    description: string;
    price: number;
}

export function ShoeCard({ img, name, description, price }: shoecardprops) {
    return (
        <div className="w-60 flex flex-col gap-2 rounded-3xl">
            <img className="h-6/12 w-full object-cover rounded-2xl" src={img} alt={name} />
            <div className="flex flex-col gap-1 p-2">
                <span className="font-semibold">{name}</span>
                <span className="text-gray-500">{description}</span>
                <span className="font-semibold">${price}</span>
            </div>
        </div>
    )
}