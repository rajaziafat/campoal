

import { MdKeyboardArrowRight } from 'react-icons/md'


function Hero() {
    return (
        <div className='grid grid-cols-12 mt-14  '>
            <div className='col-span-12 md:col-span-6 py-10 px-4  md:py-50 flex justify-center md:justify-end items-center bg-[#6059c9]'>
                <div className=' mr-0 md:mr-20'>
                    <div className='max-w-[490px]'>
                        <h2 className=" text-[60px] text-white mt-0 font-bold">The answers for your question</h2>
                        <p className='text-[18px] md:text-[24px]  mt-5 max-w-[460px] leading-8 text-white'>Here is a collection of frequently asked questions from users
                        </p>

                        <button className='bg-[#fff] mt-10 text-center justify-center text-[#6059c9] flex items-center space-x-2 text-[16px] md:text-[18px] font-bold px-4 py-3  w-52 rounded-lg '>
                            <p>
                                Ask a question
                            </p>
                            <MdKeyboardArrowRight />

                        </button>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-6  py-10 px-4 md-px-0 md:py-48  bg-[#f5efe0]'>
                <div className=' ml-0  md:ml-20'>

                    <img className='max-w-[590px]' src="/6778.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
