import React, { Component } from "react"

import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import 'firebase/firestore';
import axios from 'axios';
import {withRouter} from 'next/router'
import "firebase/auth";

import {
  Form,
  FormGroup,
  Input,
    
} from "reactstrap";
import PropTypes from "prop-types";


const Semester = [
  {name:"semester", value: "jan", label: "Januray" },
  { name:"semester", value: "feb", label: "February" },
  {name:"semester", value: "march", label: "March" },
  {name:"semester", value: "april", label: "April" },
  {name:"semester", value: "may", label: "May" },
  {name:"semester", value: "june", label: "June" },
  {name:"semester", value: "july", label: "July" },
  {name:"semester", value: "august", label: "August" },
  { name:"semester", value: "sept", label: "September" },
  {name:"semester", value: "oct", label: "October" },
  {name:"semester", value: "nov", label: "November" },
  {name:"semester", value: "december", label: "December" },
];

const BirthMonth = [
  {name:"birth_month", value: "jan", label: "Januray" },
  { name:"birth_month", value: "feb", label: "February" },
  {name:"birth_month", value: "march", label: "March" },
  {name:"birth_month", value: "april", label: "April" },
  {name:"birth_month", value: "may", label: "May" },
  {name:"birth_month", value: "june", label: "June" },
  {name:"birth_month", value: "july", label: "July" },
  {name:"birth_month", value: "august", label: "August" },
  { name:"birth_month", value: "sept", label: "September" },
  {name:"birth_month", value: "oct", label: "October" },
  {name:"birth_month", value: "nov", label: "November" },
  {name:"birth_month", value: "december", label: "December" },
];

const BirthDate = [
  {name:"birth_date", value: "1", label: "1" },
  {name:"birth_date", value: "2", label: "2" },
  {name:"birth_date", value: "3", label: "3" },
  {name:"birth_date", value: "4", label: "4" },
  {name:"birth_date", value: "5", label: "5" },
  {name:"birth_date", value: "6", label: "6" },
  {name:"birth_date", value: "7", label: "7" },
  {name:"birth_date", value: "8", label: "8" },
  {name:"birth_date", value: "9", label: "9" },
  {name:"birth_date", value: "10", label: "10" },
  {name:"birth_date", value: "11", label: "11" },
  {name:"birth_date", value: "12", label: "12" },
  {name:"birth_date", value: "13", label: "13" },
  {name:"birth_date", value: "14", label: "14" },
  {name:"birth_date", value: "15", label: "15" },
  {name:"birth_date", value: "16", label: "16" },
  {name:"birth_date", value: "17", label: "17" },
  {name:"birth_date", value: "18", label: "18" },
  {name:"birth_date", value: "19", label: "19" },
  {name:"birth_date", value: "20", label: "20" },
  {name:"birth_date", value: "21", label: "21" },
  {name:"birth_date", value: "22", label: "22" },
  {name:"birth_date", value: "23", label: "23" },
  {name:"birth_date", value: "24", label: "24" },
  {name:"birth_date", value: "25", label: "25" },
  {name:"birth_date", value: "26", label: "26" },
  {name:"birth_date", value: "27", label: "27" },
  {name:"birth_date", value: "28", label: "28" },
  {name:"birth_date", value: "29", label: "29" },
  {name:"birth_date", value: "30", label: "30" },
  {name:"birth_date", value: "31", label: "31" },
];

const IntendedSemester = [
  {name:"IntendedSemester", value: "fall", label: "Fall" },
  { name:"IntendedSemester", value: "spring", label: "Spring" },
  {name:"IntendedSemester", value: "summer", label: "Summer" },

];


