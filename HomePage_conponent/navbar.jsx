import React, { useState } from "react";
import { MdLocationPin, MdMenu, MdClose } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* header */}
      <header>
        <div className="bg-[#00243d] h-10 text-white flex justify-end md:gap-8 gap-4 items-center lg:pr-16 text-sm md:text-lg pr-6">
          <div className="flex items-center gap-1">
            <MdLocationPin className="md:size-4 size-3" />
            <a href="/" className="hover:underline">
              <span>Locate us</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <IoMdCall className="md:size-4 size-3" />
            <span className="hover:underline cursor-pointer">Contact us</span>
          </div>
        </div>
      </header>

      {/* navbar */}
      <div className="md:h-24 h-12 flex items-center lg:px-16 px-6 text-[#00243d] justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="md:size-20 size-10" />
          <span className="lg:text-2xl text-lg">NeuBank</span>
        </div>
        <div className="hidden md:flex md:gap-4 max-sm:gap-2 lg:gap-8 xl:gap-16 lg:text-lg text-sm items-center">
          <a href="/" className="hover:underline">
            Accounts
          </a>
          <a href="/" className="hover:underline">
            Loans
          </a>
          <a href="/" className="hover:underline">
            Cards
          </a>
          <a href="/" className="hover:underline">
            Invest
          </a>
          <a href="/" className="hover:underline">
            Digital
          </a>
          <button className="border py-1 md:px-10 px-5 rounded-3xl bg-[#63dfbb] text-white">
            Log In
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-18 right-6 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50">
              <a href="/" className="block hover:underline mb-2">
                Accounts
              </a>
              <a href="/" className="block hover:underline mb-2">
                Loans
              </a>
              <a href="/" className="block hover:underline mb-2">
                Cards
              </a>
              <a href="/" className="block hover:underline mb-2">
                Invest
              </a>
              <a href="/" className="block hover:underline mb-2">
                Digital
              </a>
              <button className="border py-1 px-5 rounded-3xl bg-[#63dfbb] text-white w-full mt-2">
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
