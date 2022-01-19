import React , { Component } from "react";
import axios from 'axios';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';

import AddAgent from "../sections/Add/add-agent";
const StudentRegistration = () => {

  const { authUser } = useAuth();

   return (
    <>
    <AddAgent user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

