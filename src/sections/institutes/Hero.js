import React from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgC1 from "../../assets/image/l3/png/hero-image-1.png";
import imgC2 from "../../assets/image/l3/png/hero-image-2.png";

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
      <div className="position-relative z-index-1  mt-25 mt-md-15 mt-lg-0 mt-xl-22">
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-26 pb-lg-26 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-dealy="750"
            >
              <div className="row">
                <div className="col-md-8 col-sm-10">
                  <h1 className="font-size-11 mb-12">
                   Operating in 50+ Countries
                  </h1>
                  <p className="font-size-6">
                  Global Study Contacts help institutes diversify their campus with qualified students from all around the world
                  </p>
                </div>
              </div>
              <div className="pt-12">
          
                  <div className="filter-search-form-2  rounded-sm pr-8 py-8 pl-6">
                 
                    <div className="button-block">
                      <Button className="line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Partner With Us
                      </Button>
                    </div>
                  </div>
               
              </div>
            </div>
            <div className="col-12 pos-abs-tr z-index-n1 position-static position-lg-absolute ml-auto hero-image-positioning-2">
              <div className="image-group row justify-content-center">
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="750"
                  >
                    <img src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1625272130/pexels-charlotte-may-5965682_r1pag8.jpg" alt="hero 1" />
                  </div>
                </div>
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="1200"
                  >
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
