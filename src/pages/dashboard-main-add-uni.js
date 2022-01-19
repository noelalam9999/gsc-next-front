import React , { Component } from "react";
import axios from 'axios';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import 'firebase/firestore';
import { useAuth } from '../../AuthUserContext';
import AddUni from "../sections/Add/add-uni";
const StudentRegistration = () => {

  const { authUser } = useAuth();


   return (
    <>
    <AddUni user={authUser}/>
     
    </>
  );
      
};
export default StudentRegistration;

