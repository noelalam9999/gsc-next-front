import React from "react";
import Link from "next/link";
import { useAuth } from '../../../AuthUserContext';

const Categories = () => {
  const { user } = useAuth();

  console.log(user)
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div className="pb-13 pb-lg-25 bg-gradient-2">
        <div className="container">
          <hr className="pt-13 pt-lg-20" />
          {/* <!-- Section Top --> */}
          <div className="row align-items-center justify-content-center">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-12 mb-lg-17">
                <h2 className="font-size-10 font-weight-bold mb-8">
                  Continue As...
                </h2>
                <p className="font-size-5 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-6">
                  
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Section Top --> */}
          <div
            className="row justify-content-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/student-registration">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-blue square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                  <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937619/student_mm2r0b.svg"/>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Students
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>20,000</span> Enrolled
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/dashboard-uni-registration">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-spray square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                  <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937620/university_uanz3o.png"/>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Institutes
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>200+</span> Affiliations
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/dashboard-agent-registration">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-coral square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                  <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937620/call_y22jrr.png"/>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Agents
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>100+</span> in Network
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/dashboard-service-registration">
                <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                  <div className="text-white bg-red square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                  <img height="80px" src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937895/certificate_m0jyqf.png"/>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                      Service Provider
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>20+</span> Industries
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
        
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
        
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
        
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
         
            {/* <!-- End Single Category --> */}
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="text-center pt-5 pt-lg-13">
                <Link href="/#">
                  <a className="btn btn-outline-black-2 btn-lg text-uppercase">
                    Explore All
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Categories;
