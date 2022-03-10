import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import iconS from "../../assets/image/svg/icon-suitecase.svg";
import { useAuth } from '../../../AuthUserContext';
import axios from 'axios';
import {useRouter} from 'next/router'
import Unilogo from "../../sections/uni/UniLogo";
import OtherUnis from "../../sections/institutes/OtherUnis";
import EditUni from "../../sections/uni/EditUni";
import ProfileSidebarUniversity from "../../components/ProfileSidebar/ProfileSidebarUniversity";
const CompanyProfile = () => {
  const router = useRouter();
  const uniId = router.query.universityid;
  const [List, setList] = useState([]);
  const { authUser, loading,signOut } = useAuth();
  const [Complete, setComplete] = useState(false)
  const [User,setUser] = useState([])
  const [record, setRecord] = useState({
    client_name: '',
    partner:'',
      
  });

  

  const onSubmit = event => {
    console.log(Complete)
if(Complete){  
    record.client_name = authUser
    record.partner = uniId
    
    axios
    .post("https://ci-gsc.com/application/", record)
    .then((res) => alert("Your request to apply to "+List[0].name+" has been received. GSC will evaluate and reach out to you shortly"))
    .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
}
else{
  alert("please complete your profile creation in edit profile if you are a Student")
}
  }

  useEffect(() =>  {
 

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/uni/?format=json');
      
      const todoList = await res.json();
      const filtered = todoList.filter(function(val, i, a) {return val.id==uniId;});
      setList(filtered)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()

  },uniId)

  useEffect(() =>  {
    console.log(authUser)
    async function fetchMyAPI2() {
      try {
        let res = await fetch('https://ci-gsc.com/students/?format=json');
        
        let todoList = await res.json();
        const student = todoList.filter(function(val, i, a) {return val.email==authUser;});
        console.log(student)
        if(student[0].address1 == null || student[0].address2 ==null || student[0].IELTSBand ==null || student[0].Desiredlevel == null || student[0].IntendedSemester ==null){
          console.log(student.address1 + student.address2 + student.IELTSBand +student.Desiredlevel + student.IntendedSemester)
          setComplete(false)
        }
        else{
          setComplete(true)
        }
      } catch (e) {
        console.log(e);
    }
      }
      fetchMyAPI2()
    },authUser)
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13 dark-mode-texts">
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
            
            { List.map((item, index)=>(
            <div className="row">
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                <ProfileSidebarUniversity List={List}/>
              </div>
              {/* <!-- Company Profile --> */}
              <div className="col-12 col-xl-6 col-lg-8">
                <div className="bg-white rounded-4 pt-11 shadow-9">
                  <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                    <Link href="/#">
                      <a className="mr-xs-7 mb-5 mb-xs-0">
                  <Unilogo email={item.email}/>
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
                    <div style={{paddingLeft:"40px"}} className="">
                    
              <EditUni email={authUser} uniId={item.id}/>
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
                          eventKey="requirements"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Requirement
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="fees"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Fees
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="scholarship"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Scholarship
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
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="undergraduate"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                         Undergrad
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
                              <p className="font-size-4">Opportunities and Facilities</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Accomodation =="yes" && (<>Accomodation</>)},
                                {item.Internship =="yes" && (<>Internship</>)},
                                {item.OfferLetter =="yes" && (<>Offer Letter</>)},
                                {item.WorkVisa =="yes" && (<>Work Visa</>)},
                                {item.WorkStudy =="yes" && (<>Work Study</>)}

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
                              <p className="font-size-4">Fall Semester</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.FallSemester}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Spring Semester</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SpringSemester}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Summer Semester</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SummerSemester}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Intake 4</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake4}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Intake 5</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake5}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Intake 6</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake6}
                              </h5>
                            </div>
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Fall Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.FallSemesterAppDeadline}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Spring Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SpringSemesterAppDeadline}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Summer Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.SummerSemesterAppDeadline}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">I4 Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake4AppDeadline}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">I5 Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake5AppDeadline}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">I6 Application Deadline</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Intake6AppDeadline}
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
                        {authUser!=null && (<input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />)}
                       {authUser==null && (<><input
                            type="button"
                            value="Sign-up"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/registration")}
                       />
                       <span style={{paddingRight:"10px"}}></span><input
                            type="button"
                            value="Login"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/login")}
                       /></>)}
                      </Tab.Pane>
                      <Tab.Pane eventKey="requirements">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                    
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">UG IELTS Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.UGIELTSReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">UG TOEFL Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.UGTOEFLReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">UG Duolingo Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.UGDuolingoReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">UG PTE Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.UGPTEReq}
                              </h5>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">PG IELTS Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.PGIELTSReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">PG TOEFL Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.PGTOEFLReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">PG Duolingo Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.PGDuolingoReq}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">PG PTE Requirement</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.PGPTEReq}
                              </h5>
                            </div>
                          </div>
                    
                        </div>
                      
                  
                        {/* <!-- Excerpt End --> */}
                        {authUser!=null && (<input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />)}
                       {authUser==null && (<><input
                            type="button"
                            value="Sign-up"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/registration")}
                       />
                       <span style={{paddingRight:"10px"}}></span><input
                            type="button"
                            value="Login"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/login")}
                       /></>)}
                      </Tab.Pane>
                      <Tab.Pane eventKey="fees">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                         
              
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Annual Diploma Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.Diplomafee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Annual Undergraduate Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.UGfee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Annual Post-Graduate Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.PGfee}
                              </h5>
                            </div>
                         
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Diploma Application Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.UGAppfee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">UG Application Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.UGAppfee}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">PG Application Fee</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.PGAppfee}
                              </h5>
                            </div>
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <p className="font-size-4">Diploma Accomodation Cost</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.AccomodationCostUG}/Sems
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">UG Accomodation Cost</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.AccomodationCostUG}/Sems
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">PG Accomodation Cost</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                ${item.AccomodationCostPG}/Sems
                              </h5>
                            </div>
                            
                          </div>
               
                        </div>
                  
                        <div className="pr-xl-0 pr-xxl-22 pt-5">
                   
                      
                        </div>
                        {/* <!-- Excerpt End --> */}
                        {authUser!=null && (<input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />)}
                       {authUser==null && (<><input
                            type="button"
                            value="Sign-up"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/registration")}
                       />
                       <span style={{paddingRight:"10px"}}></span><input
                            type="button"
                            value="Login"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/login")}
                       /></>)}
                      </Tab.Pane>
                      <Tab.Pane eventKey="scholarship">
                        {/* <!-- Middle Body Start --> */}
                    
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-22 pt-5">
                          <h4 className="font-size-6 mb-7">Scholarship Requirements</h4>
                          <p className="font-size-4 mb-8">
                           {item.ScholarshipReq}
                          </p>
                       
                      
                        </div>
                        {/* <!-- Excerpt End --> */}
                        {authUser!=null && (<input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />)}
                       {authUser==null && (<><input
                            type="button"
                            value="Sign-up"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/registration")}
                       />
                       <span style={{paddingRight:"10px"}}></span><input
                            type="button"
                            value="Login"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={()=>router.push("/login")}
                       /></>)}
                      </Tab.Pane>
                      <Tab.Pane eventKey="undergraduate">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Students 
                          </h4>
                          <p className="font-size-4 mb-8">
                      
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
                            
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                   
                       
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </Tab.Container>
                </div>
              </div>
              {/* <!-- Company Profile End --> */}
              {/* <!-- Sidebar --> */}
             <OtherUnis/>
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
