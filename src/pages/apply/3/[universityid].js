import { useState ,useEffect} from 'react';
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
  const router = useRouter();
  const [error, setError] = useState(null);
  const [Desiredleveldata,setDesiredlevel] = useState("")
  const { authUser } = useAuth();
  const [newImage,setNewImage] = useState([])

  async function fetchMyAPI() {

    try {

const res = await fetch('https://ci-gsc.com/students/?format=json');

const todoList = await res.json();
let filtered = await todoList.filter(function(val, i, a) {return val.email==authUser;})

setEmail(filtered[0].email)
setDesiredlevel(filtered[0].Desiredlevel)

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

const handleImageChange = (e) => {
  setNewImage(e.target.files[0])
}; 
  const success = () => {
    alert("Account Created");
  }
  
  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    event.preventDefault();
  
  };

  return (
      <div style={{paddingTop:"100px"}}>
    <Container className="text-center custom-container">
    <Row>
      
        <Col>
          <h3 style={{marginTop:'100px',marginBottom:"100px"}}>Almost done!<br/>We will be requiring the following documents to complete your application for<br/>University Name's Desire Level</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form 
            className="custom-form padding-top"
            onSubmit={onSubmit}>
        
            <FormGroup row>
            <Label for="signUpEmail" sm={6}>Passport Size Photo</Label>
         
            <Col sm={6}>
            <input 
            type="file"
            id="image"
            accept="image/png, image/jpeg"  
            onChange={handleImageChange} required/>
            </Col>     
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Scanned copy of Passport</Label>
              <Col sm={6}>
              <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>SSC Completetion Certificate</Label>
              <Col sm={6}>
              <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="signUpEmail" sm={6}>HSC Completion Certificate</Label>
         
            <Col sm={6}>
            <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleImageChange} required/>
                   </Col>     
            </FormGroup>
            <FormGroup row>
            <Label for="signUpEmail" sm={6}>Bachelor Completion Certificate</Label>
         
            <Col sm={6}>
            <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleImageChange} required/>
                   </Col>     
            </FormGroup>
          
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>SSC Transcript</Label>
              <Col sm={6}>
              <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>HSC Transcript</Label>
              <Col sm={6}>
              <input 
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"  
                  onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Bachelor Transcript</Label>
              <Col sm={6}>
              <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Bachelor Consolidated Marksheet</Label>
              <Col sm={6}>
              <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Letter of Recommendation 1</Label>
              <Col sm={6}>
              <input 
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"  
                  onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Letter of Recommendation 2</Label>
              <Col sm={6}>
              <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Letter of Recommendation 3</Label>
              <Col sm={6}>
              <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Statement of Purpose</Label>
              <Col sm={6}>
              <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Curriculum Vitae</Label>
              <Col sm={6}>
              <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={6}>Bank Solvency Statement</Label>
              <Col sm={6}>
              <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleImageChange} required/>
              </Col>
            </FormGroup>
         
          
            <FormGroup row>
             <Col>
               <Button>Submit</Button>
               <span style={{paddingRight:"10px"}}></span>
               <Button>Skip</Button>
             </Col>
           
             { error && <Alert color="danger">{error}</Alert>}
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