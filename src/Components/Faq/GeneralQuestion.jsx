import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

function GeneralQuestion() {
  const questionAnswerData = [
    {
      question: "Unsubscribe or Update email Notification Settings",
      answer:
        "Hates inbox clutter as much as you do. You can easily choose when you get an email from us by visiting Unsubscribe after logging into your account. You can also manage your email settings, or unsubscribe, from the links at the bottom of the latest received email.",
    }, {
      question: "Promoted Petitions FAQs",
      answer:
        "A petition is eligible for promotion once it reaches a minimum of signatures, depending on the location and other factors. If you started the petition you will be notified via email that your petition is promotable. At that point, anyone, including you, can choose to promote it. Here’s how it works Click on the “Promote this Petition” button on the petition page Select the amount of money you would like to chip in Enter your online payment informationYou will receive confirmation once your payment has been processed",
    },
    {
      question: " How to Report Content",
      answer:
        "To report a petition, you must first be logged into your account. Once you have logged in, follow the steps mentioned below:   Scroll to the bottom of the petition page and click on “Report a policy violation” button located below the comments section.  This button opens a menu where you will select a category for your report. Before you can make a submission, you must include a reason for your report. The more specific you can be with your reason for reporting content, the more equipped the Help Center team will be when assessing your claim.",
    },
    {
      question: " I forgot my password. What do I do?",
      answer:
        "Forgot your password? No worries! It happens to the best of us. Simply follow the instructions below and we’ll have you logged back in promptly. 1. Click Login from the top right corner of Change.org.  2. Click on “Forgot your password?” 3. Type in your email address, click the ‘Reset Password’ button and you should receive further instructions via email shortly. Check your spam folder if you don’t see it in your inbox. Please note: If you experience difficulties following this process, please contact us using the “Contact Support” link, at the top of this page.",
    },
    {
      question: " Remove signature from petition",
      answer:
        "When a petition is signed, our system automatically emails a confirmation to the email address associated with that account. This email will generally have a subject line that begins “You have a message about…”. At the bottom of the email, you will see the option “Didn’t sign this petition? Remove your signature”.  To remove your signature, click on the Remove your signature link.",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const toggleAnswer = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10 md:py-44">
      <h1 className="text-[44px] text-center md:text-[64px] text-[#2b2b39] font-[700]">
        General question
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
              timeout={600}
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
  );
}

export default GeneralQuestion;
