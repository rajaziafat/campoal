
import Slider from 'react-slick';
import {  FaChevronRight, FaEye } from 'react-icons/fa';

import { FaArrowUpRightFromSquare, FaChevronLeft } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { IoIosChatbubbles } from 'react-icons/io';



const CustomNextArrow = ({ className, style, onClick }) => (
    <FaChevronRight className={`${className} text-gray-400 w-8 h-8 -mr-4`} onClick={onClick} />
);

const CustomPrevArrow = ({ className, style, onClick }) => (
    <FaChevronLeft className={`${className} text-gray-400 w-8 h-8 -ml-4 `} onClick={onClick} />
);

const CustomDot = ({ onClick, active }) => (
    <div
        className={`custom-dot ${active ? 'bg-black' : 'bg-gray-400'} rounded-full w-2 h-2 mx-2 mt-12 cursor-pointer`}
        onClick={onClick}
    />
);





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
    // Add more petition objects here if needed
];

function News() {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots custom-dots mt-8',
        customPaging: i => (
            <CustomDot key={i} />
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
          
        ]
    };

    return (
        <div className=' py-32 mt-24'>
            <div className='max-w-[1100px] mx-auto px-4 md:px-0  '>
                <h1 className='text-[32px] text-center md:text-[48px] text-[#2b2b39] font-[700] '>Latest News</h1>
                <p className='text-[18px]  text-center  text-gray-400 mt-5'>Our duty towards you is to share our experience we’re reaching in our work path with you</p>
                <div>
                    <Slider {...settings}>
                        {petitionsData.map(petition => (
                            <div key={petition.id} className='col-span-12 px-2 mt-24 md:col-span-12 lg:col-span-4'>
                                <div className=" bg-white border border-gray-200 rounded-lg shadow hover:transform hover:-translate-y-1 hover:transition-transform">
                                    <a href="#" className="relative block group">
                                        <img className="rounded-t-lg w-full" src={petition.image} alt="" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                                        <div className="absolute inset-0 flex flex-col w-full justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className=" text-white w-full ">
                                                <div className='flex items-center w-full justify-center mt-28'>
                                                    <FaArrowUpRightFromSquare className='w-8 h-8' />



                                                </div>
                                                <div className=' flex w-full justify-end space-x-2 px-2 mt-20 items-center'>
                                                    <div className='flex items-center  space-x-1 '>
                                                        <IoIosChatbubbles />
                                                        <p>
                                                            7
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
                                            <h2 className="text-[12px] px-2 py-1 rounded-md bg-[#ebe6df] text-gray-500"> story</h2>
                                        </div>
                                        <a href="#">
                                            <h5 className="mb-2 mt-5 text-[20px] font-bold text-gray-900">
                                                {petition.title}
                                            </h5>
                                        </a>
                                        <p className=" font-normal mt-5 text-[16px] text-gray-700">
                                            {petition.description}
                                        </p>


                                        <div className='border-t  mt-12'>




                                            <div className='flex justify-between items-center mt-4 '>
                                                <div className='flex items-center space-x-4'>
                                                    <button className="text-gray-700 px-2 py-1.5 rounded-lg flex items-center space-x-2">
                                                        <SlCalender className="w-4 h-4" />
                                                        <p className="text-[16px]  mt-0.5">Spetember 18 , 2018</p>
                                                    </button>

                                                </div>
                                                <div>
                                                    <p className="text-[16px] text-gray-700  mt-0.5">John Kendey</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
}

export default News;
