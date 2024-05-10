
import { BsSend } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

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

function Matters() {
    return (
        <div className='max-w-[1100px] mx-auto px-4 md:px-0 mt-32'>
            <h1 className='text-[32px] md:text-[48px] text-[#2b2b39] font-[700] text-center'>Your voice matters</h1>
            <p className='text-[18px]  text-center text-gray-400 mt-5'>These petitions need your help to achieve victory.</p>
            <div className='grid grid-cols-12 mt-24 gap-6'>
                {petitionsData.map(petition => (
                    <div key={petition.id} className='col-span-12 md:col-span-12 lg:col-span-4'>
                        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src={petition.image} alt="" />
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

            <div className='flex justify-center mt-12'>
                <button className='bg-[#f5efe0] text-center justify-center text-[#5f5f75] flex items-center space-x-2 text-[18px] font-bold px-4 py-4  w-52 rounded-lg '>
                    <p>
                        See all petitions
                    </p>
                    <MdKeyboardArrowRight />

                </button>
            </div>
        </div>
    );
}

export default Matters;
