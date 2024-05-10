import { BsSend } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaTag, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const CustomNextArrow = ({ className, style, onClick }) => (
    <FaChevronRight className={`${className} text-gray-400 w-8 h-8 -mr-4`} onClick={onClick} />
);

const CustomPrevArrow = ({ className, style, onClick }) => (
    <FaChevronLeft className={`${className} text-gray-400 w-8 h-8 -ml-4 `} onClick={onClick} />
);


function LowerSlider({ lowerSliderImages, setSelectedImageIndex, selectedImageIndex }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        className: "center",
        centerMode: true,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {lowerSliderImages.map((image, index) => (
                <div key={index} onClick={() => setSelectedImageIndex(index)}>
                    <img
                        src={image}
                        alt=""
                        className={`cursor-pointer w-[143px] ${index === selectedImageIndex ? 'border-4 border-blue-500' : ''}`}
                    />
                </div>
            ))}
        </Slider>
    );
}
function Hero() {


    const [selectedImageIndex, setSelectedImageIndex] = useState(0);


    const slidesData = [
        {
            image: "/21.jpg",
            title: "Petition to Katy Dickson",
            description: "Help American Girl understand why limb difference dolls are so important",
            location: "Division No. 6, AB, CA",
            supporters: "18,393 supporters",
            category: "Children Rights",
            comments: "37 comments"
        },
        {
            image: "/1111.jpg",
            title: "Petition to Katy Dickson",
            description: "Help American Girl understand why limb difference dolls are so important",
            location: "Division No. 6, AB, CA",
            supporters: "18,393 supporters",
            category: "Children Rights",
            comments: "37 comments"
        },
        // Add more slide data as needed
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };


    const lowerSliderImages = [
        "/21.jpg",
        "/81.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
        "/21.jpg",
    ];


    return (
        <div className='mt-44'>
            <div className='max-w-[960px] mx-auto'>
                <h1 className='text-[64px] text-[#2b2b39] font-[700] text-center'>Make an impact to the world.</h1>
                <p className='text-[24px] text-center mt-5'>We’re offer complete solution to launch your social movements.</p>

                <div className='flex justify-center mt-16'>
                    <div className='flex justify-normal space-x-6'>
                        <button className='py-4 px-4 w-44 text-white bg-[#6059c9] text-[18px] font-bold rounded-full'>
                            Get Started
                        </button>

                        <button className='py-4 px-4 w-44 text-[#6059c9] bg-[#6059c9] bg-opacity-10 text-[18px] font-bold rounded-full'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            <div className='herobg pb-44'>
                <div className='max-w-[980px] mx-auto'>
                    <img src="/women.svg" alt="" />
                </div>
            </div>
            <div className="bg-white rounded-lg max-w-[1100px] mx-auto -mt-44">

                <Slider {...settings} >
                    {slidesData.map((slide, index) => (
                        <div key={index} className=''>
                            <div className='grid grid-cols-12 '>
                                <div className='col-span-6'>
                                <img className='rounded-lg rounded-r-none' src={slide.image} alt="" />
                                </div>

                                <div className='col-span-6 px-4 py-4 '>
                                    <div className="flex space-x-2 items-center">
                                        <BsSend className="w-5 h-5 text-gray-500" />
                                        <h2 className="text-[19px] text-gray-500">{slide.title}</h2>
                                    </div>
                                    <h2 className="text-[24px] text-black mt-5 font-bold">{slide.description}</h2>
                                    <p className="text-[16px] text-gray-500 mt-5">{slide.description}</p>
                                    <div className="bxshadow bg-white mt-2">
                                        <div className="flex items-center space-x-2 ">
                                            <MdLocationOn className="w-6 h-6 text-gray-500" />
                                            <p className="text-[16px] font-[400] text-gray-500">{slide.location}</p>
                                        </div>
                                        <div className="w-full mt-5 rounded-full h-2 bg-[#d3ccc1] relative overflow-hidden">
                                            <div className="bg-[#6059c9] h-2 rounded-full absolute left-0 top-0" style={{ width: "45%" }}>
                                                <div className="shine" style={{ width: "100%" }}></div>
                                            </div>
                                        </div>
                                        <div className="mt-5 ">
                                            <div className="flex space-x-4 items-center">
                                                <button className="text-white bg-[#6059c9] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                    <FaUser className="w-3 h-3" />
                                                    <p className="text-[12px] font-bold  mt-0.5">{slide.supporters}</p>
                                                </button>
                                                <button className="text-gray-500 bg-[#ece7e0] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                    <FaTag className="w-3 h-3" />
                                                    <p className="text-[12px] font-bold  mt-0.5">{slide.category}</p>
                                                </button>
                                                <button className="text-gray-500 bg-[#ece7e0] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                    <IoIosChatbubbles className="w-3 h-3" />
                                                    <p className="text-[12px] font-bold  mt-0.5">{slide.comments}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="max-w-[1100px] mx-auto mt-4">
                <LowerSlider
                    lowerSliderImages={lowerSliderImages}
                    setSelectedImageIndex={setSelectedImageIndex}
                    selectedImageIndex={selectedImageIndex}
                />
            </div>


        </div>
    );
}

export default Hero;
