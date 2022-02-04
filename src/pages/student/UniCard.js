import React,{ useContext, useEffect,useState } from "react";
import Link from "next/link";
import Unilogo from "./Unilogo";
import {useRouter} from 'next/router'
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg"
import axios from 'axios';
import ApplicationButton from '../../sections/student/ApplicationButton'
const UniCard = (List) => {
  
    const router = useRouter();
    const studentId = router.query.studentid;
    // const [List, setList] = useState([]);
    const [uniList, setUniList] = useState([]);
    const [uniApplicationList, setApplicationList] = useState([]);
 
    useEffect(() =>  {

    
      
      async function fetchMyAPI2() {
        try {
        
          const res = await fetch('https://ci-gsc.com/uni/');
      
          const todoList = await res.json();
          let filtered = todoList.filter(function(val, i, a) {return val.country==List.List[0].StudyDestination;});
          filtered = filtered.filter(function(val, i, a) {return val.UGIELTSReq<=List.List[0].IELTSBand;});
          setUniList(filtered)
          
        } catch (e) {
          console.log(e);
      }
        }
  
        async function fetchMyAPI() {
          try {
         
            const res = await fetch('https://ci-gsc.com/application/');
        
            const todoList = await res.json();
            let filtered = todoList.filter(function(val, i, a) {return val.client_name==List.List[0].email;});
            console.log(filtered)
            setApplicationList(filtered)
            
          } catch (e) {
            console.log(e);
        }
          }

  
   fetchMyAPI2()
   fetchMyAPI()
  
    },List.List)



  return (
    <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Eligible Universities
                          </h4>

                          { uniList.map((item, index)=>(
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <Unilogo email={item.email}/>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link href="/#">
                                    <a className="font-size-6 text-black-2">
                                      {item.name}
                                    </a>
                                  </Link>
                                </h3>
                                {List.List[0].Desiredlevel =="Undergraduate" &&
                                <Link href="/#">
                                  <a className="font-size-4 text-default-color line-height-2">
                                    Under-graduate fee : {item.UGfee}
                                  </a>
                                </Link>
                                }
                                {List.List.Desiredlevel =="Postgraduate" &&
                                <Link href="/#">
                                  <a className="font-size-4 text-default-color line-height-2">
                                    Post-graduate fee : {item.PGfee}
                                  </a>
                                </Link>
                                }
                                
                                {List.List.Desiredlevel =="Diploma" &&
                                <Link href="/#">
                                  <a className="font-size-4 text-default-color line-height-2">
                                    Diploma fee : {item.Diplomafee}
                                  </a>
                                </Link>
                                }
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                
                                  <Link href="/#">
                                    <a className="font-size-3 text-gray">
                                      <span
                                        className="mr-4"
                                        css={`
                                          margin-top: -2px;
                                        `}
                                      >
                                        <img src={imgL} alt="" />
                                      </span>
                                      {item.country}
                                    </a>
                                  </Link>
                                </div>
                                
                              </div>
                              <span className="">
            {/* <Link href="/agents/agent-dashboard-client-registration"> */}
            <ApplicationButton Student={List.List[0].email} uni={item.id}/>
          {/* { uniApplicationList.filter(function(val, i, a) {return val.partner==item.id;}) == null && (
            <a     onClick={(e) => {
                              e.preventDefault();
                              onApplyClick(item.id);
                            }}
                              className="btn btn-primary btn-xl w-100 text-uppercase">
              <span className="mr-5 d-inline">+</span>Apply
            </a>)}
            { uniApplicationList.filter(function(val, i, a) {return val.partner==item.id;}) != null && (
            <a     onClick={(e) => {
                              e.preventDefault();
                              onApplyClick(item.id);
                            }}
                              className="btn btn-primary btn-xl w-100 text-uppercase">
                        <span className="mr-5 d-inline">See</span>Status
            </a>)} */}
            {/* </Link> */}
          </span>
                            </div>
                            
                          </div>
                          ))}

                        </div>   );
};
export default UniCard;
