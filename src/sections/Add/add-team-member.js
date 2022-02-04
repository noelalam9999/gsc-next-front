import React, { Component } from "react"

import PageWrapper from "../../components/PageWrapper";
import { Select } from "../../components/Core";
import 'firebase/firestore';
import axios from 'axios';


const Role = [
  {name:"role", value: "moderator", label: "Moderator" },
  {name:"role", value: "employee", label: "Employee" },
  {name:"role", value: "accountant", label: "Accountant" },
  {name:"role", value: "receptionist", label: "Receptionist" },
 ];

 const student_c = [
  {name:"student_c", value: "yes", label: "Yes" },
  {name:"student_c", value: "no", label: "No" },  
 ];
 const student_r = [
  {name:"student_r", value: "yes", label: "Yes" },
  {name:"student_r", value: "no", label: "No" },  
 ];
 const student_u = [
  {name:"student_u", value: "yes", label: "Yes" },
  {name:"student_u", value: "no", label: "No" },  
 ];
 const student_d = [
  {name:"student_d", value: "yes", label: "Yes" },
  {name:"student_d", value: "no", label: "No" },  
 ];
 
 const agent_c = [
  {name:"agent_c", value: "yes", label: "Yes" },
  {name:"agent_c", value: "no", label: "No" },  
 ];
 const agent_r = [
  {name:"agent_r", value: "yes", label: "Yes" },
  {name:"agent_r", value: "no", label: "No" },  
 ];
 const agent_u = [
  {name:"agent_u", value: "yes", label: "Yes" },
  {name:"agent_u", value: "no", label: "No" },  
 ];
 const agent_d = [
  {name:"agent_d", value: "yes", label: "Yes" },
  {name:"agent_d", value: "no", label: "No" },  
 ];
 const service_provider_c = [
  {name:"service_provider_c", value: "yes", label: "Yes" },
  {name:"service_provider_c", value: "no", label: "No" },  
 ];
 const service_provider_r = [
  {name:"service_provider_r", value: "yes", label: "Yes" },
  {name:"service_provider_r", value: "no", label: "No" },  
 ];
 const service_provider_u = [
  {name:"service_provider_u", value: "yes", label: "Yes" },
  {name:"service_provider_u", value: "no", label: "No" },  
 ];
 const service_provider_d = [
  {name:"service_provider_d", value: "yes", label: "Yes" },
  {name:"service_provider_d", value: "no", label: "No" },  
 ];
 const institute_c = [
  {name:"institute_c", value: "yes", label: "Yes" },
  {name:"institute_c", value: "no", label: "No" },  
 ];
 const institute_r = [
  {name:"institute_r", value: "yes", label: "Yes" },
  {name:"institute_r", value: "no", label: "No" },  
 ];
 const institute_u = [
  {name:"institute_u", value: "yes", label: "Yes" },
  {name:"institute_u", value: "no", label: "No" },  
 ];
 const institute_d = [
  {name:"institute_d", value: "yes", label: "Yes" },
  {name:"institute_d", value: "no", label: "No" },  
 ];

class AddAgent extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      disable:false,
      viewCompleted: false,
      image:"",
      image2:"",
    
      error:"",
      activeItem: {
        email:"",
        name:"",
        role:"",
        mobile:"",
        student_c : "no",
        student_r : "no",
        student_u : "no",    
        student_d : "no",    
        agent_c : "no",    
        agent_r : "no",   
        agent_u : "no", 
        agent_d : "no",
        service_provider_c : "no",    
        service_provider_r : "no",    
        service_provider_u : "no",    
        service_provider_d : "no",    
        institute_c : "no", 
        institute_r : "no",
        institute_u : "no",
        institute_d : "no",
        active_status : "active",
      },
      todoList: []
      };
  }


  
  async componentDidMount() {
 
   
  }


refreshList = () => {
  axios
    .get("https://ci-gsc.com/team-member")
    .then((res) => this.success())
    .catch((err) => console.log(err));
};