const BirthYear = [
  {name:"birth_year", value: "1990", label: "1990" },
  {name:"birth_year", value: "1991", label: "1991" },
  {name:"birth_year", value: "1992", label: "1992" },
  {name:"birth_year", value: "1993", label: "1993" },
  {name:"birth_year", value: "1994", label: "1994" },
  {name:"birth_year", value: "1995", label: "1995" },
  {name:"birth_year", value: "1996", label: "1996" },
  {name:"birth_year", value: "1997", label: "1997" },
  {name:"birth_year", value: "1998", label: "1998" },
  {name:"birth_year", value: "1999", label: "1999" },
  {name:"birth_year", value: "2000", label: "2000" },
  {name:"birth_year", value: "2001", label: "2001" },
  {name:"birth_year", value: "2002", label: "2002" },
  {name:"birth_year", value: "2003", label: "2003" },
];
const PreviousQualification = [
  {name:"prev_qualification", value: 'HSC', label: 'HSC' },
  {name:"prev_qualification", value: 'Alevel', label: 'Alevel' },
  {name:"prev_qualification", value: 'undergrad', label: 'Undergraduate' },
  {name:"prev_qualification", value: 'postgrad', label: 'Postgraduate' },
  {name:"prev_qualification", value: 'diploma', label: 'Diploma' },
  {name:"prev_qualification", value: 'other', label: 'Other' },
]
const Subject = [
  {name:"DesiredSubject", value: "Engineering", label: "Engineering" },
  {name:"DesiredSubject", value: "Science", label: "Science" },
  {name:"DesiredSubject", value: "Business", label: "Business" },
  {name:"DesiredSubject", value: "LiberalArts", label: "Liberal Arts" },
  {name:"DesiredSubject", value: "Arts", label: "Arts" },
  {name:"DesiredSubject", value: "other", label: "Other" },
]
const IELTSBand = [
  {name:"IELTSBand", value: '3', label: '3' },
  {name:"IELTSBand", value: '3.2', label: '3.2' },
  {name:"IELTSBand", value: '3.4', label: '3.4' },
  {name:"IELTSBand", value: '3.6', label: '3.6' },
  {name:"IELTSBand", value: '3.8', label: '3.8' },
  {name:"IELTSBand", value: '4', label: '4' },
]

const Desiredlevel = [
  {name:"Desiredlevel", value: 'HSC', label: 'HSC' },
  {name:"Desiredlevel", value: 'Alevel', label: 'Alevel' },
  {name:"Desiredlevel", value: 'undergrad', label: 'Undergraduate' },
  {name:"Desiredlevel", value: 'postgrad', label: 'Postgraduate' },
  {name:"Desiredlevel", value: 'diploma', label: 'Diploma' },
  {name:"Desiredlevel", value: 'other', label: 'Other' },
]
const Gender = [
  {name:"gender", value: "male", label: "Male" },
  {name:"gender", value: "female", label: "Female" },
  {name:"gender", value: "other", label: "Other" },
 
];


const StudyDestination = [
  {name:"StudyDestination", value: "UK", label: "U.K." },
  {name:"StudyDestination", value: "USA", label: "U.S.A." },
  {name:"StudyDestination", value: "Canada", label: "Canada" },
  {name:"StudyDestination", value: "Australia", label: "Australia" },
  {name:"StudyDestination", value: "Europe", label: "Europe" },
  {name:"StudyDestination", value: "Malay", label: "Malaysia" },
];

class AddStudent extends Component {
 

 
  async componentDidMount() {


   
    try {
    
      let activeItem = { ...this.state.activeItem, added_by: this.props.user };
      this.setState({activeItem})
    

    } catch (e) {
      console.log(e);
  }
  } 
  
  
  constructor(props) {
   


    super(props); 
    
    const email = this.props.classes
    console.log(email)
    this.state = {
      disable:false,
      viewCompleted: false,
      image:"",
      image2:"",
      image3:"",
      activeItem: {
        email:"",
        name:"",
        mobile:"",
        country:"",
        gender:"female",
        birth_date:"2",
        birth_month:"feb",
        birth_year:"1991",
        address1:"",
        address2:"",
        prev_qualification:"Alevel",
        IELTSBand:"3.2",
        TOEFL:"",
        Duolingo:"",
        PTE:"",
        Desiredlevel:"Alevel",
        StudyDestination:"USA",
        IntendedSemester:"spring",
        DesiredSubject:"Science",
        added_by:""
      },
      todoList: []
      };
  }


  


