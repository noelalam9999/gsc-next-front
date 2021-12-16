import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import ProfileSidebar from "../../components/ProfileSidebar";
import Unilogo from "./Unilogo";
import imgB1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgB2 from "../../assets/image/l1/png/feature-brand-1.png";
import imgB3 from "../../assets/image/svg/harvard.svg";
import imgB4 from "../../assets/image/svg/mit.svg";

import imgT1 from "../../assets/image/l3/png/team-member-1.png";
import imgT2 from "../../assets/image/l3/png/team-member-2.png";
import imgT3 from "../../assets/image/l3/png/team-member-3.png";
import imgT4 from "../../assets/image/l3/png/team-member-4.png";
import imgT5 from "../../assets/image/l3/png/team-member-5.png";
import {useRouter} from 'next/router'
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg"


const UniCard = (List) => {
    const router = useRouter();
    const studentId = router.query.studentid;
    // const [List, setList] = useState([]);
    const [uniList, setUniList] = useState([]);
    console.log(List.List)
    useEffect(() =>  {

    
      
      async function fetchMyAPI2() {
        try {
          console.log("inside fetch API1")
          const res = await fetch('https://ci-gsc.com/uni/');
      
          const todoList = await res.json();
          const filtered = todoList.filter(function(val, i, a) {return val.country==List.List[0].StudyDestination;});
          setUniList(filtered)
          
        } catch (e) {
          console.log(e);
      }
        }
  
   

  
   fetchMyAPI2()
  
    },List)



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
                            </div>
                          </div>
                          ))}

                        </div>   );
};
export default UniCard;
