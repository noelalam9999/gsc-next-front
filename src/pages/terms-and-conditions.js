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
                          Terms and Conditions
                        </button>
                      </div>
                      <Collapse in={openItem === 1}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Welcome to Global Study Consulting!
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          
These terms and conditions outline the rules and regulations for the use of Global Study Consulting's Website, located at https://gsc.co.com.
</div>
<div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
By accessing this website we assume you accept these terms and conditions. Do not continue to use Global Study Consulting if you do not agree to take all of the terms and conditions stated on this page.
</div>
<div>
The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</div>
                        
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
                          Cookies
                        </button>
                      </div>
                      <Collapse in={openItem === 2}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We employ the use of cookies. By accessing Global Study Consulting, you agreed to use cookies in agreement with the Global Study Consulting's Privacy Policy.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
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
                          License
                        </button>
                      </div>
                      <Collapse in={openItem === 3}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Unless otherwise stated, Global Study Consulting and/or its licensors own the intellectual property rights for all material on Global Study Consulting. All intellectual property rights are reserved. You may access this from Global Study Consulting for your own personal use subjected to restrictions set in these terms and conditions
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          You must not:
                          <ul>
                              <li>Republish material from Global Study Consulting</li>
                              <li>Sell, rent or sub-license material from Global Study Consulting</li>
                              <li>Reproduce, duplicate or copy material from Global Study Consulting</li>
                              <li>Redistribute content from Global Study Consulting</li>
                          </ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Global Study Consulting does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Global Study Consulting,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Global Study Consulting shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Global Study Consulting reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          You warrant and represent that:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <ul>
    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
</ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          You hereby grant Global Study Consulting a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
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
                        Hyperlinking to our Content
                        </button>
                      </div>
                      <Collapse in={openItem === 4}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The following organizations may link to our Website without prior written approval:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <ul>
                              <li>Government agencies;</li>
                              <li>Search engines;</li>
                              <li>News organizations;</li>
                              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                          </ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We may consider and approve other link requests from the following types of organizations:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <ul>
                              <li>commonly-known consumer and/or business information sources;</li>
                              <li>dot.com community sites;</li>
                              <li>associations or other groups representing charities;</li>
                              <li>online directory distributors;</li>
                              <li>internet portals;</li>
                              <li>accounting, law and consulting firms; and</li>
                              <li>educational institutions and trade associations.</li>
                          </ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          These organizations may link to our home page so long as the link: (a) is not in any way deceptive; 
                          (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and 
                          (c) fits within the context of the linking party’s site.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website,
                          you must inform us by sending an e-mail to Global Study Consulting. Please include your name, your organization name, contact information as well as the URL of your site, 
                          a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Approved organizations may hyperlink to our Website as follows:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <ul>
                              <li>By use of our corporate name; or</li>
                              <li>By use of the uniform resource locator being linked to; or</li>
                              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                          </ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          No use of Global Study Consulting's logo or other artwork will be allowed for linking absent a trademark license agreement.
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
                          iFrames
                        </button>
                      </div>
                      <Collapse in={openItem === 5}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
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
                        Content Liability
                        </button>
                      </div>
                      <Collapse in={openItem === 6}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We shall not be hold responsible for any content that appears on your Website.
                          You agree to protect and defend us against all claims that is rising on your Website.
                          No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, 
                          or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
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
                         Your Privacy
                        </button>
                      </div>
                      <Collapse in={openItem === 7}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <a href="/privacy-policy">Please read Privacy Policy</a>
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
                          Reservation of Rights
                        </button>
                      </div>
                      <Collapse in={openItem === 8}>
                        <div className="pr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We reserve the right to request that you remove all links or any particular link to our Website. 
                          You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s 
                          linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
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
                         Removal of links from our website
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
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
                       Disclaimer
                        </button>
                      </div>
                      <Collapse in={openItem === 9}>
                        <div className="cpr-7">
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          <ul>
                              <li>limit or exclude our or your liability for death or personal injury;</li>
                              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                          </ul>
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                          </div>
                          <div className="mt-n3 font-size-4 text-black font-weight-normal pb-7 pr-7 pt-6">
                          As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
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
