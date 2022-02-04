import React,{ useContext, useEffect,useState } from "react"
import {useRouter} from 'next/router'
import Link from "next/link";

const EditUni = (email) => {
    const router = useRouter();
    const uniId = router.query.universityid;
    // const [List, setList] = useState([]);
    const [uniList, setUniList] = useState([]);
    console.log(uniId)
    useEffect(() =>  {

    
      
      async function fetchMyAPI2() {
        try {
         
          const res = await fetch('https://ci-gsc.com/user/');
      
          const todoList = await res.json();
          const filtered = todoList.filter(function(val, i, a) {return val.email==email.email;});

         if(filtered[0].usertype=="admin" || filtered[0].usertype=="team-member"){
            setUniList(true)
         }
         
          
        } catch (e) {
          console.log(e);
      }
        }
  
   

  
   fetchMyAPI2()
  
    },email)



  return (
 <>

                          { uniList && (
                          <>
                             <Link href={'/university/edit/'+uniId }>
                  <a className="text-blue font-weight-semibold font-size-5">Edit</a>
                </Link>                  </>
                          )}
</>
                           );
};
export default EditUni;
