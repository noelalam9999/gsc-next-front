import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../../../../AuthUserContext';
import axios from 'axios';
import { Select } from "../../../components/Core";
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
  const [password, setPassword] = useState("");
  const router = useRouter();
  const uniId = router.query.universityid;
  const [error, setError] = useState(null);
  const [record, setRecord] = useState({ email: '',usertype:'student' });
  const [student_record, setSetRecord] = useState({ 
    email: '',name:"",mobile:"",Desiredlevel:"",StudyDestination:"",
 
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
  const {  signInWithEmailAndPassword } = useAuth();
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
  const add_application = () => {
    
    record.client_name = email
    record.partner = uniId

    axios
      .post("https://ci-gsc.com/application/", record)
      .then((res) => alert("Application started. Please fill up the rest of the info"))
      .catch((err) => alert("Failed to apply. Please contact support"));
      router.push('/apply/2/'+uniId);
  }
  
  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
 
    signInWithEmailAndPassword(email, password)
      .then(res => add_application())
      .catch(error => {
        setError(error.message)  
      });
 
    event.preventDefault();
  };

  return (
    <div style={{paddingTop:"100px"}}>
    <Container className="text-center" style={{ padding: '40px 0px'}}>
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row style={{maxWidth: '400px', margin: 'auto'}}>
        <Col>
          <Form onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
             <Col>
               <Button>Login</Button>
             </Col>
           </FormGroup>
           <FormGroup row>
            <Col>
          <a style={{color:"blue"}} type="button" onClick={()=>{forgotPassword()}}>Forgot Password</a>
            </Col>
         
          </FormGroup>
           <FormGroup row>
            <Col>
              No account? <Link href="/registration">Create one</Link>
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