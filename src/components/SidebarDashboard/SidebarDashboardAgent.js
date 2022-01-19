import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
//import imgL from "../../assets/image/logo-main-black.png";
import imgL from "../../assets/favicon2.png";
import { useAuth } from '../../../AuthUserContext';
import { useRouter } from 'next/router';

const SidebarDashboardAgent = () => {
   const gContext = useContext(GlobalContext);
   const { authUser, loading,signOut } = useAuth();
   const [isActive,setIsActive] = useState(false)
   const router = useRouter();

   const onAddStudentClick = ()=>{
if (isActive == true){
  router.push("/agents/agent-dashboard-client-registration")  
}
else{
  alert("You are not allowed to add students yet. Please contact the admin if you think there is something wrong. If your registration is not complete please fill up all the fields in the registration form to complete your registration")
}
 }
  async function fetchMyAPI() {
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

useEffect(() =>  {

  fetchMyAPI()
 
   },authUser)
  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <Link href="/">
              <a>
               
              </a>
            </Link>
          </div>
          <div className="my-15 px-11">
            {/* <Link href="/agents/agent-dashboard-client-registration"> */}
              <a     onClick={(e) => {
                                e.preventDefault();
                                onAddStudentClick();
                              }}
                               className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Add A Student
              </a>
            {/* </Link> */}
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/agents/agent-dashboard">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/agents/agent-dashboard-applications">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Applications
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/agents/agent-dashboard-clients">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/rating_ks3yvo.png" alt="" />Students
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/agents/agent-dashboard-applications-approved">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640905537/checked_ticvfe.png" alt="" />Approved{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    1
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/agents/agent-dashboard-agents">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Sub-agents{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    1
                  </span> */}
                </a>
              </Link>
            </li>
            {/* <li className="">
              <Link href="/dashboard-settings">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-cog mr-7"></i>Settings
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </Collapse>
      <a
        href="/#"
        className="sidebar-mobile-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </a>
    </>
  );
};

export default SidebarDashboardAgent;
