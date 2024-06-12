import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import '../App.css'


const Header = () => {
  return (
    <div>
      <div className="bg-[#586946] text-white text-center py-1 font-sans ">
        Free delivery on orders over $1499. Don’t miss discount.
      </div>
      <header className="bg-white border-b p-4 flex justify-between items-center static">
        <div className="flex items-center">
          {/* <FaShoppingBag className="text-2xl text-gray-800 mr-2" />
          <span className="text-xl font-sans text-gray-800">emart</span> */}
          <a href="#">
            <img
              className="w-[150px]"
              src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2022/12/emart-011.webp"
              alt=""
            />
          </a>
        </div>
        <nav className="flex space-x-10 text-gray-800">
          <div className="dropdown relative">
            <button className="focus:outline-none ">
              Demo
              <IoIosArrowDown className="inline  ml-2" />
            </button>
            <div className="dropdownmenu absolute left-[-470px]  w-[1440px] h-[500px] bg-white border rounded shadow-lg hidden group-hover:block">
              <div className="grid grid-cols-4 mx-10">
                <div className="bg-white">
                  <img
                    
                    className="m-4 w-[650px] h-[300px]"
                    src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2023/03/fashion-menu-01.webp"
                    class="attachment-full size-full wp-image-383"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 467px) 100vw, 467px"
                  />
                  <div className="mt-2 text-xl">New product in Market</div>
                  <button href="" className="mt-2">
                    Shop Now
                  </button>
                </div>
                <ul className="m-4 bg-white">
                  <li>
                    <button className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Ware
                    </button>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Kids Ware
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Women Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Big Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Store
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Handicraft
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Interier
                    </a>
                  </li>
                </ul>
                <ul className="m-4 bg-white">
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Ware
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Kids Ware
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Women Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Big Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Store
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Handicraft
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Interier
                    </a>
                  </li>
                </ul>
                <ul className="m-4 bg-white">
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Ware
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Kids Ware
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Women Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Big Fashion
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Fashion Store
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Handicraft
                    </a>
                  </li>
                  <li>
                    <a className="mt-2 text-gray-600 hover:translate-x-2 hover:duration-500 hover:text-black ">
                      Interier
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="focus:outline-none">
              Product
              <IoIosArrowDown className="inline  ml-2" />
            </button>
            <div className="absolute left-0  w-32 bg-white border rounded shadow-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-800">
                Submenu 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800">
                Submenu 2
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-600">
            Shop
            <IoIosArrowDown className="inline  ml-2" />
          </a>
          <a href="#" className="hover:text-gray-600">
            Blog
            <IoIosArrowDown className="inline  ml-2" />
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
            <IoIosArrowDown className="inline  ml-2" />
          </a>
        </nav>
        <div className="flex items-center space-x-4 text-gray-800">
          <CiSearch className="text-xl" />
          <CiUser className="text-xl" />
          <div className="relative">
            <CiHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 text-xs  text-black font-black rounded-full px-1">
              1
            </span>
          </div>
          <div className="relative">
            <IoBagOutline className="text-xl" />
            <span className="absolute -top-2 -right-2 text-xs  text-black font-black rounded-full px-1">
              3
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
