import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../../AuthUserContext';
import axios from 'axios';
import { Select } from "../components/Core";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
const Desiredlevel = [
  {name:"Desiredlevel", value: 'HSC', label: 'HSC' },
  {name:"Desiredlevel", value: 'Alevel', label: 'Alevel' },
  {name:"Desiredlevel", value: 'undergrad', label: 'Undergraduate' },
  {name:"Desiredlevel", value: 'postgrad', label: 'Postgraduate' },
  {name:"Desiredlevel", value: 'diploma', label: 'Diploma' },
  {name:"Desiredlevel", value: 'other', label: 'Other' },
]
const StudyDestination = [
  {name:"StudyDestination", value: "UK", label: "U.K." },
  {name:"StudyDestination", value: "USA", label: "U.S.A." },
  {name:"StudyDestination", value: "Canada", label: "Canada" },
  {name:"StudyDestination", value: "Australia", label: "Australia" },
  {name:"StudyDestination", value: "Europe", label: "Europe" },
  {name:"StudyDestination", value: "Malay", label: "Malaysia" },
];

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [record, setRecord] = useState({ email: '',usertype:'student' });
  const [student_record, setSetRecord] = useState({ email: '',name:"",mobile:"",Desiredlevel:"",StudyDestination:"",
 
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
  
  
  IntendedSemester:"spring",
  DesiredSubject:"Science",
  added_by:""
});
  const { createUserWithEmailAndPassword } = useAuth();
  const [Desiredleveldata,setDesiredlevel] = useState("")
  const [StudyDestinationdata,setStudyDestination] = useState("")
  const [mobile,setMobile] = useState("")

  const onDesiredLevelChange = selectedOption => {
    setDesiredlevel(selectedOption);
  };
  const onStudyDestinationChange = selectedOption => {
    setStudyDestination(selectedOption);
  };
  const success = () => {
    alert("Account Created");
  }
  
  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        record.email = email;
        student_record.email = email;
        student_record.name = name;
        student_record.mobile = mobile;
        student_record.StudyDestination = StudyDestinationdata.value;
        student_record.Desiredlevel = Desiredleveldata.value;
        console.log(student_record)
        console.log(record)
        axios
        .post("https://ci-gsc.com/user/", record)
        .then((res) => success())
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
        

        axios
        .post("https://ci-gsc.com/students/", student_record)
        .then(() => router.push(`/students/student-dashboard-uni`))
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
        
        
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)  
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
      <div style={{paddingTop:"100px"}}>
    <Container className="text-center custom-container">
    <Row>
        <Col>
          <h2 style={{marginTop:'100px',marginBottom:"100px"}}>Global Study Contacts builds bridges between <br/>Students, Intitutes, Agents and Service Providers<br/><br/>Join Us Today</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form 
            className="custom-form padding-top"
            onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="signUpEmail" sm={4}>Name</Label>
              <Col sm={8}>
                <Input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  name="name"
                  
                  placeholder="John Doe" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpEmail" sm={4}>Phone Number</Label>
              <Col sm={8}>
                <Input
                  type="phonenumber"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  name="mobile"
                  
                  placeholder="Your phonenumber with country code" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpEmail" sm={4}>Study Destination</Label>
              <Col sm={8}>
              <Select
                                options={StudyDestination}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={onStudyDestinationChange}
                                value={StudyDestinationdata}
                              />
              </Col>
            </FormGroup>
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
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword2" sm={4}>Confirm Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
             <Col>
               <Button>Create Account</Button>
             </Col>
           </FormGroup>
           <FormGroup row>
            <Col>
              Already have an account? <Link href="/login">Sign In</Link>
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