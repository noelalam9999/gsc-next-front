import React from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgP from "../../assets/image/patterns/hero-image-2.png";

const defaultCountries = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "europe", label: "Europe" },
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div  className="position-relative z-index-1 bg-squeeze pt-26 dark-mode-texts">
        <div  className="pos-abs-tr h-100">
          <img id="hero-image"  src={imgP} alt="" className="h-100" />
        </div>
        <div className="container position-static">
          <div id="hero-image1" className="row position-relative align-items-center position-static">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-23 pb-lg-33 pb-md-28 pb-xs-26 pb-29 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div  className="row">
                <div className="mobile-text col-xxl-8 col-xl-7 col-md-8 col-sm-10">
                  <div className="l400px-top-text text-primary font-size-5 font-weight-semibold mb-7">
                    150+ universities currently giving Scholarships
                  </div>
                  <h1 className="l400px-main-text hero-writing font-size-10 mb-9 text-black-2">
                    Find the most promising Study Destinations!
                  </h1>
                  <p className="hero-writing font-size-5">
                  For over 30 years, Global Study Contacts has been the ‘home’ of overseas university applications, assisting self-funded students through the entire university application process.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Hero Form --> */}
            <div className="col-lg-11 col-12 translateY-50 pos-abs-bl">
              <form
                action="/"
                className="search-form"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                  <div className="filter-inputs">
                    <div className="form-group position-relative">
                      <input
                        className="form-control focus-reset pl-13"
                        type="text"
                        id="keyword"
                        placeholder="Type Program Name"
                      />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- .select-city starts --> */}
                    <div className="form-group position-relative">
                      <Select
                        options={defaultCountries}
                        className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                        border={false}
                      />

                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- ./select-city ends --> */}
                  </div>
                  <div className="button-block">
                    <Button
                      type="submit"
                      className="line-height-reset h-100 btn-submit w-100 text-uppercase"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Hero Form --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
