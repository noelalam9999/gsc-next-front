import React , { Component, useEffect,useState } from "react";
import axios from 'axios';
import { Select } from "../../components/Core";
import 'firebase/firestore';
import SidebarDashboard from "../../components/SidebarDashboard/SidebarDashboard";


const FallSemester = [
  {name:"FallSemester", value: "jan", label: "Januray" },
  {name:"FallSemester", value: "feb", label: "February" },
  {name:"FallSemester", value: "march", label: "March" },
  {name:"FallSemester", value: "april", label: "April" },
  {name:"FallSemester", value: "may", label: "May" },
  {name:"FallSemester", value: "june", label: "June" },
  {name:"FallSemester", value: "july", label: "July" },
  {name:"FallSemester", value: "august", label: "August" },
  {name:"FallSemester", value: "sept", label: "September" },
  {name:"FallSemester", value: "oct", label: "October" },
  {name:"FallSemester", value: "nov", label: "November" },
  {name:"FallSemester", value: "december", label: "December" },
];

const SpringSemester = [
  {name:"SpringSemester", value: "jan", label: "Januray" },
  {name:"SpringSemester", value: "feb", label: "February" },
  {name:"SpringSemester", value: "march", label: "March" },
  {name:"SpringSemester", value: "april", label: "April" },
  {name:"SpringSemester", value: "may", label: "May" },
  {name:"SpringSemester", value: "june", label: "June" },
  {name:"SpringSemester", value: "july", label: "July" },
  {name:"SpringSemester", value: "august", label: "August" },
  {name:"SpringSemester", value: "sept", label: "September" },
  {name:"SpringSemester", value: "oct", label: "October" },
  {name:"SpringSemester", value: "nov", label: "November" },
  {name:"SpringSemester", value: "december", label: "December" },
];

const SummerSemester = [
  {name:"SummerSemester", value: "jan", label: "Januray" },
  {name:"SummerSemester", value: "feb", label: "February" },
  {name:"SummerSemester", value: "march", label: "March" },
  {name:"SummerSemester", value: "april", label: "April" },
  {name:"SummerSemester", value: "may", label: "May" },
  {name:"SummerSemester", value: "june", label: "June" },
  {name:"SummerSemester", value: "july", label: "July" },
  {name:"SummerSemester", value: "august", label: "August" },
  {name:"SummerSemester", value: "sept", label: "September" },
  {name:"SummerSemester", value: "oct", label: "October" },
  {name:"SummerSemester", value: "nov", label: "November" },
  {name:"SummerSemester", value: "december", label: "December" },
];


const UGfee = [
  {name:"UGfee", value: "<50,000", label: "<50,000" },
  {name:"UGfee", value: "50,000-100,000", label: "50,000-100,000" },
  {name:"UGfee", value: "100,000-200,000", label: "100,000-200,000" },
  {name:"UGfee", value: "200,000<", label: "200,000" },
];

const PGfee = [
  {name:"PGfee", value: "<50,000", label: "<50,000" },
  {name:"PGfee", value: "50,000-100,000", label: "50,000-100,000" },
  {name:"PGfee", value: "100,000-200,000", label: "100,000-200,000" },
  {name:"PGfee", value: "200,000<", label: "200,000" },
];

const Diplomafee = [
  {name:"Diplomafee", value: "<50,000", label: "<50,000" },
  {name:"Diplomafee", value: "50,000-100,000", label: "50,000-100,000" },
  {name:"Diplomafee", value: "100,000-200,000", label: "100,000-200,000" },
  {name:"Diplomafee", value: "200,000<", label: "200,000" },
];

const AccomodationCost = [
  {name:"AccomodationCost", value: "<6,000", label: "<6,000" },
  {name:"AccomodationCost", value: "6,000-12,000", label: "6,000-12,000" },
  {name:"AccomodationCost", value: "12,000-24,000", label: "12,000-24,000" },
  {name:"AccomodationCost", value: "24,000<", label: "24,000<" },
];

const IELTSRequirement = [
  {name:"IELTSRequirement", value: "7.5", label: "7.5" },
  {name:"IELTSRequirement", value: "7", label: "7" },
  {name:"IELTSRequirement", value: "6.5", label: "6.5" },
  {name:"IELTSRequirement", value: "6", label: "6" },
];

const defaultLocations = [
  { value: "uk", label: "U.K." },
  { value: "usa", label: "U.S.A." },
  { value: "cn", label: "Canada" },
  { value: "aus", label: "Australia" },
  { value: "europe", label: "Europe" },
  { value: "malay", label: "Malaysia" },
];

const Accomodation = [
  {name:"Accomodation", value: "yes", label: "Yes" },
  {name:"Accomodation", value: "no", label: "No" },
 
 ];

 const Internship = [
  {name:"Internship", value: "yes", label: "Yes" },
  {name:"Internship", value: "no", label: "No" },
 
 ];

 const OfferLetter = [
  {name:"OfferLetter", value: "yes", label: "Yes" },
  {name:"OfferLetter", value: "no", label: "No" },
 
 ];

 const WorkVisa = [
  {name:"WorkVisa", value: "yes", label: "Yes" },
  {name:"WorkVisa", value: "no", label: "No" },
 
 ];

 const WorkStudy = [
  {name:"WorkStudy", value: "yes", label: "Yes" },
  {name:"WorkStudy", value: "no", label: "No" },
 ];

