
import { FaCheck, FaCode, FaCopy, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { FaShareNodes } from 'react-icons/fa6'
import { HiDotsHorizontal } from 'react-icons/hi'
import { IoIosLink, IoMdArrowDropdown, IoMdMail } from 'react-icons/io'

function Hero() {
    return (
        <div className='pt-32'>


            <div className='max-w-[960px] mx-auto px-4 '>
                <div className='flex justify-center'>
                    <div>
                        <div className='flex justify-center'>
                            <div className='w-28 h-28 rounded-full  border-8 flex items-center justify-center'>
                                <FaCheck className='w-14 h-14 text-[#21ba45]' />

                            </div>
                        </div>
                        <h2 className='text-[28px] font-bold text-center text-[#21ba45] mt-4 '>  You are signed Successfully!</h2>

                        <p className=' text-[16px] md:text-[18px] text-center text-gray-600 mt-5'>You’re one of 91,714 people to sign this petition. Now help find 108,286 more people to reach the goal.</p>
                    </div>




                </div>


                <div className='grid grid-cols-12 py-16'>
                    <div className='col-span-12 md:col-span-6 border-r px-4'>
                        <div className='flex space-x-2'>
                            <IoMdArrowDropdown className='w-10 h-10 mt-1' />

                            <h2 className='text-[24px] font-bold text-center text-[#333] mt-4 '> Share this campaign</h2>
                        </div>

                        <div className='border rounded-lg px-2 py-2 mt-4'>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900  rounded-lg   focus:ring-none focus:border-none placeholder-gray-600" placeholder="Add a personal msg "></textarea>

                            <div>
                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded " />
                                    <div className="absolute px-4  bg-white ">
                                        <div className='flex items-center space-x-1'>
                                            <FaShareNodes />

                                            <p className="text-black">4 Share</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className=' flex items-center space-x-6 mb-1'>
                                <img className='rounded-lg w-[88px]' src="/143.jpg" alt="" />

                                <p className='text-[18px] font-bold  text-[#333]' >Mark Zuckerberg: Facebook Must Inform Users How They Were Exposed to Russian Propaganda</p>
                            </div>


                        </div>
                        <button className='bg-[#3b5998] mt-4 text-white flex items-center space-x-2 justify-center text-[17px] text-center w-full   font-bold px-4 py-3.5 rounded-xl'>
                            <FaFacebookF />

                            <p> Share on Facebook</p>
                        </button>

                        <div className="flex items-center space-x-8 mt-8 px-4">
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <IoMdMail />

                            </div>
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <FaGoogle />

                            </div>
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <FaFacebookF />

                            </div>
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <FaTwitter />

                            </div>
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <FaCode />

                            </div>
                            <div className="px-3 py-2 border  text-gray-400 duration-150 ease-in-out rounded-md hover:border-black">
                                <HiDotsHorizontal />

                            </div>

                        </div>


                        <div className="relative mt-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <IoIosLink />

                            </div>
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-600"
                                placeholder="https://bit.ly/3XCDIH2"
                                required
                            />

                            <button
                                type="button"
                                className="text-gray-400 absolute right-2 bottom-2.5 focus:ring-none border-l flex items-center space-x-2 focus:outline-none focus:ring-none font-medium  text-md px-4 py-2"
                                onClick={() => { /* Add your copy functionality here */ }}
                            >

                                <FaCopy />

                                <p>  Copy</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
