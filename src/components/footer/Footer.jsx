import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="bg-[#35355c] py-6 md:py-16 text-white px-6">
      <div className="mx-auto text-sm border-t-2 border-b py-8 flex  items-center flex-wrap justify-center flex-col sm:max-w-6xl md:flex-row md:justify-between md:py-12">
        <div className="mr-8 ">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              href=""
              className="h-20 max-w-fit object-cover cursor-pointer"
            />
          </Link>
        </div>
        <div className="pt-4 sm:py-0 sm:pr-10 leading-10">
          <span className="flex space-x-3 items-center">
            <i className="bi bi-geo-alt-fill text-lg"></i>
            <p>2nd Floor, 264 Oron Road, Uyo, Akwa Ibom State.</p>
          </span>

          <div className="flex flex-wrap sm:space-x-16">
            <span className="flex space-x-3 items-center mr-4">
              <i className="bi bi-telephone-fill text-lg"></i>
              <p>+234-909 000 9216</p>
            </span>
            <span className="flex space-x-3 items-center">
              <i className="bi bi-printer-fill text-lg"></i>
              <p>+234-909 000 9216</p>
            </span>
          </div>
          <span className="flex flex-wrap items-center space-x-4 md:space-x-6">
            <p>Social Media</p>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="fa fa-facebook-official " aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/starthubtech"
              className="text-lg transition-all hover:pb-3">
              <i className="bi bi-twitter" href=""></i>
            </a>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-lg transition-all hover:pb-3">
              <i className="bi bi-pinterest"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="pt-4 max-w-6xl mx-auto flex justify-center items-center flex-col md:flex-row md:justify-between">
        <ul className="flex flex-wrap items-center mr-0 text-xs gap-4 pt-4 sm:gap-6 md:mr-8">
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/">HELP</Link>
          <Link to="/">PRIVACY POLICY</Link>
          <Link to="/">DISCLAIMER</Link>
        </ul>
        <p className="text-sm">
          Copyright &copy; 2022 <span className="text-4xl mb-3">.</span> Start
          Innovation Hub
        </p>
      </div>
    </div>
  );
}

export default Footer;
