import React from "react";

import imgS1 from "../../assets/image/svg/shoot.svg";
import imgS2 from "../../assets/image/svg/user.svg";
import imgS3 from "../../assets/image/svg/heart.svg";

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
                  <img src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618461011/icons8-quality-50_dxocnk.png" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Check Elligibility</h3>
                  <p className="font-size-4 text-default-color">
                    Check which schools match your CGPA
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Single Services --> */}
            {/* <!-- Single Services --> */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-green mb-11">
                  <img src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618461211/icons8-school-50_ksgnbn.png" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Apply to Institutes</h3>
                  <p className="font-size-4 text-default-color">
                   Fill out a form with your academic details
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Single Services --> */}
            {/* <!-- Single Services --> */}
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11">
                  <img src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-passport-50_olt35v.png" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Apply for Visa</h3>
                  <p className="font-size-4 text-default-color">
                    Fill out another form with your legal details
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