success = () => {
  alert("Team Member added to directory");
  
  if(this.state.image){
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('email', this.state.activeItem.email);

    let url = 'https://ci-gsc.com/agentcert/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'  
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => this.fail_image())
  }

}
fail = () => {
  alert("Please fillup the mandatory fields, the ones with the asterisks * ")
}

fail_image = () => {
  alert("Please insert the image again in jpg/png format * ")
}

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

handleSubmit = (item) => {
  item.added_by = this.props.user

  this.setState({
    disable:true
  })

  if(this.state.activeItem.email!=null &&  this.state.activeItem.name!=null && this.state.activeItem.role!=null && this.state.activeItem.mobile!=null)
  {

  let record = {'email':this.state.activeItem.email,'usertype':'team-member'}
    axios
    .post("https://ci-gsc.com/user/",record )
    .then((res) => alert("user created "))
    .catch((err) => alert("Please fillup the mandatory fields, the ones with the asterisks * "));
  axios
  .post(`https://ci-gsc.com/team-member/ `, item)
  .then((res) => this.success())
  .catch((err) => this.fail());
  ;


}
else{
  alert("please fill up all the mandatory fields")
}
console.log(item)

 
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
                    Add Team Member
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
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Role * 
                              </label>
                              <Select
                                options={Role}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="role"  
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.role.value}
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Email * 
                              </label>
                              <input
                               
                                className="form-control h-px-48"
                                name="email"  
                                
                                placeholder="Agents email"
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
                                Mobile * 
                              </label>
                              <input
                               
                                className="form-control h-px-48"
                                name="mobile"  
                                
                                placeholder="Team Member Mobile"
                                onChange={this.handleChange}
                                value={this.state.activeItem.mobile}
                                
                              />
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
                                Add Student 
                              </label>
                              <Select
                                options={student_c}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="student_c"  
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.student_c.value}
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                View Student 
                              </label>
                              <Select
                                options={student_r}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="student_r"  
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.student_r.value}
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Edit Student 
                              </label>
                              <Select
                                options={student_u}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="student_u"  
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.student_u.value}
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Delete Student 
                              </label>
                              <Select
                                options={student_d}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                name="student_d"  
                                border={false}
                                onChange={this.handleChangeSelect}
                                value={this.state.activeItem.student_d.value}
                                
                              />
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
                            Add Agent
                          </label>
                          <Select
                            options={agent_c}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="agent_c"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.agent_c.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            View Agent
                          </label>
                          <Select
                            options={agent_r}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="agent_r"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.agent_r.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Edit Agent 
                          </label>
                          <Select
                            options={agent_u}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="agent_u"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.agent_u.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Delete Agent
                          </label>
                          <Select
                            options={agent_d}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="agent_d"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.agent_d.value}
                            
                          />
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
                            Add Service Provider
                          </label>
                          <Select
                            options={service_provider_c}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="service_provider_c"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.service_provider_c.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            View Service Provider
                          </label>
                          <Select
                            options={service_provider_r}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="service_provider_r"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.service_provider_r.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Edit Service Provider
                          </label>
                          <Select
                            options={service_provider_u}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="service_provider_u"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.service_provider_u.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Delete Service Provider
                          </label>
                          <Select
                            options={service_provider_d}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="service_provider_d"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.service_provider_d.value}
                            
                          />
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
                            Add Institute
                          </label>
                          <Select
                            options={institute_c}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="institute_c"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.institute_c.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            View Institute
                          </label>
                          <Select
                            options={institute_r}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="institute_r"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.institute_r.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Edit Institute 
                          </label>
                          <Select
                            options={institute_u}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="institute_u"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.institute_u.value}
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Delete Institute 
                          </label>
                          <Select
                            options={institute_d}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            name="institute_d"  
                            border={false}
                            onChange={this.handleChangeSelect}
                            value={this.state.activeItem.institute_d.value}
                            
                          />
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
export default AddAgent;

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