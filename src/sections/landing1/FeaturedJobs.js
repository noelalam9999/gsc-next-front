import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/uk-uni-2.jpg";
import imgF2 from "../../assets/image/l1/png/Trent-University.jpg";
import imgF3 from "../../assets/image/l1/png/tafe.jpg";
import imgF4 from "../../assets/image/l1/png/middle-tennesse.jpg";
import imgF5 from "../../assets/image/l1/png/university_of_creative_arts.png";
import imgF6 from "../../assets/image/l1/png/east-china-uni.jpg";
import iconF1 from "../../assets/image/l1/png/accomodations.png";
import iconF2 from "../../assets/image/l1/png/internship.png";
import iconF3 from "../../assets/image/l1/png/offer-letter.png";
import iconF4 from "../../assets/image/l1/png/post-study-work-visa.png";
import iconF5 from "../../assets/image/l1/png/work-while-studying.png";
import renderItems from "../../../api";
import Api from "../../../api";


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
                <Link href="/search">
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
                  <Link href="/university/58">
                    <a>
                      <img height="80px" src={imgF1} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/58">
                  <a className="font-size-3 d-block mb-0 text-gray">
                  
                  </a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/58">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                    Ulster University
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 3.9/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $14k-19k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/58">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>

                </ul>
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/58">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/58">
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
                  <Link href="/university/59">
                    <a>
                    <img height="80px" src={imgF2} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/59">
                  <a className="font-size-3 d-block mb-0 text-gray"></a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/59">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                    Trent University
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Canada
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $36k-42k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/59">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>
                </ul>
                
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/59">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/59">
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
                  <Link href="/university/60">
                    <a>
                    <img height="80px" src={imgF3} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/60">
                  <a className="font-size-3 d-block mb-0 text-gray"></a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/60">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      Tafe Gold Coast
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        Australia
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 4.2/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $10k-16k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/60">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/60">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/60  ">
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
                  <Link href="/university/61">
                    <a>
                    <img height="80px" src={imgF4} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/61">
                  <a className="font-size-3 d-block mb-0 text-gray"></a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/61">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                    Middle Tennessee State University{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        USA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 3/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $30k-38k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/61">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>
                </ul>
              
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/61">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/61">
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
                  <Link href="/university/62">
                    <a>
                    <img height="80px" src={imgF5} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/63">
                  <a className="font-size-3 d-block mb-0 text-gray"></a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/63">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                      University of Creative Arts{" "}
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                        UK
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 3.5/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $10k-14k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>
                </ul>
               
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/63">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/63">
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
                  <Link href="/university/63">
                    <a>
                    <img height="80px" src={imgF6} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/university/63">
                  <a className="font-size-3 d-block mb-0 text-gray"></a>
                </Link>
                <h2 className="mt-n4">
                  <Link href="/university/63">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                    East China University of Science & Technology
                    </a>
                  </Link>
                </h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                        <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                       China
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        Ranking : 3.4/5
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                        <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                        Average Annual Fee: $10k-14k
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF1} alt="" />
                      {" "} Accomodation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF2} alt="" />
                        Internship Opportunity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF3} alt="" />
                      Offer Letter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF4} alt="" />
                        Post-Study Work Visa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/university/63">
                      <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <img style={{marginRight:"3px"}} height="20px" src={iconF5} alt="" />
                        Work While Studying
                      </a>
                    </Link>
                  </li>
                </ul>
              
                <p className="mb-7 font-size-4 text-gray">
                </p>
                <div className="card-btn-group">
                  <Link href="/university/63">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                      Apply Now
                    </a>
                  </Link>
                  <Link href="/university/63">
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
