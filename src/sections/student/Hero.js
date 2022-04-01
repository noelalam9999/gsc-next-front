import React,{useState} from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgC1 from "../../assets/image/l3/png/student-hero.jpg";
import imgC2 from "../../assets/image/l3/png/hero-image-2.png";
import { useRouter } from 'next/router';
const defaultCountries = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "europe", label: "Europe" },
];

const Hero = () => {


  const [programName, setProgramName] = useState("");
  const [studyDestination, setStudyDestination] = useState("");
  const router = useRouter();
  const onSubmit = event => {
    console.log(studyDestination)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    
        router.push(`/search/`+studyDestination.value+`/`+programName);
    
  };
  const onStudyDestinationChange = selectedOption => {
    setStudyDestination(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative z-index-1  mt-25 mt-md-15 mt-lg-0 mt-xl-22">
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-26 pb-lg-26 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-dealy="750"
            >
              <div className="row">
                <div className="col-md-8 col-sm-10">
                  <h1 className="font-size-11 mb-12">
                    Resettle Onto Your Dream Study Destination
                  </h1>
                  <p className="font-size-6">
                  Global Study Contacts Specialize in Education Consultancy, Visa Processing, Part-time Job Scouting, PR and Everything you need to start your new life
                  </p>
                </div>
              </div>
              <div className="pt-12">
              <form
                action="/"
                className="search-form"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                  <div className="filter-inputs">
                    <div className="form-group position-relative">
                      <input
                        className="form-control focus-reset pl-13"
                        type="text"
                        id="keyword"
                        name ="name"
                        placeholder="Type Program Name"
                        onChange={(event) => setProgramName(event.target.value)}
                        value={programName}
                      />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- .select-city starts --> */}
                    <div className="form-group position-relative">
                      <Select
                        options={defaultCountries}
                        className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                        border={false}
                        onChange={(event) => setStudyDestination(event.target.value)}
                        value={studyDestination}
                      />

                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- ./select-city ends --> */}
                  </div>
                  <div className="button-block">
                  <Button
                      
                      className="line-height-reset h-100 btn-submit w-100 text-uppercase"
                      onClick ={ onSubmit}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
              </div>
            </div>
            <div className="col-12 pos-abs-tr z-index-n1 position-static position-lg-absolute ml-auto hero-image-positioning-2">
              <div className="image-group row justify-content-center">
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="750"
                  >
                    <img src={imgC1} alt="hero 1" />
                  </div>
                </div>
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="1200"
                  >
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
