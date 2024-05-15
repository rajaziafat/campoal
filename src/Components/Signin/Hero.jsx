import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaShareNodes, FaUserLarge } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";

function Hero() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };



    return (
        <div className=" mt-20">
            <div className="max-w-[480px] mx-auto">
                <div className="flex justify-center">
                    <img className="w-[180px] h-[40px]" src="/logolg.svg" alt="" />
                </div>
                <div className="bg-white mt-24 w-full pb-16 rounded-2xl py-6 px-6 shadow-md ">
                    <h2 className="text-[24px] font-bold mt-5 text-center">Sign In </h2>
                    <div className="relative px-1 mt-10">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                        >
                            <p> Email</p>
                            <p className="text-red-600">*</p>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                            placeholder="username"
                            required=""
                        />
                        <div className="absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 pointer-events-none">
                            <FaUserLarge />
                        </div>
                    </div>
                    <div className="relative px-1 mt-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                        >
                            <p>Password</p>
                            <p className="text-red-600">*</p>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                            placeholder="Password"
                            required=""
                        />
                        <div
                            className="absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <label className="inline-flex mt-4 items-center cursor-pointer">
                        <input type="checkbox" defaultValue="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6059c9] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6059c9]" />
                        <span className="ms-3 text-sm  text-gray-900">
                            Remember me
                        </span>
                    </label>


                    <div className=" mt-2  flex justify-between items-center">
                        <button className='bg-[#6059c9] text-white text-[15px] flex items-center space-x-4 font-bold px-6 py-3 rounded-xl'>

                            <p>Sign in </p>
                        </button>

                        <p className="text-sm">Forgot password?</p>
                    </div>


                    <div className="mt-5">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded " />
                            <div className="absolute px-4  bg-white ">
                                <div className='flex items-center space-x-1'>


                                    <p className="text-black font-bold">OR</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-center mt-10">
                        <button className='bg-[#1a73e8] text-white text-[15px] flex  items-center space-x-2 py-0.5 px-0.5 font-medium   rounded-full'>
                            <div className="bg-white px-2 py-2 rounded-full">
                                <FcGoogle className="w-5 h-5" />

                            </div>
                            <p className="py-2 pr-2">Continue with Google </p>
                        </button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button className='bg-[#1a73e8] text-white text-[15px] flex  items-center space-x-2 py-0.5 px-0.5   rounded-full'>
                            <div className="bg-white px-2 py-2 rounded-full">
                                <LiaFacebookF className="w-5 h-5 text-[#1a73e8]" />

                            </div>
                            <p className="py-2 pr-2">Continue with Facebook </p>
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center">Do not have an account? <span className="underline">Please register new account!</span></p>
            </div>
        </div>
    );
}

export default Hero;
