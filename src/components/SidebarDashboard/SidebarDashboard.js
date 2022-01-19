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
          {/* <div className="my-15 px-11">
            <Link href="/dashboard-uni-registration">
              <a className="btn btn-primary btn-xl w-100 text-uppercase">
                <span className="mr-5 d-inline-block">+</span>Add a Uni
              </a>
            </Link>
          </div> */}
          <ul style={{marginTop:"30px"}} className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link href="/dashboard-main">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/monitor_yahvra.png" alt="" />Dashboard
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-office-checkin-waiting">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/work_sp7tby.png" alt="" />Office Check-in
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-enquiries">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/files_qjg6uy.png" alt="" />Enquiries{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-clients">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/rating_ks3yvo.png" alt="" />Clients{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-services">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903932/plane_qwnyky.png" alt="" />Services{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-partners">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/deal_xvhkmj.png" alt="" />Partners{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-products">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/delivery-box_kyjtwu.png" alt="" />Products{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-applications">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903931/resume_h1xatk.png" alt="" />Applications{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
       
       
            <li className="">
              <Link href="/dashboard-main-accounts-invoices">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/accounts_ji00gp.png" alt="" />Accounts{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-teams-users">
                <a className="px-10 py-1 my-1 font-size-5 font-weight-semibold flex-y-center">
                <img class="mr-7" style={{marginRight:"3px"}} height="25px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1640903930/brainstorm_d4r4vs.png" alt="" />Teams{" "}
                  {/* <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                    14
                  </span> */}
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/dashboard-main-agents">
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

export default Sidebar;