  success = () => {
    alert("We have received your registration information. You will get a confirmation email shortly");
    if(this.state.image){
      let form_data = new FormData();
      form_data.append('image', this.state.image, this.state.image.name);
      form_data.append('email', this.state.activeItem.email);
  
      let url = 'https://ci-gsc.com/latestdegree/';
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }
    if(this.state.image2){
      let form_data2 = new FormData();
      form_data2.append('image', this.state.image2, this.state.image2.name);
      form_data2.append('email', this.state.activeItem.email);
  
      let url2 = 'https://ci-gsc.com/ieltscert/';
      axios.post(url2, form_data2, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }
    if(this.state.image3){
      let form_data3 = new FormData();
      form_data3.append('image', this.state.image3, this.state.image3.name);
      form_data3.append('email', this.state.activeItem.email);
  
      let url3 = 'https://ci-gsc.com/profilepicture/';
      axios.post(url3, form_data3, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }
  }

refreshList = () => {
  axios
    .get("https://ci-gsc.com/students")
    .then((res) => this.setState({ todoList: res.data }))
    .catch((err) => console.log(err));
};


handleSubmit = (item) => {
  item.added_by = this.props.user
  this.setState({
    disable:true
  })

  if (item.id) {
    axios
      .put(`https://ci-gsc.com/students/${item.id}/`, item)
      .then((res) => this.success())
      .catch((err) => alert("Please fillup the mandatory fields"));
    return;
  }
  axios
    .post("https://ci-gsc.com/students/", item)
    .then((res) => this.success())
    .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
    ;

};

handleImageChange = (e) => {
  this.setState({
    image: e.target.files[0]
  })
};

handleImageChange2 = (e) => {
  this.setState({
    image2: e.target.files[0]
  })
};
handleImageChange3 = (e) => {
  this.setState({
    image3: e.target.files[0]
  })
};

handleChange = (e) => {
  console.log(e)
  let { name, value } = e.target;


  const activeItem = { ...this.state.activeItem, [name]: value };

  this.setState({ activeItem });
};


handleChangeSelect = (e) => {
  console.log(e)

  let { name,value } = e;


  const activeItem = { ...this.state.activeItem, [name]: value };

  this.setState({ activeItem });
};

render(){

  //this.state.activeItem.email = user.email;
  return (
    <>


      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluvalue: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
     
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          value="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
Client Registration Form
                  </h5>
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
                                Name * 
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="name"
                                placeholder="Your Full Name"
                                onChange={this.handleChange}
                                value={this.state.activeItem.name}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Email * 
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="email"
                                placeholder="Clients Contact Email"
                                onChange={this.handleChange}
                                value={this.state.activeItem.email}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Country * 
                              </label>
                              <Select
                                options={getCountries}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                
                                border={false}
                                name="country"  
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.country.value}
                                
                              />
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
                                Mobile * 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="mobile"
                                placeholder="Your Phone Number with Country Code"
                                onChange={this.handleChange}
                                value={this.state.activeItem.mobile}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Gender * 
                              </label>
                              <Select
                                options={Gender}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                name="gender"
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.gender.value}
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <span >
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                
                              >
                                
                                Certificate of the latest degree * 
                              </label>
                              </span>
                              <input 
                              type="file"
                              id="image"
                              accept="image/png, image/jpeg"  
                              onChange={this.handleImageChange} required/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                IELTS Certificate
                              </label>
                              <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange2} required/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Profile Picture
                              </label>
                              <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange3} required/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-xl-1 mb-9">
                        <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Birth Date * 
                              </label>
                              <Select
                                options={BirthDate}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.birth_date.value}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Birth Month * 
                              </label>
                              <Select
                                options={BirthMonth}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.birth_month.value}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Birth Year * 
                              </label>
                              <Select
                              
                                options={BirthYear}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.birth_year.value}
                              />
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
                                Address Line 1
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              name="address1"
                                placeholder="Your Street Address"
                                onChange={this.handleChange}
                                value={this.state.activeItem.address1}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Address Line 2
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                             name="address2"
                                placeholder="Your City"
                                onChange={this.handleChange}
                                value={this.state.activeItem.address2}
                              />
                            </div>
                          </div>
                       
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Previous Qualification * 
                              </label>
                              <Select
                                options={PreviousQualification}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.prev_qualification.value}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                IELTS
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="IELTSBand"
                                placeholder="7"
                                onChange={this.handleChange}
                                value={this.state.activeItem.IELTSBand}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                TOEFL 
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="TOEFL"
                                placeholder="78"
                                onChange={this.handleChange}
                                value={this.state.activeItem.TOEFL}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PTE
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="PTE"
                                placeholder="95"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PTE}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Duolingo
                              </label>
                              <input
                            
                                className="form-control h-px-48"
                                name="Duolingo"
                                placeholder="100"
                                onChange={this.handleChange}
                                value={this.state.activeItem.Duolingo}
                              />
                            </div>
                          </div>

                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Desired Level
                              </label>
                              <Select
                                options={Desiredlevel}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                               
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.Desiredlevel.value}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Study Destination * 
                              </label>
                              <Select
                                options={StudyDestination}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.StudyDestination.value}
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Intended Semester
                              </label>
                              <Select
                                options={IntendedSemester}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.IntendedSemester.value}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              Desired Subject * 
                              </label>
                              <Select
                                options={Subject}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.DesiredSubject.value}
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                        </div>
                      
                       
                        <input
                                                disabled ={this.state.disable}
                              type="button"
                              value="Save"
                              className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
                              onClick={() => this.handleSubmit(this.state.activeItem)}
                         />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
      }
};
export default withRouter(AddStudent);

