import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";
import { useAuth } from '../../../AuthUserContext';
import imgP1 from "../../assets/image/table-one-profile-image-1.png";

import AppliedIntakeDate from "../../components/Applications/AppliedIntakeDate";
import Partner from "../../components/Applications/Partner";
import ClientPhone from "../../components/Applications/ClientPhone";
import Product from "../../components/Applications/Product";
import ProfilePicture from "../agents/ProfilePicture";

const IntendedSemester = [
  {name:"IntendedSemester", value: "fall", label: "Fall" },
  { name:"IntendedSemester", value: "spring", label: "Spring" },
  {name:"IntendedSemester", value: "summer", label: "Summer" },

];

const AdminApprovedApplicationsCount = () => {
 
 const { authUser, loading,signOut } = useAuth();
  const [List, setList] = useState(0);

  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      
      let res = await fetch('https://ci-gsc.com/application/?format=json');
      let todoList = await res.json();

      let filtered_application = todoList.filter(function(val, i, a) {return val.status=="approved";})
      

      
      console.log(filtered_application)
      setList(filtered_application.length)
      
       
    } catch (e) {
      console.log(e);
  }
    }
    
  

 fetchMyAPI()

  },[])


  const gContext = useContext(GlobalContext);
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
                    Approved 
                    </p>
                  </div>
    </>
  );
};
export default AdminApprovedApplicationsCount;
