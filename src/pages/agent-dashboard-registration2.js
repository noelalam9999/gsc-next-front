import { useState } from 'react';
import { useRouter } from 'next/router';
import { Select } from "../components/Core";
//import Select from 'react-select';
import Link from 'next/link';
import { useAuth } from '../../AuthUserContext';
import axios from 'axios';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import PageWrapper from "../components/PageWrapper";
import "firebase/auth";
import firebase from "firebase/app";

export const YearFounded = [
  {name:"YearFounded", value: "1990", label: "1990" },
  {name:"YearFounded", value: "1991", label: "1991" },
  {name:"YearFounded", value: "1992", label: "1992" },
  {name:"YearFounded", value: "1993", label: "1993" },
  {name:"YearFounded", value: "1994", label: "1994" },
  {name:"YearFounded", value: "1995", label: "1995" },
  {name:"YearFounded", value: "1996", label: "1996" },
  {name:"YearFounded", value: "1997", label: "1997" },
  {name:"YearFounded", value: "1998", label: "1998" },
  {name:"YearFounded", value: "1999", label: "1999" },
  {name:"YearFounded", value: "2000", label: "2000" },
  {name:"YearFounded", value: "2001", label: "2001" },
  {name:"YearFounded", value: "2002", label: "2002" },
  {name:"YearFounded", value: "2003", label: "2003" },
  {name:"YearFounded", value: "2004", label: "2004" },
  {name:"YearFounded", value: "2005", label: "2005" },
  {name:"YearFounded", value: "2006", label: "2006" },
  {name:"YearFounded", value: "2007", label: "2007" },
  {name:"YearFounded", value: "2008", label: "2008" },
  {name:"YearFounded", value: "2009", label: "2009" },
  {name:"YearFounded", value: "2010", label: "2010" },
  {name:"YearFounded", value: "2011", label: "2011" },
  {name:"YearFounded", value: "2012", label: "2012" },
  {name:"YearFounded", value: "2013", label: "2013" },
  {name:"YearFounded", value: "2014", label: "2014" },
  {name:"YearFounded", value: "2015", label: "2015" },
  {name:"YearFounded", value: "2016", label: "2016" },
  {name:"YearFounded", value: "2017", label: "2017" },
  {name:"YearFounded", value: "2018", label: "2018" },
  {name:"YearFounded", value: "2019", label: "2019" },
  {name:"YearFounded", value: "2020", label: "2020" },
  {name:"YearFounded", value: "2021", label: "2021" },
];

export const Role = [
  {name:"Role", value: "ceo", label: "C.E.O." },
  {name:"Role", value: "manager", label: "Manager" },
  {name:"Role", value: "sub-agent", label: "Sub-Agent" },
  {name:"Role", value: "employee", label: "Employee" },
 ];
 export const Offices = [
  {name:"Offices", value: "yes", label: "Yes" },
  {name:"Offices", value: "no", label: "No" },
 
 ];
 export  const SubAgents = [
  {name:"SubAgents", value: "yes", label: "Yes" },
  {name:"SubAgents", value: "no", label: "No" },
 
 ];
 export const Associations = [
  {name:"Associations", value: "yes", label: "Yes" },
  {name:"Associations", value: "no", label: "No" },
 
 ];

