import React , { Component } from "react";
import 'firebase/firestore';
import {useAuth} from '../../../../AuthUserContext'
import EditUni from "../../../sections/Edit/edit-uni";
import {useRouter} from 'next/router'

const StudentRegistration = () => {

  const { authUser } = useAuth();
  const router = useRouter();
  const uniId = router.query.universityid

   return (
    <>
    <EditUni uniId={uniId}/>
     
    </>
  );
      
};
export default StudentRegistration;

