import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../../../../AuthUserContext';
import axios from 'axios';
import { Select } from "../../../components/Core";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
const Desiredlevel = [
    {name:"Desiredlevel", value: 'Alevel', label: 'Alevel' },
  {name:"Desiredlevel", value: 'undergrad', label: 'Undergraduate' },
  {name:"Desiredlevel", value: 'postgrad', label: 'Postgraduate' },
  {name:"Desiredlevel", value: 'diploma', label: 'Diploma' },
  {name:"Desiredlevel", value: 'other', label: 'Other' },
]
const EnglishTest = [
  {name:"EnglishTest", value: "IELTS", label: "IELTS" },
  {name:"EnglishTest", value: "TOEFL", label: "TOEFL" },
  {name:"EnglishTest", value: "PTE", label: "PTE" },
  {name:"EnglishTest", value: "Duolingo", label: "Duolingo" },
 
];

const SignUp = () => {

  const [id,setId] = useState([])
  const router = useRouter();
  const uniId = router.query.universityid;
  const { authUser } = useAuth();
  const [country,setCountry] = useState("")
  const [genderdata,setGender] = useState("")
  const [birth_date_data,setBirthDate] = useState("")
  const [birth_month_data,setBirthMonth] = useState("")
  const [birth_year_data,setBirthYear] = useState("")
  const [address1,setAddress1] = useState("")
  const [address2,setAddress2] = useState("")
  const [prev_qualification_data,setprev_qualification_data] = useState("")
  const [IntendedSemesterdata,setIntendedSemester] = useState("")
  const [DesiredSubjectdata,setDesiredSubject] = useState("")
  const [added_by,setadded_by] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [IELTSBand, setIELTSBand] = useState("");
  const [TOEFL, setTOEFL] =  useState("");
  const [PTE, setPTE] =  useState("");
  const [EnglishTestdata, setEnglishTest] =  useState("");
  const [Duolingo, setDuolingo] =  useState("");
  const [HSCGPA, setHSCGPA] = useState("");
  const [UGCGPA, setUGCGPA] = useState("");

  const [work_experience, setwork_experience] = useState("");
  const [prev_institution, setprev_institution] = useState("");
  const [parents_name, setparents_name] = useState("");
  const [parents_contact_number, setparents_contact_number] = useState("");
  const [parents_email, setparents_email] = useState("");
  const [parents_profession, setparents_profession] = useState("");
  const [extracurricular, setextracurricular] = useState("");
   
  const [Desiredleveldata,setDesiredlevel] = useState("")
  const [StudyDestinationdata,setStudyDestination] = useState("")
  const [mobile,setMobile] = useState("")
  
  const [error, setError] = useState(null);
  const [student_record, setSetRecord] = useState({
  id:'', 
  email: '',
  name:"",
  mobile:"",
  Desiredlevel:"",
  StudyDestination:"",
  country:"",
  gender:"",
  birth_date:"",
  birth_month:"",
  birth_year:"",
  address1:"",
  address2:"",
  prev_qualification:"Alevel",
  IELTSBand:"",
  TOEFL:"",
  Duolingo:"",
  PTE:"",
  HSCGPA:"",
  UGCGPA:"",
  IntendedSemester:"spring",
  DesiredSubject:"Science",
  work_experience:"",
  prev_institution:"",
  parents_name:"",
  parents_contact_number:"",
  parents_email:"",
  parents_profession:"",
  extracurricular:"",
  added_by:""
});





  async function fetchMyAPI() {
    try {

const res = await fetch('https://ci-gsc.com/students/?format=json');

const todoList = await res.json();
let filtered = await todoList.filter(function(val, i, a) {return val.email==authUser;})

setId(filtered[0].id )
setName(filtered[0].name== null ? "" :filtered[0].name)
setEmail(filtered[0].email== null ? "" :filtered[0].email)
setMobile(filtered[0].mobile== null ? "" :filtered[0].mobile)
setCountry(filtered[0].country== null ? "" :filtered[0].country)
setGender(filtered[0].gender== null ? "" :filtered[0].gender)
setBirthDate(filtered[0].birth_date== null ? "" :filtered[0].birth_date)
setBirthMonth(filtered[0].birth_month== null ? "" :filtered[0].birth_month)
setBirthYear(filtered[0].birth_year== null ? "" :filtered[0].birth_year)
setAddress1(filtered[0].address1== null ? "" :filtered[0].address1)
setAddress2(filtered[0].address2== null ? "" :filtered[0].address2)
setprev_qualification_data(filtered[0].prev_qualification== null ? "" :filtered[0].prev_qualification)
setIELTSBand(filtered[0].IELTSBand== null ? "" :filtered[0].IELTSBand)
setDesiredlevel(filtered[0].Desiredlevel== null ? "" :filtered[0].Desiredlevel)
setStudyDestination(filtered[0].StudyDestination== null ? "" :filtered[0].StudyDestination)
setIntendedSemester(filtered[0].IntendedSemester== null ? "" :filtered[0].IntendedSemester)
setDesiredSubject(filtered[0].DesiredSubject== null ? "" :filtered[0].DesiredSubject)
setadded_by(filtered[0].added_by== null ? "" :filtered[0].added_by)
setHSCGPA(filtered[0].HSCGPA== null ? "" :filtered[0].HSCGPA)
setUGCGPA(filtered[0].UGCGPA== null ? "" :filtered[0].UGCGPA)
setTOEFL(filtered[0].TOEFL== null ? "" :filtered[0].TOEFL)
setPTE(filtered[0].PTE == null ? "" :filtered[0].PTE)
setDuolingo(filtered[0].Duolingo == null ? "" : filtered[0].Duolingo)
setwork_experience(filtered[0].work_experience == null ? "" : filtered[0].work_experience)
setprev_institution(filtered[0].prev_institution == null ? "" : filtered[0].prev_institution)
setparents_name(filtered[0].parents_name == null ? "" : filtered[0].parents_name)
setparents_contact_number(filtered[0].parents_contact_number == null ? "" : filtered[0].parents_contact_number)
setparents_email(filtered[0].parents_email == null ? "" : filtered[0].parents_email)
setparents_profession(filtered[0].parents_profession == null ? "" : filtered[0].parents_profession)
setextracurricular(filtered[0].extracurricular == null ? "" : filtered[0].extracurricular)

console.log(id)
} catch (e) {
console.log(e);
}
}

useEffect(() =>  {

  fetchMyAPI()
 
   },authUser)

  const onDesiredLevelChange = selectedOption => {
    setDesiredlevel(selectedOption);
  };
  const onEnglishTestChange = selectedOption => {
    setEnglishTest(selectedOption);
  };
  console.log(EnglishTestdata)

  const success = () => {
    alert("Account Created");
  }
  
 function onSubmit () {
   

    student_record.id = id,
    student_record.email=email,
    student_record.name=name,
    student_record.mobile=mobile,
    student_record.country=typeof country =="object" ? country.value : country,
    student_record.gender= typeof genderdata  == "object" ? genderdata.value : genderdata,
    student_record.birth_date="",
    student_record.birth_month="",
    student_record.birth_year="",
    student_record.address1=address1,
    student_record.address2=address2,
    student_record.prev_qualification="",
    student_record.IELTSBand=IELTSBand
    student_record.TOEFL=TOEFL
    student_record.Duolingo=Duolingo
    student_record.PTE=PTE
    student_record.UGCGPA=UGCGPA
    student_record.HSCGPA=HSCGPA
    student_record.Desiredlevel=typeof Desiredleveldata == "object" ? Desiredleveldata.value : Desiredleveldata,
    student_record.StudyDestination="",
    student_record.IntendedSemester="",
    student_record.work_experience=""
    student_record.prev_institution=""
    student_record.parents_name=""
    student_record.parents_contact_number=""
    student_record.parents_email=""
    student_record.parents_profession=""
    student_record.extracurricular=""
    
    

    student_record.added_by = added_by
    console.log(student_record)
      axios
        .put(`https://ci-gsc.com/students/${id}/`, student_record)
        .then(() => router.push(`/apply/3/`+uniId))
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
   
 
  };

  return (
    <>
    <div
    className=" mt-24 mt-lg-31"
    value=""
  >
    <div className="container">
   
      <div className="mb-15 mb-lg-23">
        <div className="row">
          <div className="col-xxxl-9 px-lg-13 px-6">
          <h3>Hello {name} <br/>Telling us your scores will help us determine your eligibility for<br/>your desired University</h3>
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
                          Desired Level
                        </label>
                        <Select
                              options={Desiredlevel}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              
                              onChange={onDesiredLevelChange}
                              value={Desiredleveldata}
                          />
                      </div>
                    </div>
                    {Desiredleveldata.value =="undergrad" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                         Grade 12 Score
                        </label>
                        <Input
            type="text"
            name="HSCGPA"
            value={HSCGPA}
            onChange={(event) => setHSCGPA(event.target.value)}
            
            placeholder="Your Grade 12 GPA" />
                      </div>
                    </div>
}
                 
                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {Desiredleveldata.value =="diploma" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                         Grade 12 Score
                        </label>
                        <Input
            type="text"
            name="HSCGPA"
            value={HSCGPA}
            onChange={(event) => setHSCGPA(event.target.value)}
            
            placeholder="Your Grade 12 GPA"/>
                      </div>
                    </div>}
                    {Desiredleveldata.value =="other" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        <span><label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                   Grade 12 Score
                        
                        </label></span>
                       
                        <Input
            type="text"
            name="HSCGPA"
            value={HSCGPA}
            onChange={(event) => setHSCGPA(event.target.value)}
            
            placeholder="Your Grade 12 GPA" />
                      </div>
                    </div>
}
                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {Desiredleveldata.value =="postgrad" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          
                        >
                          
                          Grade 12 Score
                        </label>
                        
                        <Input
            type="text"
            name="HSCGPA"
            value={HSCGPA}
            onChange={(event) => setHSCGPA(event.target.value)}
            
            placeholder="Your Grade 12 GPA" />
                      </div>
                    </div>}
                    {Desiredleveldata.value =="postgrad" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Undergraduate Score
                        </label>
                        <Input
                  type="text"
                  name="UGCGPA"
                  value={UGCGPA}
                  onChange={(event) => setUGCGPA(event.target.value)}
                  id="signUpPassword"
                  placeholder="Undergraduate Level CGPA" />
                      </div>
                    </div>
                      }
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                         English Test
                        </label>
                        <Select
                          options={EnglishTest}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          
                          onChange={onEnglishTestChange}
                          value={EnglishTestdata}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {EnglishTestdata.value =="IELTS" &&
                  <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          IELTS
                        </label>
                        <Input
  type="text"
  name="IELTSBand"
  value={IELTSBand}
  onChange={(event) => setIELTSBand(event.target.value)}
  
  placeholder="IELTS Score" />
                      </div>
                    </div>
}
{EnglishTestdata.value =="TOEFL" &&
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          TOEFL
                        </label>
                        <Input
            type="text"
            name="TOEFL"
            value={TOEFL}
            onChange={(event) => setTOEFL(event.target.value)}
            
            placeholder="Your TOEFL Score" />
                      </div>
                    </div>}
                    
{EnglishTestdata.value =="PTE" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          PTE
                        </label>
                        <Input
                            type="text"
                            name="PTE"
                            value={PTE}
                            onChange={(event) => setPTE(event.target.value)}
            
                            placeholder="Your PTE Score" />
                      </div>
                    </div>
}
                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {EnglishTestdata.value =="Duolingo" &&
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                        Duolingo
                        </label>
                        <input
                          type="text"
                          className="form-control h-px-48"
                        name="address1"
                          placeholder="Your Street Address"
                          onChange={(event) => setAddress1(event.target.value)}
                          value={address1}
                        />
                      </div>
                    </div>
                    }
               
                 
                  </div>
                  <div className="row mb-8">
                  
            
                  </div>
               
                  
                 
                 <span> <input
                        disabled ={false}
                        type="button"
                        value="Next"
                        className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                        onClick={() => onSubmit()}
                   /></span><span style={{paddingLeft:"10px"}}>
                  </span>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
//       <div  style={{paddingTop:"100px"}}>
//     <Container className="text-center custom-container">
//     <Row>
//     <Col>
//           <h3 style={{marginTop:'100px',marginBottom:"100px"}}>Hello Student Name <br/>Telling us your scores will help us determine your eligibility for<br/>University Name</h3>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Form
//             className="custom-form padding-top"
//             onSubmit={onSubmit}>
        
//             <FormGroup row>
//             <Label for="signUpEmail" sm={4}>Desired Level</Label>
         
//             <Col sm={8}>
//               <Select
//                 options={Desiredlevel}
//                 className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
//                 border={false}
                
//                 onChange={onDesiredLevelChange}
//                 value={Desiredleveldata}
//               />
//            </Col>     
//             </FormGroup>
//             {Desiredleveldata.value =="undergrad" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="HSCGPA"
//                   value={HSCGPA}
//                   onChange={(event) => setHSCGPA(event.target.value)}
                  
//                   placeholder="Your Grade 12 GPA" />
//               </Col>
//             </FormGroup>
//   }
//         {Desiredleveldata.value =="diploma" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="HSCGPA"
//                   value={HSCGPA}
//                   onChange={(event) => setHSCGPA(event.target.value)}
                  
//                   placeholder="Your Grade 12 GPA"/>
//               </Col>
//             </FormGroup>
//   }
//         {Desiredleveldata.value =="other" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="HSCGPA"
//                   value={HSCGPA}
//                   onChange={(event) => setHSCGPA(event.target.value)}
                  
//                   placeholder="Your Grade 12 GPA" />
//               </Col>
//             </FormGroup>
//   }
//           {Desiredleveldata.value =="postgrad" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="HSCGPA"
//                   value={HSCGPA}
//                   onChange={(event) => setHSCGPA(event.target.value)}
                  
//                   placeholder="Your Grade 12 GPA" />
//               </Col>
//             </FormGroup>
//   }
//    {Desiredleveldata.value =="postgrad" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Undergraduate Score</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="UGCGPA"
//                   value={UGCGPA}
//                   onChange={(event) => setUGCGPA(event.target.value)}
//                   id="signUpPassword"
//                   placeholder="Undergraduate Level CGPA" />
//               </Col>
//             </FormGroup>
//   }
//             <FormGroup row>
//             <Label for="signUpEmail" sm={4}>English Test</Label>
         
//             <Col sm={8}>
//                               <Select
//                                 options={EnglishTest}
//                                 className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
//                                 border={false}
                                
//                                 onChange={onEnglishTestChange}
//                                 value={EnglishTestdata}
//                               />
//                    </Col>     
//             </FormGroup>
//             {EnglishTestdata.value =="IELTS" &&
           
//     <FormGroup row>
//     <Label for="signUpPassword" sm={4}>IELTS</Label>
//     <Col sm={8}>
//       <Input
//         type="text"
//         name="IELTSBand"
//         value={IELTSBand}
//         onChange={(event) => setIELTSBand(event.target.value)}
        
//         placeholder="IELTS Score" />
//     </Col>
//   </FormGroup>

// }
// {EnglishTestdata.value =="TOEFL" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>TOEFL</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="TOEFL"
//                   value={TOEFL}
//                   onChange={(event) => setTOEFL(event.target.value)}
                  
//                   placeholder="Your TOEFL Score" />
//               </Col>
//             </FormGroup>
//   }

// {EnglishTestdata.value =="PTE" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>PTE</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="PTE"
//                   value={PTE}
//                   onChange={(event) => setPTE(event.target.value)}
                  
//                   placeholder="Your PTE Score" />
//               </Col>
//             </FormGroup>

// }
// {EnglishTestdata.value =="Duolingo" &&
//             <FormGroup row>
//               <Label for="signUpPassword" sm={4}>Duolingo</Label>
//               <Col sm={8}>
//                 <Input
//                   type="text"
//                   name="Duolingo"
//                   value={Duolingo}
//                   onChange={(event) => setDuolingo(event.target.value)}
                  
//                   placeholder="Your Duolingo score out of 100" />
//               </Col>
//             </FormGroup>
// }

//             <FormGroup row>
//              <Col>
//                <Button>Next</Button>
//              </Col>
//              { error && <Alert color="danger">{error}</Alert>}
//            </FormGroup>
       
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//     </div>
  )
}

export default SignUp;