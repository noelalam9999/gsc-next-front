import { useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../../AuthUserContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

export default function Login() {

  const [List, setList] = useState([]);
  const { authUser, loading,signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const [userList, setUserList] = useState([]);
  const { signInWithEmailAndPassword } = useAuth();

  useEffect(() =>  {

     function fetchMyAPI() {
    try {

    
  


      
    } catch (e) {
      console.log(e);
  }
    }
    
    async function fetchMyAPI2() {
      
      try {
        const user_list = await fetch('https://ci-gsc.com/user/?format=json')
        
        const UserList = await user_list.json();
        await setUserList(UserList)
    
     console.log("inside fetch API")
     console.log(UserList)
     for(var i = 0; i<UserList.length; i++){
      console.log("inside forloop")
      if(UserList[i]['email'] == authUser.email){
           if(UserList[i]['usertype']== "student"){
              router.push('/students/student-dashboard');
            }
            else if(UserList[i]['usertype']== "admin"){
              router.push('/agents/agent-dashboard');
            }
            else if(UserList[i]['usertype']== "agent"){
              router.push('/agents/agent-dashboard');
            }
            else if(UserList[i]['usertype']== "institute"){
              router.push('/dashboard-main');
            }
            
            else if(UserList[i]['usertype']== "service_provider"){
              router.push('/dashboard-main');
            }

            
            
      }  

      
      }
      } catch (e) {
        console.log(e);
    }

      }
     
 fetchMyAPI2()



  },[])


  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {  
      router.push('/decision');

      // for(var i = 0; i<userList.length; i++){
      //   console.log("inside forloop")
      //   if(userList[i]['email'] == authUser.email){
      //         if(userList[i]['usertype']== "student"){
      //           router.push('/dashboard-main');
      //         }
      //         else if(userList[i]['usertype']== "agent"){
      //           router.push('/agents/agent-dashboard');
      //         }
      //         else if(userList[i]['usertype']== "institute"){
      //           router.push('/dashboard-main');
      //         }
              
      //         else if(userList[i]['usertype']== "service_provider"){
      //           router.push('/dashboard-main');
      //         }

              
              
      //   }  

        
      //   }
      
    })
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
              No account? <Link href="/signup">Create one</Link>
            </Col>
          </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}