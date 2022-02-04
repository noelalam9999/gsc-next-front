import React, { useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import ProfileSidebarAgent from "../../components/ProfileSidebar/ProfileSidebarAgent";
import {useRouter} from 'next/router'

import imgT1 from "../../assets/image/l3/png/team-member-1.png";
import imgT2 from "../../assets/image/l3/png/team-member-2.png";
import imgT3 from "../../assets/image/l3/png/team-member-3.png";
import imgT4 from "../../assets/image/l3/png/team-member-4.png";
import imgT5 from "../../assets/image/l3/png/team-member-5.png";
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import CertificateOne from "../../sections/agents/Certificate";
import OtherAgents from "../../sections/agents/OtherAgents";
const CandidateProfile = () => {
  const router = useRouter();
  const agentId = router.query.agentid;
 
  const [List, setList] = useState([]);
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/agents/');
      const todoList = await res.json();
      console.log(todoList)
      const filtered = todoList.filter(function(val, i, a) {return val.id==agentId;}); 
      setList(filtered)      
    } catch (e) {
      console.log(e);
  }
    }
    
   

 fetchMyAPI()



  },agentId)


  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 dark-mode-texts">
                <div className="mb-9">
                 
                    <a onClick={() => router.back()} className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                    </a>
           
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row">
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                <ProfileSidebarAgent List={List}/>
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Overview
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="two"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Contact
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                    { List.map((item, index)=>(
                      <Tab.Pane eventKey="one">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Students 
                          </h4>
                          <p className="font-size-4 mb-8">
                            {item.students_sent_abroad}
                          </p>
                          
                        </div>
                   
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Number of Staff
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.number_of_staff}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Certifications
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <CertificateOne user = {item.email} />
                           
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Services
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.services_provided}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Office Address
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.offices}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Sub-agents
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.subagents}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Associations
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.associations}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Consultancy fee
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  {item.charge}
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                   
                       
                      </Tab.Pane>
                      ))}
                      <Tab.Pane eventKey="two">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                          <form action="/">
                            <div className="row">
                              {/* <div className="col-12 mb-7">
                                <label
                                  htmlFor="name3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Your Name
                                </label>
                                <input
                                  id="name3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Jhon Doe"
                                />
                              </div> */}
                              {/* <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="email3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  E-mail
                                </label>
                                <input
                                  id="email3"
                                  type="email"
                                  className="form-control"
                                  placeholder="example@gmail.com"
                                />
                              </div> */}
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="subject3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Subject
                                </label>
                                <input
                                  id="subject3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Special contract"
                                />
                              </div>
                              <div className="col-lg-12 mb-7">
                                <label
                                  htmlFor="message3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  id="message3"
                                  placeholder="Type your message"
                                  className="form-control h-px-144"
                                ></textarea>
                              </div>
                              <div className="col-lg-12 pt-4">
                                <button className="btn btn-primary text-uppercase w-100 h-px-48">
                                  Send Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <OtherAgents user={List}/>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
