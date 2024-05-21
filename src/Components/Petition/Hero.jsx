import { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BiSolidShare } from "react-icons/bi";
import { BsSend } from "react-icons/bs"
import { CiSaveDown2 } from "react-icons/ci"
import { FaArrowDown, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaEye, FaFacebookSquare, FaLock, FaTag, FaUser } from "react-icons/fa"
import { FaUserLarge } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";


const initialCardsToShow = 5;
const newsData = [
    {
        id: 1,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: true, // Change to false if not agreed
    },
    {
        id: 2,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: true, // Change to false if not agreed
    },
    {
        id: 3,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: true, // Change to false if not agreed
    },
    {
        id: 4,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: false, // Change to false if not agreed
    },
    {
        id: 5,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: false, // Change to false if not agreed
    },
    {
        id: 6,
        title: "‘Dateline NBC’ special ‘The Long Road to Freedom’ to focus on wrongfully convicted Tulsa brothers",
        website: "oklahoman.com",
        date: "JUN 19, 2020",
        content: "The one-hour broadcast, The Long Road to Freedom is part of NBC News’ network-wide series, “Inequality in America.”",
        agreed: false, // Change to false if not agreed
    },
    // Add more items here
];





function Hero() {

    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

    const handleShowMore = () => {
        setCardsToShow(cardsToShow + 5); // Increase cards to show by 5
    };



    return (
        <div className="bg-white">
            <div className="py-44 max-w-[1180px] mx-auto px-4 ">
                <div className="flex justify-center ">
                    <div className="flex  space-x-2 items-center">
                        <BsSend className="w-4 h-4 text-gray-500" />
                        <h2 className="text-[18px] text-gray-500"> Petition to Donald Trump</h2>
                    </div>
                </div>

                <h2 className=" text-[28px] md:text-[44px] text-center text-black mt-5 font-bold">Pass the Dignity for Incarcerated Women Act.</h2>

                <div className="mt-5 flex justify-center" >
                    <div className="flex items-center space-x-2">
                        <img className="rounded-full w-8" src="/221.jpg" alt="" />
                        <p className="text-sm">
                            <b>John Kenedy </b>
                            ·
                            San Francisco County, CA, US
                        </p>
                    </div>

                </div>


                <div className="grid grid-cols-12 mt-16 ">
                    <div className="col-span-12 lg:col-span-7 px-6">
                        <div className="  sticky top-10 bg-white border-b lg:flex justify-between items-center hidden lg:block ">
                            <ul className="flex text-sm  space-x-2 py-2" >
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md  hover:bg-opacity-5 flex items-center ">
                                    Story
                                </li>
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md hover:bg-opacity-5 flex items-center ">
                                    Supporters
                                </li>
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md hover:bg-opacity-5 flex items-center ">
                                    Letter
                                </li>
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md hover:bg-opacity-5 flex items-center ">
                                    Citations
                                </li>
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md hover:bg-opacity-5 flex items-center ">
                                    Updates
                                </li>
                                <li className="px-4 py-1 hover:bg-[#6059c9] cursor-pointer rounded-md hover:bg-opacity-5 flex items-center ">
                                    Comments
                                </li>
                            </ul>


                            <div>
                                <CiSaveDown2 className="w-6 h-6 cursor-pointer" />

                            </div>
                        </div>


                        <img className="w-full rounded-xl mt-4" src="/0012.jpg" alt="" />

                        <div className="mt-4 flex justify-between">
                            <div className="flex items-center space-x-2 text-gray-500 ">
                                <FaTag />
                                <p> Women</p>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500 ">
                                <FaEye />
                                <p>510 views</p>
                            </div>

                        </div>


                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-500' >
                            I was sentenced 78 months to serve at a federal prison for a white-collar crime. I left home a healthy single mother of two sons, not ever experiencing any serious illnesses. I was a registered nurse who had achieved 3 secondary degrees. I was homeowner and a successful business entrepreneur.
                        </p>

                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800 font-bold ' >
                            I was also six weeks pregnant. Anytime I was transported, I was chained at my ankles with another chain around my waist that bound my hands in front of my belly.
                        </p>


                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800  ' >
                            While shackled, forced to step up into a van, I fell. A couple days later I begin spotting with streaks of blood, which I reported immediately to the medical staff. They instantly informed me they had “no” means of caring for me and would need approval from the US Marshals to take me to the ER. The turnaround time for approval ended up being 4 weeks. At that point, it was no longer an “emergency,” so I was turned away from the ER — I then required a second approval for an obstetrician, which took 4 more weeks. <b>A total of four requests were made, each taking 4 weeks, while I was placed in solitary confinement for “medical observation</b>.
                        </p>


                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800  ' >
                            I ended up miscarrying at approximately 20 weeks without any formal or proper prenatal care. While I was miscarrying, I lay wet in a pool of blood, curled up from excruciating pain, in complete darkness, locked in a cell until an officer made rounds. I suffered the entire miscarriage shackled to the bed. <b>When asked, the officers told the nurse and myself that the linen which contained my unborn child had been thrown in the trash.</b>
                        </p>

                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800  ' >
                            I had no privacy. Male officers were at my bedside 24hrs observing my nakedness and any treatment given to me. I received no counseling, nor had any opportunity to grieve my miscarriage. I was relocated to another facility where again, I was placed in solitary confinement for a month. Solitary is being locked in a 6’ by 9’ room with a bed, toilet, sink, and no window for 23 hours a day. <b>For women in prison, stories like mine are a lot more common than you would think.</b>
                        </p>

                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800  ' >
                            Women are the largest growing prison population. Our federal and private prisons are not equipped to give women the medical care they need, especially when pregnant. We need to ban the shackling and solitary confinement of pregnant women in prison. The Dignity for Incarcerated Women Act, a bill currently being considered in Congress, would stop those things.
                        </p>

                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800  ' >
                            The Dignity for Incarcerated Women Act, will help mothers keep strong relationships with their children by providing parenting classes, prohibit charging for phone calls, and make video-conferencing available free of charge. It will even create an overnight visit pilot program for children and parents. <b>Please sign my petition asking Congress to pass the Dignity for Incarcerated Women Act.</b>
                        </p>


                        <p className='text-[14px] md:text-[18px]  mt-5 leading-7 text-gray-800   ' >
                            Thank you , Pamela Winn
                        </p>

                        <p className="mt-5 text-sm">
                            Report Issue
                        </p>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2 mt-4">
                                <div className="flex space-x-2 items-center">
                                    <h2 className="text-[12px] px-2 py-1 rounded-md bg-[#ebe6df] text-gray-500"> Peace</h2>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <h2 className="text-[12px] px-2 py-1 rounded-md bg-[#ebe6df] text-gray-500"> Women</h2>
                                </div>
                            </div>

                            <p className="text-sm mt-6 font-bold">December 6, 2017</p>
                        </div>

                        <div className="mt-10">
                            <div className="border-b ">
                                <h2 className="mb-4 font-bold" >103,709 Supporters</h2>
                            </div>

                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 mt-4">see more...</p>

                        </div>


                        <div className="mt-6">
                            <div className="border-b ">
                                <h2 className="mb-2 font-bold" >3 Backers</h2>
                            </div>

                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <img className="rounded-full  w-8" src="/366.webp" alt="" />
                                <div>
                                    <h3 className="text-[16px] font-bold">Anonymous</h3>
                                    <p className="text-[14px] mt-1">From Bei Jing Shi, signed this petition 11 months ago</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 mt-4">see more...</p>

                        </div>

                        <div className="mt-10 bg-[#F9F9FF] px-4 py-6 text-gray-500 rounded-xl">
                            <div className="">
                                <h3 className="text-[16px]"> LETTER TO</h3>
                                <p className="mt-4 text-sm font-bold">Us. Senate</p>
                                <p className="mt-1 text-sm font-bold" >U.S. House of Representatives</p>

                                <p className="mt-10 text-sm">Pass the Dignity for Incarcerated Women Act.</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="mb-4 text-[24px] font-bold" >Citations</h2>
                        </div>

                        <div className="w-full rounded-full mt-2 h-1.5 bg-[#d3ccc1] relative overflow-hidden">
                            <div className="bg-[#36B37E] h-1.5 rounded-full absolute left-0 top-0" style={{ width: `70%` }}>
                                <div className="shine" style={{ width: "100%" }}></div>
                            </div>
                        </div>
                        <p className="text-[12px] font-bold text-gray-500 mt-2">Fact score: 73%</p>



                        {newsData.slice(0, cardsToShow).map((item) => (
                            <div key={item.id} className="mt-10 bg-[#F9F9FF] px-4 py-6 text-gray-500 rounded-xl">
                                <div className="flex space-x-3">
                                    <img className="w-28 rounded-xl hidden md:flex" src="/0045.svg" alt="" />
                                    <div>
                                        <div className="flex items-center">
                                            <h2 className="text-[16px] font-bold leading-5">
                                                <span className={`text-[10px] px-1 py-1 text-white rounded-md ${item.agreed ? 'bg-[#36B37E]' : 'bg-[#EF4444]'}`}>
                                                    {item.agreed ? 'Agree' : 'Disagree'}
                                                </span>
                                                {item.title}
                                            </h2>
                                        </div>
                                        <div className="flex mt-2 items-center space-x-1">
                                            <p className="text-[14px]">{item.website}</p>
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                        </div>
                                        <h2 className="text-[14px] mt-5 leading-5">{item.content}</h2>
                                    </div>
                                    <div className="bg-[#fff3e4] rounded-lg h-[70px] py-1 px-2">
                                        <IoIosArrowUp className="w-2" />
                                        <p className="py-2 text-[12px]">3</p>
                                        <IoIosArrowDown className="w-2" />
                                    </div>
                                </div>
                                <hr className="mt-8" />
                                <p className="text-end text-sm mt-4">Posted by John Kenedy 4 years ago</p>
                            </div>
                        ))}


                        {newsData.length > cardsToShow && ( // Show "Show More" button if there are more cards to show
                            <button
                                className="w-full px-2 py-3 flex items-center text-sm justify-center border space-x-1 hover:border-black duration-200 ease-in-out border-gray-300 mt-8 rounded-md"
                                onClick={handleShowMore}
                            >
                                <FaArrowDown />
                                <p>More Citations</p>
                            </button>
                        )}


                        <div className="border-b mt-10">
                            <h2 className="mb-2 text-[22px] font-bold" >Updates</h2>
                        </div>


                        <div className="mt-10 bg-[#F9F9FF] px-4 py-4 text-gray-500 rounded-xl">
                            <div className="">
                                <div className="flex items-center space-x-2">
                                    <BiSolidShare className="w-6 h-6" />
                                    <h3 className="text-[16px]"> Decision Maker Response</h3>
                                </div>
                                <hr className="mt-4" />
                                <div className="flex justify-between items-center mt-6">
                                    <div>
                                        <h2 className="text-[22px] font-bold text-black mt-2"> Cory Booker’s response</h2>
                                        <p className="mt-4 text-[16px] leading-6 "> Pamela’s tragic and harrowing story should disturb every American. Under no circumstances should we treat any of our fellow citizens with such savage disregard and lack of basic human dignity ...</p>
                                    </div>
                                    <img className="w-28 rounded-xl hidden md:flex" src="/150.png" alt="" />
                                </div>
                                <hr className="mt-4" />
                                <p className="text-end text-sm mt-4">6 years ago</p>
                            </div>
                        </div>

                        <div className="mt-10 bg-[#F9F9FF] px-4 py-4 text-gray-500 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <img className="rounded-full w-10" src="/221.jpg" alt="" />
                                <p className="text-md">
                                    <b className="text-black">John Kenedy </b>
                                    ·
                                    <br />  <span className="text-sm">
                                        San Francisco County, CA, US
                                    </span>
                                </p>
                            </div>
                        </div>


                        <div className="border-b mt-12">
                            <h2 className="mb-2 text-[22px] font-bold" >6 Comments</h2>
                        </div>

                        <div className="flex items-center space-x-3 mt-6">
                            <img className="rounded-full w-10" src="/221.jpg" alt="" />
                            <div className="text-sm  flex items-center space-x-2 font-bold  text-gray-500">
                                <p>  banlong635</p>

                                <span className="text-[12px] text-gray-400">
                                    6 years ago · 1 likes
                                </span>



                            </div>

                        </div>
                        <div className="ml-14">

                            <h3 className="text-[13px]">Sign</h3>
                            <div className="flex items-center space-x-1 mt-2" >

                                <AiFillLike className="w-3 h-3 text-gray-500" />
                                <p className="text-sm  text-gray-500"> Like</p>

                            </div>
                        </div>




                        <h2 className="mb-2 text-[18px] font-bold mt-10" >Write a Reply or Comment</h2>
                        <p className="text-[16px] mt-4"  >You should Sign In or Sign Up account to post comment.</p>

                        <div className="bg-[#F9F9FF] py-4 px-4 mt-5" >
                            <div className="flex space-x-2">
                                <img className="rounded-full w-8 h-8 mt-5" src="/221.jpg" alt="" />
                                <div className="w-full">



                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                            <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900  rounded-lg border mt-5   focus:ring-none focus:border-[#6059c9] placeholder-gray-600" placeholder="Add a comment "></textarea>
                                        </div>
                                        <div className=" col-span-12  md:col-span-6 ">
                                            <div className="relative px-1 mt-4">

                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                                    placeholder="first name"
                                                    required=""
                                                />

                                            </div>
                                        </div>

                                        <div className=" col-span-12  md:col-span-6 ">
                                            <div className="relative px-1 mt-4 md:mt-4">

                                                <input
                                                    type="email"
                                                    id="first_name"
                                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                                    placeholder="Your email"
                                                    required=""
                                                />

                                            </div>
                                        </div>


                                    </div>

                                    <div className="flex items-center py-4 w-full">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 text-[#6059c9] accent-[#fff]  border-gray-500  rounded focus:ring-[#333]   focus:ring-2 "
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ms-2 w-full text-sm font-medium text-gray-900 "
                                        >
                                            Save my name for the next time I comment.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="border flex justify-between items-center space-x-2 rounded-xl px-4 py-4 mt-10">
                            <div className="flex  space-x-2 items-center h-40 ">
                                <FaChevronLeft className="w-8 h-8" />
                                <div>
                                    <h3 className="text-end text-sm">Previous</h3>
                                    <p className="text-[18px] font-bold text-end">Ask Congress to Outlaw Dog and Cat Meat in the U.S.</p>
                                </div>
                            </div>
                            <div className="h-44 border-l border-gray-500 mx-4"></div>
                            <div className="flex  space-x-3 items-center  h-40 ">
                                <div className="mt-6">
                                    <h3 className="text-start text-sm">Next</h3>
                                    <p className="text-[18px] font-bold ">Tell Walmart Brazil to Stop Selling Eggs from  <br />Confined Hens</p>
                                </div>
                                <FaChevronRight className="w-8 h-8" />
                            </div>
                        </div>





                    </div>


                    <div className="col-span-12 md:col-span-5 px-4  ">



                        <div className="grid grid-cols-12 mt-5 gap-4 sticky top-12">

                            <div className="col-span-12">

                                <div className="flex space-x-2">
                                    <FaUser className="w-6 h-6" />

                                    <p className="text-[27px] font-bold">103,709 Supporters</p>
                                </div>


                                <div className="w-full rounded-full mt-2 h-3 bg-[#d3ccc1] relative overflow-hidden">
                                    <div className="bg-[#6059c9] h-3 rounded-full absolute left-0 top-0" style={{ width: `60%` }}>
                                        <div className="shine" style={{ width: "100%" }}></div>
                                    </div>
                                </div>
                                <p className="text-[12px] font-bold text-gray-500 text-center mt-2">96,291 needed to reach 200,000</p>
                                <hr className="mt-4 mb-4" />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                    placeholder="First name"
                                    required=""
                                />
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                        placeholder="Last name"
                                        required=""
                                    />
                                    <div className="absolute inset-y-0 right-0 flex  text-gray-500 items-center pr-3 pointer-events-none">
                                        <FaUserLarge />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 ">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                        placeholder="Email"
                                        required=""
                                    />
                                    <div className="absolute inset-y-0 right-0 flex  text-gray-500 items-center pr-3 pointer-events-none">
                                        <IoMailSharp />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 ">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                        placeholder="Address"
                                        required=""
                                    />
                                    <div className="absolute inset-y-0 right-0 flex  text-gray-500 items-center pr-3 pointer-events-none">
                                        <IoLocationSharp />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 ">
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                        placeholder="phone"
                                        required=""
                                    />
                                    <div className="absolute inset-y-0 right-0 flex  text-gray-500 items-center pr-3 pointer-events-none">
                                        <IoLocationSharp />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900  rounded-lg border    focus:ring-none focus:border-[#6059c9] placeholder-gray-600" placeholder="I am Singing Because "></textarea>
                            </div>

                            <div className="col-span-12">
                                <div className="bg-[#F9F9FF] px-2 py-2 rounded-2xl">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultValue="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6059c9] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6059c9]" />
                                        <span className="ms-3 flex space-x-2 items-center text-sm  text-gray-900">
                                            <FaFacebookSquare />

                                            <p>
                                                Share on Facebook
                                            </p>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <button className='bg-[#36B37E]  text-white text-[15px] justify-center w-full flex items-center space-x-4 font-bold px-6 py-3 rounded-xl'>
                                    <AiFillLike />

                                    <p>Agree </p>
                                </button>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <button className='bg-[#F9F9FF] text-gray-600 hover:bg-[#FF5630] hover:text-[#fff] duration-150 ease-in-out text-[15px] justify-center w-full flex items-center space-x-4 font-bold px-6 py-3 rounded-xl'>
                                    <AiFillDislike />

                                    <p>Disagree </p>
                                </button>
                            </div>

                            <div className="col-span-12">
                                <button className='bg-[#6059c9]  text-white text-[15px] justify-center w-full flex items-center space-x-2 font-bold px-6 py-3 rounded-xl'>
                                    <FaLock />

                                    <p>Sign  </p>
                                </button>
                            </div>

                            <div className="col-span-12">
                                <div className="w-full rounded-full  h-1.5 bg-[#d3ccc1] relative overflow-hidden">
                                    <div className="bg-[#36B37E] h-1.5 rounded-full absolute left-0 top-0" style={{ width: `70%` }}>
                                        <div className="shine" style={{ width: "100%" }}></div>
                                    </div>
                                </div>
                                <p className="text-[12px] font-bold text-gray-500 mt-2">Fact score: 73%</p>

                            </div>
                            <div className="col-span-12">

                                <div className="mt-5 px-2" >

                                    <div className="flex items-center mb-2">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 text-[#6059c9] accent-[#fff]  border-gray-500  rounded focus:ring-[#333]   focus:ring-2 "
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ms-2 text-sm font-medium text-gray-900 "
                                        >
                                            Add citation instant on this petition
                                        </label>
                                    </div>

                                    <div className="flex items-center mb-2">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 text-[#6059c9] accent-[#fff]  border-gray-500  rounded focus:ring-[#333]   focus:ring-2 "
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ms-2 text-sm font-medium text-gray-900 "
                                        >
                                            Display my name on this petition
                                        </label>
                                    </div>

                                    <div className="flex items-center mb-2">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 text-[#6059c9] accent-[#fff]  border-gray-500  rounded focus:ring-[#333]   focus:ring-2 "
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ms-2 text-sm font-medium text-gray-900 "
                                        >
                                            Receive updates from this petition
                                        </label>
                                    </div>

                                    <p className="text-sm text-gray-500">

                                        By signing, you accept Campoal’s Terms of Service and Privacy Policy, and agree to receive occasional emails about campaigns on Campoal. You can unsubscribe at any time.

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Hero
