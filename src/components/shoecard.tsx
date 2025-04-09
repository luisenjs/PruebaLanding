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
            <img className="h-8/12 w-full object-cover" src={img} alt={name} />
            <div className="flex flex-col gap-1 p-2">
                <span>{name}</span>
                <span>{description}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}