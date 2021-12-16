import React from "react";

import { Select } from "../../components/Core";
import imgP from "../../assets/image/l1/png/hero-image-3.png";
import imgQ from "../../assets/image/l1/png/hero-main-mobile.png";
import imgH from "../../assets/image/patterns/hero-pattern.png";

const desiredLevel = [
  { value: "diploma", label: "Diploma" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "postgraduate", label: "Post-Graduate" },
 
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className=" pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 ">
        {/* <!-- .Hero pattern --> */}
        {/* <div className="pos-abs-tr w-50 z-index-n2"> */}
        <div  className="home-main pos-abs-tr  z-index-n2">
          <img src={imgP} alt="" className="" />
        </div>
        <div  className="flip-canada pos-abs-tr z-index-n2">
          <img src={imgQ} alt="" className="" />
        </div>
        {/* <!-- ./Hero pattern --> */}
        <div className="container">
          <div  className="row pullup position-relative align-items-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">
              Find the most promising Study Destinations!
              </h1>
              <div className="home-main">
              <p style={{color:"black", width:"330px"}} className="home-main font-size-5">
                  For over 30 years, Global Study Contacts (part of Contacts International) has been the ‘home’ of overseas university applications, assisting self-funded students<br/> through the entire university application process.
                  </p>
                  </div>
              <div className="">
                {/* <!-- .search-form --> */}
                <form action="/" className="search-form shadow-6">
                  <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                    <div className="filter-inputs">
                      <div className="form-group position-relative">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="Desired Subject"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative">
                        <Select
                          options={desiredLevel}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                        />

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    {/* <!-- .Hero Button --> */}
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>
                    {/* <!-- ./Hero Button --> */}
                  </div>
                </form>
                {/* <!-- ./search-form --> */}
                {/* <p className="brands heading-default-color font-size-3 pt-7">
                  <span className="text-smoke">Search keywords e.g.</span>{" "}
                  Computer Science
                </p> */}
              </div>
            </div>
            {/* <!-- Hero Right Image --> */}
            <div
             // className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto"
              className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                {/* <img height="700px" src={imgH} alt="" className="w-100" /> */}
              </div>
            </div>
            {/* <!-- ./Hero Right Image --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
