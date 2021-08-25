import React from "react";
import Link from "next/link";


import imgF1 from "../../assets/image/svg/Africa.jpg";
import imgF2 from "../../assets/image/svg/institute-flag-2.png";
import imgF3 from "../../assets/image/svg/institute-flag-3.png";
import imgF4 from "../../assets/image/svg/south_asia.jpg";
import imgF5 from "../../assets/image/svg/institute-flag-5.png";
import imgF6 from "../../assets/image/svg/south-america.jpg";

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
                <h2 className="font-size-9 mb-6">Our Global Contacts<br/></h2>
                <p className="font-size-4 text-default-color px-xs-9 px-md-0">
               We have agents all-over the world
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
                      <img height="80px" src={imgF4} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      South Asia
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        100+ Agents
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
                          India
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Bangladesh
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Pakistan
                        </a>
                      </Link>
                    </li>   <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Bhutan
                        </a>
                      </Link>
                    </li>   <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Mayanmar
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
                      <img height="80px" src={imgF6} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                    South America
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        40+ Agents
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
                          Argentina
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                         Brazil
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Uruguay
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


            
            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src={imgF5} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      Middle East
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        30+ Agents
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
                          Saudi Arabia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          UAE
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Turkey
                        </a>
                      </Link>
                    </li>
                 
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
            
            </div> */}


            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
   
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src={imgF3} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      South East Asia
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        27+ Agents
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
                          Malaysia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Indonesia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Thailand
                        </a>
                      </Link>
                    </li>
                    
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
            
            </div> */}



            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-orange-2 mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src={imgF2} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      Eastern Europe
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        20+ Agents
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
                          Ukrain
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Turkey
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Serbia
                        </a>
                      </Link>
                    </li>
                
                  </ul>
                  <Link href="/#">
                    <a className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "></a>
                  </Link>
                </div>
              </div>
 
            </div>
 */}


            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                  <div className="square-52 bg-helio mr-8 rounded">
                    <Link href="/#">
                      <a>
                      <img height="80px" src={imgF1} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/#">
                      <a className="font-size-3 text-default-color line-height-2">
                      Africa
                      </a>
                    </Link>
                    <h3 className="font-size-6 mb-0">
                      <Link href="/#">
                        <a className="heading-default-color font-weight-semibold">
                        20+ Agents
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
                         Somalia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                         Zambia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                         Egypt
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
                  Start Recruiting{" "}
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
