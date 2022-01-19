import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import ProfileSidebar from "../../components/ProfileSidebar";

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
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";

const Unilogo = (email) => {
    const router = useRouter();
    const studentId = router.query.studentid;
    // const [List, setList] = useState([]);
    const [uniList, setUniList] = useState([]);
    
    useEffect(() =>  {

    
      
      async function fetchMyAPI2() {
        try {
         
          const res = await fetch('https://ci-gsc.com/unilogo/');
      
          const todoList = await res.json();
          const filtered = todoList.filter(function(val, i, a) {return val.email==email.email;});
   
          setUniList(filtered)
          
        } catch (e) {
          console.log(e);
      }
        }
  
   

  
   fetchMyAPI2()
  
    },email)



  return (
 <>

                          { uniList.map((item, index)=>(
                          <>
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              
                                  <img style={{height:"80px",width:"80px",borderRadius:"40px"}} src={'https://ci-gsc.com'+item.image} alt="" />
                              </div>
                  </>
                          ))}
</>
                           );
};
export default Unilogo;
