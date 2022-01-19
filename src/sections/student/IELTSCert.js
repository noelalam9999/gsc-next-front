import React, { useContext, useEffect,useState } from "react";
import {useRouter} from 'next/router'

const IELTSCert = (user) => {
  const router = useRouter();
  const agentId = router.query.agentid;
  
  const [List, setList] = useState("");

  console.log(user)
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/ieltscert/');
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



  },user.user)


  return (
    <>
 
      {List !="" && <li>
                              <a href={List} target="_blank">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                 Show Certificate
                                </a>
                              </a>
                            </li>
}
    </>
  );
};
export default IELTSCert;
