import React , { Component } from "react";
import axios from 'axios';

import { Select } from "../components/Core";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';
import UniRegistration from "../sections/Registration/uni-registration";

const StudentRegistration = () => {

  const { authUser } = useAuth();


   return (
    <>
    <UniRegistration user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

