export function Payments(){
    return <div className=" bg-starbucksYellow text-center py-12">
        <div className="font-semibold text-3xl pb-4">Cash or card, you earn Stars</div>
        <div className="pb-16 px-10 mx-96">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</div>
        <div className="grid grid-cols-6 pb-7 border-gray-300 border-b">
            <div className=" col-span-1 pr-5">
                <div className="font-semibold text-2xl">1★ per dollar</div>
                <div className="pr-10">Pay as you go</div>
            </div>
            <div className="pl-10 col-span-2">
                <div className="flex">
                    <div className="w-28"><img src="payment1.png" alt="" /></div>
                    <div className="mx-4">
                        <div className="font-semibold text-left text-xl">Scan and pay separately</div>
                        <div className="text-left mr-4 pt-4">Use cash or credit/debit card at the register.</div>
                    </div>
                </div>
            </div>
            <div className=" col-span-3">
                <div className="flex pl-3">
                    <div className="w-28"><img src="payment2.png" alt="" /></div>
                    <div className="mx-4">
                        <div className="font-semibold text-left text-xl">Save payment in the app</div>
                        <div className="text-left w-72 pt-4">Check-out faster by saving a credit/debit card or PayPal to your account. You'll be able to order ahead or scan and pay at the register in one step.</div>
                    </div>    
                </div>
            </div>
        </div>
        <div className="grid grid-cols-6 pt-12">
            <div className=" col-span-1 pr-5">
                <div className="font-semibold text-2xl">2★ per dollar</div>
                <div className="">Add funds in the app</div>
            </div>
            <div className="pl-10 col-span-2">
                <div className="flex ">
                    <div className="w-[25rem]"><img src="payment3.png" alt="" /></div>
                    <div className="px-4">
                        <div className="font-semibold text-left text-xl">Preload</div>
                        <div className="text-left mr-4 pt-4">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</div>
                    </div>
                </div>
            </div>
            <div className=" col-span-3">
                <div className="flex pl-3">
                    <div className="w-28"><img src="payment4.png" alt="" /></div>
                    <div className="mx-4">
                        <div className="font-semibold text-left text-xl">Register your gift card</div>
                        <div className="text-left w-72 pt-4">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place</div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
}