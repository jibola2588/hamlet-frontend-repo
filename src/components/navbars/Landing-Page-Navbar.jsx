import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { Transition } from "@headlessui/react";
import './Landing-Page.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState("hide")
  const showHandler = ()=>{
      if (show == "show"){
          setShow("hide")
      }if (show == "hide"){
          setShow("show")
      }
  }

  return (
      <nav className="nav font-[Satoshi]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="navwrapper flex items-center justify-between">
          <div className="">
              <div className="flex-shrink-0">
                <Link to="/">          
                      <img
                  className="logo h-[55px] w-[155px] object-cover cursor-pointer"
                  src={logo}
                  alt="start innovation hub logo"
                /> 
                </Link>
              </div><h1></h1>
    
              </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="nav-link-wrapper flex items-baseline space-x-4">
                  <Link
                    to="/community"
                    className=" nav-link text-sm font-bold leading-5 text-[#111827] px-3 py-2 rounded-md transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-white"
                  >
                  Community
                  </Link>

                  <Link
                    to="/courses"
                    className="nav-link text-sm font-bold leading-5 text-[#111827] px-3 py-2 rounded-md transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-white"
                  >
                    Courses
                  </Link>

                  <Link
                    to="/contact"
                    className="nav-link text-sm font-bold leading-5 text-[#111827] px-3 py-2 rounded-md  transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-white"
                  >
                 Contact
                  </Link>

                  <Link
                    to="/about-us"
                    className="nav-link text-sm font-bold leading-5 text-[#111827] px-3 py-2 rounded-md transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-white"
                  >
                   About us
                  </Link>  

                  <Link
                    to="/blog"
                    className="nav-link text-sm font-bold leading-5 text-[#111827] px-3 py-2 rounded-md transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-white"
                  >
                   Blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center">
            <div>
            <div className="mr-1 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-1 rounded-md text-[#00349A] hover:text-[#00349A]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#00349A] focus:ring-[#00349A]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            </div>
              <div className="hidden md:block">
                  <Link 
                  to = "/signin"
                  className="nav-btn1 font-bold  px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer transition ease-in-out delay-150  hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A] ">
                 Sign in
                  </Link>
              </div>
              <div className="hidden md:block pl-4">
                  <Link
                  to = '/signup'
                  className="nav-btn2  font-bold  text-[#00349A]  border border-[#00349A] px-[32px] py-[14px] rounded-full text-sm leading-5 cursor-pointer transition ease-in-out delay-150 hover:bg-[#00349A] hover:text-[#ffffff] ">
                  Sign up
                  </Link>
              </div>
             
            </div>
            </div>

            
       
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden z-10" id="mobile-menu">
              <div ref={ref} className="flex flex-col px-[20px]  pt-2 pb-3 space-y-3 sm:px-3 z-10">
                <Link
                  to = "/community"
                  className="nav-info text-base font-bold leading-5 text-[#111827]"
                >
                  Community
                </Link>

                <Link
                 to="/courses"
                  className="nav-info text-base font-bold leading-5 text-[#111827]"
                >
                 Courses
                </Link>

                <Link
                  to="/contact"
                  className="nav-info text-base font-bold leading-5 text-[#111827]"
                >
                 Contact
                </Link>
                <Link
                  to="/contact"
                  className="nav-info text-base font-bold leading-5 text-[#111827]"
                >
                 Blog
                </Link>
                <Link
                  to="/about-us"
                  className="nav-info text-base font-bold leading-5 text-[#111827]"
                >
                About us
                </Link>
              
                  <Link
                  to = "/signin"
                  className="nav-info text-base font-bold leading-5 text-[#111827]">
                  Sign in
                  </Link>
              
            
                  <Link
                  to = "/signup" 
                  className="nav-info text-base font-bold leading-5 text-[#111827]">
                  Sign up
                  </Link>
              
                
              </div>
            </div>
          )}
        </Transition>
      </nav>
  );
}

export default Navbar;






