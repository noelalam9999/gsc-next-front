import React from "react";

import imgB1 from "../../assets/image/l1/png/Lakehead-uni.jpg";
import imgB2 from "../../assets/image/l1/png/fom.jpg";
import imgB3 from "../../assets/image/l1/png/msu-texas.jpg";
import imgB4 from "../../assets/image/l1/png/uni-of-debrecen.jpg";
import imgB5 from "../../assets/image/l1/png/uni-of-winchester.jpg";
import imgB6 from "../../assets/image/l1/png/victoria-uni.jpg";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="brands pt-29 pt-lg-30 pb-10 pb-lg-22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-9 text-center">
                <h5 className="font-size-5 font-weight-normal text-gray">
                  Get recruited by the top Universities
                </h5>
              </div>
            </div>
          </div>
          {/* <!-- Brand Logos --> */}
          <div className="row align-items-center justify-content-center justify-content-lg-between ">
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB1} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB2} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB3} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB4} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB5} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <img style={{height:'130px',borderRadius:'10px'}} src={imgB6} alt="" />
            </div>
          </div>
          {/* <!-- End Brand Logos --> */}
        </div>
      </div>
    </>
  );
};

export default Brands;
