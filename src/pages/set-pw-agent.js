import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../../AuthUserContext';
import axios from 'axios';  
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignUp = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [agency_name, setAgencyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [record, setRecord] = useState({ email: '',usertype:'agent' });
  const [error, setError] = useState(null);
  const [agent_record, setSetRecord] = useState({ 
  email: '',
  name:"",
  role:"",
  agency_name:"",
  mobile:"",
  country:"",
  website:"",
  address2:"",
  offices:"",
  subagents:"",
  number_of_staff:"",
  services_provided:"",
  charge:"",
  students_sent_abroad:"",
  association_bin:"",
  associations:"",
  recruitment_area:"",
  facebooklink:"",
  added_by:"",
  active_status:""  
  
  
  
  
});
  const { createUserWithEmailAndPassword } = useAuth();
// 
  const success = () => {
    alert("Account Created. Please fill up these fields");
  }

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if( email!="" ){
    if(passwordOne === passwordTwo){
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        record.email = email;
     

        axios
        .post("https://ci-gsc.com/user/", record)
        .then((res) => alert("Account Created"))
        .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
    
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });}
    else{
      setError("Password do not match")
    
    }

  }
  else{
   alert("Please fill up all the fields")
  }
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
                  placeholder="Confirm Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
             <Col>
               <Button>Continue</Button>
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