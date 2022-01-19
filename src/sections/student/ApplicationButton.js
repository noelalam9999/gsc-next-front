import React,{ useContext, useEffect,useState } from "react";
import axios from 'axios';

const ApplicationButton = ({Student,uni}) => {
  

  

    const [uniApplicationList, setApplicationList] = useState([]);
    const [Complete, setComplete] = useState(false)
    let [record, setRecord] = useState({
        client_name: '',
        partner:'',
        status:'pending'  
      });
      
    
  
     

    const onApplyClick =(id) => {
      if(Complete){  
      record.client_name = Student
      record.partner = uni
      console.log(record)
      axios
      .post("https://ci-gsc.com/application/", record)
      .then((res) => alert("Your request for application has been received. GSC will evaluate and reach out to you shortly"))
      .catch((err) => alert("Failed to Apply the Student. Please contact Admin "));
    }
    else{
      alert("please complete your profile creation in edit profile if you are a Student")
    }
    }
    useEffect(() =>  {
  
      async function fetchMyAPI2() {
        try {
          let res = await fetch('https://ci-gsc.com/students/?format=json');
        
          let todoList = await res.json();
          const student = todoList.filter(function(val, i, a) {return val.email==Student;});
          console.log(student)
          if(student[0].address1 == null || student[0].address2 ==null || student[0].IELTSBand ==null || student[0].Desiredlevel == null || student[0].IntendedSemester ==null){
            console.log(student.address1 + student.address2 + student.IELTSBand +student.Desiredlevel + student.IntendedSemester)
            setComplete(false)
          }
          else{
            setComplete(true)
          }
          
        } catch (e) {
          console.log(e);
      }
        }

        async function fetchMyAPI() {
          try {
         
            const res = await fetch('https://ci-gsc.com/application/');
        
            const todoList = await res.json();
            let filtered = todoList.filter(function(val, i, a) {return val.client_name==Student;});
            filtered = filtered.filter(function(val, i, a) {return val.partner==uni;});
            console.log(filtered)
            setApplicationList(filtered)
            
          } catch (e) {
            console.log(e);
        }
          }

  

   fetchMyAPI()
  fetchMyAPI2()
    },Student,uni)
  




if(uniApplicationList.length==0){

    return (
        <>
                  <a     onClick={(e) => {
                                    e.preventDefault();
                                    onApplyClick();
                                  }}
                                    className="btn btn-primary btn-xl w-60 text-uppercase">
                    <span className="mr-5 d-inline">+</span>Apply
                  </a>
            
        </>
             );
}
else{

    return (
        <>
                 
                              <span className="text-uppercase text-black-2 text-bold mr-5 d-inline">Status:{uniApplicationList[0].status}</span>
                  
        </>
             );
}

};
export default ApplicationButton;
