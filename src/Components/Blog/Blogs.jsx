import { useState } from "react";
import { FaAngleRight, FaClock, FaEye, FaHome, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Blogs() {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10; // Display 10 cards per page

    // Sample card data array
    const cardData = [
        { id: 1, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 2, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 3, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 4, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 5, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 6, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 7, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 8, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 9, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 10, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 11, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 12, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 13, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        { id: 14, category: "Story", date: "September 18, 2018", title: "Is ’13 Reasons Why’ Causing More Harm Than Good?", minRead: "3 min read", authorAvatar: "/221.jpg", image: "/155.jpeg", views: "1.4k", content: "When my father Victor died by suicide seven years ago, it completely ... more" },
        // Add more card objects here as needed
    ];

    // Logic to get cards for the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    // Function to handle hover
    const handleHover = (cardId) => {
        setHoveredCardId(cardId);
    };

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className='max-w-[1200px] mx-auto px-4  py-12 mt-24 md:mt-0'>
                <div className="grid grid-cols-12 gap-6 ">
                    <div className="col-span-12 md:col-span-8">
                        <div className='flex space-x-2 items-center text-gray-500'>
                            <FaHome />
                            <FaAngleRight />
                            <p className='text-sm mt-0.5'>Blogs</p>
                        </div>
                        {currentCards.map((card, index) => (
                            <div key={index} className="w-full mt-10 lg:flex">
                                <div className="relative rounded-t-lg md:rounded-r-none md:rounded-l-lg w-full md:w-auto h-56 md:h-full overflow-hidden" onMouseEnter={() => handleHover(card.id)} onMouseLeave={() => handleHover(null)}>
                                    {hoveredCardId === card.id && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <div>
                                                <FaArrowUpRightFromSquare className='text-white mt-28 ml-16  w-8 h-8' />
                                                <div className='flex  ml-24 mt-24 items-center justify-end text-white space-x-1 '>
                                                    <FaEye />
                                                    <p>{card.views}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <img className="w-full h-full object-cover transition-opacity duration-300" src={card.image} alt="" />
                                </div>
                                <div className=" rounded-lg  bg-white   p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-sm text-gray-600 flex space-x-2 items-center">
                                            <button className="text-white bg-[#6059c9] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                <p className="text-[12px] font-bold  mt-0.5">{card.category}</p>
                                            </button>
                                            <p className="text-xs">{card.date}</p>
                                        </div>
                                        <div className="text-gray-900 font-bold mt-4  text-[24px] mb-2">
                                            {card.title}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            {card.content}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="text-gray-500 bg-[#fcf9f4] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                            <FaClock className="w-3 h-3" />
                                            <p className="text-[12px] font-bold  mt-0.5">{card.minRead}</p>
                                        </button>
                                        <img className="w-8 h-8 rounded-full mr-4" src={card.authorAvatar} alt="Avatar of Author" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center mt-8">
                            {Array.from({ length: Math.ceil(cardData.length / cardsPerPage) }, (_, i) => (
                                <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={`mx-2 px-2.5 py-2 rounded-lg ${i + 1 === currentPage ? 'bg-[#6059c9] text-white' : 'bg-gray-200 text-gray-800'}`}>{i + 1}</button>
                            ))}
                        </div>
                    </div>


                    <div className="col-span-12 md:col-span-4 hidden md:block mt-16">
                        <div className=" md:flex w-full items-center md:space-x-4">
                            <div className="w-full">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                >
                                    <p>Search</p>

                                </label>
                                <input
                                    type="search"
                                    id="search"
                                    className="block w-full px-2 py-3    text-sm text-gray-900 max-w-[520px] border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-600"
                                    placeholder="search"
                                    required
                                />
                            </div>



                            <button className='bg-[#6059c9]  text-white md:w-24 w-full  mt-5 text-[17px] text-center    font-bold px-4 py-3 rounded-xl'>


                                Search
                            </button>
                        </div>
                        <div>
                            <div className="border-b mt-8 mb-2">
                                <p className="text-[22px] font-bold">Recently Campaigns</p>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="mt-10">
                            <div className="border-b mt-8 mb-2">
                                <p className="text-[22px] font-bold">Recently Campaigns</p>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center space-x-3 text-gray-700">
                                <img className="rounded-xl w-24" src="/1433.jpg" alt="" />
                                <div className="py-2 px-2" >
                                    <p className="text-[20px] font-medium">Spirit flight crews & employees for medical freedom and civil liberties</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <FaUser />
                                        <p>401 supporters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Blogs;