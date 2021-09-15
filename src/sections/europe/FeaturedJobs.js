import React from "react";
import Link from "next/link";
import imgB1 from "../../assets/image/l1/png/europe-logo-1.jpg";
import imgB2 from "../../assets/image/l1/png/europe-logo-2.jpg";
import imgB3 from "../../assets/image/l1/png/europe-logo-3.jpg";
import imgB4 from "../../assets/image/l1/png/europe-logo-4.jpg";
import imgB5 from "../../assets/image/l1/png/europe-logo-5.jpg";
import imgB6 from "../../assets/image/l1/png/europe-logo-6.png";

import iconF1 from "../../assets/image/l1/png/accomodations.png";
import iconF2 from "../../assets/image/l1/png/internship.png";
import iconF3 from "../../assets/image/l1/png/offer-letter.png";
import iconF4 from "../../assets/image/l1/png/post-study-work-visa.png";
import iconF5 from "../../assets/image/l1/png/work-while-studying.png";

const FeaturedJobs = () => {
  return (
    <>
      {/* <!-- FeaturedJobs Area -->  */}
      <div className="pt-11 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">Featured Programs</h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-white text-uppercase">
                    Explore All
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB1} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">
                  Budapest Metropolitian University
                  </a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Accounting
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Hungary
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3.9/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB2} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Munich Business School</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                     Aviation Management
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Germany
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
              
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB3} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Royal Irish Academy</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Finance
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Ireland
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        4.2/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
                
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB4} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">University of Nicosia</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      International Business{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Cyprus
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
              
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB5} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Synergy University</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Computer Science{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Russia
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3.5/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
             
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 px-xxl-7"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <!-- Start Feature One --> */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <Link href="/#">
                    <a>
                      <img height="125px" src={imgB6} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Yasar University</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Political Science
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                       Turkey
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                       3.4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
             
                <div className="card-btn-group">
                  <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Feature One --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
