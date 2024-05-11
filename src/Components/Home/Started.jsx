
import { FaMagic, FaTrophy, FaUserTie } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

function Started() {
    // Define an array of objects containing data for each card
    const cardsData = [
        {
            title: "Launch",
            description: "People and organizations can launch a campaign for free.",
            icon: <HiMiniRocketLaunch className="w-6 h-6 md:w-12 md:h-12 text-[#fff]" />,
        },
        {
            title: "Viral",
            description: "Sharing with friends, family and supporters builds momentum.",
            icon: <HiSpeakerphone className="w-6 h-6 md:w-12 md:h-12 text-[#fff]" />,
        },
        {
            title: "Victory",
            description: "Decision maker response your petition to drive solution.",
            icon: <FaTrophy className="w-6 h-6 md:w-12 md:h-12 text-[#fff]" />,
        },
        // Add more objects for additional cards if needed
    ];

    return (
        <div className='max-w-[1100px] mx-auto px-4 md:px-0 mt-32'>
            <h1 className='text-[32px] md:text-[48px] text-[#2b2b39] font-[700] text-center'>Get started in a few minutes</h1>
            <p className='text-[18px] text-center text-gray-400 mt-5'>Campoal supports a variety of the most popular category.</p>
            <div className='grid grid-cols-12 mt-24 gap-6'>
                {cardsData.map((card, index) => (
                    <div key={index} className="col-span-12 md:col-span-4">
                        <div href="#" className="block max-w-sm p-6 pb-12  ">
                            <div className="flex justify-center mt-8">
                                <div className="bg-[#6059c9] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                                    {card.icon}
                                </div>
                            </div>
                            <h5 className="mb-2 text-[32px] font-bold text-center mt-5 tracking-tight text-gray-900">
                                {card.title}
                            </h5>
                            <p className="font-normal  md:text-[18px] mt-4 text-center text-gray-500">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div  className="bg-[#f5efe0] mt-52 rounded-xl px-4 md:max-h-[360px] md:pb-20">
                <div className="grid grid-cols-12 mt-24  md:px-12 mx-auto ">
                    <div className="col-span-12 md:col-span-6 md:mt-12 px-8 md:px-0 ">
                        <h5 className="mb-2 text-[36px] font-bold  mt-10 tracking-tight text-gray-900">
                            Start one today!
                        </h5>
                        <p className="font-normal  max-w-[390px] md:text-[18px] mt-4 md:mt-8  text-gray-500">
                            People everywhere are empowered to start campaigns, mobilize supporters, and work with Decision Makers to drive solutions.
                        </p>

                        <button className='bg-[#6059c9]  mt-5 text-center justify-center text-[#fff] flex items-center space-x-2 text-[18px] font-bold px-4 py-3  w-52 rounded-lg '>
                            <p>
                                All Fundraisers
                            </p>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>

                    <div className="col-span-12 md:col-span-6  mt-8 md:-mt-36">

                        <img className=" w-full md:object-cover md:object-top md:h-[380px]" src="/aaa.svg" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Started;
