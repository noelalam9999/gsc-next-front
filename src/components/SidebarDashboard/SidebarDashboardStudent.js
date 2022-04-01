import React, { useContext } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
//import imgL from "../../assets/image/logo-main-black.png";
import imgL from "../../assets/favicon2.png";
const SidebarDashboardStudent = () => {
  const gContext = useContext(GlobalContext);

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
            <Link href="/search/1">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Apply to a Uni
              </a>
            </Link>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/students/student-dashboard">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/students/student-dashboard-applications">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Applications
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/students/student-dashboard-approved">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640905537/checked_ticvfe.png" alt="" />Approved{" "}
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

export default SidebarDashboardStudent;
