import React from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/svg/icon-leaf.svg";
import imgF3 from "../../assets/image/svg/icon-shark-2.svg";
import imgF4 from "../../assets/image/svg/text-K.svg";
import imgF5 from "../../assets/image/svg/icon-thunder.svg";
import imgF6 from "../../assets/image/svg/text-asios.svg";

const FeaturedJobs = () => {
  return (
    <>
      {/* <!-- FeaturedJobs Area -->  */}
      <div className="bg-default-2 pt-12 pt-lg-25 pb-12 pb-lg-25">
        <div className="container">
          {/* <!-- Section title --> */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
              <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
                <h2 className="font-size-9 mb-6">Most Popular Institutes</h2>
                <p className="font-size-4 text-default-color px-xs-9 px-md-0">
                  Choose from the widest Variety of Universities and Programs for your Students
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Section title --> */}
          <div
            className="row justify-content-center "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-pink mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616453995/kpu_ywfyqn.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      KPU
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        Accounting
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Canada
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked"></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-indigo mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616452959/uni_profile_16011_d1e3l0.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      European University of Cyprus
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        Aviation Management
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Cyprus
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616452959/winchester_akdxjt.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      University of Winchester
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        Finance
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          UK
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616452959/resolution-logo_ljk140.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      University of Greenwich
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        International Business
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          UK
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-orange-2 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616452959/ur_logo_w65icb.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      University of Regina
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        Computer Science
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Canada
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-helio mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1616452959/sKJDXt-F_400x400_mwqjkp.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      COTHM
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        Political Science
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="d-flex pt-17">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Cyprus
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center pt-md-11 ">
              <Link href="/#">
                <a className="text-green font-weight-bold text-uppercase font-size-3">
                  See 545 more programs{" "}
                  <i className="fas fa-arrow-right ml-3"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
