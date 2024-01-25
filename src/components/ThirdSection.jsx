export function ThirdSection(){
    return <div>
        <div className="font-semibold text-3xl text-center pt-32">Getting started is easy</div>
        <div className="text-center py-4">Earn Stars and get rewarded in a few easy steps.</div>
        <div className="grid grid-cols-3 mx-20 pb-32">
            <div>
                <div className="flex justify-center pt-10 ">
                    <div className="w-[3.2rem]">
                        <img src="1.png" />
                    </div>
                </div>
                <div className="font-semibold text-lg text-center pt-6">Create an account</div>
                <div className="pt-4 text-center mx-10">To get started, <a href="" className=" text-starbucksLightGreen">join now</a>. You can also <a href="" className=" text-starbucksLightGreen">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</div>
            </div>
            <div>
                <div className="flex justify-center pt-10">
                    <div className="w-[3.2rem]">
                        <img src="2.png" />
                    </div>
                </div>
                <div className="font-semibold text-lg text-center pt-6">Order and pay how you’d like</div>
                <div className="pt-4 text-center mx-10">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="" className=" text-starbucksLightGreen">Learn how</a></div>
            </div>
            <div>
                <div className="flex justify-center pt-10 ">
                    <div className="w-[3.2rem]">
                        <img src="3.png" />
                    </div>
                </div>
                <div className="font-semibold text-lg text-center pt-6">Earn Stars, get Rewards</div>
                <div className="pt-4 text-center mx-10">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</div>
            </div>
        </div>
    </div>
}