// export default withRouter(() => {
//   const { authUser, loading,signOut } = useAuth();
//   return (
//       <StudentRegistration classes={authUser} />
//   )
// })

export const getCountries = [
  { 
    name:"country", value: "AF",
    label: "Afghanistan"
  },
  {
    name:"country", value: "AX",
    label: "Åland Islands"
  },
  {
    name:"country", value: "AL",
    label: "Albania"
  },
  {
    name:"country", value: "DZ",
    label: "Algeria"
  },
  {
    name:"country", value: "AS",
    label: "American Samoa"
  },
  {
    name:"country", value: "AD",
    label: "Andorra"
  },
  {
    name:"country", value: "AO",
    label: "Angola"
  },
  {
    name:"country", value: "AI",
    label: "Anguilla"
  },
  {
    name:"country", value: "AQ",
    label: "Antarctica"
  },
  {
    name:"country", value: "AG",
    label: "Antigua and Barbuda"
  },
  {
    name:"country", value: "AR",
    label: "Argentina"
  },
  {
    name:"country", value: "AM",
    label: "Armenia"
  },
  {
    name:"country", value: "AW",
    label: "Aruba"
  },
  {
    name:"country", value: "AU",
    label: "Australia"
  },
  {
    name:"country", value: "AT",
    label: "Austria"
  },
  {
    name:"country", value: "AZ",
    label: "Azerbaijan"
  },
  {
    name:"country", value: "BS",
    label: "Bahamas"
  },
  {
    name:"country", value: "BH",
    label: "Bahrain"
  },
  {
    name:"country", value: "BD",
    label: "Bangladesh"
  },
  {
    name:"country", value: "BB",
    label: "Barbados"
  },
  {
    name:"country", value: "BY",
    label: "Belarus"
  },
  {
    name:"country", value: "BE",
    label: "Belgium"
  },
  {
    name:"country", value: "BZ",
    label: "Belize"
  },
  {
    name:"country", value: "BJ",
    label: "Benin"
  },
  {
    name:"country", value: "BM",
    label: "Bermuda"
  },
  {
    name:"country", value: "BT",
    label: "Bhutan"
  },
  {
    name:"country", value: "BO",
    label: "Bolivia, Plurinational State of"
  },
  {
    name:"country", value: "BQ",
    label: "Bonaire, Sint Eustatius and Saba"
  },
  {
    name:"country", value: "BA",
    label: "Bosnia and Herzegovina"
  },
  {
    name:"country", value: "BW",
    label: "Botswana"
  },
  {
    name:"country", value: "BV",
    label: "Bouvet Island"
  },
  {
    name:"country", value: "BR",
    label: "Brazil"
  },
  {
    name:"country", value: "IO",
    label: "British Indian Ocean Territory"
  },
  {
    name:"country", value: "BN",
    label: "Brunei Darussalam"
  },
  {
    name:"country", value: "BG",
    label: "Bulgaria"
  },
  {
    name:"country", value: "BF",
    label: "Burkina Faso"
  },
  {
    name:"country", value: "BI",
    label: "Burundi"
  },
  {
    name:"country", value: "CV",
    label: "Cabo Verde"
  },
  {
    name:"country", value: "KH",
    label: "Cambodia"
  },
  {
    name:"country", value: "CM",
    label: "Cameroon"
  },
  {
    name:"country", value: "CA",
    label: "Canada"
  },
  {
    name:"country", value: "KY",
    label: "Cayman Islands"
  },
  {
    name:"country", value: "CF",
    label: "Central African Republic"
  },
  {
    name:"country", value: "TD",
    label: "Chad"
  },
  {
    name:"country", value: "CL",
    label: "Chile"
  },
  {
    name:"country", value: "CN",
    label: "China"
  },
  {
    name:"country", value: "CX",
    label: "Christmas Island"
  },
  {
    name:"country", value: "CC",
    label: "Cocos (Keeling) Islands"
  },
  {
    name:"country", value: "CO",
    label: "Colombia"
  },
  {
    name:"country", value: "KM",
    label: "Comoros"
  },
  {
    name:"country", value: "CG",
    label: "Congo"
  },
  {
    name:"country", value: "CD",
    label: "Congo, Democratic Republic of the"
  },
  {
    name:"country", value: "CK",
    label: "Cook Islands"
  },
  {
    name:"country", value: "CR",
    label: "Costa Rica"
  },
  {
    name:"country", value: "HR",
    label: "Croatia"
  },
  {
    name:"country", value: "CU",
    label: "Cuba"
  },
  {
    name:"country", value: "CW",
    label: "Curaçao"
  },
  {
    name:"country", value: "CY",
    label: "Cyprus"
  },
  {
    name:"country", value: "CZ",
    label: "Czechia"
  },
  {
    name:"country", value: "CI",
    label: "Côte d'Ivoire"
  },
  {
    name:"country", value: "DK",
    label: "Denmark"
  },
  {
    name:"country", value: "DJ",
    label: "Djibouti"
  },
  {
    name:"country", value: "DM",
    label: "Dominica"
  },
  {
    name:"country", value: "DO",
    label: "Dominican Republic"
  },
  {
    name:"country", value: "EC",
    label: "Ecuador"
  },
  {
    name:"country", value: "EG",
    label: "Egypt"
  },
  {
    name:"country", value: "SV",
    label: "El Salvador"
  },
  {
    name:"country", value: "GQ",
    label: "Equatorial Guinea"
  },
  {
    name:"country", value: "ER",
    label: "Eritrea"
  },
  {
    name:"country", value: "EE",
    label: "Estonia"
  },
  {
    name:"country", value: "SZ",
    label: "Eswatini"
  },
  {
    name:"country", value: "ET",
    label: "Ethiopia"
  },
  {
    name:"country", value: "FK",
    label: "Falkland Islands (Malvinas)"
  },
  {
    name:"country", value: "FO",
    label: "Faroe Islands"
  },
  {
    name:"country", value: "FJ",
    label: "Fiji"
  },
  {
    name:"country", value: "FI",
    label: "Finland"
  },
  {
    name:"country", value: "FR",
    label: "France"
  },
  {
    name:"country", value: "GF",
    label: "French Guiana"
  },
  {
    name:"country", value: "PF",
    label: "French Polynesia"
  },
  {
    name:"country", value: "TF",
    label: "French Southern Territories"
  },
  {
    name:"country", value: "GA",
    label: "Gabon"
  },
  {
    name:"country", value: "GM",
    label: "Gambia"
  },
  {
    name:"country", value: "GE",
    label: "Georgia"
  },
  {
    name:"country", value: "DE",
    label: "Germany"
  },
  {
    name:"country", value: "GH",
    label: "Ghana"
  },
  {
    name:"country", value: "GI",
    label: "Gibraltar"
  },
  {
    name:"country", value: "GR",
    label: "Greece"
  },
  {
    name:"country", value: "GL",
    label: "Greenland"
  },
  {
    name:"country", value: "GD",
    label: "Grenada"
  },
  {
    name:"country", value: "GP",
    label: "Guadeloupe"
  },
  {
    name:"country", value: "GU",
    label: "Guam"
  },
  {
    name:"country", value: "GT",
    label: "Guatemala"
  },
  {
    name:"country", value: "GG",
    label: "Guernsey"
  },
  {
    name:"country", value: "GN",
    label: "Guinea"
  },
  {
    name:"country", value: "GW",
    label: "Guinea-Bissau"
  },
  {
    name:"country", value: "GY",
    label: "Guyana"
  },
  {
    name:"country", value: "HT",
    label: "Haiti"
  },
  {
    name:"country", value: "HM",
    label: "Heard Island and McDonald Islands"
  },
  {
    name:"country", value: "VA",
    label: "Holy See"
  },
  {
    name:"country", value: "HN",
    label: "Honduras"
  },
  {
    name:"country", value: "HK",
    label: "Hong Kong"
  },
  {
    name:"country", value: "HU",
    label: "Hungary"
  },
  {
    name:"country", value: "IS",
    label: "Iceland"
  },
  {
    name:"country", value: "IN",
    label: "India"
  },
  {
    name:"country", value: "IND",
    label: "Indonesia"
  },
  {
    name:"country", value: "IR",
    label: "Iran, Islamic Republic of"
  },
  {
    name:"country", value: "IQ",
    label: "Iraq"
  },
  {
    name:"country", value: "IE",
    label: "Ireland"
  },
  {
    name:"country", value: "IM",
    label: "Isle of Man"
  },
  {
    name:"country", value: "IL",
    label: "Israel"
  },
  {
    name:"country", value: "IT",
    label: "Italy"
  },
  {
    name:"country", value: "JM",
    label: "Jamaica"
  },
  {
    name:"country", value: "JP",
    label: "Japan"
  },
  {
    name:"country", value: "JE",
    label: "Jersey"
  },
  {
    name:"country", value: "JO",
    label: "Jordan"
  },
  {
    name:"country", value: "KZ",
    label: "Kazakhstan"
  },
  {
    name:"country", value: "KE",
    label: "Kenya"
  },
  {
    name:"country", value: "KI",
    label: "Kiribati"
  },
  {
    name:"country", value: "KP",
    label: "Korea, Democratic People's Republic of"
  },
  {
    name:"country", value: "KR",
    label: "Korea, Republic of"
  },
  {
    name:"country", value: "KW",
    label: "Kuwait"
  },
  {
    name:"country", value: "KG",
    label: "Kyrgyzstan"
  },
  {
    name:"country", value: "LA",
    label: "Lao People's Democratic Republic"
  },
  {
    name:"country", value: "LV",
    label: "Latvia"
  },
  {
    name:"country", value: "LB",
    label: "Lebanon"
  },
  {
    name:"country", value: "LS",
    label: "Lesotho"
  },
  {
    name:"country", value: "LR",
    label: "Liberia"
  },
  {
    name:"country", value: "LY",
    label: "Libya"
  },
  {
    name:"country", value: "LI",
    label: "Liechtenstein"
  },
  {
    name:"country", value: "LT",
    label: "Lithuania"
  },
  {
    name:"country", value: "LU",
    label: "Luxembourg"
  },
  {
    name:"country", value: "MO",
    label: "Macao"
  },
  {
    name:"country", value: "MG",
    label: "Madagascar"
  },
  {
    name:"country", value: "MW",
    label: "Malawi"
  },
  {
    name:"country", value: "MY",
    label: "Malaysia"
  },
  {
    name:"country", value: "MV",
    label: "Maldives"
  },
  {
    name:"country", value: "ML",
    label: "Mali"
  },
  {
    name:"country", value: "MT",
    label: "Malta"
  },
  {
    name:"country", value: "MH",
    label: "Marshall Islands"
  },
  {
    name:"country", value: "MQ",
    label: "Martinique"
  },
  {
    name:"country", value: "MR",
    label: "Mauritania"
  },
  {
    name:"country", value: "MU",
    label: "Mauritius"
  },
  {
    name:"country", value: "YT",
    label: "Mayotte"
  },
  {
    name:"country", value: "MX",
    label: "Mexico"
  },
  {
    name:"country", value: "FM",
    label: "Micronesia, Federated States of"
  },
  {
    name:"country", value: "MD",
    label: "Moldova, Republic of"
  },
  {
    name:"country", value: "MC",
    label: "Monaco"
  },
  {
    name:"country", value: "MN",
    label: "Mongolia"
  },
  {
    name:"country", value: "ME",
    label: "Montenegro"
  },
  {
    name:"country", value: "MS",
    label: "Montserrat"
  },
  {
    name:"country", value: "MA",
    label: "Morocco"
  },
  {
    name:"country", value: "MZ",
    label: "Mozambique"
  },
  {
    name:"country", value: "MM",
    label: "Myanmar"
  },
  {
    name:"country", value: "NA",
    label: "Namibia"
  },
  {
    name:"country", value: "NR",
    label: "Nauru"
  },
  {
    name:"country", value: "NP",
    label: "Nepal"
  },
  {
    name:"country", value: "NL",
    label: "Netherlands"
  },
  {
    name:"country", value: "NC",
    label: "New Caledonia"
  },
  {
    name:"country", value: "NZ",
    label: "New Zealand"
  },
  {
    name:"country", value: "NI",
    label: "Nicaragua"
  },
  {
    name:"country", value: "NE",
    label: "Niger"
  },
  {
    name:"country", value: "NG",
    label: "Nigeria"
  },
  {
    name:"country", value: "NU",
    label: "Niue"
  },
  {
    name:"country", value: "NF",
    label: "Norfolk Island"
  },
  {
    name:"country", value: "MK",
    label: "North Macedonia"
  },
  {
    name:"country", value: "MP",
    label: "Northern Mariana Islands"
  },
  {
    name:"country", value: "NO",
    label: "Norway"
  },
  {
    name:"country", value: "OM",
    label: "Oman"
  },
  {
    name:"country", value: "PK",
    label: "Pakistan"
  },
  {
    name:"country", value: "PW",
    label: "Palau"
  },
  {
    name:"country", value: "PS",
    label: "Palestine, State of"
  },
  {
    name:"country", value: "PA",
    label: "Panama"
  },
  {
    name:"country", value: "PG",
    label: "Papua New Guinea"
  },
  {
    name:"country", value: "PY",
    label: "Paraguay"
  },
  {
    name:"country", value: "PE",
    label: "Peru"
  },
  {
    name:"country", value: "PH",
    label: "Philippines"
  },
  {
    name:"country", value: "PN",
    label: "Pitcairn"
  },
  {
    name:"country", value: "PL",
    label: "Poland"
  },
  {
    name:"country", value: "PT",
    label: "Portugal"
  },
  {
    name:"country", value: "PR",
    label: "Puerto Rico"
  },
  {
    name:"country", value: "QA",
    label: "Qatar"
  },
  {
    name:"country", value: "RO",
    label: "Romania"
  },
  {
    name:"country", value: "RU",
    label: "Russian Federation"
  },
  {
    name:"country", value: "RW",
    label: "Rwanda"
  },
  {
    name:"country", value: "RE",
    label: "Réunion"
  },
  {
    name:"country", value: "BL",
    label: "Saint Barthélemy"
  },
  {
    name:"country", value: "SH",
    label: "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    name:"country", value: "KN",
    label: "Saint Kitts and Nevis"
  },
  {
    name:"country", value: "LC",
    label: "Saint Lucia"
  },
  {
    name:"country", value: "MF",
    label: "Saint Martin (French part)"
  },
  {
    name:"country", value: "PM",
    label: "Saint Pierre and Miquelon"
  },
  {
    name:"country", value: "VC",
    label: "Saint Vincent and the Grenadines"
  },
  {
    name:"country", value: "WS",
    label: "Samoa"
  },
  {
    name:"country", value: "SM",
    label: "San Marino"
  },
  {
    name:"country", value: "ST",
    label: "Sao Tome and Principe"
  },
  {
    name:"country", value: "SA",
    label: "Saudi Arabia"
  },
  {
    name:"country", value: "SN",
    label: "Senegal"
  },
  {
    name:"country", value: "RS",
    label: "Serbia"
  },
  {
    name:"country", value: "SC",
    label: "Seychelles"
  },
  {
    name:"country", value: "SL",
    label: "Sierra Leone"
  },
  {
    name:"country", value: "SG",
    label: "Singapore"
  },
  {
    name:"country", value: "SX",
    label: "Sint Maarten (Dutch part)"
  },
  {
    name:"country", value: "SK",
    label: "Slovakia"
  },
  {
    name:"country", value: "SI",
    label: "Slovenia"
  },
  {
    name:"country", value: "SB",
    label: "Solomon Islands"
  },
  {
    name:"country", value: "SO",
    label: "Somalia"
  },
  {
    name:"country", value: "ZA",
    label: "South Africa"
  },
  {
    name:"country", value: "GS",
    label: "South Georgia and the South Sandwich Islands"
  },
  {
    name:"country", value: "SS",
    label: "South Sudan"
  },
  {
    name:"country", value: "ES",
    label: "Spain"
  },
  {
    name:"country", value: "LK",
    label: "Sri Lanka"
  },
  {
    name:"country", value: "SD",
    label: "Sudan"
  },
  {
    name:"country", value: "SR",
    label: "Suriname"
  },
  {
    name:"country", value: "SJ",
    label: "Svalbard and Jan Mayen"
  },
  {
    name:"country", value: "SE",
    label: "Sweden"
  },
  {
    name:"country", value: "CH",
    label: "Switzerland"
  },
  {
    name:"country", value: "SY",
    label: "Syrian Arab Republic"
  },
  {
    name:"country", value: "TW",
    label: "Taiwan, Province of China"
  },
  {
    name:"country", value: "TJ",
    label: "Tajikistan"
  },
  {
    name:"country", value: "TZ",
    label: "Tanzania, United Republic of"
  },
  {
    name:"country", value: "TH",
    label: "Thailand"
  },
  {
    name:"country", value: "TL",
    label: "Timor-Leste"
  },
  {
    name:"country", value: "TG",
    label: "Togo"
  },
  {
    name:"country", value: "TK",
    label: "Tokelau"
  },
  {
    name:"country", value: "TO",
    label: "Tonga"
  },
  
  {
    name:"country", value: "TN",
    label: "Tunisia"
  },
  {
    name:"country", value: "TR",
    label: "Turkey"
  },
  {
    name:"country", value: "TM",
    label: "Turkmenistan"
  },
  {
    name:"country", value: "TC",
    label: "Turks and Caicos Islands"
  },
  {
    name:"country", value: "TV",
    label: "Tuvalu"
  },
  {
    name:"country", value: "UG",
    label: "Uganda"
  },
  {
    name:"country", value: "UA",
    label: "Ukraine"
  },
  {
    name:"country", value: "AE",
    label: "United Arab Emirates"
  },
  {
    name:"country", value: "GB",
    label: "United Kingdom"
  },
  {
    name:"country", value: "UM",
    label: "United States Minor Outlying Islands"
  },
  {
    name:"country", value: "US",
    label: "United States"
  },
  {
    name:"country", value: "UY",
    label: "Uruguay"
  },
  {
    name:"country", value: "UZ",
    label: "Uzbekistan"
  },
  {
    name:"country", value: "VU",
    label: "Vanuatu"
  },
  {
    name:"country", value: "VE",
    label: "Venezuela, Bolivarian Republic of"
  },
  {
    name:"country", value: "VN",
    label: "Viet Nam"
  },
  {
    name:"country", value: "VG",
    label: "Virgin Islands, British"
  },
  {
    name:"country", value: "VI",
    label: "Virgin Islands, U.S."
  },
  {
    name:"country", value: "WF",
    label: "Wallis and Futuna"
  },
  {
    name:"country", value: "EH",
    label: "Western Sahara"
  },
  {
    name:"country", value: "YE",
    label: "Yemen"
  },
  {
    name:"country", value: "ZM",
    label: "Zambia"
  },
  {
    name:"country", value: "ZW",
    label: "Zimbabwe"
  }
]