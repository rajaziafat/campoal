import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CSSTransition } from "react-transition-group";


function Membership() {

    const questionAnswerData = [
        {
            question: " What do donations support?",
            answer:
                "When you donate to the Campoal Charitable Foundation (“the Campoal Foundation”), you are making an unrestricted donation to support the Campoal Foundation’s mission, including to provide tools and support for citizen-led campaigning. To learn more about the Campoal Foundation  Campoal Foundation does not keep the funds donated at a country level. These funds are reinvested back in the local country office to support its mission to support citizen-led campaigning.",
        }, {
            question: "What is Foundation’s membership program?",
            answer:
                "Campoal is working towards being powered by members who support keeping our platform free and accessible to all, through our membership program. We ask our most active and committed users to donate a small amount monthly to help improve and maintain our free site for people everywhere to create change. Donations are received by the Campoal Charitable Foundation, a US charity that supports citizen-led social movements in countries all over the world. Donations may have tax advantages – please check with your tax advisor.",
        },
        {
            question: " Why do you need donations?",
            answer:
                "As a public charity, we are required to reinvest all of our revenue back into activities that advance our mission. All of the revenue we make is reinvested into the platform to help empower people to win their campaigns, every day. The Campoal Foundation offers free grassroots training and support to users of the Campoal platform primarily in Latin America, Asia, and the Middle East, through locally registered not for profit chapters. The Foundation is funded through a combination of small donations and philanthropic funds.",
        },
        {
            question: "  Can I change my donation amount?",
            answer:
                "Of course! You can change your membership donation at any time by visiting or by logging into your Change.org account and then navigating to Settings > Manage Donations.",
        },
        {
            question: "Can I cancel my membership?",
            answer:
                "Yes, you can cancel your membership at any time by visiting or by logging into your Change.org account and then navigating to Settings > Manage Donations and selecting “Stop Donations”.",
        },
    ];

    const [expandedQuestion, setExpandedQuestion] = useState(0);

    const toggleAnswer = (index) => {
        setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='bg-[#f5efe0] py-12 md:py-32 '>
            <div className='max-w-[1400px] mx-auto px-4  '>
                <div className="grid grid-cols-12  gap-4">



                    <div className="col-span-12 md:col-span-6 max-w-[590px]  mx-auto">
                        <h1 className="text-[40px]  md:text-[60px] text-[#2b2b39] font-[700]">

                            Membership
                        </h1>

                        <div className="mt-8 md:mt-24 ">
                            {questionAnswerData.map((qa, index) => (
                                <div key={index}>
                                    <div
                                        className="flex mt-10 items-center space-x-2 cursor-pointer"
                                        onClick={() => toggleAnswer(index)}
                                    >
                                        <div>
                                            {expandedQuestion === index ? (
                                                <IoIosArrowUp className="w-6 h-6" />
                                            ) : (
                                                <IoIosArrowDown className="w-6 h-6" />
                                            )}
                                        </div>
                                        <h3 className="text-[20px] md:text-[24px] font-bold">{qa.question}</h3>
                                    </div>

                                    <CSSTransition
                                        in={expandedQuestion === index}
                                        timeout={300}
                                        classNames="slide"
                                        unmountOnExit
                                    >
                                        <div className="text-[18px] text-gray-500 px-6 max-w-[490px]  mt-8 leading-6">
                                            {qa.answer}
                                        </div>
                                    </CSSTransition>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-span-12 md:col-span-6">
                        <img src="/1332.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership
