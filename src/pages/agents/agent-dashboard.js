import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";
import { useAuth } from '../../../AuthUserContext';
import imgP1 from "../../assets/image/table-one-profile-image-1.png";

import AppliedIntakeDate from "../../components/Applications/AppliedIntakeDate";
import Partner from "../../components/Applications/Partner";
import ClientPhone from "../../components/Applications/ClientPhone";
import Product from "../../components/Applications/Product";
import ProfilePicture from "../../sections/agents/ProfilePicture";
import ApprovedApplicationsCount from "../../sections/agents/ApprovedApplicationsCount";
import StudentsCount from "../../sections/agents/StudentsCount";
import SubAgentsCount from "../../sections/agents/SubAgentsCount";

const IntendedSemester = [
  {name:"IntendedSemester", value: "fall", label: "Fall" },
  { name:"IntendedSemester", value: "spring", label: "Spring" },
  {name:"IntendedSemester", value: "summer", label: "Summer" },

];

const DashboardMain = () => {
  const [userType, setUserType] = useState("");
 const { authUser, loading,signOut } = useAuth();
  const [List, setList] = useState([]);
  const [ApprovedApplications, setApprovedApplications] = useState("")
  const [userList, setUserList] = useState([]);
  const [isActive,setIsActive] = useState(false)
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      let res = await fetch('https://ci-gsc.com/students/?format=json');
      let todoList = await res.json();
      let filtered = todoList.filter(function(val, i, a) {return val.added_by==authUser;});
      res = await fetch('https://ci-gsc.com/application/?format=json');
      todoList = await res.json();

      let filtered_application = []
      filtered.forEach(function(item){
      filtered_application = filtered_application.concat(todoList.filter(function(val, i, a) {return val.client_name==item.email;}))})

      setList(filtered_application)

       
    } catch (e) {
      console.log(e);
  }
    }

    async function fetchMyAPI2() {
      try {
  console.log(authUser)
  const res = await fetch('https://ci-gsc.com/agents/?format=json');
  
  const todoList = await res.json();
  let filtered = await todoList.filter(function(val, i, a) {return val.email==authUser;})
  console.log(filtered[0].active_status)
  if(filtered[0].active_status=="active"){
  setIsActive(true)
  }
  } catch (e) {
  console.log(e);
  }
  }
    
  

 fetchMyAPI()
 fetchMyAPI2()
  },authUser)


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
        <div className="dashboard-main-container mt-10 mt-lg-25">
          <div className="container">
          { isActive==false &&
          <>
              <div className="row mb-3">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12">
                      <a
                        href="/#"
                        className="media bg-red rounded-4 pl-8 pt-2 pb-2 pr-7 hover-shadow-1 mb-3 shadow-8"
                      >
                          <p className="font-size-4 font-weight-normal text-white mb-0">
                          Approval Pending from admin. Please fill up your profile details if you have not already.  
                          </p>
                      </a>
                    </div>
                </div>
          </>
          }
     

            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
            <ApprovedApplicationsCount/>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={List.length} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                     Active Applications
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-eye"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <StudentsCount/>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-egg-blue bg-egg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  {/* <!-- Category Content --> */}
               <SubAgentsCount/>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
            </div>
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">In Progress Applications {userType}</h3>
                 
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Intended Semester:</p>
                    <div className="h-px-48">
                      <Select
                        options={IntendedSemester}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
               
                
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                    <tr className="th-sticky" >
                        <th className="th-sticky" 
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Application ID
                        </th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Client Name
                        </th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                         Applied Intake Date
                        </th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Client Phone
                        </th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Client Assignee
                        </th> 
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Application Assignees
                        </th>
                        
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Product</th>
                       <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner</th>
                         <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner Branches</th>
<th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner's Client ID'</th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Workflow</th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By</th>

                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By Branch</th><th style={{position:"sticky!important",top:"0"}}
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Status</th>
                      <th className="th-sticky"
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Stage in Queue</th>
                      <th className="th-sticky"
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Created At</th>
                        <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                     
                      { List.map((item, index)=>(
                        <tr className="border border-color-2">
                          
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link href="/candidate-profile">
                            <a className="media min-width-px-235 align-items-center">
                         
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                {item.id}
                              </h4>
                            </a>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                        <Link href="/candidate-profile">
                            <a className="media min-width-px-235 align-items-center">
                            <ProfilePicture email={item.client_name}/>
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                {item.client_name}
                              </h4>
                            </a>
                          </Link>
                        </td>

                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                           
                          <AppliedIntakeDate client={item.client_name}/>
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                           
                            <ClientPhone client={item.client_name}/>
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.client_assignee}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.application_assignee}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                         
                            <Product client={item.client_name}/>
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            
                           <Partner uni={item.partner}/>
                          </h3>
                        </td>
                        
                        
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.partner_branches}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.partner_client_id}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.workflow}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.application_start_by}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.application_start_by_branch}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.status}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.status_in_queue}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.created_at}
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



                {/* <div className="pt-2">
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
                </div> */}
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
            </div> */}
            {/* <div className="mb-18">
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
            </div> */}
            {/* <div className="mb-18">
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
            </div> */}
            {/* <div className="mb-18">
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
