import { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaClock } from 'react-icons/fa';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: '/bg1.jpg',
        },
        {
            image: '/bg2.jpg',
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="relative w-full hidden md:block">
            <div className="relative h-[650px] overflow-hidden">
                <div className="absolute inset-0 flex flex-col transition-transform duration-500" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <img
                                src={slide.image}
                                className="absolute object-cover h-full w-full top-0 left-0"
                                alt={`Slide ${index + 1}`}
                            />
                            <div className="absolute top-1/2 right-80 transform -translate-y-1/2 p-4 bg-white px-12 py-12 rounded-xl max-w-[680px]">
                                <div className='flex space-x-2'>
                                    <button className="text-white bg-[#6059c9] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                        <p className="text-[12px] font-bold mt-0.5">Story</p>
                                    </button>
                                    <button className="text-black bg-[#fff] border px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                        <p className="text-[12px] font-bold mt-0.5">136 views</p>
                                    </button>
                                    <button className="text-black bg-[#fff] border px-2 py-1.5 rounded-lg flex items-center space-x-2">
                                        <FaClock className='w-3 h-3' />
                                        <p className="text-[12px] font-bold mt-0.5">2 min reads</p>
                                    </button>
                                </div>
                                <h3 className='text-[28px] text-[#2b2b39] pt-6 font-[700] text-start'>
                                    Want your governor to take action <br /> on climate? This toolkit is for you.
                                </h3>
                                <p className='mt-4 text-gray-600 leading-6'>
                                    A Vancouver woman s impassioned blog post about an elderly elephant living in a Japanese zoo has inspired an online petition that has garnered more than 380,000 signature urging better care for ...
                                </p>
                                <p className='mt-6 text-gray-600 text-sm leading-6'>
                                    Written by John Kennedy — June 25, 2017 — 2 comments
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-72 right-10 z-30 flex flex-col items-center space-y-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`relative text-gray-500 text-lg font-bold ${currentSlide === index ? 'text-black' : ''}`}
                        >
                            0{index + 1}
                            {currentSlide === index && (
                                <span className="absolute left-full top-1/2 transform -translate-y-1/2 h-0.5 w-12 bg-[#6059c9]"></span>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute bottom-16 right-10 z-30 flex items-center justify-center h-10 w-10 rounded-full cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <FaAngleUp className="w-8 h-8 text-gray-500" />
                </button>
                <button
                    type="button"
                    className="absolute bottom-4 right-10 z-30 flex items-center justify-center h-10 w-10 rounded-full cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <FaAngleDown className="w-8 h-8 text-gray-500" />
                </button>
            </div>
        </div>
    );
}

export default Hero;
