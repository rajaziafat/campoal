import { useState } from "react";
import { FaEye, FaEyeSlash, FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleDot, FaUserLarge } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMailSharp } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";

function Hero() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };


    const [password, setPassword] = useState("");

    const calculatePasswordStrength = (password) => {
        // Criteria for password strength
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        // Calculate strength based on criteria
        let strength = 0;
        if (password.length >= minLength) {
            strength += 1;
        }
        if (hasUpperCase) {
            strength += 1;
        }
        if (hasLowerCase) {
            strength += 1;
        }
        if (hasNumber) {
            strength += 1;
        }
        if (hasSpecialChar) {
            strength += 1;
        }

        return strength;
    };

    const passwordStrength = calculatePasswordStrength(password);
    let progressBarColor;

    // Set color of progress bar based on strength
    if (passwordStrength === 5) {
        progressBarColor = "bg-green-500";
    } else if (passwordStrength >= 3) {
        progressBarColor = "bg-yellow-500";
    } else {
        progressBarColor = "bg-red-500";
    }
    return (
        <div className=" mt-20">
            <div className="max-w-[480px] pb-24 mx-auto">
                <div className="flex justify-center">
                    <img className="w-[180px] h-[40px]" src="/logolg.svg" alt="" />
                </div>
                <div className="bg-white mt-24 w-full pb-16 rounded-2xl py-6 px-6 shadow-md ">
                    <h2 className="text-[24px] font-bold mt-5 text-center">Sign Up </h2>


                    <div className="grid grid-cols-12">
                        <div className=" col-span-12  md:col-span-6 ">
                            <div className="relative px-1 mt-10">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                >
                                    <p> First Name</p>
                                    <p className="text-red-600">*</p>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                    placeholder="first name"
                                    required=""
                                />

                            </div>
                        </div>

                        <div className=" col-span-12  md:col-span-6 ">
                            <div className="relative px-1 mt-4 md:mt-10">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                >
                                    <p> Last Name</p>
                                    <p className="text-red-600">*</p>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                                    placeholder="last name"
                                    required=""
                                />
                                <div className="absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 pointer-events-none">
                                    <FaUserLarge />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative px-1 mt-4">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                        >
                            <p> Email</p>
                            <p className="text-red-600">*</p>
                        </label>
                        <input
                            type="email"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                            placeholder="email"
                            required=""
                        />
                        <div className="absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 pointer-events-none">
                            <IoMailSharp />
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
                            placeholder="Enter your password"
                            required=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className={`absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 cursor-pointer `}
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>

                    </div>

                    <div className="mt-2 px-2">


                        <div className="h-1.5    bg-gray-200 rounded-full mt-2">
                            <div
                                className={`h-full rounded-full ${progressBarColor}`}
                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            >

                            </div>
                        </div>

                        <div className="mt-2">
                            {password.length > 0 && (
                                <p className={`text-sm ${passwordStrength === 5 ? 'text-green-500' : passwordStrength >= 3 ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {passwordStrength === 5 ? 'Strong' : passwordStrength >= 3 ? 'Medium' : 'Weak'}
                                </p>
                            )}
                        </div>


                        <div className="mt-2">
                            <ul>
                                <li className="flex items-center space-x-1">
                                    {password.length >= 8 ? <FaRegCheckCircle className="text-green-500 w-3 h-3" /> : <FaRegCircleDot className="w-3 h-3" />}
                                    <p className={`text-sm mt-0.5 ${password.length >= 8 ? 'text-green-500' : ''}`}>Atleast 8 Character</p>
                                </li>

                                <li className="flex items-center space-x-1">
                                    {/[a-z]/.test(password) && /[A-Z]/.test(password) ? <FaRegCheckCircle className="text-green-500 w-3 h-3" /> : <FaRegCircleDot className="w-3 h-3" />}
                                    <p className={`text-sm mt-0.5 ${/[a-z]/.test(password) && /[A-Z]/.test(password) ? 'text-green-500' : ''}`}>Lowercase & Uppercase</p>
                                </li>

                                <li className="flex items-center space-x-1">
                                    {/\d/.test(password) ? <FaRegCheckCircle className="text-green-500 w-3 h-3" /> : <FaRegCircleDot className="w-3 h-3" />}
                                    <p className={`text-sm mt-0.5 ${/\d/.test(password) ? 'text-green-500' : ''}`}>Number (0-9)</p>
                                </li>

                                <li className="flex items-center space-x-1">
                                    {/[!@#$%^&*]/.test(password) ? <FaRegCheckCircle className="text-green-500 w-3 h-3" /> : <FaRegCircleDot className="w-3 h-3" />}
                                    <p className={`text-sm mt-0.5 ${/[!@#$%^&*]/.test(password) ? 'text-green-500' : ''}`}>Special Character (!@#$%^&*)</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="relative px-1 mt-4">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                        >
                            <p> Repeat Password</p>
                            <p className="text-red-600">*</p>
                        </label>
                        <input
                            type=" password"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] block w-full p-2.5"
                            placeholder="Repeat password"
                            required=""
                        />
                        <div className="absolute inset-y-0 right-0 flex mt-6 text-gray-500 items-center pr-3 pointer-events-none">
                            <FaEye />
                        </div>
                    </div>



                    <div className=" mt-5  flex justify-between items-center">
                        <button className='bg-[#6059c9] text-white text-[15px] flex items-center space-x-4 font-bold px-6 py-3 rounded-xl'>

                            <p>Sign Up </p>
                        </button>

                        <p className="text-sm">Sign in </p>
                    </div>



                    <div className="mt-5 px-2" >

                        <div className="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 text-[#6059c9] accent-[#fff]  border-gray-500  rounded focus:ring-[#333]   focus:ring-2 "
                            />
                            <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 "
                            >
                                Sign up for newsletters
                            </label>
                        </div>

                        <p className="text-sm text-gray-500">

                            By signing, you accept Campoal’s Terms of Service and Privacy Policy, and agree to receive occasional emails about campaigns on Campoal. You can unsubscribe at any time.


                        </p>

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

                <p className="mt-10 text-center">Do not have an account? Please  <span className="underline">login now!</span></p>
            </div>
        </div>
    );
}

export default Hero;
