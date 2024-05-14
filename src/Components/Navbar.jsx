import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCaretDown, FaEdit, FaGlobe } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoBag } from 'react-icons/io5';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Compaings', to: '/campaigns', current: true },
    { name: 'Fundraising', to: '#', current: false },
    { name: 'Mambership', to: '#', current: false },
    { name: 'Blog', to: '#', current: false },
];

const navigationsm = [
    { name: 'Compaings', to: 'campaigns', current: true },
    { name: 'Fundraising', to: '#', current: false },
    { name: 'Mambership', to: '#', current: false },
    { name: 'Blog', to: '#', current: false },
    { name: 'Shop', to: '#', current: false },
    { name: 'Support Desk', to: '#', current: false },
];


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



const lan = [
    { name: 'English' },


];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenL, setIsOpenL] = useState(false);
    const menuRef = useRef(null);





    const [isOpenC, setIsOpenC] = useState(false);

    const toggleDropdownC = () => {
        setIsOpenC(!isOpenC);
    };





    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdownL = () => {
        setIsOpenL(!isOpenL);
    };

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);


    return (
        <nav className={`fixed w-full bg-white border-b border-gray-200 transition-all duration-300 ${visible ? '  top-0 z-40  md:top-10 ' : '-top-20'}`}>
            <div className="px-4 ">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex space-x-4 md:space-x-0">

                        <div className="-mr-2 flex items-center lg:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <FiX className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>

                        <div className="flex-shrink-0  flex items-center">
                            <img
                                className="hidden  lg:block h-10 w-auto"
                                src="/logolg.svg"
                                alt="Your Company"
                            />
                            <img
                                className="block lg:hidden h-10 w-auto"
                                src="/logosm.svg"
                                alt="Your Company"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:ml-6">
                        <div className="space-x-4 flex items-center">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? ' hover:bg-[#6059c9] hover:bg-opacity-5 rounded-xl' : ' hover:bg-[#6059c9] hover:bg-opacity-5 rounded-xl',
                                        'px-3 py-2 text-sm'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className='relative'>
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="flex items-center space-x-4 px-3 py-2 focus:ring-none focus:outline-none focus:ring-none text-sm    hover:bg-[#6059c9] hover:bg-opacity-5 rounded-xl"
                                    type="button"
                                    onClick={toggleDropdownL}
                                >
                                    <p className="text-sm">Pages</p>
                                    <FaCaretDown className='w-3.5 h-3.5' />
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    ref={menuRef}
                                    className={`absolute top-full left-0 mt-2 rounded-xl z-10 ${isOpenL ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-24 `}
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

                            <div className='relative'>
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="flex items-center space-x-4 px-3 py-2 focus:ring-none focus:outline-none focus:ring-none text-sm    hover:bg-[#6059c9] hover:bg-opacity-5 rounded-xl"
                                    type="button"
                                    onClick={toggleDropdownL}
                                >
                                    <p className="text-sm">More</p>
                                    <FaCaretDown className='w-3.5 h-3.5' />
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    className={`absolute top-full left-0 mt-2 rounded-xl z-10 ${isOpenL ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-24 `}
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

                            <div className='hidden lg:block scampain'>
                                <button className='bg-[#6059c9] text-white text-[15px] flex items-center space-x-4 font-bold px-4 py-2.5 rounded-xl'>
                                    <FaEdit className='w-4 h-4' />
                                    <p>Start the Campaign</p>
                                </button>
                            </div>

                            <div className='flex items-center relative'>
                                <div>
                                    <button className='bg-[#ffc20e]  text-white text-[15px] flex items-center space-x-4 font-bold px-4 py-2.5 rounded-xl rounded-r-none'>
                                        <p>Signup</p>
                                    </button>
                                </div>
                                <div className='bg-white absolute left-[70px] rounded-full p-1.5 text-[#6059c9]'>or</div>
                                <div>
                                    <button className='bg-[#6059c9]  text-white text-[15px] flex items-center space-x-4 font-bold px-4 py-2.5 rounded-xl rounded-l-none'>
                                        <p>Login</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center relative block lg:hidden signb'>
                        <div>
                            <button className='bg-[#ffc20e]  text-white text-[15px] flex items-center space-x-4 font-bold px-4 py-2.5 rounded-xl rounded-r-none'>
                                <p>Signup</p>
                            </button>
                        </div>
                        <div className='bg-white absolute left-[70px] rounded-full p-1.5 text-[#6059c9]'>or</div>
                        <div>
                            <button className='bg-[#6059c9]  text-white text-[15px] flex items-center space-x-4 font-bold px-4 py-2.5 rounded-xl rounded-l-none'>
                                <p>Login</p>
                            </button>
                        </div>
                    </div>
                    <div className='ml-2 block threedots'>
                        <BsThreeDotsVertical className='text-[#000] text-xl' />
                    </div>
                </div>
            </div>
            <div className={`lg:hidden ${isOpen ? "block" : "hidden"} fixed inset-0 z-10 transition-opacity ease-linear duration-300 bg-black bg-opacity-25`}></div>
            <div className={`lg:hidden ${isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"} fixed inset-y-0 left-0 z-20 max-w-xs w-full transition-transform duration-300 bg-white h-screen overflow-y-auto`} ref={menuRef}>

                <div className='mt-5 px-4 '>
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

                    <div>
                        <button className='bg-[#6059c9] text-white mt-5 text-[15px] flex justify-center items-center w-full space-x-4 font-bold px-4 py-2.5 rounded-xl'>
                            <FaEdit className='w-4 h-4' />
                            <p>Start the Campaign</p>
                        </button>
                    </div>

                </div>
                <div className='text-gray-600 flex items-center justify-between  hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4 mt-4 border-b '>
                    <p>0 items</p>
                    <IoBag className='text-[#5f5f75]' />
                </div>
                <div className=" pt-2  space-y-1">
                    {navigationsm.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='text-gray-600 flex items-center justify-between  hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4  border-b'
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className='text-gray-600 flex items-center justify-between  hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4  border-b '>
                    <p>Catagory</p>
                    <IoMdArrowDropright className='text-[#5f5f75]' />
                </div>
                <div className='text-gray-600 flex items-center justify-between  hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4  border-b '>
                    <p>Page</p>
                    <IoMdArrowDropright className='text-[#5f5f75]' />
                </div>
                <div className='text-gray-600 flex items-center justify-between  hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4  border-b '>
                    <p>More</p>
                    <IoMdArrowDropright className='text-[#5f5f75]' />
                </div>


                <div className='relative'>
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-gray-600 w-full   hover:bg-[#6059c9] hover:bg-opacity-5 px-4 py-4  border- focus:ring-none focus:outline-none focus:ring-none"
                        type="button"
                        onClick={toggleDropdownC}
                    >

                        <div className='flex items-center space-x-2'>
                            <FaGlobe className='w-3.5 h-3.5' />

                            <p className="text-[13px] mt-0.5">Global</p>
                        </div>

                    </button>
                    {/* Dropdown menu */}
                    <div
                        id="dropdown"
                        className={`absolute bottom-full left-0 mt-2 rounded-md z-50 ${isOpenC ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-full`}
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






            </div>
        </nav>
    )
}
