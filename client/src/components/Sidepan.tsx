import { MdRocketLaunch } from "react-icons/md";

const Sidepan = () => {
  return (
    <div className=' w-[23%] h-[58%] rounded-2xl bg-[#353D44] mt-[9%] p-4 overflow-y-scroll'>
            <div className='w-[90%] h-[45px] search mx-auto rounded-2xl items-center'>
                <form className='h-[100%] w-[96%] mx-auto items-center p-1'>
                    <div className='h-[100%] text-center'>
                    <input
                        type="text"
                        // value={inputValue}
                        // onChange={handleInputChange}
                        placeholder="Search..."
                        className='w-[100%] h-full px-2 rounded-lg items-center'
                    />
                    </div>          
                    </form>
            </div>
            <div className='flex items-center space-x-4 mt-8'>
                <h1 className='text-[#FFFFFF] nova text-[14px]'>Game Categories</h1>
                <div className='h-0.5 w-[40%] bg-[#FFFFFF]'></div>
            </div>
            <div className='flex justify-between w-[100%] h-[50px] text-[13px] nova mt-3 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <div className="flex text-white space-x-1">
                    <MdRocketLaunch />
                    <h1>Board games</h1>
                </div>
                <div className="text-white">
                    <h1>$56,982</h1>
                    <p>top win today</p>
                </div>
            </div>
            <div className='flex justify-between w-[100%] h-[50px] text-[13px] nova mt-4 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <div className="flex text-white space-x-1">
                    <MdRocketLaunch />
                    <h1>Arcade</h1>
                </div>
                <div className="text-white">
                    <h1>$566,982</h1>
                    <p>top win today</p>
                </div>
            </div>
            <div className='flex justify-between w-[100%] h-[50px] text-[13px] nova mt-4 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <div className="flex text-white space-x-1">
                    <MdRocketLaunch />
                    <h1>Adventure</h1>
                </div>
                <div className="text-white">
                    <h1>$566,982</h1>
                    <p>top win today</p>
                </div>
            </div>
            <div className='flex justify-between w-[100%] h-[50px] text-[13px] nova mt-4 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <div className="flex text-white space-x-1">
                    <MdRocketLaunch />
                    <h1>Bonus program</h1>
                </div>
            </div>
            <div className='flex items-center space-x-4 mt-8'>
                <h1 className='text-[#FFFFFF] nova text-[14px]'>User info</h1>
                <div className='h-0.5 w-[40%] bg-[#FFFFFF]'></div>
            </div>
            <div className='text-[#FFFFFF] w-[100%] nova text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <h1>Username : Kenzman</h1>
                <h1>Address : 0xhjhd...</h1>
                <h1>Total games : 203</h1>
            </div>

            <div className='flex items-center space-x-4 mt-8'>
                <h1 className='text-[#FFFFFF] nova text-[14px]'>Promotions</h1>
                <div className='h-0.5 w-[40%] bg-[#FFFFFF]'></div>
            </div>
            <div className='text-[#FFFFFF] w-[100%] nova text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <h1>Lottery</h1>
            </div>
            <div className='text-[#FFFFFF] w-[100%] nova text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <h1>Tornament</h1>
            </div>
            <div className='text-[#FFFFFF] w-[100%] nova text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-3 rounded-xl items-center'>
                <h1>Jackpot</h1>
            </div>
</div>
  )
}

export default Sidepan