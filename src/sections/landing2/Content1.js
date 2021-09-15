import React from "react";
import imgC from "../../assets/image/l2/png/content-2-img1.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pt-13 pt-lg-30 pb-13 pb-lg-30">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-8 col-sm-10 col-xs-11 mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* <!-- content-1 left-content start --> */}
              <div className="position-relative pr-lg-20 pr-xs-15 pr-9 ">
                {/* <!-- content img start --> */}
                <img style={{borderRadius:"20px"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1624403077/pexels-ekrulila-3837494_tq28qz.jpg" alt="" className="w-100" />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
                <div className="abs-content pos-abs-br bg-white shadow-2 pl-7 pt-8 pb-1 pr-11 max-width-px-311 rounded mb-15 mb-xs-18 mb-lg-15 mb-xl-18">
                  {/* <!-- media start --> */}
                  <div className="media mb-5">
                    {/* <!-- check-mark start --> */}
                    <span className="check-mark bg-yellow-2 circle-41">
                      <i className="fas fa-check text-white  font-size-6"></i>
                    </span>
                    {/* <!-- check-mark end --> */}
                    {/* <!-- media body start --> */}
                    <div className="media-body pl-5">
                      <h6 className="mb-0 font-size-3 text-green text-uppercase">
                        Enrollment alert!
                      </h6>
                      <p className="mb-0 font-size-4 text-black-2">
                        100+ univeristies have just started their intake for this year
                      </p>
                    </div>
                    {/* <!-- media body start --> */}
                  </div>
                  {/* <!-- media end --> */}
                </div>
                {/* <!-- abs-content end --> */}
              </div>
              {/* <!-- content-1 left-content end --> */}
            </div>
            <div
              className="col-xl-5 col-lg-6 col-md-8 col-xs-10"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-1 start --> */}
              <div className="content-1 pl-xl-5 pl-xxl-11 pr-xxl-10">
                {/* <!-- content-1 section-title start --> */}
                <h2 className="font-size-9 mb-md-15 mb-13">
                  Why Choose <br className="d-none d-sm-block" />
                  Global Study Contacts
                </h2>
             
                {/* <!-- content-1 section-title end --> */}
                {/* <!-- media start --> */}
                <div className="media mb-11">
                  {/* <!-- media icon start --> */}
                  <div className="media-icon px-6 py-5 bg-green-opacity-2 rounded-5">
                    <i className="icon icon-layout-11 text-green"></i>
                  </div>
                  {/* <!-- media icon start --> */}
                  {/* <!-- media body start --> */}
                  <div className="media-body pl-7">
                    <h5 className="mb-5 h5">30 years of Un-detered Service</h5>
                    <p className="mb-0 font-size-4 text-default-color">
                      Global Study Contacts has been working tirelessly for the past 30 years to ensure placement of students in the right countries 
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
                {/* <!-- media start --> */}
                <div className="media mb-11">
                  {/* <!-- media icon start --> */}
                  <div className="media-icon px-6 py-5 bg-yellow-2-opacity-2 rounded-5">
                    <i className="fa fa-search text-yellow-2"></i>
                  </div>
                  {/* <!-- media icon start --> */}
                  {/* <!-- media body start --> */}
                  <div className="media-body pl-7">
                    <h5 className="mb-5 h5">Student First Policy</h5>
                    <p className="mb-0 font-size-4 text-default-color">
                    Our philosophy is that the student comes first. Our counselors work hard to ensure that they help students make an informed decision about their study choices. 
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
                {/* <!-- media start --> */}
                <div className="media">
                  {/* <!-- media icon start --> */}
                  <div className="media-icon px-6 py-5 bg-red-opacity-2 rounded-5">
                    <i className="fa fa-industry text-red"></i>
                  </div>
                  {/* <!-- media icon start --> */}
                  {/* <!-- media body start --> */}
                  <div className="media-body pl-7">
                    <h5 className="mb-5 h5">Free Consultancy</h5>
                    <p className="mb-0 font-size-4 text-default-color">
                     You only pay when we have succeeded in securing your Student Visa
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
