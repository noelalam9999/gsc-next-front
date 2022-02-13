import React, { useContext,useEffect } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
//import imgL from "../../assets/image/logo-main-black.png";
import imgL from "../../assets/favicon2.png";
const SidebarDashboardTeam = () => {
  const gContext = useContext(GlobalContext);
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/team-member/?format=json');
      console.log(res)
      const todoList = await res.json();
      setList(todoList)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },[])
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
          {/* <div className="my-15 px-11">
            <Link href="/dashboard-uni-registration">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Add a Uni
              </a>
            </Link>
          </div> */}
          <ul style={{marginTop:"30px"}} className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/team-member/team">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a>
              </Link>
            </li>
         
        
            <li className="">
              <Link href="/team-member/team-clients">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/rating_ks3yvo.png" alt="" />Clients{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
           
            <li className="">
              <Link href="/team-member/team-partners">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/deal_xvhkmj.png" alt="" />Partners{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
    
            <li className="">
              <Link href="/team-member/team-applications">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Applications{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/team-member/team-agents">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/agent_ygpzuw.png" alt="" />Agents{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
       
       
        
        
     
        
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

export default SidebarDashboardTeam;
