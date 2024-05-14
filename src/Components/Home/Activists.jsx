
import { FaHandPointer, FaUserTie } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'


function Activists() {
    return (
        <div className='grid grid-cols-12 mt-20  '>
            <div className='col-span-12 md:col-span-6 py-10 px-4  md:py-48 flex justify-center md:justify-end items-center bg-[#6059c9]'>
                <div className=' mr-0 md:mr-20'>
                    <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                        <FaUserTie className=" w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />
                    </div>

                    <div>
                        <h2 className=" text-[36px] text-white mt-5 font-bold">Activists</h2>
                        <p className='text-[14px] md:text-[18px] mt-5 max-w-[460px] leading-6 text-white'>We help you easy start your campaign, collect donations, signatures. You can manage your campaign updates and your supporters on dashboard.
                        </p>

                        <button className='bg-[#f5efe0] mt-10 text-center justify-center text-[#6059c9] flex items-center space-x-2 text-[16px] md:text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                            <p>
                               Start a campaing
                            </p>
                            <MdKeyboardArrowRight />

                        </button>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-6  py-10 px-4 md-px-0 md:py-48 flex justify-center md:justify-start items-center bg-[#f5efe0]'>
            <div className=' ml-0  md:ml-20'>
                    <div className="bg-[#6059c9] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                        <FaHandPointer  className=" w-6 h-6 md:w-12 md:h-12 text-[#fff]  opacity-30" />
                    </div>

                    <div>
                        <h2 className=" text-[36px]  mt-5 font-bold text-[#6059c9]">Supporters
</h2>
                        <p className='text-[14px] md:text-[18px] leading-6 mt-5 max-w-[460px] text-[#6059c9]'>Help the campaigns achieve their goals. Make the world better by signing, sharing and donating to spread good values to the community.
                        </p>

                        <button className='bg-[#6059c9] mt-10 text-center justify-center text-[#fff] flex items-center space-x-2 text-[16px] md:text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                            <p>
                               Sign the petition
                            </p>
                            <MdKeyboardArrowRight />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activists
