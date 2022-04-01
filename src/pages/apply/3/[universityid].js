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
  const [docCount,setDocCount] = useState(0)
  
  const [error, setError] = useState(null);
  const [Desiredleveldata,setDesiredlevel] = useState("")
  const { authUser } = useAuth();
  const [profilePic,setprofilePic] = useState([])
  const [passportPic,setpassportPic] = useState([])
  const [sscCert,setsscCert] = useState([])
  const [hscCert,sethscCert] = useState([])
  const [bachelorCert,setbachelorCert] = useState([])
  const [sscTranscript,setsscTranscript] = useState([])
  const [hscTranscript,sethscTranscript] = useState([])
  const [bachelorTranscript,setbachelorTranscript] = useState([])
  const [bachelorMarkSheet,setbachelorMarksheet] = useState([])
  const [lor1,setLor1] = useState([])
  const [lor2,setLor2] = useState([])
  const [lor3,setLor3] = useState([])
  const [sop,setSop] = useState([])
  const [cv,setCV] = useState([])
  const [bankSolvency,setBankSolvency] = useState([])

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
 
  

console.log(Desiredleveldata)

const handleProfilePicChange = (e) => {
  setprofilePic(e.target.files[0])
   

}; 

const handlePassportPicChange = (e) => {
  setpassportPic(e.target.files[0])
   
}; 

const handleSSCCertChange = (e) => {
  setsscCert(e.target.files[0])
   
}; 

const handleHSCCertChange = (e) => {
  sethscCert(e.target.files[0])
   
}; 

const handleBachelorCertChange = (e) => {
  setbachelorCert(e.target.files[0])
   
}; 

const handleSSCTranscriptChange = (e) => {
  setsscTranscript(e.target.files[0])
   
}; 

const handleHSCTranscriptChange = (e) => {
  sethscTranscript(e.target.files[0])
   
}; 

const handleBachelorTranscriptChange = (e) => {
  setbachelorTranscript(e.target.files[0])
   
}; 

const handleBachelorMarksheetChange = (e) => {
  setbachelorMarksheet(e.target.files[0])
   
}; 

const handleLor1Change = (e) => {
  setLor1(e.target.files[0])
   
}; 

const handleLor2Change = (e) => {
  setLor2(e.target.files[0])
   
}; 

const handleLor3Change = (e) => {
  setLor3(e.target.files[0])
   
}; 

const handleSopChange = (e) => {
  setSop(e.target.files[0])
   
}; 

const handleCVChange = (e) => {
  setCV(e.target.files[0])
   
}; 

