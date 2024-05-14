import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

function PromotedPetitions() {
  const questionAnswerData = [
    {
      question: "What are Promoted Petitions?",
      answer:
        "Hates inbox clutter as much as you do. You can easily choose when you get an email from us by visiting Unsubscribe after logging into your account. You can also manage your email settings, or unsubscribe, from the links at the bottom of the latest received email.",
    }, {
      question: "How do I Promote a Petition?",
      answer:
        "By chipping in to promote a petition, a supporter can help a petition be seen by far more people, and get more support. Promotions are available for most petitions on Change.org and anyone can chip in, from the petition starter to signers.",
    },
    {
      question: " How do Promoted Petitions work?",
      answer:
        "You already have the ability to share petitions via social networks and email. Promoted Petitions advertising gives you another way to ensure a petition is seen by people outside your network. Our primary target, Campoal users, also happen to be the largest group of active changemakers on the Internet. Check out our campaigning guide for others ways to support petitions that you care about!",
    },
    {
      question: " How do Promotions help petitions?",
      answer:
        "When someone chips in to promote a petition it helps us share it with wide audiences of action-takers in the Change.org community. Each contribution helps cover the costs of distributing the petition to hundreds, thousands, even millions more people in the Campoal community, many of whom go on to sign the petition. Together, the signatures help the petition gain media attention, influence decision-makers, and propel the petition toward victory.",
    },
    {
      question: " Are promotions like fundraisers?",
      answer:
        "No. Promotions are not a fundraiser for the petition starters. Our Promoted Petitions tool is not a typical online fundraising tool. We know that fundraising for an issue is incredibly important and we’re glad there are tools out there that can help.  Promoting a petition on Campoal fills a different critical need for campaigns to be successful: it specifically helps the petition be seen by far more people than would otherwise see it through standard social media shares.",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const toggleAnswer = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10 md:py-44">
      <h1 className="text-[38px] text-center md:text-[64px] text-[#2b2b39] font-[700]">
        Promoted Petitions
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
  );
}

export default PromotedPetitions;
