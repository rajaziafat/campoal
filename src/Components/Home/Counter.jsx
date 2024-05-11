import React, { useEffect, useRef, useState } from 'react';

function Counter() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [projectsCount, setProjectsCount] = useState(0);
    const [articlesCount, setArticlesCount] = useState(0);
    const [meetingsCount, setMeetingsCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(contactRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const projectsInterval = setInterval(() => {
                setProjectsCount((prevCount) => {
                    if (prevCount < 50000) {
                        return prevCount + 500; // Increase by 10 for faster counting
                    } else {
                        clearInterval(projectsInterval);
                        return prevCount;
                    }
                });
            }, 10); // Decreased interval to 10ms

            const articlesInterval = setInterval(() => {
                setArticlesCount((prevCount) => {
                    if (prevCount < 20000) {
                        return prevCount + 200; // Increase by 5 for faster counting
                    } else {
                        clearInterval(articlesInterval);
                        return prevCount;
                    }
                });
            }, 5); // Decreased interval to 5ms

            const meetingsInterval = setInterval(() => {
                setMeetingsCount((prevCount) => {
                    if (prevCount < 1000000) {
                        return prevCount + 10000; // Increase by 20 for faster counting
                    } else {
                        clearInterval(meetingsInterval);
                        return prevCount;
                    }
                });
            }, 20); // Decreased interval to 20ms
        }
    }, [isVisible]);

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div
            className={`bg-[#6059c9] text-white ${isVisible ? 'animate-section' : ''}`}
            ref={contactRef}
        >
            <section className="flex flex-col py-24">
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 gap-x-10 place-items-center mx-auto max-w-[1200px]  px-5">
                    <div className="flex flex-col justify-center items-center px-4  justify-self-center">
                        <div className="flex flex-row justify-center items-center">
                            <p className="font-bold text-[64px] md:text-[72px]  leading-9 text-primary ml-2">
                                {formatNumberWithCommas(projectsCount)}
                            </p>
                        </div>
                        <p className="font-medium text-[24px] leading-6 mt-3 md:mt-6 text-center">
                        Signature every hours
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4  justify-self-center">
                        <div className="flex flex-row justify-center items-center">
                            <p className="font-bold text-[64px] md:text-[72px]  leading-9 text-primary ml-2">
                                {formatNumberWithCommas(articlesCount)}
                            </p>
                        </div>
                        <p className="font-medium text-[24px] leading-6 mt-3 md:mt-6 text-center">
                        Victory each month
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4  justify-self-center">
                        <div className="flex flex-row justify-center items-center">
                            <p className="font-bold text-[64px] md:text-[72px]  leading-9 text-primary ml-2">
                                {formatNumberWithCommas(meetingsCount)}
                            </p>
                        </div>
                        <p className=" text-[24px] leading-6 mt-3 md:mt-6 text-center">
                        Fundraised per year
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Counter;
