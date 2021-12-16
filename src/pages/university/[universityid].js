import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";

import imgB1 from "../../assets/image/l1/png/feature-brand-1.png";
import imgB2 from "../../assets/image/l1/png/feature-brand-4.png";
import imgB3 from "../../assets/image/l1/png/feature-brand-5.png";
import imgB4 from "../../assets/image/l3/png/github-mark.png";
import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import iconC from "../../assets/image/svg/icon-clock.svg";
import imgB5 from "../../assets/image/l3/png/universal.png";
import { useAuth } from '../../../AuthUserContext';
import axios from 'axios';
import {useRouter} from 'next/router'

const CompanyProfile = () => {
  const router = useRouter();
  const uniId = router.query.universityid;
  const [List, setList] = useState([]);
  const { authUser, loading,signOut } = useAuth();
  const [record, setRecord] = useState({
    client_name: '',
    partner:'',
      
  });

  const onSubmit = event => {
    record.client_name = authUser
    record.partner = uniId
    console.log(record)
    axios
    .post("https://ci-gsc.com/application/", record)
    .then((res) => alert("Your request to apply to "+List[0].name+" has been received. GSC will evaluate and reach out to you shortly"))
    .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
  }

  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/uni/?format=json');
      console.log(res)
      const todoList = await res.json();
      const filtered = todoList.filter(function(val, i, a) {return val.id==uniId;});
      setList(filtered)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },uniId)


  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link href="/#">
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            
            { List.map((item, index)=>(
            <div className="row">
              {/* <!-- Company Profile --> */}
              <div className="col-12 col-xl-9 col-lg-8">
                <div className="bg-white rounded-4 pt-11 shadow-9">
                  <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                    <Link href="/#">
                      <a className="mr-xs-7 mb-5 mb-xs-0">
                        <img
                          className="square-72 rounded-6"
                          src={imgF1}
                          alt=""
                        />
                      </a>
                    </Link>
                    <div className="">
                      <h2 className="mt-xs-n5">
                      
                        <Link href="/#">
                          <a className="font-size-6 text-black-2 font-weight-semibold">
                            {item.name}
                          </a>
                        </Link>
                      </h2>
                      <span className="mb-0 text-gray font-size-4">
                        {item.country}
                      </span>
                    </div>
                  </div>
                  {/* <!-- Tab Section Start --> */}
                  <Tab.Container id="left-tabs-example" defaultActiveKey="company">
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="company"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Institute
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="jobs"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Programs
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content className="bg-white pl-12 pt-10 pb-7 pr-12 pr-xxl-24">
                      <Tab.Pane eventKey="jobs">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
          
              {/* <!-- Main Body --> */}
              <div className="col-12 col-xl-12 col-lg-12">
                {/* <!-- form --> */}
             
                <div className="pt-12">
             
                  <div className="mb-8">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="media align-items-center">
                            {/* <div className="square-72 d-block mr-8">
                              <img src={imgF1} alt="" />
                            </div> */}
                            <div>
                              <h3 className="mb-0">
                                <Link href="/#">
                                  <a className="font-size-6 heading-default-color">
                                    Diploma on Fashion Designing
                                  </a>
                                </Link>
                              </h3>
                              <Link href="/#">
                                <a className="font-size-3 text-default-color line-height-2">
                                  Duration : 2years
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-5">
                          <div className="media justify-content-md-end">
                            <div className="image mr-5 mt-2">
                              <img src={imgF} alt="" />
                            </div>
                            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                              <span className="text-black-2">$80-90K</span>                             </p>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-8">
                        <div className="col-md-7">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  Art
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                  IELTS band 6
                                </a>
                              </Link>
                            </li>
                         
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                            
                            <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                              <span
                                className="mr-4"
                                css={`
                                  margin-top: -2px;
                                `}
                              >
                                <img src={iconS} alt="" />
                              </span>
                              <span className="font-weight-semibold">
                                Full-time
                              </span>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                  </div>
                 
              
              
              
                  
                  <div className="text-center pt-5 pt-lg-13">
                    <Link href="/#">
                      <a className="text-green font-weight-bold text-uppercase font-size-3">
                        Load More <i className="fas fa-sort-down ml-3"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- form end --> */}
              </div>
            </div>
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                   
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="company">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Opportunities</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                Work while Studying, Internship, Scholarship
                            
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Social Media</p>
                              <div className="icon-link d-flex align-items-center">
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fa fa-globe"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">University Ranking</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                4
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Est. Since</p>
                              <h5 className="font-size-4 font-weight-semibold">
                               1940
                              </h5>
                            </div>
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Average Diploma Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.Diplomafee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Average Undergraduate Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.UGfee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Average Post-Graduate Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.PGfee}
                              </h5>
                            </div>
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Fall Semester Start</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.FallSemester}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Spring Semester Start</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SpringSemester}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Summer Semester Start</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SummerSemester}
                              </h5>
                            </div>
                            
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          
                          {/* <!-- Single Widgets End --> */}
                        </div>
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-22 pt-5">
                          <h4 className="font-size-6 mb-7">About Institute</h4>
                          <p className="font-size-4 mb-8">
                            If you’re like most of my clients, you know creative
                            content marketing and killer copywriting are
                            fundamental to the success of your business.
                          </p>
                          <p className="font-size-4 mb-8">
                            But with so much to do to keep your business
                            growing, you don’t have time to learn how to write
                            sales copy that actually sells, or create a content
                            marketing strategy that resonates with your target
                            audience.
                          </p>
                      
                        </div>
                        {/* <!-- Excerpt End --> */}
                        <input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </Tab.Container>
                </div>
              </div>
              {/* <!-- Company Profile End --> */}
              {/* <!-- Sidebar --> */}
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="pt-11 pt-lg-0 pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Similar Institutes
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB1}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Google INC.
                            </h4>
                            <p className="mb-0 font-size-4">
                              Online Marketplace
                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB2}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Uber
                            </h4>
                            <p className="mb-0 font-size-4">
                              Ride Sharing Company
                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB3}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Facebook
                            </h4>
                            <p className="mb-0 font-size-4">Social Network</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-5">
                            <img
                              className="square-72 rounded-5"
                              src={imgB4}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              GitHub
                            </h4>
                            <p className="mb-0 font-size-4">Online Software</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-5"
                              src={imgB5}
                              alt=""
                            />
                          </div>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              Uniliver
                            </h4>
                            <p className="mb-0 font-size-4">Manufacturer</p>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              {/* <!-- end Sidebar --> */}
            </div>
           
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CompanyProfile;
