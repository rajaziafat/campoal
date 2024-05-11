import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa"
import { IoLocationSharp, IoMailSharp } from "react-icons/io5"


function Footer() {
  return (
    <footer className="bg-[#22130C] ">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-white ">
              Company
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Impact report
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team Members
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-white ">
              Resources
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Complaince
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Private Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-white ">
              Community
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Forum
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Mambership
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Support Desk
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Help center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-white ">
              Campoal LLC
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-3">
                <a href="#" className="hover:underline flex items-center space-x-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <p>  +1 (123) 123 456</p>
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline flex items-center space-x-2">
                  <IoMailSharp className="w-4 h-4" />
                  <p> hello@campoal.com</p>
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline flex leading-6 items-center space-x-2">
                  <IoLocationSharp className="w-4 h-4" />
                  <p> 123 Main Street
                    New <br /> York, NY, 10030, US</p>
                </a>
              </li>
              <li className="mb-4 mt-10">
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-2 border-2 border-white text-white duration-150 ease-in-out rounded-md hover:bg-white hover:text-[#22130C]">
                    <FaFacebookF />

                  </div>
                  <div className="px-2 py-2 border-2 border-white text-white duration-150 ease-in-out rounded-md hover:bg-white hover:text-[#22130C]">
                    <FaTwitter />

                  </div>
                  <div className="px-2 py-2 border-2 border-white text-white duration-150 ease-in-out rounded-md hover:bg-white hover:text-[#22130C]">
                    <FaLinkedin />

                  </div>
                  <div className="px-2 py-2 border-2 border-white text-white duration-150 ease-in-out rounded-md hover:bg-white hover:text-[#22130C]">
                    <FaInstagram />

                  </div>
                  <div className="px-2 py-2 border-2 border-white text-white duration-150 ease-in-out rounded-md hover:bg-white hover:text-[#22130C]">
                    <FaYoutube />

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024 Campoal by Conikal.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5">
            <a href="#" className="text-white text-xs">
              Help
            </a>
            <a href="#" className="text-white text-xs">
             FAQs
            </a> <a href="#" className="text-white text-xs">
              Support
            </a> <a href="#" className="text-white text-xs">
             Contact
            </a> <a href="#" className="text-white text-xs">
             Team
            </a> <a href="#" className="text-white text-xs">
              Privacy
            </a>


          </div>
        </div>
      </div>
    </footer >

  )
}

export default Footer