const handleBankSolvencyChange = (e) => {
  setBankSolvency(e.target.files[0])
}; 
  const success = () => {
    alert("Account Created");
  }
  
  const onSubmit = event => {
    setError(null)
if(docCount>0){
  alert("uploading your documents. Please Wait.")
}
    if(profilePic.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', profilePic, profilePic.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/profilepicture/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
         
     })
     .catch(err => console.log(err))
    }


     if(passportPic.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', passportPic, passportPic.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/passportpicture/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}


     if(sscCert.length!=0){ 
      let form_data = new FormData();
     form_data.append('image',sscCert, sscCert.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/ssccert/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
   
     
     if(hscCert.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', hscCert, hscCert.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/hsccert/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}


     if(bachelorCert.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', bachelorCert, bachelorCert.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/bachelorcert/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(sscTranscript.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', sscTranscript, sscTranscript.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/ssctranscript/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(hscTranscript.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', hscTranscript, hscTranscript.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/hsctranscript/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(bachelorTranscript.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', bachelorTranscript, bachelorTranscript.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/bachelortranscript/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(bachelorMarkSheet.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', bachelorMarkSheet, bachelorMarkSheet.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/bachelormarksheet/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(lor1.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', lor1, lor1.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/lor1/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}

     if(lor2.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', lor2, lor2.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/lor2/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
    
     
     if(lor3.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', lor3, lor3.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/lor3/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}

     if(sop.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', sop, sop.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/sop/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}

     if(cv.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', cv, cv.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/cv/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}

     if(bankSolvency.length!=0){ 
      let form_data = new FormData();
     form_data.append('image', bankSolvency, bankSolvency.name);
     form_data.append('email', email);
 
     let url = 'https://ci-gsc.com/banksolvency/';
     axios.post(url, form_data, {
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
     .then(res => {
        
     })
     .catch(err => console.log(err))}
alert("All Documents Uploaded")
router.push('/students/student-dashboard');
    
    event.preventDefault();
  
  };

  return (
    <>
    <>
    <div
    className=" mt-24 mt-lg-31"
    value=""
  >
    <div className="container">
   
      <div className="mb-15 mb-lg-23">
        <div className="row">
          <div className="col-xxxl-9 px-lg-13 px-6">
          <h3 style={{marginTop:'100px',marginBottom:"100px"}}>Almost done!<br/>We will be requiring the following documents to complete your application </h3>
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
                         Passport Size Photo
                        </label>
                        <input 
                          type="file"
                          id="image"
                          accept="image/png, image/jpeg"  
                          onChange={handleProfilePicChange}
                          />
                      </div>
                    </div>
                  
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                         Scanned copy of Passport
                        </label>
                        <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handlePassportPicChange} />
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
                         SSC Completetion Certificate
                        </label>
                        <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleSSCCertChange}/>
                      </div>
                    </div>
                 
                    <div className="col-lg-6">
                      <div className="form-group">
                        <span><label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                   HSC Completion Certificate
                        
                        </label></span>
                       
                        <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleHSCCertChange}/>
                      </div>
                    </div>

                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {Desiredleveldata =="postgrad" &&
                    <div className="col-lg-6">
                      <div className="form-group">
                        
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          
                        >
                          
                          Bachelor Completion Certificate
                        </label>
                        
                        <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={handleBachelorCertChange} />
                      </div>
                    </div>}
             
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          SSC Transcript
                        </label>
                        <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handleSSCTranscriptChange} />
                      </div>
                    </div>
                      
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                         HSC Transcript
                        </label>
                        <input 
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"  
                  onChange={handleHSCTranscriptChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {Desiredleveldata =="postgrad" &&
                  <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Bachelor Transcript
                        </label>
                        <input 
                type="file"
                id="image"
                accept="image/png, image/jpeg"  
                onChange={handleBachelorTranscriptChange} />
                      </div>
                    </div>}

                    {Desiredleveldata =="postgrad" &&
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Bachelor Consolidated Marksheet
                        </label>
                        <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleBachelorMarksheetChange} />
                      </div>
                    </div>}
                    

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Letter of Recommendation 
                        </label>
                        <input 
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"  
                  onChange={handleLor1Change} />
                      </div>
                    </div>

                  </div>
                  <div className="row mb-xl-1 mb-9">
                  {Desiredleveldata =="postgrad" &&
                    
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                        Letter of Recommendation 2
                        </label>
                        <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleLor2Change}/>
                      </div>
                    </div>
                    }
                      {Desiredleveldata =="postgrad" &&
                         <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                        Letter of Recommendation 3
                        </label>
                        <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleLor3Change} />
                      </div>
                    </div>
}
                  </div>
                  <div className="row mb-xl-1 mb-9">
             
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                        Statement of Purpose
                        </label>
                        <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleSopChange} />
                      </div>
                    </div>
                    
                         <div className="col-lg-6">
                    <div className="form-group">
                        <label
                          htmlFor="namedash"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                        Curriculum Vitae
                        </label>
                        <input 
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"  
                    onChange={handleCVChange} />
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
                        Bank Solvency Statement
                        </label>
                        <input 
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"  
                      onChange={handleBankSolvencyChange}/>
                      </div>
                    </div>
                    

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
     
    </>
  )
}

export default SignUp;