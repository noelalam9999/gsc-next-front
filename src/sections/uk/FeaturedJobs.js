import React from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/uk-uni-1.jpg";
import imgF2 from "../../assets/image/l1/png/uk-uni-2.jpg";
import imgF3 from "../../assets/image/l1/png/uk-uni-3.jpg";
import imgF4 from "../../assets/image/l1/png/university_of_creative_arts.png";
import imgF5 from "../../assets/image/l1/png/uxbridge.jpg";
import imgF6 from "../../assets/image/l1/png/uni-of-hertfordshire.jpg";

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
                <Link href="/search/all">
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
                  <Link href="/university/78">
                    <a>
                      <img height="125px" src={imgF2} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/78">
                  <a className="font-size-3 d-block mb-0 text-gray">
                  Ulster University
                  </a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/78">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Accounting
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3.9/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/78">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <div className="card-btn-group">
                  <Link href="/apply/1/67">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/78">
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
                  <Link href="/university/79">
                    <a>
                      <img height="125px" src={imgF1} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/79">
                  <a className="font-size-3 d-block mb-0 text-gray">Cardiff and Vale</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/79">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                     Aviation Management
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/79">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <div className="card-btn-group">
                  <Link href="/apply/1/79">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/79">
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
                  <Link href="/university/77">
                    <a>
                      <img height="125px" src={imgF3} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/77">
                  <a className="font-size-3 d-block mb-0 text-gray">University of Winchester</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/77">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Finance
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        4.2/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/77">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
            
                <div className="card-btn-group">
                  <Link href="/apply/1/67">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/77">
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
                  <Link href="/university/76">
                    <a>
                      <img height="125px" src={imgF4} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/76">
                  <a className="font-size-3 d-block mb-0 text-gray">University of Creative Arts</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/76">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      International Business{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/76">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <div className="card-btn-group">
                  <Link href="/apply/1/76">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/76">
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
                  <Link href="/university/83">
                    <a>
                      <img height="125px" src={imgF5} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/83">
                  <a className="font-size-3 d-block mb-0 text-gray">Uxbridge College</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/83">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Computer Science{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        3.5/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/83">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
            
                <div className="card-btn-group">
                  <Link href="/apply/1/83">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/83">
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
                  <Link href="/university/67">
                    <a>
                      <img height="125px" src={imgF6} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/67">
                  <a className="font-size-3 d-block mb-0 text-gray">University of Hertfordshire</a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/67">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Political Science
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                       UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                       3.4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        80K-90K
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/67">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work White Studying
                      </a>
                    </Link>
                  </li>
                </ul>
                
                <div className="card-btn-group">
                  <Link href="/apply/1/67">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/67">
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
