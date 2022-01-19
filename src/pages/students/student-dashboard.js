import React, { useContext, useEffect,useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import GlobalContext from "../../context/GlobalContext";
import { useAuth } from '../../../AuthUserContext';
import AppliedIntakeDate from "../../components/Applications/AppliedIntakeDate";
import Partner from "../../components/Applications/Partner";
import ClientPhone from "../../components/Applications/ClientPhone";
import Product from "../../components/Applications/Product";
import ApprovedApplicationsCount from "../../sections/student/ApprovedApplications_Count";
import ApplicationsCount from "../../sections/student/ApplicationsCount";



const defaultJobs = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },

];

const DashboardMain = () => {
  const [userType, setUserType] = useState("");
 const { authUser, loading,signOut } = useAuth();
  const [List, setList] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/application/?format=json');
  
      const todoList = await res.json();
      let filtered = todoList.filter(function(val, i, a) {return val.client_name==authUser;});
    
      setList(filtered)
 
      // const user_list = await fetch('https://ci-gsc.com/user/?format=json')
        
      // const UserList = await user_list.json();
      // await setUserList(UserList)


      // for(var i = 0; i<userList.length; i++){
      //   if(userList[i]['email'] == authUser.email){
      //         await setUserType(userList[i]['usertype'])
              
      //   }
      //   }


      
    } catch (e) {
      console.log(e);
  }
    }
    
    async function fetchMyAPI2() {
      
      try {
        const user_list = await fetch('https://ci-gsc.com/user/?format=json')
        
        const UserList = await user_list.json();
        await setUserList(UserList)
        for(var i = 0; i<userList.length; i++){
          if(userList[i]['email'] == authUser.email){
                setUserType(userList[i]['usertype'])
                
          }
          }
          console.log(typeof userType)
     
      } catch (e) {
        console.log(e);
    }

      }

 fetchMyAPI()
 fetchMyAPI2()


  },authUser)


  const gContext = useContext(GlobalContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/student/student-dashboard-applications"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
          <ApprovedApplicationsCount/>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a  
                  href="/student/student-dashboard-approved"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                <ApplicationsCount/>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
           
             
            </div>
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applications By Status</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                    <tr>
                        <th
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Application ID
                        </th>
                  
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                         Applied Intake Date
                        </th>
                      
                    
                        
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Product</th>
                       <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner</th>
                         <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner Branches</th>
<th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Partner's Client ID'</th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Workflow</th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By</th>

<th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >Application Start By Branch</th><th
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Status</th>
<th
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Stage in Queue</th>
                      <th
                        scope="col"
                        className="border-0 font-size-4 font-weight-normal"
                      >Created At</th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                     
                      { List.map((item, index)=>(
                        <tr className="border border-color-2">
                          
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link href="/candidate-profile">
                            <a className="media min-width-px-235 align-items-center">
                         
                              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                {item.id}
                              </h4>
                            </a>
                          </Link>
                        </th>
                  
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                           
                          <AppliedIntakeDate client={item.client_name}/>
                          </h3>
                        </td>
                     
                   
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                         
                            <Product client={item.client_name}/>
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            
                           <Partner uni={item.partner}/>
                          </h3>
                        </td>
                        
                        
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.partner_branches}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.partner_client_id}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.workflow}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.application_start_by}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.application_start_by_branch}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.status}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.status_in_queue}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            {item.created_at}
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                   
                      </tr>
                      
                      
                  )
                     )


                     } 
                    
                 
                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>


           

          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
