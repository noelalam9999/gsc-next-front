import React, { useContext, useEffect,useState } from "react";
import {useRouter} from 'next/router'

const CertificateOne = (user) => {
  const router = useRouter();
  const agentId = router.query.agentid;
  
  const [List, setList] = useState("");
  const handleClick= (e)=> {
      e.preventDefault()
alert("User hasnt provided a certificate")
  }
  console.log(user.user)
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/agentcert/');
      const todoList = await res.json();
      console.log(todoList)
      let filtered = todoList.filter(function(val, i, a) {return val.email==user.user;});
    console.log(filtered[0].image)
    filtered = "https://ci-gsc.com"+filtered[0].image
      setList(filtered)
 
    } catch (e) {
      console.log(e);
  }
    }
    
 fetchMyAPI()



  },user)


  return (
    <>
 
      {List !="" && <li>
                              <a href={List} target="_blank">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                 Certificate 1
                                </a>
                              </a>
                            </li>
}
    </>
  );
};
export default CertificateOne;
