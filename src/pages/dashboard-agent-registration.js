import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import 'firebase/firestore';

const Semester = [
  { value: "jan", label: "Januray" },
  { value: "feb", label: "February" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "sept", label: "September" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "december", label: "December" },
];
const yesNo = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  
];
const BirthYear = [
  { value: "1990", label: "1990" },
  { value: "1991", label: "1991" },
  { value: "1992", label: "1992" },
  { value: "1993", label: "1993" },
  { value: "1994", label: "1994" },
  { value: "1995", label: "1995" },
  { value: "1996", label: "1996" },
  { value: "1997", label: "1997" },
  { value: "1998", label: "1998" },
  { value: "1999", label: "1999" },
  { value: "2000", label: "2000" },
  { value: "2001", label: "2001" },
  { value: "2002", label: "2002" },
  { value: "2003", label: "2003" },
  { value: "2004", label: "2004" },
  { value: "2005", label: "2005" },
  { value: "2006", label: "2006" },
  { value: "2007", label: "2007" },
  { value: "2008", label: "2008" },
  { value: "2009", label: "2009" },
  { value: "2010", label: "2010" },
  { value: "2011", label: "2011" },
  { value: "2012", label: "2012" },
  { value: "2013", label: "2013" },
  { value: "2014", label: "2014" },
  { value: "2015", label: "2015" },
  { value: "2016", label: "2016" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
];

const UGfee = [
  { value: "<50,000", label: "<50,000" },
  { value: "50,000-100,000", label: "50,000-100,000" },
  { value: "100,000-200,000", label: "100,000-200,000" },
  { value: "200,000<", label: "200,000" },
];

const defaultLocations = [
  { value: "uk", label: "U.K." },
  { value: "usa", label: "U.S.A." },
  { value: "cn", label: "Canada" },
  { value: "aus", label: "Australia" },
  { value: "europe", label: "Europe" },
  { value: "malay", label: "Malaysia" },
];

const DashboardSettings = () => {

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
                    Please fill up the details to add a new University into GSC directory
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                  <div className="upload-file mb-16 text-center">
                      <div
                        id="userActions"
                        className="square-144 m-auto px-6 mb-7"
                      >
                        <label
                          htmlFor="fileUpload"
                          className="mb-0 font-size-4 text-smoke"
                        >
                          University Logo
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          className="sr-only"
                        />
                      </div>
                    </div>
                    <form action="/">
                      <fieldset>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Business Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              
                                placeholder="Ace Education"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Year Founded
                              </label>
                              <Select
                                options={BirthYear}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
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
                               Registration Number
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                               
                                placeholder="13579246922"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Business Address
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              
                                placeholder="234 Heaven Road, Sanfrancisco"
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
                                Business Phonenumber
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              
                                placeholder="093847625122"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Country
                              </label>
                              <Select
                                options={getCountries}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
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
                                Website
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              
                                placeholder="aceeducation.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Facebook URL
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                
                                placeholder="www.facebook.com/aceeducation"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="upload-file mb-16 text-center">
                      <div
                        id="userActions"
                        className="square-144 m-auto px-6 mb-7"
                      >
                        <label
                          htmlFor="fileUpload"
                          className="mb-0 font-size-4 text-smoke"
                        >
                          Agency Logo
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          className="sr-only"
                        />
                      </div>
                    </div>

                    <div className="upload-file mb-16 text-center">
                      <div
                        id="userActions"
                        className="square-144 m-auto px-6 mb-7"
                      >
                        <label
                          htmlFor="fileUpload"
                          className="mb-0 font-size-4 text-smoke"
                        >
                          Certificate
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          className="sr-only"
                        />
                      </div>
                    </div>

                    <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Your Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                
                                placeholder="Mr Mark Gomez"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Your Designation 
                                                             </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                
                                placeholder="CEO"
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
                                Your Contact Number
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                              
                                placeholder="02908345678"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Your Whatsapp Number
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                               
                                placeholder="01623847622"
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
                                Services
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                
                                placeholder="consultancy, Visa processing, ticketing"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Students Sent
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                
                                placeholder="300-400"
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
                                Do you charge Students?
                              </label>
                              <Select
                                options={yesNo}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="select2"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                               Any Association Member?
                              </label>
                              <Select
                                options={yesNo}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                              />
                            </div>
                          </div>
                        </div>
                  
                       
                        <input
                              type="button"
                              value="Save"
                              className="btn btn-green btn-h-60 text-white min-wvalueth-px-210 rounded-5 text-uppercase"
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
};
export default DashboardSettings;

export const getCountries = [
  {
    value: "AF",
    label: "Afghanistan"
  },
  {
    value: "AX",
    label: "Åland Islands"
  },
  {
    value: "AL",
    label: "Albania"
  },
  {
    value: "DZ",
    label: "Algeria"
  },
  {
    value: "AS",
    label: "American Samoa"
  },
  {
    value: "AD",
    label: "Andorra"
  },
  {
    value: "AO",
    label: "Angola"
  },
  {
    value: "AI",
    label: "Anguilla"
  },
  {
    value: "AQ",
    label: "Antarctica"
  },
  {
    value: "AG",
    label: "Antigua and Barbuda"
  },
  {
    value: "AR",
    label: "Argentina"
  },
  {
    value: "AM",
    label: "Armenia"
  },
  {
    value: "AW",
    label: "Aruba"
  },
  {
    value: "AU",
    label: "Australia"
  },
  {
    value: "AT",
    label: "Austria"
  },
  {
    value: "AZ",
    label: "Azerbaijan"
  },
  {
    value: "BS",
    label: "Bahamas"
  },
  {
    value: "BH",
    label: "Bahrain"
  },
  {
    value: "BD",
    label: "Bangladesh"
  },
  {
    value: "BB",
    label: "Barbados"
  },
  {
    value: "BY",
    label: "Belarus"
  },
  {
    value: "BE",
    label: "Belgium"
  },
  {
    value: "BZ",
    label: "Belize"
  },
  {
    value: "BJ",
    label: "Benin"
  },
  {
    value: "BM",
    label: "Bermuda"
  },
  {
    value: "BT",
    label: "Bhutan"
  },
  {
    value: "BO",
    label: "Bolivia, Plurinational State of"
  },
  {
    value: "BQ",
    label: "Bonaire, Sint Eustatius and Saba"
  },
  {
    value: "BA",
    label: "Bosnia and Herzegovina"
  },
  {
    value: "BW",
    label: "Botswana"
  },
  {
    value: "BV",
    label: "Bouvet Island"
  },
  {
    value: "BR",
    label: "Brazil"
  },
  {
    value: "IO",
    label: "British Indian Ocean Territory"
  },
  {
    value: "BN",
    label: "Brunei Darussalam"
  },
  {
    value: "BG",
    label: "Bulgaria"
  },
  {
    value: "BF",
    label: "Burkina Faso"
  },
  {
    value: "BI",
    label: "Burundi"
  },
  {
    value: "CV",
    label: "Cabo Verde"
  },
  {
    value: "KH",
    label: "Cambodia"
  },
  {
    value: "CM",
    label: "Cameroon"
  },
  {
    value: "CA",
    label: "Canada"
  },
  {
    value: "KY",
    label: "Cayman Islands"
  },
  {
    value: "CF",
    label: "Central African Republic"
  },
  {
    value: "TD",
    label: "Chad"
  },
  {
    value: "CL",
    label: "Chile"
  },
  {
    value: "CN",
    label: "China"
  },
  {
    value: "CX",
    label: "Christmas Island"
  },
  {
    value: "CC",
    label: "Cocos (Keeling) Islands"
  },
  {
    value: "CO",
    label: "Colombia"
  },
  {
    value: "KM",
    label: "Comoros"
  },
  {
    value: "CG",
    label: "Congo"
  },
  {
    value: "CD",
    label: "Congo, Democratic Republic of the"
  },
  {
    value: "CK",
    label: "Cook Islands"
  },
  {
    value: "CR",
    label: "Costa Rica"
  },
  {
    value: "HR",
    label: "Croatia"
  },
  {
    value: "CU",
    label: "Cuba"
  },
  {
    value: "CW",
    label: "Curaçao"
  },
  {
    value: "CY",
    label: "Cyprus"
  },
  {
    value: "CZ",
    label: "Czechia"
  },
  {
    value: "CI",
    label: "Côte d'Ivoire"
  },
  {
    value: "DK",
    label: "Denmark"
  },
  {
    value: "DJ",
    label: "Djibouti"
  },
  {
    value: "DM",
    label: "Dominica"
  },
  {
    value: "DO",
    label: "Dominican Republic"
  },
  {
    value: "EC",
    label: "Ecuador"
  },
  {
    value: "EG",
    label: "Egypt"
  },
  {
    value: "SV",
    label: "El Salvador"
  },
  {
    value: "GQ",
    label: "Equatorial Guinea"
  },
  {
    value: "ER",
    label: "Eritrea"
  },
  {
    value: "EE",
    label: "Estonia"
  },
  {
    value: "SZ",
    label: "Eswatini"
  },
  {
    value: "ET",
    label: "Ethiopia"
  },
  {
    value: "FK",
    label: "Falkland Islands (Malvinas)"
  },
  {
    value: "FO",
    label: "Faroe Islands"
  },
  {
    value: "FJ",
    label: "Fiji"
  },
  {
    value: "FI",
    label: "Finland"
  },
  {
    value: "FR",
    label: "France"
  },
  {
    value: "GF",
    label: "French Guiana"
  },
  {
    value: "PF",
    label: "French Polynesia"
  },
  {
    value: "TF",
    label: "French Southern Territories"
  },
  {
    value: "GA",
    label: "Gabon"
  },
  {
    value: "GM",
    label: "Gambia"
  },
  {
    value: "GE",
    label: "Georgia"
  },
  {
    value: "DE",
    label: "Germany"
  },
  {
    value: "GH",
    label: "Ghana"
  },
  {
    value: "GI",
    label: "Gibraltar"
  },
  {
    value: "GR",
    label: "Greece"
  },
  {
    value: "GL",
    label: "Greenland"
  },
  {
    value: "GD",
    label: "Grenada"
  },
  {
    value: "GP",
    label: "Guadeloupe"
  },
  {
    value: "GU",
    label: "Guam"
  },
  {
    value: "GT",
    label: "Guatemala"
  },
  {
    value: "GG",
    label: "Guernsey"
  },
  {
    value: "GN",
    label: "Guinea"
  },
  {
    value: "GW",
    label: "Guinea-Bissau"
  },
  {
    value: "GY",
    label: "Guyana"
  },
  {
    value: "HT",
    label: "Haiti"
  },
  {
    value: "HM",
    label: "Heard Island and McDonald Islands"
  },
  {
    value: "VA",
    label: "Holy See"
  },
  {
    value: "HN",
    label: "Honduras"
  },
  {
    value: "HK",
    label: "Hong Kong"
  },
  {
    value: "HU",
    label: "Hungary"
  },
  {
    value: "IS",
    label: "Iceland"
  },
  {
    value: "IN",
    label: "India"
  },
  {
    value: "value",
    label: "Indonesia"
  },
  {
    value: "IR",
    label: "Iran, Islamic Republic of"
  },
  {
    value: "IQ",
    label: "Iraq"
  },
  {
    value: "IE",
    label: "Ireland"
  },
  {
    value: "IM",
    label: "Isle of Man"
  },
  {
    value: "IL",
    label: "Israel"
  },
  {
    value: "IT",
    label: "Italy"
  },
  {
    value: "JM",
    label: "Jamaica"
  },
  {
    value: "JP",
    label: "Japan"
  },
  {
    value: "JE",
    label: "Jersey"
  },
  {
    value: "JO",
    label: "Jordan"
  },
  {
    value: "KZ",
    label: "Kazakhstan"
  },
  {
    value: "KE",
    label: "Kenya"
  },
  {
    value: "KI",
    label: "Kiribati"
  },
  {
    value: "KP",
    label: "Korea, Democratic People's Republic of"
  },
  {
    value: "KR",
    label: "Korea, Republic of"
  },
  {
    value: "KW",
    label: "Kuwait"
  },
  {
    value: "KG",
    label: "Kyrgyzstan"
  },
  {
    value: "LA",
    label: "Lao People's Democratic Republic"
  },
  {
    value: "LV",
    label: "Latvia"
  },
  {
    value: "LB",
    label: "Lebanon"
  },
  {
    value: "LS",
    label: "Lesotho"
  },
  {
    value: "LR",
    label: "Liberia"
  },
  {
    value: "LY",
    label: "Libya"
  },
  {
    value: "LI",
    label: "Liechtenstein"
  },
  {
    value: "LT",
    label: "Lithuania"
  },
  {
    value: "LU",
    label: "Luxembourg"
  },
  {
    value: "MO",
    label: "Macao"
  },
  {
    value: "MG",
    label: "Madagascar"
  },
  {
    value: "MW",
    label: "Malawi"
  },
  {
    value: "MY",
    label: "Malaysia"
  },
  {
    value: "MV",
    label: "Maldives"
  },
  {
    value: "ML",
    label: "Mali"
  },
  {
    value: "MT",
    label: "Malta"
  },
  {
    value: "MH",
    label: "Marshall Islands"
  },
  {
    value: "MQ",
    label: "Martinique"
  },
  {
    value: "MR",
    label: "Mauritania"
  },
  {
    value: "MU",
    label: "Mauritius"
  },
  {
    value: "YT",
    label: "Mayotte"
  },
  {
    value: "MX",
    label: "Mexico"
  },
  {
    value: "FM",
    label: "Micronesia, Federated States of"
  },
  {
    value: "MD",
    label: "Moldova, Republic of"
  },
  {
    value: "MC",
    label: "Monaco"
  },
  {
    value: "MN",
    label: "Mongolia"
  },
  {
    value: "ME",
    label: "Montenegro"
  },
  {
    value: "MS",
    label: "Montserrat"
  },
  {
    value: "MA",
    label: "Morocco"
  },
  {
    value: "MZ",
    label: "Mozambique"
  },
  {
    value: "MM",
    label: "Myanmar"
  },
  {
    value: "NA",
    label: "Namibia"
  },
  {
    value: "NR",
    label: "Nauru"
  },
  {
    value: "NP",
    label: "Nepal"
  },
  {
    value: "NL",
    label: "Netherlands"
  },
  {
    value: "NC",
    label: "New Caledonia"
  },
  {
    value: "NZ",
    label: "New Zealand"
  },
  {
    value: "NI",
    label: "Nicaragua"
  },
  {
    value: "NE",
    label: "Niger"
  },
  {
    value: "NG",
    label: "Nigeria"
  },
  {
    value: "NU",
    label: "Niue"
  },
  {
    value: "NF",
    label: "Norfolk Island"
  },
  {
    value: "MK",
    label: "North Macedonia"
  },
  {
    value: "MP",
    label: "Northern Mariana Islands"
  },
  {
    value: "NO",
    label: "Norway"
  },
  {
    value: "OM",
    label: "Oman"
  },
  {
    value: "PK",
    label: "Pakistan"
  },
  {
    value: "PW",
    label: "Palau"
  },
  {
    value: "PS",
    label: "Palestine, State of"
  },
  {
    value: "PA",
    label: "Panama"
  },
  {
    value: "PG",
    label: "Papua New Guinea"
  },
  {
    value: "PY",
    label: "Paraguay"
  },
  {
    value: "PE",
    label: "Peru"
  },
  {
    value: "PH",
    label: "Philippines"
  },
  {
    value: "PN",
    label: "Pitcairn"
  },
  {
    value: "PL",
    label: "Poland"
  },
  {
    value: "PT",
    label: "Portugal"
  },
  {
    value: "PR",
    label: "Puerto Rico"
  },
  {
    value: "QA",
    label: "Qatar"
  },
  {
    value: "RO",
    label: "Romania"
  },
  {
    value: "RU",
    label: "Russian Federation"
  },
  {
    value: "RW",
    label: "Rwanda"
  },
  {
    value: "RE",
    label: "Réunion"
  },
  {
    value: "BL",
    label: "Saint Barthélemy"
  },
  {
    value: "SH",
    label: "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    value: "KN",
    label: "Saint Kitts and Nevis"
  },
  {
    value: "LC",
    label: "Saint Lucia"
  },
  {
    value: "MF",
    label: "Saint Martin (French part)"
  },
  {
    value: "PM",
    label: "Saint Pierre and Miquelon"
  },
  {
    value: "VC",
    label: "Saint Vincent and the Grenadines"
  },
  {
    value: "WS",
    label: "Samoa"
  },
  {
    value: "SM",
    label: "San Marino"
  },
  {
    value: "ST",
    label: "Sao Tome and Principe"
  },
  {
    value: "SA",
    label: "Saudi Arabia"
  },
  {
    value: "SN",
    label: "Senegal"
  },
  {
    value: "RS",
    label: "Serbia"
  },
  {
    value: "SC",
    label: "Seychelles"
  },
  {
    value: "SL",
    label: "Sierra Leone"
  },
  {
    value: "SG",
    label: "Singapore"
  },
  {
    value: "SX",
    label: "Sint Maarten (Dutch part)"
  },
  {
    value: "SK",
    label: "Slovakia"
  },
  {
    value: "SI",
    label: "Slovenia"
  },
  {
    value: "SB",
    label: "Solomon Islands"
  },
  {
    value: "SO",
    label: "Somalia"
  },
  {
    value: "ZA",
    label: "South Africa"
  },
  {
    value: "GS",
    label: "South Georgia and the South Sandwich Islands"
  },
  {
    value: "SS",
    label: "South Sudan"
  },
  {
    value: "ES",
    label: "Spain"
  },
  {
    value: "LK",
    label: "Sri Lanka"
  },
  {
    value: "SD",
    label: "Sudan"
  },
  {
    value: "SR",
    label: "Suriname"
  },
  {
    value: "SJ",
    label: "Svalbard and Jan Mayen"
  },
  {
    value: "SE",
    label: "Sweden"
  },
  {
    value: "CH",
    label: "Switzerland"
  },
  {
    value: "SY",
    label: "Syrian Arab Republic"
  },
  {
    value: "TW",
    label: "Taiwan, Province of China"
  },
  {
    value: "TJ",
    label: "Tajikistan"
  },
  {
    value: "TZ",
    label: "Tanzania, United Republic of"
  },
  {
    value: "TH",
    label: "Thailand"
  },
  {
    value: "TL",
    label: "Timor-Leste"
  },
  {
    value: "TG",
    label: "Togo"
  },
  {
    value: "TK",
    label: "Tokelau"
  },
  {
    value: "TO",
    label: "Tonga"
  },
  {
    value: "TT",
    label: "Trinvaluead and Tobago"
  },
  {
    value: "TN",
    label: "Tunisia"
  },
  {
    value: "TR",
    label: "Turkey"
  },
  {
    value: "TM",
    label: "Turkmenistan"
  },
  {
    value: "TC",
    label: "Turks and Caicos Islands"
  },
  {
    value: "TV",
    label: "Tuvalu"
  },
  {
    value: "UG",
    label: "Uganda"
  },
  {
    value: "UA",
    label: "Ukraine"
  },
  {
    value: "AE",
    label: "United Arab Emirates"
  },
  {
    value: "GB",
    label: "United Kingdom"
  },
  {
    value: "UM",
    label: "United States Minor Outlying Islands"
  },
  {
    value: "US",
    label: "United States"
  },
  {
    value: "UY",
    label: "Uruguay"
  },
  {
    value: "UZ",
    label: "Uzbekistan"
  },
  {
    value: "VU",
    label: "Vanuatu"
  },
  {
    value: "VE",
    label: "Venezuela, Bolivarian Republic of"
  },
  {
    value: "VN",
    label: "Viet Nam"
  },
  {
    value: "VG",
    label: "Virgin Islands, British"
  },
  {
    value: "VI",
    label: "Virgin Islands, U.S."
  },
  {
    value: "WF",
    label: "Wallis and Futuna"
  },
  {
    value: "EH",
    label: "Western Sahara"
  },
  {
    value: "YE",
    label: "Yemen"
  },
  {
    value: "ZM",
    label: "Zambia"
  },
  {
    value: "ZW",
    label: "Zimbabwe"
  }
]