import { useRef, createRoot, useState } from "react";
import { DrinksCard } from "./DrinksCard";
import ReactDOM from 'react-dom/client';

export function Drinks(){
    const divRef = useRef()
    const [count,setCount] = useState(0);
    const data = [{
        img: "25.png",
        header: "Customize your drink",
        description: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
    },{
        img: "100.png",
        header: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
        description: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
    },{
        img: "200.png",
        header: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
        description: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
    },{
        img: "300.png",
        header: "Sandwich, protein box or at-home coffee",
        description: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®."
    },{
        img: "400.png",
        header: "Select Starbucks® merchandise",
        description: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
    }];
    let imgNumber = data[0].img, headerNumber = data[0].header, descriptionNumber = data[0].description;
    function getDrinks(index){
        imgNumber = data[index].img;
        headerNumber = data[index].header;
        descriptionNumber = data[index].description;
        const newContent = <DrinksCard img = {imgNumber} header= {headerNumber} description={descriptionNumber}></DrinksCard>
        const root = ReactDOM.createRoot(divRef.current);
        root.render(newContent);
        setCount(index);
    }
    return <div>
        <div className="font-semibold bg-starbucksLightWhite">
            <div className="text-center py-12 text-3xl"> Get your favorites for free</div>
            <div className="flex justify-center text-2xl">
                <button className=" pt-2 pb-4 flex px-7 border-starbucksLightWhite border-b-4" style={{transition: "all 0.3s ease", borderBottom: count==0? "4px solid #008248" : "none"}} onClick={function(){getDrinks(0)}}>25
                    <div className="w-3 pt-4 "><img src="star.png" alt="" /></div>
                </button>
                <button className=" pt-2 pb-4 flex px-7 border-starbucksLightWhite border-b-4" style={{transition: "all 0.3s ease", borderBottom: count==1? "4px solid #008248" : "none"}} onClick={function(){getDrinks(1)}}>100
                    <div className="w-3 pt-4 "><img src="star.png" alt="" /></div>
                </button>
                <button className=" pt-2 pb-4 flex px-7 border-starbucksLightWhite border-b-4" style={{transition: "all 0.3s ease", borderBottom: count==2? "4px solid #008248" : "none"}} onClick={function(){getDrinks(2)}}>200
                    <div className="w-3 pt-4 "><img src="star.png" alt="" /></div>
                </button>
                <button className=" pt-2 pb-4 flex px-7 border-starbucksLightWhite border-b-4" style={{transition: "all 0.3s ease", borderBottom: count==3? "4px solid #008248" : "none"}} onClick={function(){getDrinks(3)}}>300
                    <div className="w-3 pt-4 "><img src="star.png" alt="" /></div>
                </button>
                <button className=" pt-2 pb-4 flex px-7 border-starbucksLightWhite border-b-4" style={{transition: "all 0.3s ease", borderBottom: count==4? "4px solid #008248" : "none"}} onClick={function(){getDrinks(4)}}>400
                    <div className="w-3 pt-4 "><img src="star.png" alt="" /></div>
                </button>
            </div>
        </div>
        <div ref={divRef}><DrinksCard img = {imgNumber} header= {headerNumber} description={descriptionNumber} ></DrinksCard></div>
    </div>
    
}