import React from "react";

import imgS1 from "../../assets/image/svg/student-services-icon-2.png";
import imgS2 from "../../assets/image/svg/student-services-icon-3.png";
import imgS3 from "../../assets/image/svg/student-services-icon-1.png";

const Services = () => {
  return (
    <>
      {" "}
      {/* <!-- Services Area --> */}
      <div className="pt-11 pt-lg-20 pb-7 pb-lg-18">
        <div className="container">
          {/* <!-- Section title --> */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
              <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
                <h2 className="font-size-9 mb-6">
                  Easy steps to
                  <br className="d-none d-sm-block" /> get recruited by your desired University
                </h2>
              
              </div>
            </div>
          </div>
          {/* <!-- End Section title --> */}
          {/* <!-- Services Content --> */}
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <!-- Single Services --> */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-dodger mb-11">
                  <img src={imgS1} alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Check Elligibility</h3>
                  <p className="font-size-4 text-default-color">
                    Check which schools match your GPA
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Single Services --> */}
            {/* <!-- Single Services --> */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-green mb-11">
                  <img src={imgS2} alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Select Desired Institute</h3>
                  <p className="font-size-4 text-default-color">
                   Find the University that fits your academic goals
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Single Services --> */}
            {/* <!-- Single Services --> */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11">
                  <img src={imgS3} alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Apply on GSC</h3>
                  <p className="font-size-4 text-default-color">
                    Receive Expert Guidance
                  </p>
                </div>
              </div>
            </div>
            <strong className="font-size-6 text-default-color px-xs-9 px-md-0">
                 Leave the rest to us!
                </strong>
            {/* <!-- End Single Services --> */}
          </div>
         
          {/* <!-- End Services Content --> */}
        </div>
      </div>
    </>
  );
};

export default Services;
