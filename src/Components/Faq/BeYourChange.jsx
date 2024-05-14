import { FaBookOpen } from "react-icons/fa"
import { IoIosHelpBuoy } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/md"

function BeYourChange() {
    return (
        <div className='max-w-[1100px] mx-auto px-4  py-24 '>
            <div className="py-24">
                <div className="grid grid-cols-8 ">
                    <div className="col-span-12 md:col-span-4">
                        <div className=' mr-0 md:mr-20'>
                            <div className="bg-[#f5efe0] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                                <FaBookOpen className=" w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />
                            </div>

                            <div>
                                <h2 className=" text-[36px] text-black mt-5 font-bold">Documentation</h2>
                                <p className='text-[14px] md:text-[18px] mt-5 max-w-[460px] leading-6 text-black'>Find documents related to products  and <br /> your account.
                                </p>

                                <button className='bg-[#6059c9] mt-10 text-center justify-center text-[#fff] flex items-center space-x-2 text-[16px] md:text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                                    <p>
                                        Find a tutarial
                                    </p>
                                    <MdKeyboardArrowRight />

                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <div className=' mr-0 md:mr-20'>
                            <div className="bg-[#f5efe0] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                                <IoIosHelpBuoy className=" w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />
                            </div>

                            <div>
                                <h2 className=" text-[36px] text-black mt-5 font-bold">Support Desk</h2>
                                <p className='text-[14px] md:text-[18px] mt-5 max-w-[460px] leading-6 text-black'>Contact our technical experts for customer <br /> support.
                                </p>

                                <button className='bg-[#6059c9] mt-10 text-center justify-center text-[#fff] flex items-center space-x-2 text-[16px] md:text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                                    <p>
                                        Creat a ticket
                                    </p>
                                    <MdKeyboardArrowRight />

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="bg-[#f5efe0] mt-18 rounded-xl px-4 md:max-h-[360px] ">
                    <div className="grid grid-cols-12 mt-24  md:px-12 mx-auto ">
                        <div className="col-span-12 md:col-span-6 md:mt-12 px-8 md:px-0 ">
                            <h5 className="mb-2 text-[36px] font-bold  mt-10 tracking-tight text-gray-900">
                            Be your change
                            </h5>
                            <p className="font-normal  max-w-[390px] md:text-[18px] mt-4 md:mt-8  text-gray-500">
                            Better more inclusive and fair world for not just a select few but for all of humanity.
                            </p>

                            <button className='bg-[#6059c9]  mt-5 text-center justify-center text-[#fff] flex items-center space-x-2 text-[18px] font-bold px-4 py-3  w-52 rounded-lg '>
                                <p>
                                    Start a Petition
                                </p>
                                <MdKeyboardArrowRight />
                            </button>
                        </div>

                        <div className="col-span-12 md:col-span-6  mt-12 ">

                            <img className=" w-full" src="/199.svg" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BeYourChange
