import Slider from 'react-slick';
import { FaChevronRight, FaEye, FaUser } from 'react-icons/fa';
import { MdLocationOn, MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowUpRightFromSquare, FaChevronLeft } from 'react-icons/fa6';

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

function Fundraisers() {
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
        <div className='bg-[#f5efe0] py-32 mt-32'>
            <div className='max-w-[1100px] mx-auto px-4  '>
                <h1 className='text-[32px] md:text-[48px] text-[#2b2b39] font-[700] '>Fundraisers</h1>
                <p className='text-[18px]   text-gray-400 mt-5'>These petitions need your help to achieve victory.</p>
                <div>
                    <Slider {...settings}>
                        {petitionsData.map(petition => (
                            <div key={petition.id} className='col-span-12 px-2 mt-24 md:col-span-12 lg:col-span-4'>
                                <div className=" bg-white border border-gray-200 rounded-lg shadow hover:transform hover:-translate-y-1 hover:transition-transform">
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


                                        <div className='border-t pt-7 mt-24'>

                                            <p className='text-[14px] font-bold'>$0 of $10,1000.00 raised</p>
                                            <div className="w-full rounded-full mt-2 h-1.5 bg-[#d3ccc1] relative overflow-hidden">
                                                <div className="bg-[#6059c9] h-1.5 rounded-full absolute left-0 top-0" style={{ width: `${petition.progress}%` }}>
                                                    <div className="shine" style={{ width: "100%" }}></div>
                                                </div>
                                            </div>


                                            <div className='flex justify-between items-center mt-4 '>
                                                <div className='flex items-center space-x-4'>
                                                    <button className="text-white bg-[#6059c9] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                        <FaUser className="w-3 h-3" />
                                                        <p className="text-[12px] font-bold  mt-0.5">{petition.supporters} Backer</p>
                                                    </button>
                                                    <button className="text-gray-500 bg-[#ece7e0] px-2 py-1.5 rounded-lg flex items-center space-x-1">
                                                        <FaEye className="w-3 h-3" />
                                                        <p className="text-[12px] font-bold  mt-0.5">{petition.comments}</p>
                                                    </button>
                                                </div>
                                                <div>
                                                    <img className="w-10 h-10 rounded-full" src={petition.avatar} alt="Rounded avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex justify-center mt-24'>
                    <button className='bg-[#6059c9] bg-opacity-20 text-center justify-center text-[#6059c9] flex items-center space-x-2 text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                        <p>
                            All Fundraisers
                        </p>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Fundraisers;
