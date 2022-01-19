import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'


const OtherAgents = (user) => {
  const router = useRouter();
  const agentId = router.query.agentid;
  
  const [List, setList] = useState([]);
 
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/agents/');
      const todoList = await res.json();
      console.log(todoList)
      let filtered = todoList.filter(function(val, i, a) {return val.email!=user.user[0].email;});
      setList(filtered)
 
    } catch (e) {
      console.log(e);
  }
    }
    
 fetchMyAPI()



  },user.user[0])


  return (
    <>
 
 <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                <div className="pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Other Agents
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                  {  List.slice(0,4).map((item,index) =>(
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          {/* <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT1}
                              alt=""
                            />
                          </div> */}
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              {item.name}
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              {item.agency_name}
                            </p>
                            <span className="font-size-3 text-smoke">
                           
                              {item.country}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    )  )
}
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
    </>
  );
};
export default OtherAgents;
