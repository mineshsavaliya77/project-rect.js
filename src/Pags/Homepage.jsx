import React from "react";
import SwiperComponent from "../components/SwiperComponent";


function Homepage() {
  return (
    <div>
      <section className="w-100% bg-[#fff3e0]  h-[700px]">
        <div className="flex justify-evenly ">
          <div className="mt-10 text-left w-[400-px]">
            <div className="text-base ml-7 mt-[130px] leading-6 tracking-wide font-bold ">
              New Women Fashion
            </div>
            <div className="text-8xl ml-7 leading-[106px] font-normal">
              Summer Essential Stock
            </div>
            <div>
              <button className="w-48 leading-[53px] font-bold rounded-sm border-2 border-black m-10  hover:text-white hover:bg-black hover:translate-y-[-20px] hover:duration-700">
                Shop now
              </button>
            </div>
          </div>
          <div className="flex justify-center w-[-webkit-fill-available] ">
            <img src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/2022/12/banner-img.webp"
              className="attachment-full w-[614px] h-[700px] hover:translate-x-[-20px] hover:duration-300 wp-image-67 "
              alt="banner-img"
            />
            <div className="bg-box"></div>
          </div>
        </div>
      </section>

      <div className="text-center mt-[100px] ">
        <span className="text-5xl leading-6 text-center">Shop categories</span>
        <p className="text-base leading-6 text-center mt-[25px]">
          On other hand, we denounce with righteous indignation beguiled
        </p>
      </div>

      <SwiperComponent/>
    </div>
  );
}

export default Homepage;
