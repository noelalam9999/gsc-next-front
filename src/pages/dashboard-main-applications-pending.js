import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import { useAuth } from '../../AuthUserContext';
import imgP1 from "../assets/image/table-one-profile-image-1.png";
import axios from 'axios';
import AppliedIntakeDate from "../components/Applications/AppliedIntakeDate";
import Partner from "../components/Applications/Partner";
import ClientPhone from "../components/Applications/ClientPhone";
import Product from "../components/Applications/Product";
import ProfilePicture from "../sections/agents/ProfilePicture";

const defaultJobs = [
  { value: "accomodation_service", label: "Accomodation Service" },
  { value: "australian_education", label: "Australian Education" },
  { value: "insurance_service", label: "Insurance Service" },
  { value: "us_education_f1", label: "US Education F1" },
  { value: "visa_service", label: "Visa Service" },
];

const DashboardMain = () => {
 
  const [List, setList] = useState([]);


  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      let res = await fetch('https://ci-gsc.com/application/?format=json');

      let todoList = await res.json();
      let filtered = await todoList.filter(function(val, i, a) {return val.status=="" || val.status==null || val.status==null;})
      setList(filtered)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },[])

  const  refreshList = async () => {
    const res = await fetch('https://ci-gsc.com/application/?format=json');
    console.log(res)
    const todoList = await res.json();
    setList(todoList)
 
  };
  const StartApply =  (item) =>  {

    item.status = "application started"
   
     axios
    .put(`https://ci-gsc.com/application/${item.id}/`, item)
    .then((res) => refreshList(1),alert("status changed to applied"))
    .catch((err) => console.log(err));
  
  return;
  }
  
  const ApplicationComplete =  (item) =>  {

    item.status = "applied"
   
     axios
    .put(`https://ci-gsc.com/application/${item.id}/`, item)
    .then((res) => refreshList(1),alert("status changed to applied"))
    .catch((err) => console.log(err));
  
  return;
  }
  const Archive =  (item) =>  {

    item.status = "archived"
   
     axios
    .put(`https://ci-gsc.com/application/${item.id}/`, item)
    .then((res) => refreshList(1),alert("status changed to applied"))
    .catch((err) => console.log(err));
  
  return;
  }
  const Rejected =  (item) =>  {

    item.status = "rejected"
   
     axios
    .put(`https://ci-gsc.com/application/${item.id}/`, item)
    .then((res) => refreshList(1),alert("status changed to rejected"))
    .catch((err) => console.log(err));
  
  return;
  }
  const Approved =  (item) =>  {

    item.status = "approved"
   
     axios
    .put(`https://ci-gsc.com/application/${item.id}/`, item)
    .then((res) => refreshList(1),alert("status changed to Approved"))
    .catch((err) => console.log(err));
  
  return;
  }
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
          
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applications</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by</p>
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
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr className="th-sticky">
                        <th    className="th-sticky"
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Application ID
                        </th>
                        <th  className="th-sticky"
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
                        <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Client Phone
                        </th>
                        <th  className="th-sticky"
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
                        
                        <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Product</th>
                       <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner</th>
                         <th className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner Branches</th>
<th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner's Client ID'</th>
                        <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Workflow</th>
                        <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By</th>

<th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By Branch</th><th    style={{position:"sticky!important",top:"0"}}
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Status</th>
<th className="th-sticky"
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Stage in Queue</th>
                      <th  className="th-sticky"
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Created At</th>
                        <th  className="th-sticky"
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                     
                      { List.map((item, index)=>(
                   <tr className="border border-color-2">
                          
                   <th scope="row" className="pl-6 border-0 py-7 pr-0">
        
                       <a className="media min-width-px-235 align-items-center">
                    
                         <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                           {item.id}
                         </h4>
                       </a>
                 
                   </th>
                   <td className="table-y-middle py-7 min-width-px-235 pr-0">
            
                       <a className="media min-width-px-235 align-items-center">
                       <ProfilePicture email={item.client_name}/>
                         <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                           {item.client_name}
                         </h4>
                       </a>
           
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
                   <td  
                        className="table-y-middle py-7 min-width-px-170 pr-0">

                    <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                       {item.status}
                     </h3>
                     
                   </td>
                   {/* <td  onMouseEnter={() => setStatusDropdownVisibility(true)}
                        onMouseLeave={() => setStatusDropdownVisibility(false)}
                        className="table-y-middle py-7 min-width-px-170 pr-0">

                     {StatusDropdownVisible == false &&(<h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                       {item.status}
                     </h3>)}
                     {StatusDropdownVisible == true && (
                     <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                       
                     </h3>
                   )}
                   </td> */}
                 
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

                   {item.status ==null && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                StartApply(item);
                              }}
                            >
                              Start Application
                            </a>
                          </div>
                        </td>)}
                   {item.status =="pending" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                StartApply(item);
                              }}
                            >
                              Start Application
                            </a>
                          </div>
                        </td>)}
                        {item.status =="" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                StartApply(item);
                              }}
                            >
                              Start Application
                            </a>
                          </div>
                        </td>)}
                        {item.status =="application started" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                ApplicationComplete(item);
                              }}
                            >
                              Application Complete
                            </a>
                          </div>
                        </td>)}
                        {item.status =="applied" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                Rejected(item);
                              }}
                            >
                              Set Rejected
                            </a>
                          </div>
                        </td>)}
                        {item.status =="applied" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                Approved(item);
                              }}
                            >
                              Set Approved
                            </a>
                          </div>
                        </td>)}
                        {item.status =="rejected" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                StartApply(item);
                              }}
                            >
                              Re-apply
                            </a>
                          </div>
                        </td>)}
                        {item.status =="rejected" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                            
                              href="/#"
                              className="font-size-3 font-weight-bold text-green-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                Archive(item);
                              }}
                            >
                              Archive
                            </a>
                          </div>
                        </td>)}
                        {item.status =="approved" && (<td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                          
                              Complete
                            
                          </div>
                        </td>)}
                 
                 
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


            
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
