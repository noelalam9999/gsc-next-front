import React , { Component } from "react";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';
import AddStudent from "../sections/Add/add-student";
const StudentRegistration = () => {

  const { authUser } = useAuth();

   return (
    <>
    <AddStudent user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

