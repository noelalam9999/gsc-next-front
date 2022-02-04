import {useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../../AuthUserContext';
import axios from 'axios';  
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();

  const [error, setError] = useState(null);
  const [List, setList] = useState([]);
  const { createUserWithEmailAndPassword } = useAuth();

  const success = () => {
    alert("Account Created. Please fill up these fields");
  }
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {
      const res = await fetch('https://ci-gsc.com/team-member/?format=json');
      console.log(res)
      const todoList = await res.json();
      setList(todoList)
    } catch (e) {
      console.log(e);
  }
    }
    
fetchMyAPI()
    
  },[])
  const onSubmit = event => {
    setError(null)
    const staff = List.filter(function(val, i, a) {return val.email==email;});
    if(staff.length!=0)
    {    if(passwordOne === passwordTwo){
          createUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            router.push("/team-member/team");
          })
          .catch(error => {
            // An error occurred. Set error message to be displayed to user
            setError(error.message)
          });}
        else
        {  setError("Password do not match")}
}
else{
  alert("your email does not exist in the staff database. Please contact the admin if you think theres something wrong")
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
                  placeholder="Password" />
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