const SignUp = () => {
 
  const { authUser, loading,signOut } = useAuth();

const email = authUser
  //const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState([]);
  const [agency_name, setAgency_name] = useState([]);
  const [country, setCountry] = useState([]);
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState([]);
  const [offices, setOffices] = useState([]);
  const [subagents, setSubagents] = useState([]);
  const [YearFoundeddata, setYearFounded] = useState([]);
  const [number_of_staff, setNumber_of_staff] = useState("");
  const [services_provided, setServices_provided] = useState("");
  const [students_sent_abroad, setStudents_sent_abroad] = useState([]);
  const [association_bin, setAssociation_bin] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [recruitment_area, setRecruitment_area] = useState([]);
  const [facebooklink, setFacebooklink] = useState([]);
  const [charge, setCharge] = useState([]);


  const router = useRouter();
  const [error, setError] = useState(null);
  const [record, setRecord] = useState({ 
    email:"",
    name:"",
    role:"",
    agency_name:"",
    country:"",
    mobile:"",
    website:"",
    subagents:"",
    YearFoundeddata:"",
    number_of_staff:"",
    services_provided:"",
    students_sent_abroad:"",
    association_bin:"", 
    associations:"",
    recruitment_area:"",
    facebooklink:"",
    charge:"",
  });


    const [Document, setDocument] = useState({ 
      image: null,
      email:'',
      });

      

console.log(authUser)

  const onCountryChange = selectedOption => {
    setCountry(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const onSubagentsChange = selectedOption => {
    setSubagents(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const onYearFoundedChange = selectedOption => {
    setYearFounded(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  
  const onAssociationsChange = selectedOption => {
    setAssociation_bin(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  

  const handleImageChange = e => {
    setDocument({
      image: e.target.files[0]
    }) 
  };
 

  const success = () => {
    alert("Your Data has been recorded. We will suggest you some great Institutes shortly");
  }


  //-------------------HANDLE SUBMIT---------------------------
  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(name!=""&&country!=""&&mobile!=""&&gender!=""&&BirthDate!==""&&BirthMonth!=""&&BirthYear!=""&&PreviousQualification!=""&&StudyDestination!=""&&DesiredSubject!="")
     {
        record.email = authUser
        record.name = name;
        record.role = role;
        record.agency_name= agency_name;
        record.country= country.value;
        record.mobile= mobile;
        record.website= website;
        record.subagents = subagents;
        record.YearFoundeddata = YearFoundeddata.value;
        record.number_of_staff = number_of_staff;
        record.services_provided = services_provided;
        record.students_sent_abroad = students_sent_abroad;
        record.association_bin = association_bin;
        record.associations = associations;
        record.recruitment_area = recruitment_area;
        record.facebooklink = facebooklink;
        record.charge = charge;
        Document.email = authUser;

        let Documentform_data = new FormData();
        Documentform_data.append('image', Document.image, Document.image.name);
        Documentform_data.append('email', Document.email);
        
        
       

        axios
        .post("https://ci-gsc.com/agents/", record)
        .then((res) => success())
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));

        let url = 'https://ci-gsc.com/agentcert/';
        axios.post(url, Documentform_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
      

     } 
 
     
    else
      alert("Please Fill up the required Fields")
      event.preventDefault();
  };
 

  

  return (
    <>


      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluvalue: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
     
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          value="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    Please fill up the details so we can connect you and your students with the right Universities
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                      
            
                    <form action="/">
                         {/* <div className="upload-file mb-16 text-center">
                      <div
                        id="userActions"
                        className="square-144 m-auto px-6 mb-7"
                      >
                        <label
                          htmlFor="fileUpload"
                          className="mb-0 font-size-4 text-smoke"
                        >
                          University Logo
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          className="sr-only"
                        />
                      </div>
                    </div> */} 
                      <fieldset>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Name * 
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="name"
                                placeholder="Your Full Name"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Role * 
                              </label>
                              <input
                               
                                className="form-control h-px-48"
                                name="role"  
                                
                                placeholder="Your Role in the Agency"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Agency Name * 
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="agency_name"
                                placeholder="The Name of Your Agency"
                                onChange={(event) => setAgency_name(event.target.value)}
                                value={agency_name}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Country * 
                              </label>
                              <Select
                                options={getCountries}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="country"  
                                border={false}
                                onChange={onCountryChange}
                                value={country}
                                
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Certification 1
                              </label>
                              <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg" 
                              onChange={handleImageChange} required/>
                            </div>
                          </div>
                       
                        
                        </div>

                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Mobile * 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="mobile"
                                placeholder="Your Phonenumber with Country Code"
                                onChange={(event) => setMobile(event.target.value)}
                                value={mobile}
                              />
                            </div>
                          </div>
                            <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Website
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="website"
                                placeholder="The link to your Website"
                                onChange={(event) => setWebsite(event.target.value)}
                                value={website}
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-xl-1 mb-9">
                        
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Do you have Sub-agents
                              </label>
                              <Select
                              
                                options={SubAgents}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={onSubagentsChange}
                                value={subagents}
                              />
                            </div>
                          </div>
                       
                        </div>

                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Year Founded
                              </label>
                              <Select
                                options={YearFounded}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={onYearFoundedChange}
                                value={YearFoundeddata}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Number of Staff
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="number_of_staff"
                                placeholder="34"
                                onChange={(event) => setNumber_of_staff(event.target.value)}
                                value={number_of_staff}
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-xl-1 mb-9">
                     
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Services Provided
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="services_provided"
                                placeholder="ticketing, Visa Processing, Application Processing"
                                onChange={(event) => setServices_provided(event.target.value)}
                                value={services_provided}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Average Students Sent Abroad Per Year
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="students_sent_abroad"
                                placeholder="100-150"
                                onChange={(event) => setStudents_sent_abroad(event.target.value)}
                                value={students_sent_abroad}
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-xl-1 mb-9">
                     
                        <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Are you part of any Associations
                              </label>
                              <Select
                              
                                options={SubAgents}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={onAssociationsChange}
                                value={association_bin}
                              />
                            </div>
                          </div>
                     <div className="col-lg-6">
                       <div className="form-group">
                         <label
                           htmlFor="namedash"
                           className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                         >
                           Associations you are a part of
                         </label>
                         <input
                           type="text"
                           className="form-control h-px-48"
                           name="associations"
                           placeholder="FDEC, IPDC"
                           onChange={(event) => setAssociations(event.target.value)}
                           value={students_sent_abroad}
                         />
                       </div>
                     </div>
                  
                   </div>
                   <div className="row mb-xl-1 mb-9">
                     
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Where do you recruit Students from?
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="recruitment_area"
                                placeholder="Bangladesh, India, Kenya"
                                onChange={(event) => setRecruitment_area(event.target.value)}
                                value={recruitment_area}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Facebook Link
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="facebooklink"
                                placeholder="The link to your agencies Facebook Page"
                                onChange={(event) => setFacebooklink(event.target.value)}
                                value={facebooklink}
                              />
                            </div>
                          </div>
                       
                        </div>
                      
                     
                       
                        <input
                              type="button"
                              value="Save"
                              className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                              onClick={onSubmit}
                         />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
);
  
}

export const Month = [
  {name:"birth_month", value: "jan", label: "Januray" },
  { name:"birth_month", value: "feb", label: "February" },
  {name:"birth_month", value: "march", label: "March" },
  {name:"birth_month", value: "april", label: "April" },
  {name:"birth_month", value: "may", label: "May" },
  {name:"birth_month", value: "june", label: "June" },
  {name:"birth_month", value: "july", label: "July" },
  {name:"birth_month", value: "august", label: "August" },
  { name:"birth_month", value: "sept", label: "September" },
  {name:"birth_month", value: "oct", label: "October" },
  {name:"birth_month", value: "nov", label: "November" },
  {name:"birth_month", value: "december", label: "December" },
];

export const Date = [
  {name:"birth_date", value: "1", label: "1" },
  {name:"birth_date", value: "2", label: "2" },
  {name:"birth_date", value: "3", label: "3" },
  {name:"birth_date", value: "4", label: "4" },
  {name:"birth_date", value: "5", label: "5" },
  {name:"birth_date", value: "6", label: "6" },
  {name:"birth_date", value: "7", label: "7" },
  {name:"birth_date", value: "8", label: "8" },
  {name:"birth_date", value: "9", label: "9" },
  {name:"birth_date", value: "10", label: "10" },
  {name:"birth_date", value: "11", label: "11" },
  {name:"birth_date", value: "12", label: "12" },
  {name:"birth_date", value: "13", label: "13" },
  {name:"birth_date", value: "14", label: "14" },
  {name:"birth_date", value: "15", label: "15" },
  {name:"birth_date", value: "16", label: "16" },
  {name:"birth_date", value: "17", label: "17" },
  {name:"birth_date", value: "18", label: "18" },
  {name:"birth_date", value: "19", label: "19" },
  {name:"birth_date", value: "20", label: "20" },
  {name:"birth_date", value: "21", label: "21" },
  {name:"birth_date", value: "22", label: "22" },
  {name:"birth_date", value: "23", label: "23" },
  {name:"birth_date", value: "24", label: "24" },
  {name:"birth_date", value: "25", label: "25" },
  {name:"birth_date", value: "26", label: "26" },
  {name:"birth_date", value: "27", label: "27" },
  {name:"birth_date", value: "28", label: "28" },
  {name:"birth_date", value: "29", label: "29" },
  {name:"birth_date", value: "30", label: "30" },
  {name:"birth_date", value: "31", label: "31" },
];

export const Semester = [
  {name:"IntendedSemester", value: "fall", label: "Fall" },
  { name:"IntendedSemester", value: "spring", label: "Spring" },
  {name:"IntendedSemester", value: "summer", label: "Summer" },

];


// export const BirthYear = [
//   {name:"birth_year", value: "1990", label: "1990" },
//   {name:"birth_year", value: "1991", label: "1991" },
//   {name:"birth_year", value: "1992", label: "1992" },
//   {name:"birth_year", value: "1993", label: "1993" },
//   {name:"birth_year", value: "1994", label: "1994" },
//   {name:"birth_year", value: "1995", label: "1995" },
//   {name:"birth_year", value: "1996", label: "1996" },
//   {name:"birth_year", value: "1997", label: "1997" },
//   {name:"birth_year", value: "1998", label: "1998" },
//   {name:"birth_year", value: "1999", label: "1999" },
//   {name:"birth_year", value: "2000", label: "2000" },
//   {name:"birth_year", value: "2001", label: "2001" },
//   {name:"birth_year", value: "2002", label: "2002" },
//   {name:"birth_year", value: "2003", label: "2003" },
// ];
export const Qualification = [
  {name:"prev_qualification", value: 'HSC', label: 'HSC' },
  {name:"prev_qualification", value: 'Alevel', label: 'Alevel' },
  {name:"prev_qualification", value: 'undergrad', label: 'Undergraduate' },
  {name:"prev_qualification", value: 'postgrad', label: 'Postgraduate' },
  {name:"prev_qualification", value: 'diploma', label: 'Diploma' },
  {name:"prev_qualification", value: 'other', label: 'Other' },
]

export const Subject = [
  {name:"DesiredSubject", value: "Engineering", label: "Engineering" },
  {name:"DesiredSubject", value: "Science", label: "Science" },
  {name:"DesiredSubject", value: "Business", label: "Business" },
  {name:"DesiredSubject", value: "LiberalArts", label: "Liberal Arts" },
  {name:"DesiredSubject", value: "Arts", label: "Arts" },
  {name:"DesiredSubject", value: "other", label: "Other" },
]
export const IELTSBand = [
  {name:"IELTSBand", value: '3', label: '3' },
  {name:"IELTSBand", value: '3.2', label: '3.2' },
  {name:"IELTSBand", value: '3.4', label: '3.4' },
  {name:"IELTSBand", value: '3.6', label: '3.6' },
  {name:"IELTSBand", value: '3.8', label: '3.8' },
  {name:"IELTSBand", value: '4', label: '4' },
]

export const Desiredlevel = [
  {name:"Desiredlevel", value: 'HSC', label: 'HSC' },
  {name:"Desiredlevel", value: 'Alevel', label: 'Alevel' },
  {name:"Desiredlevel", value: 'undergrad', label: 'Undergraduate' },
  {name:"Desiredlevel", value: 'postgrad', label: 'Postgraduate' },
  {name:"Desiredlevel", value: 'diploma', label: 'Diploma' },
  {name:"Desiredlevel", value: 'other', label: 'Other' },
]
export const Gender = [
  {name:"gender", value: "male", label: "Male" },
  {name:"gender", value: "female", label: "Female" },
  {name:"gender", value: "other", label: "Other" },
 
];


export const Destination = [
  {name:"StudyDestination", value: "uk", label: "U.K." },
  {name:"StudyDestination", value: "usa", label: "U.S.A." },
  {name:"StudyDestination", value: "cn", label: "Canada" },
  {name:"StudyDestination", value: "aus", label: "Australia" },
  {name:"StudyDestination", value: "europe", label: "Europe" },
  {name:"StudyDestination", value: "malay", label: "Malaysia" },
];

export const getCountries = [
  { 
    name:"country", value: "AF",
    label: "Afghanistan"
  },
  {
    name:"country", value: "AX",
    label: "Åland Islands"
  },
  {
    name:"country", value: "AL",
    label: "Albania"
  },
  {
    name:"country", value: "DZ",
    label: "Algeria"
  },
  {
    name:"country", value: "AS",
    label: "American Samoa"
  },
  {
    name:"country", value: "AD",
    label: "Andorra"
  },
  {
    name:"country", value: "AO",
    label: "Angola"
  },
  {
    name:"country", value: "AI",
    label: "Anguilla"
  },
  {
    name:"country", value: "AQ",
    label: "Antarctica"
  },
  {
    name:"country", value: "AG",
    label: "Antigua and Barbuda"
  },
  {
    name:"country", value: "AR",
    label: "Argentina"
  },
  {
    name:"country", value: "AM",
    label: "Armenia"
  },
  {
    name:"country", value: "AW",
    label: "Aruba"
  },
  {
    name:"country", value: "AU",
    label: "Australia"
  },
  {
    name:"country", value: "AT",
    label: "Austria"
  },
  {
    name:"country", value: "AZ",
    label: "Azerbaijan"
  },
  {
    name:"country", value: "BS",
    label: "Bahamas"
  },
  {
    name:"country", value: "BH",
    label: "Bahrain"
  },
  {
    name:"country", value: "BD",
    label: "Bangladesh"
  },
  {
    name:"country", value: "BB",
    label: "Barbados"
  },
  {
    name:"country", value: "BY",
    label: "Belarus"
  },
  {
    name:"country", value: "BE",
    label: "Belgium"
  },
  {
    name:"country", value: "BZ",
    label: "Belize"
  },
  {
    name:"country", value: "BJ",
    label: "Benin"
  },
  {
    name:"country", value: "BM",
    label: "Bermuda"
  },
  {
    name:"country", value: "BT",
    label: "Bhutan"
  },
  {
    name:"country", value: "BO",
    label: "Bolivia, Plurinational State of"
  },
  {
    name:"country", value: "BQ",
    label: "Bonaire, Sint Eustatius and Saba"
  },
  {
    name:"country", value: "BA",
    label: "Bosnia and Herzegovina"
  },
  {
    name:"country", value: "BW",
    label: "Botswana"
  },
  {
    name:"country", value: "BV",
    label: "Bouvet Island"
  },
  {
    name:"country", value: "BR",
    label: "Brazil"
  },
  {
    name:"country", value: "IO",
    label: "British Indian Ocean Territory"
  },
  {
    name:"country", value: "BN",
    label: "Brunei Darussalam"
  },
  {
    name:"country", value: "BG",
    label: "Bulgaria"
  },
  {
    name:"country", value: "BF",
    label: "Burkina Faso"
  },
  {
    name:"country", value: "BI",
    label: "Burundi"
  },
  {
    name:"country", value: "CV",
    label: "Cabo Verde"
  },
  {
    name:"country", value: "KH",
    label: "Cambodia"
  },
  {
    name:"country", value: "CM",
    label: "Cameroon"
  },
  {
    name:"country", value: "CA",
    label: "Canada"
  },
  {
    name:"country", value: "KY",
    label: "Cayman Islands"
  },
  {
    name:"country", value: "CF",
    label: "Central African Republic"
  },
  {
    name:"country", value: "TD",
    label: "Chad"
  },
  {
    name:"country", value: "CL",
    label: "Chile"
  },
  {
    name:"country", value: "CN",
    label: "China"
  },
  {
    name:"country", value: "CX",
    label: "Christmas Island"
  },
  {
    name:"country", value: "CC",
    label: "Cocos (Keeling) Islands"
  },
  {
    name:"country", value: "CO",
    label: "Colombia"
  },
  {
    name:"country", value: "KM",
    label: "Comoros"
  },
  {
    name:"country", value: "CG",
    label: "Congo"
  },
  {
    name:"country", value: "CD",
    label: "Congo, Democratic Republic of the"
  },
  {
    name:"country", value: "CK",
    label: "Cook Islands"
  },
  {
    name:"country", value: "CR",
    label: "Costa Rica"
  },
  {
    name:"country", value: "HR",
    label: "Croatia"
  },
  {
    name:"country", value: "CU",
    label: "Cuba"
  },
  {
    name:"country", value: "CW",
    label: "Curaçao"
  },
  {
    name:"country", value: "CY",
    label: "Cyprus"
  },
  {
    name:"country", value: "CZ",
    label: "Czechia"
  },
  {
    name:"country", value: "CI",
    label: "Côte d'Ivoire"
  },
  {
    name:"country", value: "DK",
    label: "Denmark"
  },
  {
    name:"country", value: "DJ",
    label: "Djibouti"
  },
  {
    name:"country", value: "DM",
    label: "Dominica"
  },
  {
    name:"country", value: "DO",
    label: "Dominican Republic"
  },
  {
    name:"country", value: "EC",
    label: "Ecuador"
  },
  {
    name:"country", value: "EG",
    label: "Egypt"
  },
  {
    name:"country", value: "SV",
    label: "El Salvador"
  },
  {
    name:"country", value: "GQ",
    label: "Equatorial Guinea"
  },
  {
    name:"country", value: "ER",
    label: "Eritrea"
  },
  {
    name:"country", value: "EE",
    label: "Estonia"
  },
  {
    name:"country", value: "SZ",
    label: "Eswatini"
  },
  {
    name:"country", value: "ET",
    label: "Ethiopia"
  },
  {
    name:"country", value: "FK",
    label: "Falkland Islands (Malvinas)"
  },
  {
    name:"country", value: "FO",
    label: "Faroe Islands"
  },
  {
    name:"country", value: "FJ",
    label: "Fiji"
  },
  {
    name:"country", value: "FI",
    label: "Finland"
  },
  {
    name:"country", value: "FR",
    label: "France"
  },
  {
    name:"country", value: "GF",
    label: "French Guiana"
  },
  {
    name:"country", value: "PF",
    label: "French Polynesia"
  },
  {
    name:"country", value: "TF",
    label: "French Southern Territories"
  },
  {
    name:"country", value: "GA",
    label: "Gabon"
  },
  {
    name:"country", value: "GM",
    label: "Gambia"
  },
  {
    name:"country", value: "GE",
    label: "Georgia"
  },
  {
    name:"country", value: "DE",
    label: "Germany"
  },
  {
    name:"country", value: "GH",
    label: "Ghana"
  },
  {
    name:"country", value: "GI",
    label: "Gibraltar"
  },
  {
    name:"country", value: "GR",
    label: "Greece"
  },
  {
    name:"country", value: "GL",
    label: "Greenland"
  },
  {
    name:"country", value: "GD",
    label: "Grenada"
  },
  {
    name:"country", value: "GP",
    label: "Guadeloupe"
  },
  {
    name:"country", value: "GU",
    label: "Guam"
  },
  {
    name:"country", value: "GT",
    label: "Guatemala"
  },
  {
    name:"country", value: "GG",
    label: "Guernsey"
  },
  {
    name:"country", value: "GN",
    label: "Guinea"
  },
  {
    name:"country", value: "GW",
    label: "Guinea-Bissau"
  },
  {
    name:"country", value: "GY",
    label: "Guyana"
  },
  {
    name:"country", value: "HT",
    label: "Haiti"
  },
  {
    name:"country", value: "HM",
    label: "Heard Island and McDonald Islands"
  },
  {
    name:"country", value: "VA",
    label: "Holy See"
  },
  {
    name:"country", value: "HN",
    label: "Honduras"
  },
  {
    name:"country", value: "HK",
    label: "Hong Kong"
  },
  {
    name:"country", value: "HU",
    label: "Hungary"
  },
  {
    name:"country", value: "IS",
    label: "Iceland"
  },
  {
    name:"country", value: "IN",
    label: "India"
  },
  {
    name:"country", value: "IND",
    label: "Indonesia"
  },
  {
    name:"country", value: "IR",
    label: "Iran, Islamic Republic of"
  },
  {
    name:"country", value: "IQ",
    label: "Iraq"
  },
  {
    name:"country", value: "IE",
    label: "Ireland"
  },
  {
    name:"country", value: "IM",
    label: "Isle of Man"
  },
  {
    name:"country", value: "IL",
    label: "Israel"
  },
  {
    name:"country", value: "IT",
    label: "Italy"
  },
  {
    name:"country", value: "JM",
    label: "Jamaica"
  },
  {
    name:"country", value: "JP",
    label: "Japan"
  },
  {
    name:"country", value: "JE",
    label: "Jersey"
  },
  {
    name:"country", value: "JO",
    label: "Jordan"
  },
  {
    name:"country", value: "KZ",
    label: "Kazakhstan"
  },
  {
    name:"country", value: "KE",
    label: "Kenya"
  },
  {
    name:"country", value: "KI",
    label: "Kiribati"
  },
  {
    name:"country", value: "KP",
    label: "Korea, Democratic People's Republic of"
  },
  {
    name:"country", value: "KR",
    label: "Korea, Republic of"
  },
  {
    name:"country", value: "KW",
    label: "Kuwait"
  },
  {
    name:"country", value: "KG",
    label: "Kyrgyzstan"
  },
  {
    name:"country", value: "LA",
    label: "Lao People's Democratic Republic"
  },
  {
    name:"country", value: "LV",
    label: "Latvia"
  },
  {
    name:"country", value: "LB",
    label: "Lebanon"
  },
  {
    name:"country", value: "LS",
    label: "Lesotho"
  },
  {
    name:"country", value: "LR",
    label: "Liberia"
  },
  {
    name:"country", value: "LY",
    label: "Libya"
  },
  {
    name:"country", value: "LI",
    label: "Liechtenstein"
  },
  {
    name:"country", value: "LT",
    label: "Lithuania"
  },
  {
    name:"country", value: "LU",
    label: "Luxembourg"
  },
  {
    name:"country", value: "MO",
    label: "Macao"
  },
  {
    name:"country", value: "MG",
    label: "Madagascar"
  },
  {
    name:"country", value: "MW",
    label: "Malawi"
  },
  {
    name:"country", value: "MY",
    label: "Malaysia"
  },
  {
    name:"country", value: "MV",
    label: "Maldives"
  },
  {
    name:"country", value: "ML",
    label: "Mali"
  },
  {
    name:"country", value: "MT",
    label: "Malta"
  },
  {
    name:"country", value: "MH",
    label: "Marshall Islands"
  },
  {
    name:"country", value: "MQ",
    label: "Martinique"
  },
  {
    name:"country", value: "MR",
    label: "Mauritania"
  },
  {
    name:"country", value: "MU",
    label: "Mauritius"
  },
  {
    name:"country", value: "YT",
    label: "Mayotte"
  },
  {
    name:"country", value: "MX",
    label: "Mexico"
  },
  {
    name:"country", value: "FM",
    label: "Micronesia, Federated States of"
  },
  {
    name:"country", value: "MD",
    label: "Moldova, Republic of"
  },
  {
    name:"country", value: "MC",
    label: "Monaco"
  },
  {
    name:"country", value: "MN",
    label: "Mongolia"
  },
  {
    name:"country", value: "ME",
    label: "Montenegro"
  },
  {
    name:"country", value: "MS",
    label: "Montserrat"
  },
  {
    name:"country", value: "MA",
    label: "Morocco"
  },
  {
    name:"country", value: "MZ",
    label: "Mozambique"
  },
  {
    name:"country", value: "MM",
    label: "Myanmar"
  },
  {
    name:"country", value: "NA",
    label: "Namibia"
  },
  {
    name:"country", value: "NR",
    label: "Nauru"
  },
  {
    name:"country", value: "NP",
    label: "Nepal"
  },
  {
    name:"country", value: "NL",
    label: "Netherlands"
  },
  {
    name:"country", value: "NC",
    label: "New Caledonia"
  },
  {
    name:"country", value: "NZ",
    label: "New Zealand"
  },
  {
    name:"country", value: "NI",
    label: "Nicaragua"
  },
  {
    name:"country", value: "NE",
    label: "Niger"
  },
  {
    name:"country", value: "NG",
    label: "Nigeria"
  },
  {
    name:"country", value: "NU",
    label: "Niue"
  },
  {
    name:"country", value: "NF",
    label: "Norfolk Island"
  },
  {
    name:"country", value: "MK",
    label: "North Macedonia"
  },
  {
    name:"country", value: "MP",
    label: "Northern Mariana Islands"
  },
  {
    name:"country", value: "NO",
    label: "Norway"
  },
  {
    name:"country", value: "OM",
    label: "Oman"
  },
  {
    name:"country", value: "PK",
    label: "Pakistan"
  },
  {
    name:"country", value: "PW",
    label: "Palau"
  },
  {
    name:"country", value: "PS",
    label: "Palestine, State of"
  },
  {
    name:"country", value: "PA",
    label: "Panama"
  },
  {
    name:"country", value: "PG",
    label: "Papua New Guinea"
  },
  {
    name:"country", value: "PY",
    label: "Paraguay"
  },
  {
    name:"country", value: "PE",
    label: "Peru"
  },
  {
    name:"country", value: "PH",
    label: "Philippines"
  },
  {
    name:"country", value: "PN",
    label: "Pitcairn"
  },
  {
    name:"country", value: "PL",
    label: "Poland"
  },
  {
    name:"country", value: "PT",
    label: "Portugal"
  },
  {
    name:"country", value: "PR",
    label: "Puerto Rico"
  },
  {
    name:"country", value: "QA",
    label: "Qatar"
  },
  {
    name:"country", value: "RO",
    label: "Romania"
  },
  {
    name:"country", value: "RU",
    label: "Russian Federation"
  },
  {
    name:"country", value: "RW",
    label: "Rwanda"
  },
  {
    name:"country", value: "RE",
    label: "Réunion"
  },
  {
    name:"country", value: "BL",
    label: "Saint Barthélemy"
  },
  {
    name:"country", value: "SH",
    label: "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    name:"country", value: "KN",
    label: "Saint Kitts and Nevis"
  },
  {
    name:"country", value: "LC",
    label: "Saint Lucia"
  },
  {
    name:"country", value: "MF",
    label: "Saint Martin (French part)"
  },
  {
    name:"country", value: "PM",
    label: "Saint Pierre and Miquelon"
  },
  {
    name:"country", value: "VC",
    label: "Saint Vincent and the Grenadines"
  },
  {
    name:"country", value: "WS",
    label: "Samoa"
  },
  {
    name:"country", value: "SM",
    label: "San Marino"
  },
  {
    name:"country", value: "ST",
    label: "Sao Tome and Principe"
  },
  {
    name:"country", value: "SA",
    label: "Saudi Arabia"
  },
  {
    name:"country", value: "SN",
    label: "Senegal"
  },
  {
    name:"country", value: "RS",
    label: "Serbia"
  },
  {
    name:"country", value: "SC",
    label: "Seychelles"
  },
  {
    name:"country", value: "SL",
    label: "Sierra Leone"
  },
  {
    name:"country", value: "SG",
    label: "Singapore"
  },
  {
    name:"country", value: "SX",
    label: "Sint Maarten (Dutch part)"
  },
  {
    name:"country", value: "SK",
    label: "Slovakia"
  },
  {
    name:"country", value: "SI",
    label: "Slovenia"
  },
  {
    name:"country", value: "SB",
    label: "Solomon Islands"
  },
  {
    name:"country", value: "SO",
    label: "Somalia"
  },
  {
    name:"country", value: "ZA",
    label: "South Africa"
  },
  {
    name:"country", value: "GS",
    label: "South Georgia and the South Sandwich Islands"
  },
  {
    name:"country", value: "SS",
    label: "South Sudan"
  },
  {
    name:"country", value: "ES",
    label: "Spain"
  },
  {
    name:"country", value: "LK",
    label: "Sri Lanka"
  },
  {
    name:"country", value: "SD",
    label: "Sudan"
  },
  {
    name:"country", value: "SR",
    label: "Suriname"
  },
  {
    name:"country", value: "SJ",
    label: "Svalbard and Jan Mayen"
  },
  {
    name:"country", value: "SE",
    label: "Sweden"
  },
  {
    name:"country", value: "CH",
    label: "Switzerland"
  },
  {
    name:"country", value: "SY",
    label: "Syrian Arab Republic"
  },
  {
    name:"country", value: "TW",
    label: "Taiwan, Province of China"
  },
  {
    name:"country", value: "TJ",
    label: "Tajikistan"
  },
  {
    name:"country", value: "TZ",
    label: "Tanzania, United Republic of"
  },
  {
    name:"country", value: "TH",
    label: "Thailand"
  },
  {
    name:"country", value: "TL",
    label: "Timor-Leste"
  },
  {
    name:"country", value: "TG",
    label: "Togo"
  },
  {
    name:"country", value: "TK",
    label: "Tokelau"
  },
  {
    name:"country", value: "TO",
    label: "Tonga"
  },
  
  {
    name:"country", value: "TN",
    label: "Tunisia"
  },
  {
    name:"country", value: "TR",
    label: "Turkey"
  },
  {
    name:"country", value: "TM",
    label: "Turkmenistan"
  },
  {
    name:"country", value: "TC",
    label: "Turks and Caicos Islands"
  },
  {
    name:"country", value: "TV",
    label: "Tuvalu"
  },
  {
    name:"country", value: "UG",
    label: "Uganda"
  },
  {
    name:"country", value: "UA",
    label: "Ukraine"
  },
  {
    name:"country", value: "AE",
    label: "United Arab Emirates"
  },
  {
    name:"country", value: "GB",
    label: "United Kingdom"
  },
  {
    name:"country", value: "UM",
    label: "United States Minor Outlying Islands"
  },
  {
    name:"country", value: "US",
    label: "United States"
  },
  {
    name:"country", value: "UY",
    label: "Uruguay"
  },
  {
    name:"country", value: "UZ",
    label: "Uzbekistan"
  },
  {
    name:"country", value: "VU",
    label: "Vanuatu"
  },
  {
    name:"country", value: "VE",
    label: "Venezuela, Bolivarian Republic of"
  },
  {
    name:"country", value: "VN",
    label: "Viet Nam"
  },
  {
    name:"country", value: "VG",
    label: "Virgin Islands, British"
  },
  {
    name:"country", value: "VI",
    label: "Virgin Islands, U.S."
  },
  {
    name:"country", value: "WF",
    label: "Wallis and Futuna"
  },
  {
    name:"country", value: "EH",
    label: "Western Sahara"
  },
  {
    name:"country", value: "YE",
    label: "Yemen"
  },
  {
    name:"country", value: "ZM",
    label: "Zambia"
  },
  {
    name:"country", value: "ZW",
    label: "Zimbabwe"
  }
]
export default SignUp;