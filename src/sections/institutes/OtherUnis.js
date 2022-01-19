import React,{ useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";

import imgB1 from "../../assets/image/l1/png/feature-brand-1.png";

import { useAuth } from '../../../AuthUserContext';
import axios from 'axios';
import {useRouter} from 'next/router'
import Unilogo from "./UniLogo";

const OtherUnis = () => {
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
        setList(todoList.slice(0,4))
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },uniId)


  return (
    <>
     
       
              
              {/* <!-- Sidebar --> */}
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="pt-11 pt-lg-0 pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Similar Institutes
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    { List.map((item, index)=>(
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9">
                          <Unilogo email={item.email}/>
                          <div className="mt-n4">
                            <h4 className="mb-0 font-size-6 font-weight-semibold">
                              {item.name}
                            </h4>
                            <p className="mb-0 font-size-4">
                              {item.country}                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                
                 
                    
            ))}
                  
              
                  </ul>
                </div>
              </div>
              {/* <!-- end Sidebar --> */}
          
    
    </>
  );
};
export default OtherUnis;
