import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import { useAuth } from '../../AuthUserContext';
import imgP1 from "../assets/image/table-one-profile-image-1.png";
import imgP2 from "../assets/image/table-one-profile-image-2.png";
import imgP3 from "../assets/image/table-one-profile-image-3.png";
import imgP4 from "../assets/image/table-one-profile-image-4.png";
import imgP5 from "../assets/image/table-one-profile-image-5.png";

const defaultJobs = [
  { value: "pd", label: "Under-graduate" },
  { value: "gd", label: "Post-Graduate" },
  { value: "fd", label: "Diploma" },
  
];

const DashboardMain = () => {
 
  const [List, setList] = useState([]);

  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/students/?format=json');
      console.log(res)
      const todoList = await res.json();
      setList(todoList)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },[])
console.log(List)

  const gContext = useContext(GlobalContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-4">
                {/* <!-- Single Category --> */}
                <a
                  href="/dashboard-main-clients-prospects"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  {/* <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div> */}
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={6} end={5} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                   Prospects
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-3 col-sm-3">
                {/* <!-- Single Category --> */}
                <a
                  href="/dashboard-main-clients"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  {/* <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div> */}
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={256} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                     Clients
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-3">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  {/* <div className="text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-eye"></i>
                  </div> */}
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={4}
                            decimal="."
                            decimals={1}
                            end={16.5}
                          />
                        </span>
                        K
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                     Archived
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
        
          
            </div>
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Clients</h3>
                </div>
                <div className="col-lg-4">
                      
                      <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                     
                        
                        <div className="h-px-48">
                          <Select
                            options={defaultJobs}
                            className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                            border={false}
                          />
                        </div>
                      </div>
                    </div>
                <div className="col-lg-2">
                <div style={{marginLeft:'20px', paddingTop:'5px'}} className="h-px-48">
                    <Link
                  
                  href="/dashboard-main-add-client"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   gContext.toggleSignUpModal();
                  // }}
                ><a className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`}>
                  Add Client</a> 
                </Link>
                    </div>
                    </div>
               
              </div>
            
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Added By
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Gender   
                        </th>
                   
                    
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Date of Birth  
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Passport </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Country</th>
                            <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Address</th>
                           <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Previous Qualification</th>
                           <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >IELTS Band</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Desired Level</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Study Destination</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Intended Semester</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Desired Subject</th>
                        
                          <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Assignee</th>
                          

<th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Status</th>
                          <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Applications</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Last Updated</th>

<th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Preffered Intake</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                     
                      { List.map((item, index)=>(
                        <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link href={`/student/`+item.id}>
                            <a className="media min-width-px-235 align-items-center">
                              <div className="circle-36 mr-6">
                                <img src={imgP1} alt="" className="w-100" />
                              </div>
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                {item.name}
                              </h4>
                            </a>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Self
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.gender}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.mobile}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.birth_date} / {item.birth_month} / {item.birth_year}
                          </h3>
                        </td>
                        
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                        <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Passport
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.country} 
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.address1}, {item.address2} 
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.prev_qualification}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.IELTSBand}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.Desiredlevel}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.StudyDestination}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.IntendedSemester}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.DesiredSubject}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                          {item.email}
                          </h3>
                        </td>
                     
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link href="/contact">
                              <a className="font-size-3 font-weight-bold text-green text-uppercase">
                                Contact
                              </a>
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link href="/#">
                              <a className="font-size-3 font-weight-bold text-red-2 text-uppercase">
                                Reject
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      
                      
                  )
                     )


                     } 
                    
                 
                    </tbody>
                  </table>
                </div>
                <div className="pt-2">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
                      <li className="page-item rounded-0 flex-all-center">
                        <a
                          href="/#"
                          className="page-link rounded-0 border-0 px-3active"
                          aria-label="Previous"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item disabled">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          ...
                        </a>
                      </li>
                      <li className="page-item ">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          7
                        </a>
                      </li>
                      <li className="page-item rounded-0 flex-all-center">
                        <a
                          href="/#"
                          className="page-link rounded-0 border-0 px-3"
                          aria-label="Next"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>


            {/* <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Client Application Status</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Senior Project Manager
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            New York
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            47
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                 
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Application By User</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Senior Project Manager
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            New York
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            47
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                 
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Partners By Application</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Senior Project Manager
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            New York
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            47
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                 
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Products By Application</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
                <div className="table-responsive ">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0 border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Job Type
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Created on
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        >
                          Total Applicants
                        </th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="pl-4 border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th
                          scope="row"
                          className="pl-6 border-0 py-7 min-width-px-235"
                        >
                          <div className="">
                            <Link href="/job-details">
                              <a className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                Senior Project Manager
                              </a>
                            </Link>
                          </div>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-135">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Full-Time
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-125">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            New York
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-155">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-205">
                          <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">
                            47
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-80">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-green text-uppercase"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100">
                          <a
                            href="/#"
                            className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                 
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
