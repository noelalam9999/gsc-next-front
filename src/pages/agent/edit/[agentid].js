import React , { Component } from "react";
import 'firebase/firestore';
import {useAuth} from '../../../../AuthUserContext'
import EditAgent from "../../../sections/Edit/edit-agent";
import {useRouter} from 'next/router'

const StudentRegistration = () => {

  const { authUser } = useAuth();
  const router = useRouter();
  const agentId = router.query.agentid

   return (
    <>
    <EditAgent agentId={agentId}/>
     
    </>
  );
      
};
export default StudentRegistration;

