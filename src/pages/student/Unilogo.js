import React,{ useContext, useEffect,useState } from "react"
import {useRouter} from 'next/router'


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
