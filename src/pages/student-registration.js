import React , { Component } from "react";
import axios from 'axios';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';

import StudentRegistrationChild from "../sections/Registration/student-registration";
const StudentRegistration = () => {

  const { authUser } = useAuth();


   return (
    <>
    < StudentRegistrationChild user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

