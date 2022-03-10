import React, { Component, useEffect,useState } from "react"
import axios from 'axios';
import { Select } from "../../components/Core";
import 'firebase/firestore';
import SidebarDashboardAgent from "../../components/SidebarDashboard/SidebarDashboardAgent";


const YearFounded = [
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

const Role = [
  {name:"Role", value: "ceo", label: "C.E.O." },
  {name:"Role", value: "manager", label: "Manager" },
  {name:"Role", value: "sub-agent", label: "Sub-Agent" },
  {name:"Role", value: "employee", label: "Employee" },
 ];
 const Offices = [
  {name:"Offices", value: "yes", label: "Yes" },
  {name:"Offices", value: "no", label: "No" },
 
 ];
 const Charge = [
  {name:"charge", value: "yes", label: "Yes" },
  {name:"charge", value: "no", label: "No" },
 
 ];
 const SubAgents = [
  {name:"SubAgents", value: "yes", label: "Yes" },
  {name:"SubAgents", value: "no", label: "No" },
 
 ];
 const Associations = [
  {name:"Associations", value: "yes", label: "Yes" },
  {name:"Associations", value: "no", label: "No" },
 
 ];

const EditAgent = (props) => {

  const [disable,setDisable]=useState("");
  const [id,setId]=useState("");
  const [image,setImage]=useState([]);
  const [image2,setImage2] =useState([]);
  const [email,setEmail] =useState("");
  const [name,setName] =useState("");
  const [role,setRole] =useState("");
  const [agency_name,setAgencyName] =useState("");
  const [country,setCountry] =useState("");
  const [mobile,setMobile] =useState("");
  const [website,setWebsite] =useState("");
  const [offices,setOffices] =useState("");
  const [subagents_data,setSubagents] =useState("");
  const [YearFounded_data,setYearFounded] =useState("");
  const [number_of_staff,setNumberOfStaff] =useState("");
  const [services_provided,setServicesProvided] =useState("");
  const [students_sent_abroad,setStudentsSentAbroad] =useState("");
  const [association_bin_data,setAssociationBin] =useState("");
  const [associations,setAssociations] =useState("");
  const [recruitment_area,setRecruitmentArea] =useState("");
  const [facebooklink,setFacebookLink] =useState("");
  const [charge_data,setCharge] =useState("");
 
  const [record,setRecord] = useState( {  
    email:"",
    name:"",
    role:"",
    agency_name:"",
    country:"",
    mobile:"",
    website:"",
    offices:"",
    subagents:"",
    YearFounded:"",
    number_of_staff:"",
    services_provided:"",
    students_sent_abroad:"",
    association_bin:"",
    associations:"",
    recruitment_area:"",
    facebooklink:"",
    charge:"",
    added_by:""
  })

  
  async function fetchMyAPI() {
    try {

const res = await fetch('https://ci-gsc.com/agents/?format=json');

const todoList = await res.json();
let filtered = await todoList.filter(function(val, i, a) {return val.id==props.agentId;})

setId(filtered[0].id)
setName(filtered[0].name)
setEmail(filtered[0].email)
setMobile(filtered[0].mobile)
setCountry(filtered[0].country)
setRole(filtered[0].role)
setAgencyName(filtered[0].agency_name)
setWebsite(filtered[0].website)
setOffices(filtered[0].offices)
setSubagents(filtered[0].subagents)
setYearFounded(filtered[0].YearFounded)
setNumberOfStaff(filtered[0].number_of_staff)
setServicesProvided(filtered[0].services_provided)
setStudentsSentAbroad(filtered[0].students_sent_abroad)
setAssociationBin(filtered[0].association_bin)
setAssociations(filtered[0].associations)
setRecruitmentArea(filtered[0].recruitment_area)
setFacebookLink(filtered[0].facebooklink)
setCharge(filtered[0].charge)

const res_certificate = await fetch('https://ci-gsc.com/agentcert/?format=json');

const todoList_certificate = await res_certificate.json();
let filtered_certificate = await todoList_certificate.filter(function(val, i, a) {return val.email==filtered[0].email;})

setImage(filtered_certificate)
} catch (e) {
console.log(e);
}
}

const onCountryChange = selectedOption => {
  setCountry(selectedOption);
};

const onSubagentsChange = selectedOption => {
  setSubagents(selectedOption);
};

const onYearFoundedChange = selectedOption => {
  setYearFounded(selectedOption);
};

const onAssociationBinChange = selectedOption => {
  setAssociationBin(selectedOption);
};

const onChargeChange = selectedOption => {
  setCharge(selectedOption);
};


useEffect(() =>  {

  fetchMyAPI()
 
   },props.agentId)


const success = () => {
  alert("Agent added to directory");

  if(image){
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('email', email);

    let url = 'https://ci-gsc.com/agentcert/'+id;
    axios.put(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'  
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => this.fail_image())
  }
  if(image2){
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('email', email);

    let url = 'https://ci-gsc.com/profilepicture/'+id;
    axios.put(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'  
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => this.fail_image())
  }
}
const fail = () => {
  alert("Please fillup the mandatory fields, the ones with the asterisks * ")
}

const fail_image = () => {
  alert("Please insert the image again in jpg/png format * ")
}

const handleImageChange = (e) => {
  setImage(e)
};

const handleImageChange2 = (e) => {
  setImage2(e)
};

const handleSubmit = (item) => {

  setDisable(true)
item.id = id
item.name = name
item.email = email
item.mobile = mobile
item.country = country
item.role = role
item.agency_name = agency_name
item.website = website
item.offices = offices
item.subagents = subagents_data
item.YearFounded = YearFounded_data
item.number_of_staff = number_of_staff
item.services_provided = services_provided
item.students_sent_abroad = students_sent_abroad
item.association_bin = association_bin_data
item.associations = associations
item.recruitment_area = recruitment_area
item.facebooklink = facebooklink
item.charge = charge_data

console.log(item)

  if (item.id) {
    axios
      .put(`https://ci-gsc.com/agents/${item.id}/`, item)
      .then((res) => success())
      .catch((err) => console.log(err));
    return;
  }
  

};



  return (
    <>


    <SidebarDashboardAgent/>
     
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          value="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                   Edit Profile
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
                                onChange={(event) => setAgencyName(event.target.value)}
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
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Office Address * 
                              </label>
                              <input
                            
                            className="form-control h-px-48"
                            name="offices"
                            placeholder="The Address of their Office"
                            onChange={(event) => setOffices(event.target.value)}
                            value={offices}
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
                       
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Profile Picture
                              </label>
                              <input 
                              type="file"
                              id="image2"
                              accept="image/png, image/jpeg" 
                              onChange={handleImageChange2} required/>
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
                                Do they have Sub-agents
                              </label>
                              <Select
                              
                                options={SubAgents}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={onSubagentsChange}
                                value={subagents_data}
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
                                value={YearFounded_data}
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
                                onChange={(event) => setNumberOfStaff(event.target.value)}
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
                                onChange={(event) => setServicesProvided(event.target.value)}
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
                                onChange={(event) => setStudentsSentAbroad(event.target.value)}
                                value={students_sent_abroad}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Do you charge for consultation
                              </label>
                              <Select
                              
                              options={Charge}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onChargeChange}
                              value={charge_data}
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
                               Are they part of any Associations
                              </label>
                              <Select
                              
                                options={SubAgents}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={onAssociationBinChange}
                                value={association_bin_data}
                              />
                            </div>
                          </div>
                     <div className="col-lg-6">
                       <div className="form-group">
                         <label
                           htmlFor="namedash"
                           className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                         >
                           Associations they are a part of
                         </label>
                         <input
                           type="text"
                           className="form-control h-px-48"
                           name="associations"
                           placeholder="FDEC, IPDC"
                           onChange={(event) => setAssociations(event.target.value)}
                           value={associations}
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
                                Where do they recruit Students from?
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="recruitment_area"
                                placeholder="Bangladesh, India, Kenya"
                                onChange={(event) => setRecruitmentArea(event.target.value)}
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
                                onChange={(event) => setFacebookLink(event.target.value)}
                                value={facebooklink}
                              />
                            </div>
                          </div>
                       
                        </div>
                      
                     
                       
                        <input
                         disabled ={disable}
                              type="button"
                              value="Save Changes"
                              className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                              onClick={() => handleSubmit(record)}
                         />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
      }

export default EditAgent;

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