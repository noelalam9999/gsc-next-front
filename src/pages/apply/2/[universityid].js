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
  
  const [error, setError] = useState(null);
  const [student_record, setSetRecord] = useState({id:'', email: '',name:"",mobile:"",Desiredlevel:"",StudyDestination:"",
 
  country:"",
  gender:"",
  birth_date:"",
  birth_month:"",
  birth_year:"",
  address1:"",
  address2:"",
  prev_qualification:"Alevel",
  IELTSBand:"3.2",
  TOEFL:"",
  Duolingo:"",
  PTE:"",
  HSCGPA:"",
  UGCGPA:"",
  IntendedSemester:"spring",
  DesiredSubject:"Science",
  added_by:""
});


 
  const [Desiredleveldata,setDesiredlevel] = useState("")
  const [StudyDestinationdata,setStudyDestination] = useState("")
  const [mobile,setMobile] = useState("")


  async function fetchMyAPI() {
    try {

const res = await fetch('https://ci-gsc.com/students/?format=json');

const todoList = await res.json();
let filtered = await todoList.filter(function(val, i, a) {return val.email==authUser;})

setId(filtered[0].id)
setName(filtered[0].name)
setEmail(filtered[0].email)
setMobile(filtered[0].mobile)
setCountry(filtered[0].country)
setGender(filtered[0].gender)
setBirthDate(filtered[0].birth_date)
setBirthMonth(filtered[0].birth_month)
setBirthYear(filtered[0].birth_year)
setAddress1(filtered[0].address1)
setAddress2(filtered[0].address2)
setprev_qualification_data(filtered[0].prev_qualification)
setIELTSBand(filtered[0].IELTSBand)
setDesiredlevel(filtered[0].Desiredlevel)
setStudyDestination(filtered[0].StudyDestination)
setIntendedSemester(filtered[0].IntendedSemester)
setDesiredSubject(filtered[0].DesiredSubject)
setadded_by(filtered[0].added_by)


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
  
  const onSubmit = event => {
    setError(null)
    student_record.id = id,
    student_record.email=email,
    student_record.name=name,
    student_record.mobile=mobile,
    student_record.country=typeof country =="object" ? country.value : country,
    student_record.gender= typeof genderdata  == "object" ? genderdata.value : genderdata,
    student_record.birth_date=typeof birth_date_data == "object" ? birth_date_data.value : birth_date_data,
    student_record.birth_month=typeof birth_month_data == "object" ? birth_month_data.value : birth_month_data,
    student_record.birth_year=typeof birth_year_data == "object" ? birth_year_data.value : birth_year_data,
    student_record.address1=address1,
    student_record.address2=address2,
    student_record.prev_qualification=typeof prev_qualification_data == "object" ? prev_qualification_data.value : prev_qualification_data,
    student_record.IELTSBand=IELTSBand
    student_record.TOEFL=TOEFL
    student_record.Duolingo=Duolingo
    student_record.PTE=PTE
    student_record.UGCGPA=UGCGPA
    student_record.HSCGPA=HSCGPA    
    student_record.Desiredlevel=typeof Desiredleveldata == "object" ? DesiredSubjectdata.value : DesiredSubjectdata,
    student_record.StudyDestination=typeof StudyDestinationdata == "object" ? StudyDestinationdata.value : StudyDestinationdata,
    student_record.IntendedSemester=typeof IntendedSemesterdata == "object" ? IntendedSemesterdata.value : IntendedSemesterdata,
    student_record.DesiredSubject=typeof DesiredSubjectdata == "object" ? DesiredSubjectdata.value : DesiredSubjectdata 
    student_record.added_by = added_by
   
    

        axios
        .put(`https://ci-gsc.com/students/${id}/`, student_record)
        .then(() => router.push(`/apply/3/`+uniId))
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
        event.preventDefault();
  
  };

  return (
      <div style={{paddingTop:"100px"}}>
    <Container className="text-center custom-container">
    <Row>
    <Col>
          <h3 style={{marginTop:'100px',marginBottom:"100px"}}>Hello Student Name <br/>Telling us your scores will help us determine your eligibility for<br/>University Name</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form 
            className="custom-form padding-top"
            onSubmit={onSubmit}>
        
         
       
          
         
            <FormGroup row>
            <Label for="signUpEmail" sm={4}>Desired Level</Label>
         
            <Col sm={8}>
                              <Select
                                options={Desiredlevel}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={onDesiredLevelChange  }
                                value={Desiredleveldata}
                              />
                   </Col>     
            </FormGroup>
            {Desiredleveldata.value =="undergrad" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="HSCGPA"
                  value={HSCGPA}
                  onChange={(event) => setHSCGPA(event.target.value)}
                  
                  placeholder="Your Grade 12 GPA" />
              </Col>
            </FormGroup>
  }
        {Desiredleveldata.value =="diploma" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="HSCGPA"
                  value={HSCGPA}
                  onChange={(event) => setHSCGPA(event.target.value)}
                  
                  placeholder="Your Grade 12 GPA" />
              </Col>
            </FormGroup>
  }
        {Desiredleveldata.value =="other" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="HSCGPA"
                  value={HSCGPA}
                  onChange={(event) => setHSCGPA(event.target.value)}
                  
                  placeholder="Your Grade 12 GPA" />
              </Col>
            </FormGroup>
  }
          {Desiredleveldata.value =="postgrad" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Grade 12 Score</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="HSCGPA"
                  value={HSCGPA}
                  onChange={(event) => setHSCGPA(event.target.value)}
                  
                  placeholder="Your Grade 12 GPA" />
              </Col>
            </FormGroup>
  }
   {Desiredleveldata.value =="postgrad" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Undergraduate Score</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="UGCGPA"
                  value={UGCGPA}
                  onChange={(event) => setUGCGPA(event.target.value)}
                  id="signUpPassword"
                  placeholder="Undergraduate Level CGPA" />
              </Col>
            </FormGroup>
  }
            <FormGroup row>
            <Label for="signUpEmail" sm={4}>English Test</Label>
         
            <Col sm={8}>
                              <Select
                                options={EnglishTest}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={onEnglishTestChange}
                                value={EnglishTestdata}
                              />
                   </Col>     
            </FormGroup>
            {EnglishTestdata.value =="IELTS" &&
           
    <FormGroup row>
    <Label for="signUpPassword" sm={4}>IELTS</Label>
    <Col sm={8}>
      <Input
        type="text"
        name="IELTSBand"
        value={IELTSBand}
        onChange={(event) => setIELTSBand(event.target.value)}
        
        placeholder="IELTS Score" />
    </Col>
  </FormGroup>

}
{EnglishTestdata.value =="TOEFL" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>TOEFL</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="TOEFL"
                  value={TOEFL}
                  onChange={(event) => setTOEFL(event.target.value)}
                  
                  placeholder="Your TOEFL Score" />
              </Col>
            </FormGroup>
  }

{EnglishTestdata.value =="PTE" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>PTE</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="PTE"
                  value={PTE}
                  onChange={(event) => setPTE(event.target.value)}
                  
                  placeholder="Your PTE Score" />
              </Col>
            </FormGroup>

}
{EnglishTestdata.value =="Duolingo" &&
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Duolingo</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="Duolingo"
                  value={Duolingo}
                  onChange={(event) => setDuolingo(event.target.value)}
                  
                  placeholder="Your Duolingo score out of 100" />
              </Col>
            </FormGroup>
         
}
{ error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
             <Col>
               <Button>Next</Button>
             </Col>
            
           </FormGroup>
       
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default SignUp;