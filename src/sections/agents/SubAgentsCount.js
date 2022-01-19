import React, { useContext, useEffect,useState } from "react";

import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

import { useAuth } from '../../../AuthUserContext';


const IntendedSemester = [
  {name:"IntendedSemester", value: "fall", label: "Fall" },
  { name:"IntendedSemester", value: "spring", label: "Spring" },
  {name:"IntendedSemester", value: "summer", label: "Summer" },

];

const SubAgentsCount = () => {
 
 const { authUser, loading,signOut } = useAuth();
  const [List, setList] = useState(0);

  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      let res = await fetch('https://ci-gsc.com/agents/?format=json');
      let todoList = await res.json();
      let filtered = todoList.filter(function(val, i, a) {return val.added_by==authUser;});
    
      setList(filtered.length)
      
       
    } catch (e) {
      console.log(e);
  }
    }
    
  

 fetchMyAPI()

  },authUser)


  return (
    <>
     <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={6} end={List} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                    Sub-Agents
                    </p>
                  </div>
    </>
  );
};
export default SubAgentsCount;
