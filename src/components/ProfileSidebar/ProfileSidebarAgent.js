import React from "react";
import Link from "next/link";

import imgP from "../../assets/image/l3/png/pro-img.png";
import ProfilePicture from "../../sections/agents/ProfilePicture";

const Sidebar = (List) => {


  return (
   
    <>
    { List.List.map((item, index)=>(
    

    <>
 
   

      
        <div className="pl-lg-5">
          {/* <!-- Top Start --> */}
          <div className="bg-white shadow-9 rounded-4">
            <div className="px-5 py-11 text-center border-bottom border-mercury">
              <Link href="/#">
                <a className="mb-4">
                 <ProfilePicture email={item.email} />
                </a>
              </Link>
              <h4 className="mb-0">
                <Link href="/#">
                  <a className="text-black-2 font-size-6 font-weight-semibold">
                    {item.name}
                  </a>
                </Link>
              </h4>
              <p className="mb-8">
                <Link href="/#">
                  <a className="text-gray font-size-4">{item.role}, {item.agency_name}</a>
                </Link>
              </p>
                       </div>
            {/* <!-- Top End --> */}
            {/* <!-- Bottom Start --> */}
            <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
              <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">Location</p>
                <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                  {item.country}
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">E-mail</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a
                    className="text-black-2 text-break"
                      href={"mailto:"+item.email}
                 >
                    {item.email}
                  </a>
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">Phone</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a className="text-black-2 text-break" href="tel:+999565562">
                    {item.mobile}
                  </a>
                </h5>
              </div>
              {/* <!-- Single List --> */}
              {/* <!-- Single List --> */}
              <div className="mb-7">
                <p className="font-size-4 mb-0">website</p>
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a target="_blank" href={"https://www."+item.website}>
                    <a className="text-break">{item.website}</a>
                  </a>
                </h5>
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
