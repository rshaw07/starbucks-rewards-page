export function DrinksCard({img, header, description}){
    return <div>
        <div className="bg-starbucksCardsGreen grid grid-cols-4 pb-8 pt-16" >
            <div></div>
            <div className=" ml-10"> <img src={img} alt="" /></div>
            <div className="ml-12 pt-4">
                <div className="font-semibold text-2xl ">{header}</div>
                <div className="py-6">{description}</div>
            </div>
        </div>
    </div>
}