const EditUni = (props) =>  {

  const [disable, setDisable] = useState("");
  const [id, setId] = useState("");
  
  const [image, setImage] = useState([])
  const [imageChanged,setImageChanged] = useState(false)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [UGfeedata, setUGfee] = useState("");
  const [PGfeedata, setPGfee] = useState(""); 
  const [DiplomaFeedata, setDiplomaFee] = useState("");
  const [AccomodationCostdata, setAccomodationCost] = useState("");
  const [FallSemesterdata, setFallSemester] = useState("");
  const [SpringSemesterdata, setSpringSemester] = useState("");
  const [SummerSemesterdata, setSummerSemester] = useState("");
  const [ranking, setRanking] = useState("");
  const [IELTSRequirementdata, setIELTSRequirement] = useState("");
  const [Accomodationdata, setAccomodation] = useState("");
  const [Internshipdata, setInternship] = useState("");
  const [OfferLetterdata, setOfferLetter] = useState("");
  const [WorkVisadata, setWorkVisa] = useState("");
  const [WorkStudydata, setWorkStudy] = useState("");
const [record,setRecord] = useState( {  
                                      id:"",
                                      email:"",
                                      name:"",
                                      mobile:"",
                                      country:"",
                                      UGfee:"",
                                      PGfee:"",
                                      Diplomafee:"",
                                      AccomodationCost:"",
                                      FallSemester:"",
                                      SpringSemester:"",
                                      SummerSemester:"",
                                      ranking:"",
                                      IELTSRequirement:"",
                                      Accomodation:"",
                                      Internship:"",
                                      OfferLetter:"",
                                      WorkVisa:"",
                                      WorkStudy:""
                                    })
                                    
        async function fetchMyAPI() {
              try {

      const res = await fetch('https://ci-gsc.com/uni/?format=json');
      
      const todoList = await res.json();
      let filtered = await todoList.filter(function(val, i, a) {return val.id==props.uniId;})
      
      setId(filtered[0].id)
      setName(filtered[0].name)
      setEmail(filtered[0].email)
      setMobile(filtered[0].mobile)
      setCountry(filtered[0].country)
      setUGfee(filtered[0].UGfee)
      setPGfee(filtered[0].PGfee)
      setDiplomaFee(filtered[0].Diplomafee)
      setAccomodationCost(filtered[0].AccomodationCost)
      setFallSemester(filtered[0].FallSemester)
      setSpringSemester(filtered[0].SpringSemester)
      setSummerSemester(filtered[0].SummerSemester)
      setRanking(filtered[0].ranking)
      setIELTSRequirement(filtered[0].IELTSRequirement)
      setAccomodation(filtered[0].Accomodation)
      setInternship(filtered[0].Internship)
      setOfferLetter(filtered[0].OfferLetter)
      setWorkVisa(filtered[0].WorkVisa)
      setWorkStudy(filtered[0].WorkStudy)
 
      const res_logo = await fetch('https://ci-gsc.com/unilogo/?format=json');
      
      const todoList_logo = await res_logo.json();
      let filtered_logo = await todoList_logo.filter(function(val, i, a) {return val.email==filtered[0].email;})
  
      setImage(filtered_logo)
    } catch (e) {
      console.log(e);
  }
    }


  
useEffect(() =>  {

  fetchMyAPI()
 
   },props.uniId)

const success = () => {
  alert("University Change");
}

const onCountryChange = selectedOption => {
  setCountry(selectedOption);
};

const onUGfeeChange = selectedOption => {
  setUGfee(selectedOption);
};

const onPGfeeChange = selectedOption => {
  setPGfee(selectedOption);
};
const onDiplomafeeChange = selectedOption => {
  setDiplomaFee(selectedOption);
};
const onAccomodationCostChange = selectedOption => {
  setAccomodationCost(selectedOption);
};
const onFallSemesterChange = selectedOption => {
  setFallSemester(selectedOption);
};
const onSpringSemesterChange = selectedOption => {
  setSpringSemester(selectedOption);
};
const onSummerSemesterChange = selectedOption => {
  setSummerSemester(selectedOption);
};
const onIETLSRequirementChange = selectedOption => {
  setIELTSRequirement(selectedOption);
};
const onAccomodationChange = selectedOption => {
  setAccomodation(selectedOption);
};
const onInternshipChange = selectedOption => {
  setInternship(selectedOption);
};
const onOfferLetterChange = selectedOption => {
  setOfferLetter(selectedOption);
};
const onWorkVisaChange = selectedOption => {
  setWorkVisa(selectedOption);
};
const onWorkStudyChange = selectedOption => {
  setWorkStudy(selectedOption);
};
const handleImageChange = (e) => {
  setImageChanged(true)
    setImage(e)
  };

const handleSubmit = (item) => {
  setDisable(false)
  item.id = id,
  item.email=email,
  item.name=name,
  item.mobile=mobile,
  item.country=country,
  item.UGfee=UGfeedata,
  item.PGfee=PGfeedata,
  item.Diplomafee=DiplomaFeedata,
  item.AccomodationCost=AccomodationCostdata,
  item.FallSemester=FallSemesterdata,
  item.SpringSemester=SpringSemesterdata,
  item.SummerSemester=SummerSemesterdata,
  item.ranking=ranking,
  item.IELTSRequirement=IELTSRequirementdata,
  item.Accomodation=Accomodationdata,
  item.Internship=Internshipdata,
  item.OfferLetter=OfferLetterdata,
  item.WorkVisa=WorkVisadata,
  item.WorkStudy=WorkStudydata

  if (item.id) {
    axios
      .put(`https://ci-gsc.com/uni/${item.id}/`, item)
      .then((res) => success())
      .catch((err) => console.log(err));
    return;
  }
  

    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('email', email);

    let url = 'https://ci-gsc.com/unilogo/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
    

};


   return (
    <>
     
        <SidebarDashboard/>
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          id="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    Please fill up the details to edit the details for {name}
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                    
                    <form action="/">
                      <fieldset>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                University Name * 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="name"
                                placeholder="eg. Collarts"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                              />
                            </div>
                          </div>
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
                                placeholder="+9901845671823"
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
                                style={{paddingBottom:"10px"}}
                              >
                                University Logo * 
                              </label>
                              
{image[0]!=null&& (<span style={{paddingRight:"5px"}}><a target="_blank" href={"https://ci-gsc.com"+image[0].image}>View Image</a></span>)}
                              <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={(event) => setEmail(event.target.value)} required/>
                            </div>
                            
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Country : 
                              </label>
                              

                              <Select
                                options={getCountries}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="country"  
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
                                IELTS Requirement * 
                              </label>
                              <Select
                                options={IELTSRequirement}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="IELTSRequirement"  
                                onChange={onIETLSRequirementChange}
                                value={IELTSRequirementdata}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Average Undergraduate Fee
                              </label>
                              <Select
                                options={UGfee}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="UGfee"  
                                onChange={onUGfeeChange}
                                value={UGfeedata}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Average Post-Graduate Fee
                              </label>
                              <Select
                                options={PGfee}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="PGfee"  
                                onChange={onPGfeeChange}
                                value={PGfeedata}
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Average Diploma Fee
                              </label>
                              <Select
                                options={Diplomafee}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="Diplomafee"  
                                onChange={onDiplomafeeChange}
                                value={DiplomaFeedata}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Accomodation Cost
                              </label>
                              <Select
                                options={AccomodationCost}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="AccomodationCost"  
                                onChange={onAccomodationCostChange}
                                value={AccomodationCostdata}
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Start of Fall semester
                              </label>
                              <Select
                                options={FallSemester}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="FallSemester"  
                                onChange={onFallSemesterChange}
                                value={FallSemesterdata}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Start of Spring Semester
                              </label>
                              <Select
                                options={SpringSemester}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="SpringSemester"  
                                onChange={onSpringSemesterChange}
                                value={SpringSemesterdata}
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Start of Summer semester
                              </label>
                              <Select
                                options={SummerSemester}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="SummerSemester"  
                                onChange={onSummerSemesterChange}
                                value={SummerSemesterdata}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Ranking
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="ranking"
                                placeholder="eg. 3.5"
                               
                                onChange={(event) => setRanking(event.target.value)}
                                value={ranking}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Intership Opportunity
                              </label>
                              <Select
                              
                              options={Internship}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onInternshipChange}
                              value={Internshipdata}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Offer Letter
                              </label>
                              <Select
                              
                              options={OfferLetter}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onOfferLetterChange}
                              value={OfferLetterdata}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Accomodation
                              </label>
                              <Select
                              
                              options={Accomodation}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onAccomodationChange}
                              value={Accomodationdata}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Work Visa after Study
                              </label>
                              <Select
                              
                              options={WorkVisa}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onWorkStudyChange}
                              // value={WorkVisadata}
                              defaultValue={WorkVisadata}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Work While Studying
                              </label>
                              <Select
                              
                              options={WorkStudy}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={onWorkVisaChange}
                              value={WorkVisadata}
                            />
                            </div>
                          </div>
                        </div>
                       
                        <input
                        disabled ={disable}
                              type="button"
                              value="Save Chanage"
                              className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
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

export default EditUni;


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
    name:"country", value: "Australia",
    label: "Australia"
  },
  {
    name:"country", value: "Europe",
    label: "Europe"
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
    name:"country", value: "Canada",
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
    name:"country", value: "UK",
    label: "United Kingdom"
  },
  {
    name:"country", value: "UM",
    label: "United States Minor Outlying Islands"
  },
  {
    name:"country", value: "USA",
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