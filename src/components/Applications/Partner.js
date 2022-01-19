import React,{ useContext, useEffect,useState } from "react";



import {useRouter} from 'next/router'


const Partner = (uni) => {
    const router = useRouter();
    const studentId = router.query.studentid;
    const [List, setList] = useState("");

 console.log(uni.uni)
    useEffect(() =>  {

    
      

  
        async function fetchMyAPI() {
          try {
         
            const res = await fetch('https://ci-gsc.com/uni/');
        
            const todoList = await res.json();
            let filtered = todoList.filter(function(val, i, a) {return val.id==uni.uni;});
            console.log(filtered)
            
            setList(filtered[0].name)
            
          } catch (e) {
            console.log(e);
        }
          }

  
 
   fetchMyAPI()
  
    },uni.uni)



  return (
   <>
   
   {List}
   </>
   
    );
};
export default Partner;
