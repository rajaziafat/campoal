import { useEffect, useRef, useState } from 'react'
import { BsSend } from 'react-icons/bs';
import { FaCaretDown, FaEye, FaHome, FaUser } from 'react-icons/fa';
import { FaAngleRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { IoIosChatbubbles } from 'react-icons/io';
import {  MdLocationOn } from 'react-icons/md'


const petitionsData = [
    {
        id: 1,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 2,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 3,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 4,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 5,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 6,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 7,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 8,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 9,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 10,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 11,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 12,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 13,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 14,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 15,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 16,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 17,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    {
        id: 18,
        image: '/12.jpg',
        title: 'Grant Clemency to Alice Marie Johnson Serving a Life Sentence',
        description: 'My mother, Alice Marie Johnson is a 62-year-old grandmother serving life without …',
        supporters: 45400,
        comments: 27,
        progress: 45, // Percentage of progress
        avatar: '/221.jpg'
    },
    // Add more petition objects here if needed
];

function Hero() {


    const topics = [
        { name: '1' },
        // Add more topics if needed
    ];

    const [isOpenT, setIsOpenT] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);
    const [isOpenD, setIsOpenD] = useState(false);
    const [isOpenA, setIsOpenA] = useState(false);

    const dropdownRefs = {
        topics: useRef(null),
        category: useRef(null),
        date: useRef(null),
        descending: useRef(null),
    };

    const closeAllDropdowns = () => {
        setIsOpenT(false);
        setIsOpenC(false);
        setIsOpenD(false);
        setIsOpenA(false);
    };

    const handleDocumentClick = (event) => {
        if (
            dropdownRefs.topics.current && !dropdownRefs.topics.current.contains(event.target) &&
            dropdownRefs.category.current && !dropdownRefs.category.current.contains(event.target) &&
            dropdownRefs.date.current && !dropdownRefs.date.current.contains(event.target) &&
            dropdownRefs.descending.current && !dropdownRefs.descending.current.contains(event.target)
        ) {
            closeAllDropdowns();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const toggleDropdownT = () => {
        closeAllDropdowns();
        setIsOpenT(!isOpenT);
    };

    const toggleDropdownC = () => {
        closeAllDropdowns();
        setIsOpenC(!isOpenC);
    };

    const toggleDropdownD = () => {
        closeAllDropdowns();
        setIsOpenD(!isOpenD);
    };

    const toggleDropdownA = () => {
        closeAllDropdowns();
        setIsOpenA(!isOpenA);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const petitionsPerPage = 12;
    const totalPetitions = petitionsData.length;

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPetition = currentPage * petitionsPerPage;
    const indexOfFirstPetition = indexOfLastPetition - petitionsPerPage;
    const currentPetitions = petitionsData.slice(indexOfFirstPetition, indexOfLastPetition);
    return (
        <>
            <div className='bg-white pb-20'>
                <div className='max-w-[1150px] mx-auto px-4  pt-24'>
                    <h5 className="mb-2 text-[26px] font-bold  mt-5 tracking-tight text-gray-900">
                        Campaigns
                    </h5>
                    <div className='grid grid-cols-12 gap-4 mt-4'>
                        <div className='col-span-12'>
                            <div className="relative w-full  ">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="block px-2 py-3 w-full z-20 text-[16px] text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                    placeholder="Type some words related to the campaign"
                                    required=""
                                />
                                <button
                                    type="submit"
                                    className="absolute top-1 right-0 p-2.5 text-sm text-[#5f5f75]  focus:ring-none focus:outline-none focus:ring-none"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <div className="relative w-full  ">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="block px-2 py-3 w-full z-20 text-[16px] text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                    placeholder="Address. eg, state City "
                                    required=""
                                />
                                <button
                                    type="submit"
                                    className="absolute top-1 right-0 p-2.5 text-sm text-[#5f5f75]  focus:ring-none focus:outline-none focus:ring-none"
                                >
                                    <MdLocationOn className='h-4 w-4' />


                                </button>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='relative'>
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="flex items-center justify-between  text-[16px] w-full px-2 py-3 space-x-8 text-[#5f5f75] rounded-xl border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                    type="button"
                                    onClick={toggleDropdownT}
                                >


                                    <p className="text-[16px] mt-0.5">Topics</p>

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

                        <div className='col-span-12 md:col-span-3'>
                            <div className='relative'>
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="flex items-center justify-between  text-[16px] w-full px-2 py-3 space-x-8 text-[#5f5f75] rounded-xl border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                    type="button"
                                    onClick={toggleDropdownC}
                                >


                                    <p className="text-[16px] mt-0.5">Catagory</p>

                                    <FaCaretDown className='w-3.5 h-3.5' />


                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdown"
                                    className={`absolute top-full left-0 mt-2 rounded-md z-10 ${isOpenC ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-full `}
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

                        <div className='col-span-12 md:col-span-3'>
                            <button className='bg-[#6059c9] text-white text-[15px] text-center w-full   font-bold px-4 py-3.5 rounded-xl'>

                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className='border-t'>
                <div className='max-w-[1100px] mx-auto px-4  mt-10  '>

                    <div >

                        <div className='flex justify-between items-center' >

                            <div className='flex space-x-2 items-center text-gray-500'>
                                <FaHome /><FaAngleRight />
                                <p className='text-sm mt-0.5'>Campaigns</p>


                            </div>



                            <div className='flex items-center space-x-4'>
                                <div>
                                    <div className='relative'>
                                        <button
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="flex items-center justify-between  text-[12px]  px-2 py-2 space-x-4 text-[#5f5f75] hover:bg-opacity-10 hover:bg-[#6059c9] rounded-xl focus:ring-[#6059c9] focus:border-[#6059c9]"
                                            type="button"
                                          
                                        >


                                            <p className="text-[14px] mt-0.5">Date</p>

                                            <FaCaretDown className='w-3.5 h-3.5' />


                                        </button>
                                        {/* Dropdown menu */}
                                        <div
                                            id="dropdown"
                                            className={`absolute top-full left-0 mt-2 rounded-md z-10 bg-white border divide-y slide-down rounded-xl shadow-sm w-full dropdown-content `}
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

                                <div>
                                    <div className='relative'>
                                        <button
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="flex items-center justify-between  text-[12px]  px-2 py-2 space-x-4 text-[#5f5f75] hover:bg-opacity-10 hover:bg-[#6059c9] rounded-xl focus:ring-[#6059c9] focus:border-[#6059c9]"
                                            type="button"
                                           
                                        >


                                            <p className="text-[14px] mt-0.5">Desending</p>

                                            <FaCaretDown className='w-3.5 h-3.5' />


                                        </button>
                                        {/* Dropdown menu */}
                                        <div
                                            id="dropdown"
                                            className={`absolute top-full left-0 mt-2 rounded-md z-10 bg-white border divide-y slide-down rounded-xl shadow-sm w-full dropdown-content `}
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
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-12 mt-12 gap-6'>
                        {currentPetitions.map(petition => (
                            <div key={petition.id} className='col-span-12 md:col-span-12 lg:col-span-4'>
                                <div className=" bg-white border border-gray-200 rounded-lg shadow hover:transform hover:-translate-y-2 hover:transition-transform">
                                    <a href="#" className="relative block group">
                                        <img className="rounded-t-lg w-full" src={petition.image} alt="" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className=" text-white mt-28">
                                                <div className='flex items-center justify-center'>
                                                    <FaArrowUpRightFromSquare className='w-8 h-8' />
                                                </div>
                                                <div className='mt-20 flex justify-between space-x-40 items-center'>
                                                    <div className='flex items-center  space-x-1 '>
                                                        <MdLocationOn />
                                                        <p>
                                                            Al, USA
                                                        </p>
                                                    </div>

                                                    <div className='flex items-center  space-x-1 '>
                                                        <FaEye />
                                                        <p>
                                                            1.4k
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>


                                    <div className="p-5">
                                        <div className="flex space-x-2 items-center">
                                            <BsSend className="w-4 h-4 text-gray-500" />
                                            <h2 className="text-[18px] text-gray-500"> Petition to Donald Trump</h2>
                                        </div>
                                        <a href="#">
                                            <h5 className="mb-2 mt-5 text-[20px] font-bold text-gray-900">
                                                {petition.title}
                                            </h5>
                                        </a>
                                        <p className=" font-normal mt-5 text-[16px] text-gray-700">
                                            {petition.description}
                                        </p>
                                        <div className='flex justify-between items-center mt-4 border-t pt-4'>
                                            <div className='flex items-center space-x-4'>
                                                <button className="text-white bg-[#6059c9] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                    <FaUser className="w-3 h-3" />
                                                    <p className="text-[12px] font-bold  mt-0.5">{petition.supporters} Supporters</p>
                                                </button>
                                                <button className="text-gray-500 bg-[#ece7e0] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                    <IoIosChatbubbles className="w-3 h-3" />
                                                    <p className="text-[12px] font-bold  mt-0.5">{petition.comments}</p>
                                                </button>
                                            </div>
                                            <div>
                                                <img className="w-10 h-10 rounded-full" src={petition.avatar} alt="Rounded avatar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-full h-1 bg-[#d3ccc1] relative overflow-hidden">
                                        <div className="bg-[#6059c9] h-1 rounded-full absolute left-0 top-0" style={{ width: `${petition.progress}%` }}>
                                            <div className="shine" style={{ width: "100%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center py-20">


                        <div className="flex space-x-2">
                            {/* <button
                                className="bg-purple-500 text-white px-3 py-1 rounded-lg mr-2"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button> */}
                            {[...Array(Math.ceil(totalPetitions / petitionsPerPage)).keys()].map((page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded-lg ${currentPage === page + 1 ? 'bg-[#6059c9] text-white' : 'border border-[#6059c9'
                                        }`}
                                    onClick={() => handlePageClick(page + 1)}
                                >
                                    {page + 1}
                                </button>
                            ))}
                            {/* <button
                                className="bg-[#6059c9] text-white px-3 py-1 rounded-lg ml-2"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === Math.ceil(totalPetitions / petitionsPerPage)}
                            >
                                Next
                            </button> */}
                        </div>



                        <p className="text-gray-600">{`${Math.min(indexOfFirstPetition + 1, totalPetitions)} - ${Math.min(
                            indexOfLastPetition,
                            totalPetitions
                        )} of ${totalPetitions} Petitions`}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
