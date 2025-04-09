type shoecardprops = {
    img: string;
    name: string;
    description: string;
    price: number;
    onclick: () => void
}

export function ShoeCard({ img, name, description, price, onclick }: shoecardprops) {
    return (
        <div onClick={onclick} className="w-60 h-96 flex flex-col gap-2 rounded-3xl hover:bg-gray-100">
            <img className="h-6/12 w-full object-cover rounded-2xl" src={img} alt={name} />
            <div className="flex flex-col gap-1 p-2">
                <span className="font-semibold">{name}</span>
                <span className="text-gray-500">{description}</span>
                <span className="font-semibold">${price}</span>
            </div>
        </div>
    )
}