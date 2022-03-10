import React , { Component } from "react";
import axios from 'axios';
import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import DatePicker from "../../components/DatePicker"
import 'firebase/firestore';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css";
import { DatePickerStyled } from "../../components/DatePicker/DatePicker";
import { withRouter } from 'next/router'
import { Collapse } from "react-bootstrap";

const Accomodation = [
  {name:"Accomodation", value: "yes", label: "Yes" },
  {name:"Accomodation", value: "no", label: "No" },
 
 ];

 const Internship = [
  {name:"Internship", value: "yes", label: "Yes" },
  {name:"Internship", value: "no", label: "No" },
 
 ];

 const OfferLetter = [
  {name:"OfferLetter", value: "yes", label: "Yes" },
  {name:"OfferLetter", value: "no", label: "No" },
 
 ];

 const WorkVisa = [
  {name:"WorkVisa", value: "yes", label: "Yes" },
  {name:"WorkVisa", value: "no", label: "No" },
 
 ];

 const WorkStudy = [
  {name:"WorkStudy", value: "yes", label: "Yes" },
  {name:"WorkStudy", value: "no", label: "No" },
 
 ];

class AddUni extends Component {

  constructor(props) {

    super(props);
    this.handleFallSemesterDayClick = this.handleFallSemesterDayClick.bind(this);
    this.handleSpringSemesterDayClick = this.handleSpringSemesterDayClick.bind(this);
    this.handleSummerSemesterDayClick = this.handleSummerSemesterDayClick.bind(this);
    this.handleIntake4SemesterDayClick = this.handleIntake4SemesterDayClick.bind(this);
    this.handleIntake5SemesterDayClick = this.handleIntake5SemesterDayClick.bind(this);
    this.handleIntake6SemesterDayClick = this.handleIntake6SemesterDayClick.bind(this);
    this.handleFallSemesterAppDayClick = this.handleFallSemesterAppDayClick.bind(this);
    this.handleSpringSemesterAppDayClick = this.handleSpringSemesterAppDayClick.bind(this);
    this.handleSummerSemesterAppDayClick = this.handleSummerSemesterAppDayClick.bind(this);
    this.handleIntake4SemesterAppDayClick = this.handleIntake4SemesterAppDayClick.bind(this);
    this.handleIntake5SemesterAppDayClick = this.handleIntake5SemesterAppDayClick.bind(this);
    this.handleIntake6SemesterAppDayClick = this.handleIntake6SemesterAppDayClick.bind(this);
    this.state = {
      ugInfo:false,
      pgInfo:false,
      highschoolInfo:false,
      diplomaInfo:false,
      foundationInfo:false,
      fascilitiesInfo:false,
      openItem:1,
      disable:false,
      image:"",
      viewCompleted: false,
      selectedDay: undefined,
      intakeCount:3,
      activeItem: {
        email:"",
        name:"",
        mobile:"",
        country:"",
        UGfee:"",
        UGIELTSReq:"",
        UGTOEFLReq:"",
        UGPTEReq:"",
        UGDuolingoReq:"",
        UGAppfee:"",
        PGfee:"",
        PGIELTSReq:"",
        PGTOEFLReq:"",
        PGPTEReq:"",
        PGDuolingoReq:"",
        PGAppfee:"",
        MinDeposit:"",
        Diplomafee:"",
        AccomodationCostUG:"",
        AccomodationCostPG:"",
        FallSemester:"",
        SpringSemester:"",
        SummerSemester:"",
        Intake4:"",
        Intake5:"",
        Intake6:"",
        FallSemesterAppDeadline:"",
        SpringSemesterAppDeadline:"",
        SummerSemesterAppDeadline:"",
        Intake4AppDeadline:"",
        Intake5AppDeadline:"",
        Intake6AppDeadline:"",
        ranking:"",
        HSCReqUG:"",
        HSCReqPG:"",
        Accomodation:"no",
        Internship:"no",
        OfferLetter:"no",
        WorkVisa:"no",
        WorkStudy:"no",
        ScholarshipReq:"",
        UGExtra:"",
        PGExtra:"",
        UGReq:""
      },
      todoList: [],
      
      };
  }


  
  async componentDidMount() {
  //   try {
  //     const activeItem = { ...this.state.activeItem, email: this.props.user };
  //     this.setState({activeItem})
  //   } 
  //   catch (e) {
  //     console.log(e);
  // }
  }


refreshList = () => {
  axios
    .get("https://ci-gsc.com/uni")
    .then((res) => this.success())
    .catch((err) => console.log(err));
};

success = () => {
  alert("University Add to GSC Directory. Redirecting to Uni List page");
  setInterval(() => {
    this.props.router.back()
  }, 3000);
}
increaseIntake = () => {
  let count = this.state.intakeCount + 1
  this.setState({
intakeCount : count
  })
  
}

changeUgInfo = () => {
  if(this.state.ugInfo==true)
  {this.setState({
ugInfo : false
  })}
  if(this.state.ugInfo==false)
  {this.setState({
ugInfo : true
  })}
}

changePgInfo = () => {
  if(this.state.pgInfo==true)
  {this.setState({
pgInfo : false
  })}
  if(this.state.pgInfo==false)
  {this.setState({
pgInfo : true
  })}
}

changehighschoolInfo = () => {
  if(this.state.highschoolInfo==true)
  {this.setState({
highschoolInfo : false
  })}
  if(this.state.highschoolInfo==false)
  {this.setState({
highschoolInfo : true
  })}
}

changediplomaInfo = () => {
  if(this.state.diplomaInfo==true)
  {this.setState({
diplomaInfo : false
  })}
  if(this.state.diplomaInfo==false)
  {this.setState({
diplomaInfo : true
  })}
}

changefoundationInfo = () => {
  if(this.state.foundationInfo==true)
  {this.setState({
ugInfo : false
  })}
  if(this.state.foundationInfo==false)
  {this.setState({
ugInfo : true
  })}
}

changefascilitiesInfo = () => {
  if(this.state.fascilitiesInfo==true)
  {this.setState({
fascilitiesInfo : false
  })}
  if(this.state.fascilitiesInfo==false)
  {this.setState({
fascilitiesInfo : true
  })}
}

handleSubmit = (item) => {
  this.setState({
    disable:true
  })
console.log(item)
  if (item.id) {
    axios
      .put(`https://ci-gsc.com/uni/${item.id}/`, item)
      .then((res) => this.success())
      .catch((err) => console.log(err));
    return;
  }
  
  axios
    .post("https://ci-gsc.com/uni/", item)
    .then((res) => this.success())
    .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
if(this.state.image){
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('email', this.state.activeItem.email);

    let url = 'https://ci-gsc.com/unilogo/';
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

};

// setOpenItem(e) {

//   this.setState({
//     openItem: e
//   })
// };

handleImageChange = (e) => {
  this.setState({
    image: e.target.files[0]
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


handleFallSemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, FallSemester: day.toDateString()};
  this.setState({ activeItem });
}
handleSpringSemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, SpringSemester: day.toDateString()};
  this.setState({ activeItem });
}
handleSummerSemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, SummerSemester: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake4SemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake4: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake5SemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake5: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake6SemesterDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake6: day.toDateString()};
  this.setState({ activeItem });
}
handleFallSemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, FallSemesterAppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
handleSpringSemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, SpringSemesterAppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
handleSummerSemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, SummerSemesterAppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake4SemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake4AppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake5SemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake5AppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
handleIntake6SemesterAppDayClick(day, { selected }) {
  const activeItem = { ...this.state.activeItem, Intake6AppDeadline: day.toDateString()};
  this.setState({ activeItem });
}
render(){


   return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          id="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    Please fill up the details to add a new University into GSC directory
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
                                University Name * 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="name"
                                placeholder="eg. Collarts"
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
                                Mobile 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="mobile"
                                placeholder="+9901845671823"
                                onChange={this.handleChange}
                                value={this.state.activeItem.mobile}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="email"
                                placeholder="contact email of the institute"
                                onChange={this.handleChange}
                                value={this.state.activeItem.email}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                style={{paddingBottom:"10px"}}
                              >
                                University Logo 
                              </label>
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
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Ranking
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="ranking"
                                placeholder="eg. 3.5"
                               
                                onChange={this.handleChange}
                                value={this.state.activeItem.ranking}
                              />
                            </div>
                          </div>
                      
                        
                        </div>
                        {this.state.ugInfo && (
                                         <>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Annual Undergraduate Fee
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGfee"
                                placeholder="10,000"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGfee}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                UG IELTS Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGIELTSReq"
                                placeholder="6"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGIELTSReq}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                UG TOEFL Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGTOEFLReq"
                                placeholder="79"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGTOEFLReq}
                              />
                            </div>
                          </div>
                        
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                UG PTE Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGPTEReq"
                                placeholder="50"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGPTEReq}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                UG Duolingo Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGDuolingoReq"
                                placeholder="95"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGDuolingoReq}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                UG Application Fee
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGAppfee"
                                placeholder="60USD"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGAppfee}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                HSC Requirement UG
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="HSCReqUG"
                                placeholder="3"
                                onChange={this.handleChange}
                                value={this.state.activeItem.HSCReqUG}
                              />
                            </div>
                          </div>
                          </div>
                          <div className="row mb-8">
                        <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               UG Extra Requirement
                              </label>
                              <textarea
                                type="text"
                                className="form-control h-px-248"
                                name="UGExtra"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGExtra}
                              />
                           
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Accomodation Cost/Semester UG
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="AccomodationCostUG"
                                placeholder="3400"
                                onChange={this.handleChange}
                                value={this.state.activeItem.AccomodationCostUG}
                              />
                            
                            </div>
                          </div>
                        </div>
