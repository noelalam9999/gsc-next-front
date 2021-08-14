import React from "react";
import imgC from "../../assets/image/l1/jpg/image-3.png";
import imgL1 from "../../assets/image/l1/png/smal-logo1.png";
import imgL2 from "../../assets/image/l1/png/smal-logo2.png";
import imgL3 from "../../assets/image/l1/png/smal-logo3.png";
import imgL4 from "../../assets/image/l1/png/smal-logo4.png";
import imgL5 from "../../assets/image/l1/png/smal-logo5.png";
import Link from "next/link";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pt-7 pt-lg-16 pb-2 pb-lg-32">
        <div className="container">
          <div className="row pb-lg-6 justify-content-center">
            <div  
              className="col-xl-6 col-lg-5 col-md-10 col-sm-11"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* <!-- content-1 left-content start --> */}
              <div className="position-relative pr-xl-20 pr-md-15 pr-15">
                {/* <!-- content img start --> */}
                <img
                  src={imgC}
                  alt=""
                  className="w-100 rounded overflow-hidden"
                />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
                <div className="pos-abs-br pt-17 pb-9 pl-8 pr-12  bg-white shadow-2 rounded scale-p7 scale-xs-1 mb-n20 mr-n10 mr-xs-5 mr-sm-0 mb-xs-n10">
                  {/* <!-- check-mark start --> */}
                  <span className="pos-abs-tl circle-79 bg-green font-size-9 mt-n9 ml-n9 ">
                    <i className="fas fa-check text-white"></i>
                  </span>
                  {/* <!-- check-mark end --> */}
                  <p className="text-black-2 text-4 font-weight-bold mb-7">
                    <span className="font-weight-normal">Found</span> 50+ Universities
                  </p>
                  <div className="d-flex">
                    <ul className="list-unstyled list-overlapped-icon max-width-130px">
                      <li className="ml-0">
                        <a href="/#" className="circle-34">
                          <img src={imgL1} alt="" className="img" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src={imgL2} alt="" className="img img2" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src={imgL3} alt="" className="img img3" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src={imgL4} alt="" className="img img4" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img src={imgL5} alt="" className="img img5" />
                        </a>
                      </li>
                    </ul>
                    <p className="text-space-black font-size-4 mt-1">
                      +14 Scholarships
                    </p>
                  </div>
                </div>
                {/* <!-- abs-content end --> */}
              </div>
              {/* <!-- content-1 left-content end --> */}
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-1 start --> */}
              <div className="pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-md-13 pr-xl-15 pr-xxl-25 pr-0 ">
                {/* <!-- content-1 section-title start --> */}
                <h2 className="font-size-9 mb-8 pr-xxl-15">
                  How to Apply for Europe
                </h2>
             
                {/* <!-- content-1 section-title end --> */}
                {/* <!-- content-1 list-group start --> */}
                <ul className="list-unstyled pl-0">
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    TWo Visa Application Forms
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Valid Passport
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Passport's biometric data
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Proof  of residency
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Travel medical Insurance
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Proof of accomodation
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Letter of acceptance at an EU University/College/School
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6"></i>
                    Proof of Financial Qualifications
                  </li>
                </ul>
               
                <Link href="/#">
                  <a className="btn btn-green btn-h-60 text-white w-180 rounded-5 text-uppercase">
                    Contact Us
                  </a>
                </Link>
                {/* <!-- content-1 list-group end --> */}
              </div>
              {/* <!-- content-1 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
