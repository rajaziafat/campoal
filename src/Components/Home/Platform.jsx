
import { TfiHummer } from "react-icons/tfi";

function Platform() {
    // Define an array of objects containing data for each card
    const cardsData = [
        {
            title: "Influence decision makers",
            description: "We help people reach the business and government leaders whose decisions impact their lives power deserve.",
            icon: <TfiHummer className="w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />,
        },
        {
            title: "Expert campaign advice",
            description: "Our staff provide advice for mobilizing support, generating media interest and lobbying elected officials.",
            icon: <TfiHummer className="w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />,
        },
        {
            title: "Better activism technology",
            description: "We have big ideas for the future, but we need your financial support to fuel new technological development.",
            icon: <TfiHummer className="w-6 h-6 md:w-12 md:h-12 text-[#6059c9]" />,
        },
        // Add more objects for additional cards if needed
    ];

    return (
        <div className='max-w-[1100px] mx-auto px-4 md:px-0 mt-32'>
            <h1 className='text-[32px] md:text-[48px] text-[#2b2b39] font-[700] text-center'>The most trusted petition platform</h1>
            <p className='text-[18px] text-center text-gray-400 mt-5'>Here are a few reasons why you should choose Campoal</p>
            <div className='grid grid-cols-12 mt-24 gap-6'>
                {cardsData.map((card, index) => (
                    <div key={index} className="col-span-12 md:col-span-4">
                        <a href="#" className="block w-full min-h-[430px] p-6 pb-12 bg-[#f5efe0] border border-gray-200 rounded-lg shadow ">
                            <div className="flex justify-center mt-8">
                                <div className="bg-[#fff] w-[60px] h-[60px] md:w-24 md:h-24 items-center flex justify-center text-white rounded-full px-2 py-2">
                                    {card.icon}
                                </div>
                            </div>
                            <h5 className="mb-2 text-[32px] font-bold text-center mt-5 tracking-tight text-gray-900">
                                {card.title}
                            </h5>
                            <p className="font-normal text-[18px] mt-10 text-center text-gray-700">
                                {card.description}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Platform;
