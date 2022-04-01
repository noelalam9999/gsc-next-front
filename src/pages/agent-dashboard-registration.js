import React , { Component } from "react";
import axios from 'axios';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';

import AgentRegistration from "../sections/Registration/agent-registration2";
const StudentRegistration = () => {

  const { authUser } = useAuth();


   return (
    <>
    <AgentRegistration user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

