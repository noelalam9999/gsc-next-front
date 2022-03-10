import React from "react";
import Link from "next/link";

import imgP from "../../assets/image/l3/png/pro-img.png";
import ProfilePicture from "../../sections/uni/ProfilePicture";
import EditUni from "../../sections/uni/EditUni";
import { useAuth } from '../../../AuthUserContext';
const Sidebar = (List) => {
  const { authUser, loading,signOut } = useAuth();

  return (
   
    <>
    { List.List.map((item, index)=>(
    

    <>
 
   

      
        <div className="pl-lg-5">
          {/* <!-- Top Start --> */}
          <div className="bg-white shadow-9 rounded-4">
            <div className="px-5 py-11 text-center border-bottom border-mercury">
              <Link href={"/university/"+item.id}>
                <a className="mb-4">
                 <ProfilePicture email={item.email} />
                </a>
              </Link>
              <h4 className="mb-0">
                <Link href={"/university/"+item.id}>
                  <a className="text-black-2 font-size-6 font-weight-semibold">
                    {item.name}
                  </a>
                </Link>
              </h4>
              <p className="mb-3">
                <Link href={"/university/"+item.id}>
                  <a className="text-gray font-size-4">{item.country}</a>
                </Link>
              </p>
              <EditUni email={authUser} uniId={item.id}/>


                       </div>
            {/* <!-- Top End --> */}
            {/* <!-- Bottom Start --> */}
            <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
              <h5 className="text-black-2 mb-8 font-size-5">Overview</h5>
              {/* <!-- Single List --> */}
              <div className="mb-7">
           
                <div className="mb-8">
                              <p className="font-size-4">Opportunities and Facilities</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.Accomodation =="yes" && (<>Accomodation</>)},
                                {item.Internship =="yes" && (<>Internship</>)},
                                {item.OfferLetter =="yes" && (<>Offer Letter</>)},
                                {item.WorkVisa =="yes" && (<>Work Visa</>)},
                                {item.WorkStudy =="yes" && (<>Work Study</>)}

                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Social Media</p>
                              <div className="icon-link d-flex align-items-center">
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </Link>
                                <Link href="/#">
                                  <a className="text-smoke circle-32 bg-concrete mr-5">
                                    <i className="fa fa-globe"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">University Ranking</p>
                              <h5 className="font-size-4 font-weight-semibold">
                                {item.ranking}
                              </h5>
                            </div>
                 
              </div>
         
              {/* <div className="mb-7">
                <p className="font-size-4 mb-0">facebook</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a href={item.facebook_link}>
                    <a className="text-break">{item.facebooklink}</a>
                  </a>
                </h5>
              </div> */}
              {/* <!-- Single List --> */}
            </div>
            {/* <!-- Bottom End --> */}
          </div>
        </div>
      
 
      {/* <!-- Sidebar End --> */}
      </>
    ))}
    </>
  );
};

export default Sidebar;
