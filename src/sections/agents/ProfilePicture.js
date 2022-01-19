import React, { useState,useEffect, useContext } from "react";

import { useAuth } from '../../../AuthUserContext';




const ProfilePicture = ({email}) => {
  const { authUser, loading,signOut } = useAuth();
console.log(email)

  const [List, setList] = useState("");
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      let res = await fetch('https://ci-gsc.com/profilepicture/?format=json');
      let todoList = await res.json();
      let filtered = todoList.filter(function(val, i, a) {return val.email==email;});
      if(filtered.length!=0){
      setList(filtered[0].image)}
    } catch (e) {
      console.log(e);
  }
    }
    
 fetchMyAPI()

  },email)
console.log(authUser)
  return (
      <>
      
      <div className="circle-36 mr-6">
                                <img src={"https://ci-gsc.com"+List} alt="" className="w-100" />
                              </div>
      </>
  );
};
export default ProfilePicture;
