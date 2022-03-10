import React, { useState,useEffect, useContext } from "react";

import { useAuth } from '../../../AuthUserContext';




const UniLogo = ({email}) => {
  const { authUser, loading,signOut } = useAuth();


  const [List, setList] = useState("");
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      let res = await fetch('https://ci-gsc.com/unilogo/?format=json');
      let todoList = await res.json();
      let filtered = todoList.filter(function(val, i, a) {return val.email==email;});
      setList(filtered[0].image)
    } catch (e) {
      console.log(e);
  }
    }
    
 fetchMyAPI()

  },email)

  return (
      <>
      
      <div className="circle-36 mr-6">
                                <img src={"https://ci-gsc.com"+List} alt="" className="w-100" />
                              </div>
      </>
  );
};
export default UniLogo;
