import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CSSTransition } from "react-transition-group";


function MyAccount() {

    const questionAnswerData = [
        {
            question: " How do I reactivate my account?",
            answer:
                "If you’ve deactivated your account and would like to reopen it, simply access the website and sign another petition using the email address associated with your account. If you’ve received a message that you need to contact us when attempting to log in or you’re having any other problems with reopening your account, please click on the “Contact Support” option at the top of this page and send a request for further assistance.",
        }, {
            question: "How to edit your petition",
            answer:
                "In this article, we’ll discuss how to locate and make edits to your petition. To locate any petitions you created, follow the guide below:  Login to your account Click on your name or display picture, located at the top-right side of the page Select “My Petition” from the drop-down menu  If you created the petition under a personal profile, click on “Started” at the left side of the screen to locate your petition If you created your petition under an organization profile, click on the appropriate icon under “Organizations” to locate your petition",
        },
        {
            question: " How to edit account and profile information",
            answer:
                "To access these options, please follow the steps below: Log into your account  Click on your profile image, located at the upper- right side corner of the page There you will see the “Edit profile” where you will be able to edit your information",
        },
        {
            question: " I forgot my password. What do I do?",
            answer:
                "Forgot your password? No worries! It happens to the best of us. Simply follow the instructions below and we’ll have you logged back in promptly. 1. Click Login from the top right corner.2. Click on “Forgot your password?”3. Type in your email address, click the ‘Reset Password’ button and you should receive further instructions via email shortly. Check your spam folder if you don’t see it in your inbox.  Please note: If you experience difficulties following this process, please contact us using the “Contact Support” link, at the top of this page.",
        },
        {
            question: " How do I close my account?",
            answer:
                "While we will miss your presence, we make closing your account easy.Here are the steps to follow:Log in to your accountClick on your name or profile picture at the top-right corner of the screenSelect the “Edit Profile” option from the drop-down menuClick on “Delete Account”Confirm that you would like to close your account.",
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
                    <div className="col-span-12 md:col-span-6">
                        <img src="/178.svg" alt="" />
                    </div>


                    <div className="col-span-12 md:col-span-6">
                        <h1 className="text-[40px]  md:text-[60px] text-[#2b2b39] font-[700]">

                            My account
                        </h1>

                        <div className="mt-8 md:mt-24 max-w-[750px] mx-auto">
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
                                        <div className="text-[18px] text-gray-500 px-6 mt-8 leading-6">
                                            {qa.answer}
                                        </div>
                                    </CSSTransition>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
