import { useState } from 'react';
import { FaGlobe } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoBag } from "react-icons/io5";



function Bar() {

    const countries = [
        { name: 'Australia', flag: '/aus.png' },
        { name: 'Belgium', flag: '/bel.png' },
        { name: 'Brazil', flag: '/brazil.png' },
        { name: 'Canada', flag: '/canada.png' },
        { name: 'France', flag: '/france.png' },
        { name: 'Germany', flag: '/germany.png' },
        { name: 'India', flag: '/india.png' },
        { name: 'Indonesia', flag: '/indonesia.png' },
        { name: 'Italy', flag: '/italy.png' },
        { name: 'Japan', flag: '/japan.png' },
        { name: 'Neatherland', flag: '/neatherland.png' },
        { name: 'South Korea', flag: '/soutnk.png' },
        { name: 'United States', flag: '/usa.png' }

    ];

    const menuItems = [
        {
            text: "Search",
            icon: (
                <svg
                    className="w-3.5 h-3.5"
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
            ),
            link: "#",
        },
        {
            text: "Shop",
            link: "#",
        },
        {
            text: "Help",
            link: "#",
        },
        {
            text: "FAQs",
            link: "#",
        },
        {
            text: "Contact",
            link: "#",
        },
        {
            text: "Support ",
            link: "#",
        },

        {
            text: "0 items",
            icon: <IoBag className='text-[#5f5f75]' />
            ,
            link: "#",
        },
    ];


    const lan = [
        { name: 'English' },


    ];



    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const [isOpenL, setIsOpenL] = useState(false);

    const toggleDropdownL = () => {
        setIsOpenL(!isOpenL);
    };

    return (
        <div className="bg-white z-50  sticky top-0 px-4 py-2.5 hidden lg:block">
            <div className="">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-8'>

                        <div className='relative'>
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="flex items-center space-x-2 text-[#5f5f75] focus:ring-none focus:outline-none focus:ring-none"
                                type="button"
                                onClick={toggleDropdown}
                            >

                                <FaGlobe className='w-3.5 h-3.5' />

                                <p className="text-[13px] mt-0.5">Global</p>

                            </button>
                            {/* Dropdown menu */}
                            <div
                                id="dropdown"
                                className={`absolute top-full left-0 mt-2 rounded-md z-10 ${isOpen ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-60`}
                            >



                                <div className='mt-5 px-4 border-b pb-4'>
                                    <div className="relative w-full  ">
                                        <input
                                            type="search"
                                            id="search-dropdown"
                                            className="block px-2 py-2 w-full z-20 text-[13px] text-gray-900 bg-gray-50 rounded-xl border-2 border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                            placeholder="Search country..."
                                            required=""
                                        />
                                        <button
                                            type="submit"
                                            className="absolute top-0 right-0 p-2.5 text-sm text-[#5f5f75]  focus:ring-none focus:outline-none focus:ring-none"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5"
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
                                <div className='mt-2 flex  px-4 border-none'>
                                    <div className='flex items-end space-x-2 border-none'>
                                        <MdLocationPin />
                                        <p className="text-[10px] text-[#7b7b83] mt-0.5 font-bold uppercase">Countries</p>
                                    </div>
                                </div>


                                <ul
                                    className="py-2 text-sm max-h-[265px] overflow-y-scroll text-[#5f5f75]  mt-2 rounded-lg "
                                    aria-labelledby="dropdownDefaultButton"
                                >

                                    <a
                                        href="#"
                                        className=" px-4 py-1 hover:bg-[#6059c9] hover:bg-opacity-5 flex items-center space-x-2  "
                                    >
                                        <FaGlobe className='w-3.5 h-3.5' />

                                        <p className="text-[13px] mt-0.5 font-bold">Global</p>

                                    </a>



                                    {countries.map((country, index) => (
                                        <li key={index}>
                                            <a href="#" className="px-4 py-1 hover:bg-[#6059c9] hover:bg-opacity-5 flex items-center space-x-2">
                                                <img className="w-4 h-3" src={country.flag} alt="" />
                                                <p className="text-[13px] mt-0.5">{country.name}</p>
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className='relative'>
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="flex items-center space-x-8 text-[#5f5f75] focus:ring-none focus:outline-none focus:ring-none"
                                type="button"
                                onClick={toggleDropdownL}
                            >


                                <p className="text-[13px] mt-0.5">English</p>

                                <FaCaretDown className='w-3.5 h-3.5' />


                            </button>
                            {/* Dropdown menu */}
                            <div
                                id="dropdown"
                                className={`absolute top-full left-0 mt-2 rounded-md z-10 ${isOpenL ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-24 `}
                            >






                                <ul
                                    className=" text-sm max-h-[265px] overflow-y-auto text-[#5f5f75]  py-2 rounded-lg "
                                    aria-labelledby="dropdownDefaultButton"
                                >





                                    {lan.map((lan, index) => (
                                        <li key={index}>
                                            <a href="#" className="px-4 py-1 hover:bg-[#6059c9] hover:bg-opacity-5 flex items-center space-x-2">

                                                <p className="text-[13px] mt-0.5">{lan.name}</p>
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>



                    <div>
                        <ul className='flex items-center space-x-2'>
                            {menuItems.map((menuItem, index) => (
                                <li key={index}>
                                    <a href={menuItem.link} className="px-4 py-1 hover:bg-[#6059c9] hover:bg-opacity-5 flex items-center space-x-2">
                                        {menuItem.icon && menuItem.icon}
                                        <p className="text-[13px] mt-0.5">{menuItem.text}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar;
