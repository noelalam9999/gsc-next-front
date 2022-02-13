import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const Faq = () => {
  const [openItem, setOpenItem] = useState(1);
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="row">
       
              <div
                className="col-xl-12 col-md-11"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="faq-content pt-lg-4 pt-6">
                  <div
                    className="accordion rounded-10 border-green border-top-5 pl-1"
                    id="accordionExample"
                  >
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-1">
                        <button
                          className="btn-reset font-size-8 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(1)}
                          aria-expanded={openItem === 1}
                        >
                         Privacy Policy
                        </button>
                      </div>
                      <Collapse in={openItem === 1}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          At Global Study Consulting, accessible from https://gsc.co.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Global Study Consulting and how we use it.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                          </div>
                       
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-2">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(2)}
                          aria-expanded={openItem === 2}
                        >
                          Consent
                        </button>
                      </div>
                      <Collapse in={openItem === 2}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-3">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(3)}
                          aria-expanded={openItem === 3}
                        >
                          Information we collect
                        </button>
                      </div>
                      <Collapse in={openItem === 3}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
                          will be made clear to you at the point we ask you to provide your personal information.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you contact us directly, we may receive additional information about you such as your name, email address, phone number,
                           the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          When you register for an Account, we may ask for your contact information, 
                          including items such as name, company name, address, email address, and telephone number.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-4">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(4)}
                          aria-expanded={openItem === 4}
                        >
                          How we use your information
                        </button>
                      </div>
                      <Collapse in={openItem === 4}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We use the information we collect in various ways, including to:
                          <ul>
                            `  <li>Provide, operate, and maintain our website</li>
                              <li>Improve, personalize, and expand our website</li>
                              <li>Understand and analyze how you use our website</li>
                              <li>Develop new products, services, features, and functionality</li>
                              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                              <li>Send you emails</li>
                              <li>Find and prevent fraud</li>
                              </ul>`
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-5">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(5)}
                          aria-expanded={openItem === 5}
                        >
                         Log Files
                        </button>
                      </div>
                      <Collapse in={openItem === 5}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Global Study Consulting follows a standard procedure of using log files. These files log visitors when they visit websites. 
                          All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, 
                          browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information 
                          that is personally identifiable. 
                          The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-6">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(6)}
                          aria-expanded={openItem === 6}
                        >
                          Cookies and Web Beacons
                        </button>
                      </div>
                      <Collapse in={openItem === 6}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Like any other website, Global Study Consulting uses 'cookies'.
                           These cookies are used to store information including visitors' preferences, 
                           and the pages on the website that the visitor accessed or visited. 
                           The information is used to optimize the users' experience by customizing our web page content based on visitors' 
                           browser type and/or other information.
                          </div>
                          
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-7">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(7)}
                          aria-expanded={openItem === 7}
                        >
                          Advertising Partners Privacy Policies
                        </button>
                      </div>
                      <Collapse in={openItem === 7}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          You may consult this list to find the Privacy Policy for each of the advertising partners of Global Study Consulting.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements 
                          and links that appear on Global Study Consulting, which are sent directly to users' browser. They automatically receive your IP address when this occurs. 
                          These technologies are used to 
                          measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Note that Global Study Consulting has no access to or control over these cookies that are used by third-party advertisers.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-8">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(8)}
                          aria-expanded={openItem === 8}
                        >
                          Third Party Privacy Policies
                        </button>
                      </div>
                      <Collapse in={openItem === 8}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Global Study Consulting's Privacy Policy does not apply to other advertisers or websites.
                           Thus, we are advising you to consult the respective 
                          Privacy Policies of these third-party ad servers for more detailed information. 
                          It may include their practices and instructions about how to opt-out of certain options.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-9">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(9)}
                          aria-expanded={openItem === 9}
                        >
                       CCPA Privacy Rights (Do Not Sell My Personal Information)
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Under the CCPA, among other rights, California consumers have the right to:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Request that a business delete any personal data about the consumer that a business has collected.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-9">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(9)}
                          aria-expanded={openItem === 9}
                        >
                      GDPR Data Protection Rights
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The right to rectification – You have the right to request that we correct any information you believe is inaccurate. 
                          You also have the right to request that we complete the information you believe is incomplete.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="border-bottom overflow-hidden">
                      <div className="mb-0 border-bottom-0" id="heading2-9">
                        <button
                          className="btn-reset font-size-5 font-weight-semibold text-left px-0 pb-6 pt-7 accordion-trigger arrow-icon w-100 border-left-0 border-right-0 focus-reset mt-n2"
                          type="button"
                          onClick={() => setOpenItem(9)}
                          aria-expanded={openItem === 9}
                        >
                    Children's Information
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Global Study Consulting does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                           If you think that your child provided this kind of information on our website,
                           we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                          </div>
  
                     
                        
                        </div>
                      </Collapse>
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
export default Faq;
