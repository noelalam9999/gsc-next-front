import React,{ useContext, useEffect,useState } from "react";



import {useRouter} from 'next/router'


const ClientPhone = (client) => {
    const router = useRouter();
    const studentId = router.query.studentid;
    const [List, setList] = useState("");

 console.log(client.client)
    useEffect(() =>  {
  
        async function fetchMyAPI() {
          try {
    
            const res = await fetch('https://ci-gsc.com/students/');
        
            const todoList = await res.json();
    
            let filtered = todoList.filter(function(val, i, a) {return val.email==client.client;});
    
            console.log(filtered)

            setList(filtered[0].mobile)
            
          } catch (e) {
            console.log(e);
        }
          }

  
 
   fetchMyAPI()
  
    },client.client)



  return (
   <>
   
   {List}
   </>
   
    );
};
export default ClientPhone;
