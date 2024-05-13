import { FaRegHandPointer, FaUsers } from "react-icons/fa"
import { FaUserTie } from "react-icons/fa6"
import { TbReportSearch } from "react-icons/tb"


function WhoUsePlatfrom() {
    return (
        <div className="max-w-[1100px] mx-auto mt-32">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-5 px-4">
                    <p>Who use platfrom?</p>

                    <h3 className=' mt-5  text-[32px] md:text-[48px] text-[#2b2b39] max-w-[380px]  font-[700] '>We believe that when everyone speaks out the problem of society and action together, the world will become a better place.</h3>
                </div>

                <div className="col-span-12 md:col-span-7">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <a href="#" className="block w-full p-6 md:pb-8 bg-[#6059c9] border rounded-lg shadow ">
                                <div className="flex justify-start md:justify-center  md:mt-6">
                                    <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-[#6059c9] rounded-full px-2 py-2">
                                        <FaRegHandPointer className=" w-8 h-8  md:w-12 md:h-12 opacity-60" />

                                    </div>
                                </div>
                                <h5 className="mb-2  text-[24px] md:text-[32px] font-bold md:text-center mt-5 tracking-tight text-white">
                                    Activists
                                </h5>
                                <p className="font-normal text-[16px] md:mt-10 md:text-center text-white">
                                    Social activists can start a social movements and connect supporters in their communities.
                                </p>
                            </a>

                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <a href="#" className="block w-full p-6 md:pb-8 bg-[#6059c9] border rounded-lg shadow ">
                                <div className="flex justify-start md:justify-center  md:mt-6">
                                    <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-[#6059c9] rounded-full px-2 py-2">
                                        <FaUserTie className=" w-8 h-8  md:w-12 md:h-12 opacity-60" />

                                    </div>
                                </div>
                                <h5 className="mb-2  text-[24px] md:text-[32px] font-bold md:text-center mt-5 tracking-tight text-white">
                                    Legislators
                                </h5>
                                <p className="font-normal text-[16px] md:mt-10 md:text-center text-white">
                                    Decision makers at the highest levels of government are engaging with their constituents.
                                </p>
                            </a>

                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <a href="#" className="block w-full p-6 md:pb-8 bg-[#6059c9] border rounded-lg shadow ">
                                <div className="flex justify-start md:justify-center  md:mt-6">
                                    <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-[#6059c9] rounded-full px-2 py-2">
                                        <FaUsers className=" w-8 h-8  md:w-12 md:h-12 opacity-60" />

                                    </div>
                                </div>
                                <h5 className="mb-2  text-[24px] md:text-[32px] font-bold md:text-center mt-5 tracking-tight text-white">
                                    Organizations
                                </h5>
                                <p className="font-normal text-[16px] md:mt-10 md:text-center text-white">
                                    Leading organizations are advancing their causes and mobilizing new supporters.
                                </p>
                            </a>

                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <a href="#" className="block w-full p-6 md:pb-8 bg-[#6059c9] border rounded-lg shadow ">
                                <div className="flex justify-start md:justify-center  md:mt-6">
                                    <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-[#6059c9] rounded-full px-2 py-2">
                                        <TbReportSearch className=" w-8 h-8  md:w-12 md:h-12 opacity-60" />

                                    </div>
                                </div>
                                <h5 className="mb-2  text-[24px] md:text-[32px] font-bold md:text-center mt-5 tracking-tight text-white">
                                    Reporters
                                </h5>
                                <p className="font-normal text-[16px] md:mt-10 md:text-center text-white">
                                    Journalists are sourcing powerful stories and covering campaigns hundreds of times a day.
                                </p>
                            </a>

                        </div>

                    </div>
                </div>
            </div>


            <div className="mt-32 px-4">
                <h3 className=' mt-5  text-[44px] md:text-[62px] text-[#2b2b39]   font-[700] '>We believe in your voice</h3>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <p className="font-normal  text-[16px] md:text-[18px] max-w-[480px] tracking-wide leading-7 md:mt-10  text-gray-500">
                            We’re in here with a simple and clear mission is building a powerful platform for the change, helping people around the world to raise their voices, collecting signatures and contribute to the world.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <p className="font-normal  text-[16px] md:text-[18px] max-w-[480px] tracking-wide leading-7 md:mt-10  text-gray-500">
                            At Conikal, We believe that the power to change the world is in all human beings, we also believe that when everyone speaks out the problem of society and action together, the world will become a better place.

                        </p>
                    </div>

                    <div className="col-span-12">
                        <img className=" w-full object-cover rounded-xl mt-12  max-h-[380px] " src="/165.jpg " alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoUsePlatfrom
