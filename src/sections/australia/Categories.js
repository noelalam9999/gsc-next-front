import React from "react";
import Link from "next/link";

import imgB1 from "../../assets/image/l1/png/canada-icon-1.png";
import imgB2 from "../../assets/image/l1/png/canada-icon-2.png";
import imgB3 from "../../assets/image/l1/png/canada-icon-3.png";
import imgB4 from "../../assets/image/l1/png/canada-icon-4.png";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div
        className="pt-11 pt-lg-26 pb-lg-16"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">
                  Why Study In Canada
                </h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            {/* <div className="col-12 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-green text-uppercase">
                    Explore All
                  </a>
                </Link>
              </div>
            </div> */}
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-blue bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <img height="50px" src={imgB1} alt="" />
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Eight universities are listed in the global top 200
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>200+</span>Reputed Universities
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-spray bg-spray-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <img height="40px" src={imgB4} alt="" />
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Non-discriminatory society and low crime rates
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>25+</span> Subject Areas
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-coral bg-coral-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <img src={imgB3} alt="" />
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Gain valuable international experience by joining different student clubs
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>100+</span>Different Cultures
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-red bg-red-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <img height="40px" src={imgB2} alt="" />
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                    Productive and successful careers globally
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>50+</span>Countries
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
          
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
      
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
         
            {/* <!-- End Single Category --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
