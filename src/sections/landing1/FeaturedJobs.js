import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/uk-uni-2.jpg";
import imgF2 from "../../assets/image/l1/png/Trent-University.jpg";
import imgF3 from "../../assets/image/l1/png/namseoul.jpg";
import imgF4 from "../../assets/image/l1/png/middle-tennesse.jpg";
import imgF5 from "../../assets/image/l1/png/segi.jpg";
import imgF6 from "../../assets/image/l1/png/east-china-uni.jpg";
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
                      <img height="80px" src={imgF1} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">
                  Ulster University
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
                        UK
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                We are a university with a national and international reputation for excellence, innovation and regional engagement, making a major contribution to the economic, social and cultural development of Northern Ireland.
                </p>
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
                    <img height="80px" src={imgF2} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Trent University</a>
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
                        Canada
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                Internationalization is an integral part of Trent's commitment to unite diversity through people and experience. It involves bringing the world to Trent and opening up amazing opportunities for international discovery.
                </p>
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
                    <img height="80px" src={imgF3} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Namseoul University</a>
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
                        Korea
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                NamSeoul University is located in Cheonan City and was established in 1994 as a private university. In 2015, the NamSeoul University student body was approximately 12,000 students, including graduate students. The University offers thirty-four major courses from four different schools, a Korean graduate school, and the International Graduate School.
                </p>
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
                    <img height="80px" src={imgF4} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">Middle Tennessee State University</a>
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
                        USA
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                Offering 300+ undergraduate and graduate degrees of study in diverse disciplines that prepare students for high-demand careers.
                Many of our programs have earned national and, sometimes, international recognition for excellence.
                </p>
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
                    <img height="80px" src={imgF5} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">SEGi University</a>
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
                        Malaysia
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                SEGi University and Colleges first opened its doors as Systematic College in 1977 in the heart of Kuala Lumpur’s commercial district; offering globally recognised professional qualifications. 
                Since then, SEGi has experienced significant growth by adapting and catering to an increasing demand for tertiary education and professional qualifications in Malaysia.
                </p>
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
                    <img height="80px" src={imgF6} alt="" />
                    </a>
                  </Link>
                </div>
                <Link href="/#">
                  <a className="font-size-3 d-block mb-0 text-gray">East China University of Science & Technology</a>
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
                       China
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
                </ul>
                <p className="mb-7 font-size-4 text-gray">
                10/1952  East China Institute of Chemical Technology was founded with the approval of the central government. 
                It was the first single-subject chemical institute in China and was formed through the consolidation of the chemical departments of Jiaotong University, Aurora University, Utopia University, Soochou University and Jiangnan University
                </p>
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