</>)}
                       
                       
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                          <input
                        
                              type="button"
                              value="Add UG Info"
                              className="btn btn-blue btn-h-30 text-white min-width-px-100 rounded-5 text-uppercase"
                              onClick={() => this.changeUgInfo()}
                         />
                         </div>
                            </div>

                            {this.state.pgInfo && (
                                         <>
                          <div className="row mb-8">
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Annual Post-Graduate Fee
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-148"
                                name="PGfee"
                                placeholder="10,000"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGfee}
                              />
                           
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG IELTS Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="PGIELTSReq"
                                placeholder="6"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGIELTSReq}
                              />
                           
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG TOEFL Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="PGTOEFLReq"
                                placeholder="50"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGTOEFLReq}
                              />
 
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG PTE Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="PGPTEReq"
                                placeholder="53"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGPTEReq}
                              />
                              
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG Duolingo Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="PGDuolingoReq"
                                placeholder="100"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGDuolingoReq}
                              />
                             
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG UG Requirement
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="UGReq"
                                placeholder="3.77"
                                onChange={this.handleChange}
                                value={this.state.activeItem.UGReq}
                              />
                              
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                PG Application Fee 
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="PGAppfee"
                                placeholder="60USD"
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGAppfee}
                              />
                             
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                HSC Requirement PG
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="HSCReqPG"
                                placeholder="3"
                                onChange={this.handleChange}
                                value={this.state.activeItem.HSCReqPG}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                        <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              PG Extra Requirements
                              </label>
                              <textarea
                                type="text"
                                className="form-control h-px-248"
                                name="PGExtra"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.activeItem.PGExtra}
                              />
                             
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Accomodation Cost/Semester PG
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="AccomodationCostPG"
                                placeholder="3400"
                                onChange={this.handleChange}
                                value={this.state.activeItem.AccomodationCostPG}
                              />
                            
                            </div>
                          </div>

                        </div>

                        </>)}

                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                          <input
                        
                              type="button"
                              value="Add PG Info"
                              className="btn btn-blue btn-h-30 text-white min-width-px-100 rounded-5 text-uppercase"
                              onClick={() => this.changePgInfo()}
                         />
                         </div>
                            </div>
                        <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Annual Diploma Fee
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="Diplomafee"
                                placeholder="contact email of the institute"
                                onChange={this.handleChange}
                                value={this.state.activeItem.Diplomafee}
                              />
                            </div>
                          </div>
                       
                        
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Min Deposit
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                name="MinDeposit"
                                placeholder="$7900"
                                onChange={this.handleChange}
                                value={this.state.activeItem.MinDeposit}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                        <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Scholarship Requirements
                              </label>
                              <textarea
                                type="text"
                                className="form-control h-px-248"
                                name="ScholarshipReq"
                                placeholder="3400"
                                onChange={this.handleChange}
                                value={this.state.activeItem.ScholarshipReq}
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
                                Start of Fall semester
                              </label>
                           
                              <DayPickerInput
                            onDayChange={this.handleFallSemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Fall Semester Application Deadline
                              </label>
                           <DayPickerInput
                            onDayChange={this.handleFallSemesterAppDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="address"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Start of Spring Semester
                              </label>
                              <DayPickerInput
                            onDayChange={this.handleSpringSemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Spring Semester Application Deadline
                              </label>
                              <DayPickerInput
                            onDayChange={this.handleSpringSemesterAppDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                            </div>
                          </div>
                       
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Start of Summer semester
                              </label>
                              <DayPickerInput
                            onDayChange={this.handleSummerSemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-xl-0 mb-7">
                            <div className="form-group position-relative">
                              <label
                                htmlFor="select3"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Summer Semester Application Deadline
                              </label>
                              <DayPickerInput
                            onDayChange={this.handleSummerSemesterAppDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                            </div>
                          </div>
                          {this.state.intakeCount>3 && (
                            <>
                             <div className="col-lg-6 mb-xl-0 mb-7">
                             <div className="form-group position-relative">
                               <label
                                 htmlFor="select3"
                                 className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                               >
                                 Start of Intake 4
                               </label>
                               <DayPickerInput
                            onDayChange={this.handleIntake4SemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                             </div>
                           </div>
                             <div className="col-lg-6 mb-xl-0 mb-7">
                             <div className="form-group position-relative">
                               <label
                                 htmlFor="select3"
                                 className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                               >
                                 Intake 4 Application Deadline
                               </label>
                               <DayPickerInput
                            onDayChange={this.handleIntake4SemesterAppDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                             </div>
                           </div>
                           </>
                          )
                          }
                                       {this.state.intakeCount>4 && (
                                         <>
                             <div className="col-lg-6 mb-xl-0 mb-7">
                             <div className="form-group position-relative">
                               <label
                                 htmlFor="select3"
                                 className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                               >
                                 Start of Intake 5
                               </label>
                               <DayPickerInput
                            onDayChange={this.handleIntake5SemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                             </div>
                           </div>
                           <div className="col-lg-6 mb-xl-0 mb-7">
                             <div className="form-group position-relative">
                               <label
                                 htmlFor="select3"
                                 className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                               >
                                Intake 5 Application Deadline
                               </label>
                               <DayPickerInput
                            onDayChange={this.handleIntake5SemesterAppDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                             </div>
                           </div>
                           </>
                          )
                          }
                                       {this.state.intakeCount>5 && (
                                         <>
                             <div className="col-lg-6 mb-xl-0 mb-7">
                             <div className="form-group position-relative">
                               <label
                                 htmlFor="select3"
                                 className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                               >
                                 Start of Intake 6
                               </label>
                               <DayPickerInput
                            onDayChange={this.handleIntake6SemesterDayClick}
                            selectedDays={this.state.selectedDay}
                           />
                             </div>
                           </div>
                              <div className="col-lg-6 mb-xl-0 mb-7">
                              <div className="form-group position-relative">
                                <label
                                  htmlFor="select3"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Intake 6 Application Deadline
                                </label>
                                <DayPickerInput
                             onDayChange={this.handleIntake6SemesterAppDayClick}
                             selectedDays={this.state.selectedDay}
                            />
                              </div>
                            </div>
                            </>
                          )
                          }
                          </div>
                          <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                          <input
                        disabled ={this.state.disable}
                              type="button"
                              value="Add intake"
                              className="btn btn-blue btn-h-30 text-white min-width-px-100 rounded-5 text-uppercase"
                              onClick={() => this.increaseIntake()}
                         />
                         </div>
                            </div>
                            {this.state.fascilitiesInfo && (
                                         <>
                          <div className="row mb-8">
                        
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Intership Opportunity
                              </label>
                              <Select
                              
                              options={Internship}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={this.handleChangeSelect}
                              value={this.state.activeItem.Internship.value}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Offer Letter
                              </label>
                              <Select
                              
                              options={OfferLetter}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={this.handleChangeSelect}
                              value={this.state.activeItem.OfferLetter.value}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Accomodation
                              </label>
                              <Select
                              
                              options={Accomodation}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={this.handleChangeSelect}
                              value={this.state.activeItem.Accomodation.value}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Work Visa after Study
                              </label>
                              <Select
                              
                              options={WorkVisa}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={this.handleChangeSelect}
                              value={this.state.activeItem.WorkVisa.value}
                            />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Work While Studying
                              </label>
                              <Select
                              
                              options={WorkStudy}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              onChange={this.handleChangeSelect}
                              value={this.state.activeItem.WorkStudy.value}
                            />
                            </div>
                          </div>
                        </div>
                        </>
                          )
                          }
                               <div className="row mb-8">
                          <div className="col-lg-6 mb-xl-0 mb-7">
                          <input
                        
                              type="button"
                              value="Add Fascilities Info"
                              className="btn btn-blue btn-h-30 text-white min-width-px-100 rounded-5 text-uppercase"
                              onClick={() => this.changefascilitiesInfo()}
                         />
                         </div>
                            </div>
                       
                        <input
                    
                              type="button"
                              value="Add Uni"
                              className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
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
export default withRouter(AddUni);


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
    name:"country", value: "Australia",
    label: "Australia"
  },
  {
    name:"country", value: "Europe",
    label: "Europe"
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
    name:"country", value: "Canada",
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
    name:"country", value: "UK",
    label: "United Kingdom"
  },
  {
    name:"country", value: "UM",
    label: "United States Minor Outlying Islands"
  },
  {
    name:"country", value: "USA",
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