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

import EditUni from "../../sections/uni/EditUni";
import ProfileSidebarUniversity from "../../components/ProfileSidebar/ProfileSidebarUniversity";
import OtherUniversities from "../../sections/uni/OtherUniversities";

const CompanyProfile = () => {
  const router = useRouter();
  const uniId = router.query.universityid;
  const [List, setList] = useState([]);
  const { authUser, loading,signOut } = useAuth();
  const [Country, setCountry] = useState(""); 
  const [Complete, setComplete] = useState(false)
  const [User,setUser] = useState([])
  const [record, setRecord] = useState({
    client_name: '',
    partner:'',
      
  });

  

  const onSubmit = event => {

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

  const onSubmitNull = event => {
    router.push('/signup-student');

  }

  useEffect(() =>  {
 

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/uni/?format=json');
      
      const todoList = await res.json();
      const filtered = todoList.filter(function(val, i, a) {return val.id==uniId;})  ;
      setList(filtered)
      setCountry(filtered[0].country)
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
        <div className="bg-default-2 order-2 order-xl-1 pt-22 pt-lg-25 pb-13 pb-xxl-32">
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
               <ProfileSidebarUniversity List={List} />
             </div>
           

              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-9 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="undergrad">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="undergrad"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Under-graduate
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="postgrad"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Post-graduate
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="foundation"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Foundation
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="highschool"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          High-School
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="scholarship"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Scholarships
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                    { List.map((item, index)=>(
                      <Tab.Pane eventKey="undergrad">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Intake 
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemester}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                          
                        </div>
                   
                    
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Application Deadline
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4AppDeadline}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemesterAppDeadline}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5AppDeadline}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6AppDeadline}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Requirements
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">IELTS</h5>
                              <p className="font-size-4 ">
                                {item.UGIELTSReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">PTE</h5>
                              <p className="font-size-4 ">
                                {item.UGPTEReq}
                              </p>
                            </div>
                         
                           
                          
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">TOEFL</h5>
                              <p className="font-size-4 ">
                                {item.UGTOEFLReq}
                              </p>
                            </div>
                         
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Duolingo</h5>
                              <p className="font-size-4 ">
                                {item.UGDuolingoReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                               
                              </p>
                            </div>
                  
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                    <div className="mb-8">
                      <h5 className="font-size-4 font-weight-semibold">HSC</h5>
                      <p className="font-size-4 ">
                      {item.HSCReqUG}
                      </p>
                    </div>
                 
                  </div>
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Fees
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Annual fee</h5>
                              <p className="font-size-4 ">
                                ${item.UGfee}
                              </p>
                            </div>
                         
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Application fee</h5>
                              <p className="font-size-4 ">
                                ${item.UGAppfee}
                              </p>
                            </div>
                         
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                            
                              </p>
                            </div>
                    
                          </div>
                     
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Accomodation fee</h5>
                              <p className="font-size-4 ">
                              ${item.AccomodationCostUG}
                              </p>
                            </div>
                         
                          </div>
                         
                     
                        </div>
                        {authUser!=null && (<input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmit}
                       />)}
                       {authUser==null && (<><input
                            type="button"
                            value="Apply Now"
                            className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                            onClick={onSubmitNull}
                       /></>)}
                        </div>
                 
                      </Tab.Pane>
                      ))}
                        { List.map((item, index)=>(
                      <Tab.Pane eventKey="postgrad">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Intake 
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemester}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                          
                        </div>
                   
                    
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Application Deadline
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4AppDeadline}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemesterAppDeadline}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5AppDeadline}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6AppDeadline}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Requirements
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">IELTS</h5>
                              <p className="font-size-4 ">
                                {item.PGIELTSReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">PTE</h5>
                              <p className="font-size-4 ">
                                {item.PGPTEReq}
                              </p>
                            </div>
                         
                           
                          
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">TOEFL</h5>
                              <p className="font-size-4 ">
                                {item.PGTOEFLReq}
                              </p>
                            </div>
                         
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Duolingo</h5>
                              <p className="font-size-4 ">
                                {item.PGDuolingoReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                               
                              </p>
                            </div>
                  
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                    <div className="mb-8">
                      <h5 className="font-size-4 font-weight-semibold">HSC</h5>
                      <p className="font-size-4 ">
                      {item.HSCReqPG}
                      </p>
                    </div>
                 
                   
                  
            
                    
                  </div>
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Fees
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Annual fee</h5>
                              <p className="font-size-4 ">
                                ${item.PGfee}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Application fee</h5>
                              <p className="font-size-4 ">
                                ${item.PGAppfee}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                            
                              </p>
                            </div>
                    
                          </div>
                     
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Accomodation fee</h5>
                              <p className="font-size-4 ">
                              ${item.AccomodationCostUG}
                              </p>
                            </div>
                         
                          </div>
                         
                     
                        </div>
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
                        </div>
                 
                       
                      </Tab.Pane>
                      ))}
                    { List.map((item, index)=>(
                      <Tab.Pane eventKey="foundation">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Intake 
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4}
                              </p>
                            </div>
                           
                      
                          </div>
                      
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemester}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                          
                        </div>
                   
                    
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Application Deadline
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4AppDeadline}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemesterAppDeadline}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5AppDeadline}
                              </p>
                            </div>
                  
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6AppDeadline}
                              </p>
                            </div>
                          
                          </div>
                      
                   
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Requirements
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">IELTS</h5>
                              <p className="font-size-4 ">
                                {item.PGIELTSReq}
                              </p>
                            </div>
                         
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">PTE</h5>
                              <p className="font-size-4 ">
                                {item.UGPTEReq}
                              </p>
                            </div>
                         
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">TOEFL</h5>
                              <p className="font-size-4 ">
                                {item.UGTOEFLReq}
                              </p>
                            </div>
                    
                          </div>
                      
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Duolingo</h5>
                              <p className="font-size-4 ">
                                {item.UGDuolingoReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                               
                              </p>
                            </div>
                  
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                    <div className="mb-8">
                      <h5 className="font-size-4 font-weight-semibold">HSC</h5>
                      <p className="font-size-4 ">
                      {item.HSCReqUG}
                      </p>
                    </div>
                 
                  </div>
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Fees
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Annual fee</h5>
                              <p className="font-size-4 ">
                                ${item.UGfee}
                              </p>
                            </div>
                
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                            
                              </p>
                            </div>
                   
                          </div>
                   
                        </div>
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
                        </div>
              
                      </Tab.Pane>
                      ))}
                      { List.map((item, index)=>(
                      <Tab.Pane eventKey="highschool">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Intake 
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemester}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemester}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                          
                        </div>
                   
                    
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Application Deadline
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Fall Semester</h5>
                              <p className="font-size-4 ">
                                {item.FallSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold ">Intake 4</h5>
                              <p className="font-size-4">
                                {item.Intake4AppDeadline}
                              </p>
                            </div>
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Spring Semester</h5>
                              <p className="font-size-4 ">
                                {item.SpringSemesterAppDeadline}
                              </p>
                            </div>
                         
                           
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 5</h5>
                              <p className="font-size-4">
                                {item.Intake5AppDeadline}
                              </p>
                            </div>
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Summer Semester</h5>
                              <p className="font-size-4 ">
                                {item.SummerSemesterAppDeadline}
                              </p>
                            </div>
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Intake 6</h5>
                              <p className="font-size-4 ">
                                {item.Intake6AppDeadline}
                              </p>
                            </div>
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Requirements
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">IELTS</h5>
                              <p className="font-size-4 ">
                                {item.UGIELTSReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">PTE</h5>
                              <p className="font-size-4 ">
                                {item.UGPTEReq}
                              </p>
                            </div>
                         
                           
                          
                    
                            
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">TOEFL</h5>
                              <p className="font-size-4 ">
                                {item.UGTOEFLReq}
                              </p>
                            </div>
                         
                          
                      
                            
                          </div>
                      
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Duolingo</h5>
                              <p className="font-size-4 ">
                                {item.UGDuolingoReq}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                               
                              </p>
                            </div>
                  
                          </div>
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                    <div className="mb-8">
                      <h5 className="font-size-4 font-weight-semibold">HSC</h5>
                      <p className="font-size-4 ">
                      {item.HSCReqUG}
                      </p>
                    </div>
                 
                   
                  
            
                    
                  </div>
                        </div>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Fees
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Annual fee</h5>
                              <p className="font-size-4 ">
                                ${item.UGfee}
                              </p>
                            </div>
                         
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                    
                            <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">ESL</h5>
                              <p className="font-size-4 ">
                            
                              </p>
                            </div>
                         
                    
                            
                          </div>
                     
                      
                   
                        </div>
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                          <div className="mb-8">
                              <h5 className="font-size-4 font-weight-semibold">Accomodation fee</h5>
                              <p className="font-size-4 ">
                                ${item.AccomodationCostUG}
                              </p>
                            </div>
                         
                          </div>
                         
                     
                        </div>
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
                        </div>
                 
                      </Tab.Pane>
                      ))}
               
                      { List.map((item, index)=>(
                      <Tab.Pane eventKey="scholarship">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Scholarship Requirements
                          </h4>
                          <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-12 col-md-4 col-xs-6">
                          <div className="mb-8">
                            
                              <p className="font-size-4 ">
                                {item.ScholarshipReq}
                              </p>
                            </div>
                      
                           
                      
                          </div>
                          
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                   
                       
                      
                   
                        </div>
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
                          
                        </div>
                   
                 
                 
                      </Tab.Pane>
                      ))}
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
             {/* <OtherUniversities country={Country}/> */}
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper> 
    </>
  );
};
export default CompanyProfile;
