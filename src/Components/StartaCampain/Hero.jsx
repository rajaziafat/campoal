import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCaretDown, FaCheck, FaPlus, FaRegFolderOpen, FaTimes } from 'react-icons/fa';
import { MdArrowRight } from 'react-icons/md';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CSSTransition } from 'react-transition-group';
import Select from 'react-select';
import { IoIosLink } from 'react-icons/io';
import { BsFillSendFill } from 'react-icons/bs';

const topics = [
    { name: '1' },
    // Add more topics if needed
];



function Hero() {
    const [isOpenT, setIsOpenT] = useState(false);

    const [activeTab, setActiveTab] = useState(0);
    const tabTitles = ['Title', 'Receiver', 'Problem', 'Photo'];

    const nextTab = () => {
        if (activeTab < tabTitles.length - 1) setActiveTab(activeTab + 1);
    };

    const prevTab = () => {
        if (activeTab > 0) setActiveTab(activeTab - 1);
    };



    const toggleDropdownT = () => {

        setIsOpenT(!isOpenT);
    };



    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
    };

    const [fields, setFields] = useState([{ id: Date.now() }]);

    const addField = () => {
        setFields([...fields, { id: Date.now() }]);
    };

    const removeField = (id) => {
        setFields(fields.filter(field => field.id !== id));
    };

    const [content, setContent] = useState('');


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: '#cccccc',
            '&:hover': { borderColor: '#6059c9' },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#f5efe0',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: '#333',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: '#333',
            ':hover': {
                backgroundColor: 'red',
                color: 'white',
            },
        }),
    };


    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleEmbed = () => {
        setSelectedImage(imageURL);
    };

    const handleDeleteImage = () => {
        setSelectedImage(null);
        setImageURL('');
    };




    return (
        <div className='pt-32 bg-white'>
            <div className='max-w-[940px] mx-auto px-4 pb-12'>
                <h2 className='text-[32px] font-bold text-center text-[#333] mt-4'>Start a Campaign</h2>

                <div className='flex justify-center mt-10'>
                    {tabTitles.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex items-center text-lg font-bold border px-4 py-3  justify-center w-full ${activeTab === index ? 'bg-[#F9F9FF] text-black' : 'bg-white'} ${index === 0 ? 'rounded-l-lg' : ''} ${index === tabTitles.length - 1 ? 'rounded-r-lg' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {index < activeTab ? (
                                <FaCheck className='mr-2 w-8 h-8 text-[#6059c9]' />
                            ) : (
                                <span className='text-[28px]'>{index + 1}.</span>
                            )}
                            <span className='ml-2 text-base'>{tab}</span>
                        </button>
                    ))}
                </div>

                <div className='mt-8'>
                    <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                        {activeTab === 0 && <>

                            <div className='max-w-[700px] mx-auto mt-10 ' >
                                <div className='grid grid-cols-12 gap-4'>

                                    <div className='col-span-12'>
                                        <h2 className='text-[24px] font-bold  text-[#333] mt-4'>Write your petition title</h2>
                                        <p className=' text-[16px]  text-gray-600 mt-2'>This is the first thing people will see about your petition. Get their attention with a short title that focuses on the change you’d like them to support.</p>
                                        <div className="relative px-1 mt-8 w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Title</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9]  w-full p-2.5"
                                                placeholder="What do you want to achieve?"
                                                required=""
                                            />

                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-6'>
                                        <div className="relative px-1  w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Goal</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9]  w-full p-2.5"
                                                placeholder="Number of signature goal?"
                                                required=""
                                            />

                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-6'>
                                        <div className='relative px-1  w-full'>
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Category</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <button
                                                id="dropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                className="flex items-center justify-between  text-[16px] w-full px-2 py-2.5 space-x-8 text-[#5f5f75] rounded-lg border border-gray-300 focus:ring-[#6059c9] focus:border-[#6059c9]"
                                                type="button"
                                                onClick={toggleDropdownT}
                                            >


                                                <p className="text-[16px] mt-0.5">Children rights</p>

                                                <FaCaretDown className='w-3.5 h-3.5' />


                                            </button>
                                            {/* Dropdown menu */}
                                            <div
                                                id="dropdown"
                                                className={`absolute top-full left-0 mt-2 rounded-md z-10 ${isOpenT ? 'slide-down block' : 'slide-up hidden'} bg-white border divide-y rounded-xl shadow-sm w-full `}
                                            >






                                                <ul
                                                    className=" text-sm max-h-[265px] overflow-y-auto text-[#5f5f75]  py-2 rounded-lg "
                                                    aria-labelledby="dropdownDefaultButton"
                                                >





                                                    {topics.map((topics, index) => (
                                                        <li key={index}>
                                                            <a href="#" className="px-4 py-1 hover:bg-[#6059c9] w-full hover:bg-opacity-5 flex items-center space-x-2">

                                                                <p className="text-[13px] mt-0.5">{topics.name}</p>
                                                            </a>
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='col-span-12 '>
                                        <div className="mt-2 w-full">




                                            <div
                                                className="flex mt-2 items-center space-x-2 cursor-pointer"
                                                onClick={() => toggleAnswer(0)} // Assuming index 0 for the single question
                                            >
                                                <div>
                                                    {expandedQuestion === 0 ? (
                                                        <FaCaretDown className="w-6 h-6" />
                                                    ) : (
                                                        <MdArrowRight className="w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-[20px] md:text-[18px] mt-0.5 font-bold"> How to write a great title?</h3>
                                            </div>

                                            <CSSTransition
                                                in={expandedQuestion === 0}
                                                timeout={100}
                                                classNames="slide"
                                                unmountOnExit
                                            >
                                                <div className="text-[18px] w-full text-black px-6  mt-4 leading-6">
                                                    <ul className='list-disc'>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Keep it short and to the point
                                                            </p>
                                                            <p className='text-sm '>
                                                                Example: Buy organic, free-range eggs for your restaurants.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Focus on the solution
                                                            </p>
                                                            <p className='text-sm '>
                                                                Example: Raise the minimum wage in Minneapolis to $15 an hour.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Communicate urgency
                                                            </p>
                                                            <p className='text-sm '>
                                                                Example: Approve life-saving medication for my daughter’s insurance before it’s too late.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </CSSTransition>

                                        </div>
                                    </div>


                                </div>
                            </div>











                        </>}
                    </div>
                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                        {activeTab === 1 && <>
                            <div className='max-w-[700px] mx-auto mt-10 ' >
                                <div className='grid grid-cols-12 gap-4'>

                                    <div className='col-span-12'>
                                        <h2 className='text-[24px] font-bold  text-[#333] mt-4'>Choose a decision maker</h2>
                                        <p className=' text-[16px]  text-gray-600 mt-2'>This is the person, organization, or group that can make a decision about your petition. We will send them updates on your petition and encourage a response.</p>

                                    </div>
                                    {fields.map((field, index) => (
                                        <React.Fragment key={field.id}>
                                            <div className='col-span-12 md:col-span-6'>
                                                <div className="relative px-1 w-full">
                                                    <label
                                                        htmlFor={`full_name_${field.id}`}
                                                        className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                                    >
                                                        <p>Full name</p>
                                                        <p className="text-red-600">*</p>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id={`full_name_${field.id}`}
                                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] w-full p-2.5"
                                                        placeholder="Who can make this happen?"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-span-12 md:col-span-6'>
                                                <div className="relative px-1 w-full">
                                                    <label
                                                        htmlFor={`title_${field.id}`}
                                                        className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                                    >
                                                        <p>Title or organization</p>
                                                        <p className="text-red-600">*</p>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id={`title_${field.id}`}
                                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9] w-full p-2.5"
                                                        placeholder="What is their position?"
                                                        required=""
                                                    />
                                                    {index !== 0 && (
                                                        <button
                                                            className='absolute top-6 right-2 mt-2 bg-[#333] rounded-full p-1 mr-2'
                                                            onClick={() => removeField(field.id)}
                                                        >
                                                            <FaTimes className='text-white w-4 h-4' />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                    <div className='col-span-12 flex justify-end'>
                                        <button
                                            className='px-4 py-2 mt-5 bg-[#6059c9] flex justify-center items-center space-x-2 rounded-lg text-sm font-bold text-white'
                                            onClick={addField}
                                        >
                                            <FaPlus className='w-3 h-3' />
                                            <p className='mt-0.5'>Add</p>
                                        </button>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className="relative px-1  w-full">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900"
                                            >
                                                <p> Add a place</p>
                                                <p className="text-red-600">*</p>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6059c9] focus:border-[#6059c9]  w-full p-2.5"
                                                placeholder="Add a neighborhood, state, city or country"
                                                required=""
                                            />

                                        </div>


                                    </div>

                                    <div className='col-span-12'>
                                        <div className="mt-2 w-full">




                                            <div
                                                className="flex mt-2 items-center space-x-2 cursor-pointer"
                                                onClick={() => toggleAnswer(0)} // Assuming index 0 for the single question
                                            >
                                                <div>
                                                    {expandedQuestion === 0 ? (
                                                        <FaCaretDown className="w-6 h-6" />
                                                    ) : (
                                                        <MdArrowRight className="w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-[20px] md:text-[18px] mt-0.5 font-bold"> How to find the right decision maker?</h3>
                                            </div>

                                            <CSSTransition
                                                in={expandedQuestion === 0}
                                                timeout={100}
                                                classNames="slide"
                                                unmountOnExit
                                            >
                                                <div className="text-[18px] w-full text-black px-6  mt-4 leading-6">
                                                    <ul className='list-disc'>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Choose someone who can give you what you want
                                                            </p>
                                                            <p className='text-sm '>
                                                                You might need to do some research to find the right person who can make or influence the decision.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Do not go straight to the top
                                                            </p>
                                                            <p className='text-sm '>
                                                                You might see faster results if you choose a more junior person who is petitioned less often than more recognizable figures.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Choose someone you can work with
                                                            </p>
                                                            <p className='text-sm '>
                                                                Your petition is most likely to win by reaching an agreement with your decision maker.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </CSSTransition>

                                        </div>
                                    </div>




                                </div>
                            </div>







                        </>}
                    </div>
                    <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
                        {activeTab === 2 && <>
                            <div className='max-w-[700px] mx-auto mt-10 ' >
                                <div className='grid grid-cols-12 gap-4'>
                                    <div className='col-span-12'>
                                        <h2 className='text-[24px] font-bold text-[#333] mt-4'>Explain the problem</h2>
                                        <p className='text-[16px] text-gray-600 mt-2'>
                                            People are more likely to support your petition if it’s clear why you care. Explain how this change will impact you, your family, or your community.
                                        </p>
                                    </div>
                                    <div className='col-span-12 mt-4'>
                                        <label className="block mb-2 flex items-center space-x-1 text-xs font-medium text-gray-900">
                                            <p>Content</p>
                                            <p className="text-red-600">*</p>
                                        </label>
                                        <ReactQuill
                                            value={content}
                                            onChange={setContent}
                                            className="custom-quill  mt-2 h-[300px] rounded-xl"
                                        />
                                    </div>
                                    <div className='col-span-12 mt-10'>
                                        <Select
                                            isMulti
                                            options={options}
                                            styles={customStyles}
                                        />
                                    </div>



                                    <div className='col-span-12 mt-10'>
                                        <div className="mt-2 w-full">
                                            <div className="flex mt-2 items-center space-x-2 cursor-pointer" onClick={() => toggleAnswer(0)}>
                                                <div>
                                                    {expandedQuestion === 0 ? (
                                                        <FaCaretDown className="w-6 h-6" />
                                                    ) : (
                                                        <MdArrowRight className="w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-[20px] md:text-[18px] mt-0.5 font-bold"> How to inspire your readers to action?</h3>
                                            </div>
                                            <CSSTransition
                                                in={expandedQuestion === 0}
                                                timeout={100}
                                                classNames="slide"
                                                unmountOnExit
                                            >
                                                <div className="text-[18px] w-full text-black px-6 mt-4 leading-6">
                                                    <ul className='list-disc'>
                                                        <li>
                                                            <p className='text-sm font-bold'>Describe the people involved and the problem they are facing</p>
                                                            <p className='text-sm'>Readers are most likely to take action when they understand who is affected.</p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>Describe the solution</p>
                                                            <p className='text-sm'>Explain what needs to happen and who can make the change. Make it clear what happens if you win or lose.</p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>Make it personal</p>
                                                            <p className='text-sm'>Readers are more likely to sign and support your petition if it’s clear why you care.</p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>Respect others</p>
                                                            <p className='text-sm'>Don’t bully, use hate speech, threaten violence or make things up.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </CSSTransition>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </>}
                    </div>
                    <div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
                        {activeTab === 3 && <>
                            <div className='max-w-[700px] mx-auto mt-10 ' >
                                <div className='grid grid-cols-12 gap-4'>

                                    <div className='col-span-12'>
                                        <h2 className='text-[24px] font-bold  text-[#333] mt-4'>Add a photo or video</h2>
                                        <p className=' text-[16px]  text-gray-600 mt-2'>Petitions with a photo or video receive six times more signatures than those without. Include one that captures the emotion of your story.</p>



                                        <div className='mt-10 border-2 border-dashed flex items-center justify-center border-gray-400 h-[420px] rounded-lg'>
                                            {selectedImage ? (
                                                <div className='relative w-full h-full'>
                                                    <img src={selectedImage} alt="Selected" className='object-cover w-full h-full rounded-lg' />
                                                    <button
                                                        className="text-gray-400 bg-[#f5efe0] absolute top-2 right-2 rounded-lg text-sm focus:outline-none p-1"
                                                        onClick={handleDeleteImage}
                                                    >
                                                        ✕ Delete
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className='w-full px-4'>
                                                    <div className='flex justify-center '>
                                                        <img className='w-40' src="/094.svg" alt="" />
                                                    </div>

                                                    <div className='flex justify-center mt-5'>
                                                        <label className='bg-[#white] w-44  mt-5 text-[15px] border border-gray-400 hover:border-black duration-300 ease-in-out  flex justify-center items-center  space-x-4  text-gray-500 px-4 py-2.5 rounded-xl cursor-pointer'>
                                                            <FaRegFolderOpen className='w-4 h-4' />
                                                            <span>Browse Images</span>
                                                            <input type='file' className='hidden' onChange={handleImageUpload} />
                                                        </label>
                                                    </div>

                                                    <div className='mt-10'>
                                                        <div className="inline-flex items-center justify-center w-full">
                                                            <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded " />
                                                            <div className="absolute px-4 bg-white">
                                                                <div className='flex items-center space-x-1'>
                                                                    <p className="text-black">OR</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative mt-6">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <IoIosLink />
                                                        </div>
                                                        <input
                                                            type="url"
                                                            id="embed-url"
                                                            value={imageURL}
                                                            onChange={(e) => setImageURL(e.target.value)}
                                                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-600"
                                                            placeholder="https://"
                                                            required
                                                        />
                                                        <button
                                                            type="button"
                                                            className="text-gray-400 bg-[#f5efe0] absolute right-0.5 bottom-0.5 rounded-lg rounded-l-none border-l flex items-center space-x-2 focus:outline-none font-medium text-md px-4 py-4"
                                                            onClick={handleEmbed}
                                                        >
                                                            <p>Embed</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>



                                    </div>



                                    <div className='col-span-12 '>
                                        <div className="mt-2 w-full">




                                            <div
                                                className="flex mt-2 items-center space-x-2 cursor-pointer"
                                                onClick={() => toggleAnswer(0)} // Assuming index 0 for the single question
                                            >
                                                <div>
                                                    {expandedQuestion === 0 ? (
                                                        <FaCaretDown className="w-6 h-6" />
                                                    ) : (
                                                        <MdArrowRight className="w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-[20px] md:text-[18px] mt-0.5 font-bold">Tips for adding a photo or video</h3>
                                            </div>

                                            <CSSTransition
                                                in={expandedQuestion === 0}
                                                timeout={100}
                                                classNames="slide"
                                                unmountOnExit
                                            >
                                                <div className="text-[18px] w-full text-black px-6  mt-4 leading-6">
                                                    <ul className='list-disc'>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Choose a photo that captures the emotion of your petition
                                                            </p>
                                                            <p className='text-sm '>
                                                                Photos of people or animals work well.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Try to upload photos that are 1600 x 900 pixels or larger
                                                            </p>
                                                            <p className='text-sm '>
                                                                Large photos look good on all screen sizes.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className='text-sm font-bold'>
                                                                Keep it friendly for all audiences
                                                            </p>
                                                            <p className='text-sm '>
                                                                Make sure your photo doesn’t include graphic violence or sexual content.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </CSSTransition>

                                        </div>
                                    </div>


                                </div>
                            </div>





                        </>}
                    </div>
                </div>

                <div className='max-w-[700px] mx-auto ' >
                    <div className='flex justify-between mt-20'>
                        <button
                            className={`px-4 py-2 ${activeTab === 0 ? 'px-6 py-2.5 bg-[#f5efe0] flex justify-center items-center space-x-2 rounded-lg text-m font-bold text-[#333] cursor-not-allowed ' : 'px-6 py-2.5 bg-[#f5efe0] flex justify-center items-center space-x-2 rounded-lg text-m font-bold text[#333]'}`}
                            onClick={prevTab}
                            disabled={activeTab === 0}
                        >
                            <FaArrowLeft className='w-5 h-5 ' />
                            <p className='mt-0.5'>
                                Back
                            </p>

                        </button>

                        {activeTab < tabTitles.length - 1 ? (
                            <button
                                className='px-6 py-2.5 bg-[#6059c9] flex justify-center items-center space-x-2 rounded-lg text-m font-bold text-white'
                                onClick={nextTab}
                            >
                                <p className='mt-0.5'>
                                    Next
                                </p>
                                <FaArrowRight className='w-5 h-5 ' />

                            </button>
                        ) : (
                            <button
                                className='px-6 py-2.5 bg-[#6059c9] flex justify-center items-center space-x-2 rounded-lg text-m font-bold text-white'
                                onClick={() => alert('Campaign Finished')}
                            >
                                <p className='mt-0.5'>
                                    Finish
                                </p>
                                <BsFillSendFill className='w-5 h-5 ' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
