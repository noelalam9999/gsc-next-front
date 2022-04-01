import React,{ Component,useEffect, useState }  from "react";
import PageWrapper from "../components/PageWrapper";
import axios from 'axios';
const Contact = () => {
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [message,setMessage] = useState("")

  const [record,setRecord] = useState( {  
    email:"",
    name:"",
    message:"",
   
  })

  const handleSubmit = (item) => { 
  
   if(email!=null & name!=null & message!=null){ 
    item.recipient=email,
    item.name=name,
    item.message=message
 
   
  
    axios
    .post(`https://ci-gsc.com/contact-form/ `, item)
    .then((res) => alert("we have received your mail"))
    .catch((err) => alert("server error please try again later"));
    ;
      
   }
   else{
     alert("please fill up all the fields")
   }
  };
  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h2 className="font-size-9 text-center mb-11">Contact Us</h2>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
                  <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                      <div className="col-12 mb-7">
                        <label
                          htmlFor="name"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          id="name"
                          name="name"
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-lg-12 mb-7">
                        <label
                          htmlFor="email"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          E-mail
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@gmail.com"
                          id="email"
                          name="email"
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                      {/* <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="subject"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Immigration Details"
                          id="subject"
                          name="subject"
                          required
                        />
                      </div> */}
                      <div className="col-lg-12 mb-7">
                        <label
                          htmlFor="message"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Type your message"
                          className="form-control h-px-144"
                          name="message"
                          onChange={(event) => setMessage(event.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="col-lg-12 pt-4">
                      <input
                           
                              type="button"
                              value="Send"
                              className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                              onClick={() => handleSubmit(record)}
                         />
                      </div>
                    </div>
                  </form>
                  <div className="mt-8">
                    <h3 className="font-size-4">Contact Information</h3>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-map-marker-alt mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">
                   
                       House no.-54/A(3rd Floor),
                       Road-132, 
                        <br/>Gulshan-1, 
                       Dhaka-1212

                      </p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-phone-alt mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">+880 1715-482363</p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-envelope mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">info@ci-gsc.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
