import React , { Component } from "react";
import 'firebase/firestore';
import {useAuth} from '../../../../AuthUserContext'

import {useRouter} from 'next/router'
import EditStudent from "../../../sections/Edit/edit-student";

const StudentRegistration = () => {

  const { authUser } = useAuth();
  const router = useRouter();
  const studentId = router.query.studentid

   return (
    <>
     <EditStudent studentId={studentId}/>
    </>
  );
      
};
export default StudentRegistration;

