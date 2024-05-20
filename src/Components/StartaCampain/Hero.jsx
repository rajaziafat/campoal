import { useState } from 'react';
import { FaCaretDown, FaCheck } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

const topics = [
    { name: '1' },
    // Add more topics if needed
];



function Hero() {
    const [isOpenT, setIsOpenT] = useState(false);

    const [activeTab, setActiveTab] = useState(0);
    const tabTitles = ['Title', 'Receiver', 'Problem', 'Photo'];

    const nextTab = () => {
        if (activeTab < tabTitles.length - 1) setActiveTab(activeTab + 1);
    };

    const prevTab = () => {
        if (activeTab > 0) setActiveTab(activeTab - 1);
    };



    const toggleDropdownT = () => {

        setIsOpenT(!isOpenT);
    };



    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='pt-32 bg-white'>
            <div className='max-w-[940px] mx-auto px-4'>
                <h2 className='text-[32px] font-bold text-center text-[#333] mt-4'>Start a Campaign</h2>

                <div className='flex justify-center mt-10'>
                    {tabTitles.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex items-center text-lg font-bold border px-4 py-3  justify-center w-full ${activeTab === index ? 'bg-[#F9F9FF] text-black' : 'bg-white'} ${index === 0 ? 'rounded-l-lg' : ''} ${index === tabTitles.length - 1 ? 'rounded-r-lg' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {index < activeTab ? (
                                <FaCheck className='mr-2 w-8 h-8 text-[#6059c9]' />
                            ) : (
                                <span className='text-[28px]'>{index + 1}.</span>
                            )}
                            <span className='ml-2 text-base'>{tab}</span>
                        </button>
                    ))}
                </div>

                <div className='mt-8'>
                    <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                        {activeTab === 0 && <>

                            <div className='max-w-[700px] mx-auto mt-10 ' >
                                <div className='grid grid-cols-12 gap-4'>

                                    <div className='col-span-12'>
                                        <h2 className='text-[24px] font-bold  text-[#333] mt-4'>Write your petition title</h2>
                                        <p className=' text-[16px]  text-gray-600 mt-2'>This is the first thing people will see about your petition. Get their attention with a short title that focuses on the change you’d like them to support.</p>
                                        <div className="relative px-1 mt-8 w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Title</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9]  w-full p-2.5"
                                                placeholder="What do you want to achieve?"
                                                required=""
                                            />

                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-6'>
                                        <div className="relative px-1  w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Goal</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9]  w-full p-2.5"
                                                placeholder="Number of signature goal?"
                                                required=""
                                            />

                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-6'>
                                        <div className='relative px-1  w-full'>
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Category</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <button
                                                id="dropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                className="flex items-center justify-between  text-[16px] w-full px-2 py-2.5 space-x-8 text-[#5f5f75] rounded-lg border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                                type="button"
                                                onClick={toggleDropdownT}
                                            >


                                                <p className="text-[16px] mt-0.5">Children rights</p>

                                                <FaCaretDown className='w-3.5 h-3.5' />


                                            </button>
                                            {/* Dropdown menu */}
                                            <div
                                                id="dropdown"
                                                className={`absolute top-full left-0 mt-2 rounded-md z-10 ${isOpenT ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-full `}
                                            >






                                                <ul
                                                    className=" text-sm max-h-[265px] overflow-y-auto text-[#5f5f75]  py-2 rounded-lg "
                                                    aria-labelledby="dropdownDefaultButton"
                                                >





                                                    {topics.map((topics, index) => (
                                                        <li key={index}>
                                                            <a href="#" className="px-4 py-1 hover:bg-[#6059c9] w-full hover:bg-opacity-5 flex items-center space-x-2">

                                                                <p className="text-[13px] mt-0.5">{topics.name}</p>
                                                            </a>
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='col-span-12 md:col-span-6'>
                                        <div className="mt-2  max-w-[750px] mx-auto">



                                            <div>
                                                <div
                                                    className="flex mt-2 items-center space-x-2 cursor-pointer"
                                                    onClick={() => toggleAnswer(0)} // Assuming index 0 for the single question
                                                >
                                                    <div>
                                                        {expandedQuestion === 0 ? (
                                                            <IoIosArrowUp className="w-6 h-6" />
                                                        ) : (
                                                            <IoIosArrowDown className="w-6 h-6" />
                                                        )}
                                                    </div>
                                                    <h3 className="text-[20px] md:text-[18px] font-bold"> How to write a great title?</h3>
                                                </div>

                                                <CSSTransition
                                                    in={expandedQuestion === 0}
                                                    timeout={300}
                                                    classNames="slide"
                                                    unmountOnExit
                                                >
                                                    <div className="text-[18px] text-black px-6 mt-4 leading-6">
                                                        Answer
                                                    </div>
                                                </CSSTransition>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>











                        </>}
                    </div>
                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                        {activeTab === 1 && <div>Content for Receiver</div>}
                    </div>
                    <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
                        {activeTab === 2 && <div>Content for Problem</div>}
                    </div>
                    <div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
                        {activeTab === 3 && <div>Content for Photo</div>}
                    </div>
                </div>

                <div className='flex justify-between mt-8'>
                    <button
                        className={`px-4 py-2 ${activeTab === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                        onClick={prevTab}
                        disabled={activeTab === 0}
                    >
                        Back
                    </button>

                    {activeTab < tabTitles.length - 1 ? (
                        <button
                            className='px-4 py-2 bg-blue-500 text-white'
                            onClick={nextTab}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className='px-4 py-2 bg-green-500 text-white'
                            onClick={() => alert('Campaign Finished')}
                        >
                            Finish
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;
