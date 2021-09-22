import React, { useContext } from "react";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
//import imgL from "../../assets/image/logo-main-black.png";
import imgL from "../../assets/favicon2.png";
const Sidebar = () => {
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
            <Link href="/search">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Apply to a Uni
              </a>
            </Link>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/students/student-dashboard">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="icon icon-layout-11 mr-7"></i>Dashboard
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/students/student-dashboard-applications">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-briefcase mr-7"></i>Applications
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/students/student-dashboard-approved">
                <a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center">
                  <i className="fas fa-user mr-7"></i>Approved{" "}
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

export default Sidebar;
