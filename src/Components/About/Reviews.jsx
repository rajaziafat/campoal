import { FaRegStar, FaStar } from "react-icons/fa"
import Slider from "react-slick";


const reviewsData = [
    {
        text: "Overall, a very good platform for anyone trying to make a change. I have seen it be successful both as a signatory and a petition creator and features like automated emails notifying the recipient when a petition reaches milestones make the site very easy to use. It is a bit pushy about asking you to find things but it’s easy to click away from and doesn’t block the core functionality.",
        reviewer: "Tanya Blanchard",
        location: "United States",
        rating: 4, // Total rating out of 5
    },
    {
        text: "Overall, a very good platform for anyone trying to make a change. I have seen it be successful both as a signatory and a petition creator and features like automated emails notifying the recipient when a petition reaches milestones make the site very easy to use. It is a bit pushy about asking you to find things but it’s easy to click away from and doesn’t block the core functionality.",
        reviewer: "Tanya Blanchard",
        location: "United States",
        rating: 3, // Total rating out of 5
    },
    // Add more review objects as needed
];

function Reviews() {





    // React Slick settings
    const settings = {
        dots: false,
        arrow:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Display one card per slide
        slidesToScroll: 1,
    };




    return (
        <div className="max-w-[1100px] px-4 mx-auto items-center py-12 md:py-44">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <img className="max-w-[460px]" src="/654.svg" alt="" />
                </div>

                <div className="col-span-12 md:col-span-6 ">

                    <Slider {...settings}>
                        {reviewsData.map((review, index) => (
                            <div key={index} className="">
                                <div className="bg-[#f5efe0] rounded-xl px-4 py-8 flex justify-center items-center ">
                                    <div className="">
                                        <p className="font-normal px-4 text-[16px] md:text-[18px] max-w-[480px] tracking-wide leading-7 md:mt-5 text-gray-500">
                                            {review.text}
                                        </p>
                                        <div className="mt-10 flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    className="rounded-full"
                                                    src="/221.jpg"
                                                    alt="Reviewer"
                                                />
                                                <div>
                                                    <h2 className="text-[22px] font-bold">
                                                        {review.reviewer}
                                                    </h2>
                                                    <p className="mt-2 text-[18px] ">{review.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-1 px-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} className="text-[#f6a428]" />
                                                ))}
                                                {[...Array(5 - review.rating)].map((_, i) => (
                                                    <FaRegStar key={i} className="text-[#f6a428]" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Reviews
