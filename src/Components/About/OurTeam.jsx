function OurTeam() {
    // Array of team members
    const teamMembers = [
        {
            name: "Nill Smith",
            role: "Legal Advising",
            imageSrc: "/167.png"
        },
        {
            name: "Kevin Thomson",
            role: "Founder & CEO",
            imageSrc: "/168.png"
        },
        {
            name: "Alex Browne",
            role: "Director, Finance",
            imageSrc: "/169.png"
        },
        {
            name: "Alex Peter",
            role: "Marketing Head",
            imageSrc: "/170.png"
        }
    ];

    return (
        <div className="">
            <div className='max-w-[1100px] mx-auto px-4 mt-14'>
                <h1 className='text-[48px] md:text-[60px] text-[#2b2b39] font-[700] text-center'>Our Team</h1>
                <p className='text-[18px] md:text-[20px] text-center text-gray-500 mt-5'>The talented and passionate people are changing the world</p>
                <div className="grid grid-cols-12 py-24 gap-4">
                    {/* Mapping through the teamMembers array */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-span-6 md:col-span-3">
                            <div className="w-full rounded-xl overflow-hidden shadow-lg shadow-[#f5efe0]">
                                <img
                                    className="w-full"
                                    src={member.imageSrc}
                                    alt={member.name}
                                />
                                <div className="px-2 text-center py-4">
                                    <div className="font-bold text-[18px] md:text-[24px] mb-2">{member.name}</div>
                                    <p className="text-gray-700 text-[12px] md:text-[16px] text-base">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div >
            <div className="py-24 bg-[#f5efe0]">
                <div className="grid grid-cols-12 max-w-[1100px] mx-auto px-4 mt-14">
                    <div className="col-span-12 md:col-span-4">
                        <h1 className="text-[28px] md:text-[34px] text-[#2b2b39] font-[700] ">Try something fresh and new right now</h1>
                    </div>

                    <div className="col-span-12 md:col-span-8">
                        <div className=" md:flex items-center md:space-x-4">
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4  mt-5 md:mt-0   text-sm text-gray-900 max-w-[520px] border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-600"
                                placeholder="Your Email"
                                required
                            />



                            <button className='bg-[#6059c9]  text-white md:w-56 w-full mt-5 md:mt-0  text-[17px] text-center    font-bold px-4 py-3.5 rounded-xl'>


                                Sign up
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeam;
