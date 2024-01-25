export function Navbar(){
    return <div className="flex justify-between text-center ml-8">
        <div className="font-bold grid grid-cols-4 items-center text-sm">
            <div className="w-[4.3rem]"><img src="logo.png"/></div>
            <div><div className=" hover:text-starbucksLightGreen cursor-pointer mr-3">MENU</div></div>
            <div className=" mr-5 border-b-[6px] border-starbucksLightGreen py-9 mt-[5.5px]"><div className="cursor-pointer hover:text-starbucksLightGreen">REWARDS</div></div>
            <div><div className="hover:text-starbucksLightGreen cursor-pointer">GIFT CARDS</div></div>
        </div>
        <div className=" font-semibold flex items-center" >
            
            <div className="hover:text-starbucksLightGreen cursor-pointer flex text-sm "><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg></div>
                <div className="mr-14 ml-2 cursor-pointer">Find a store</div>
                </div>
            <div><button className="border border-black rounded-full py-1.5 px-4 text-sm mr-4 items-center hover:bg-gray-200">Sign in</button></div>
            <div><button className="bg-black text-white rounded-full py-1 px-4 mr-14 items-center hover:bg-gray-600">Join now</button></div>
        </div>
    </div>
}
