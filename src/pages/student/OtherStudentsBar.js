import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import imgT1 from "../../assets/image/l3/png/team-member-1.png";
import {useRouter} from 'next/router'
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";
import { useAuth } from '../../../AuthUserContext';
import ProfilePicture from "../../sections/agents/ProfilePicture";

const UniCard = (List) => {
  console.log(List)
  const { authUser, loading,signOut } = useAuth();
    const router = useRouter();
    const studentId = router.query.studentid;
    // const [List, setList] = useState([]);
    const [uniList, setUniList] = useState([]);
    
    useEffect(() =>  {

    
      
      async function fetchMyAPI2() {
        try {
         
          const res = await fetch('https://ci-gsc.com/students/');
      
          const todoList = await res.json();
          const filtered = todoList.filter(function(val, i, a) {return val.added_by==authUser;});
          setUniList(filtered)
          
        } catch (e) {
          console.log(e);
      }
        }
  
   

  
   fetchMyAPI2()
  
    },List)



  return (
    <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
    <div className="pl-lg-5">
      <h4 className="font-size-6 font-weight-semibold mb-0">
        Other Students
      </h4>
      <ul className="list-unstyled">
        {/* <!-- Single List --> */}
        
      


                    { uniList.map((item, index)=>(
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                     <ProfilePicture email={item.email}/>
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                            {item.name}
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              {item.prev_qualification}
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              {item.country}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    ))}
                    </ul>
  </div>
              </div>
                           );
};
export default UniCard;
