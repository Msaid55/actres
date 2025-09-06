export default function List() {
    return (
        <div className="w-full h-[46px] mt-[70px] lg:flex items-center  lg:justify-between md:flsx">
            <div>
                <h2 className="text-2xl text-[#091540] font-bold ml-[5px] dark:text-white">Extensions List</h2>
            </div>
            <div className="w-[280px] flex justify-between">
                <button className="bg-[#C7231A] w-[64px] h-[46px] text-white rounded-full text-[20px] shadow-[#b3becc]">All</button>
                <button className="w-[95px] h-[46px] bg-[#FBFDFE] text-[#091540] dark:bg-[#091540] dark:text-[#FBFDFE] rounded-full text-[20px] shadow-[#b3becc]">Active</button>
                <button className="w-[95px] h-[46px] bg-[#FBFDFE] text-[#091540] dark:bg-[#091540] dark:text-[#FBFDFE] rounded-full text-[20px] shadow-[#b3becc]">Inactive</button>
            </div>
        </div>
    )
}