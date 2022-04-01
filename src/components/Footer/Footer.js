import React, { useContext,  useState, useEffect } from "react";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";
import imgM from "../../assets/image/l1/png/message.png";
import { useRouter } from 'next/router';
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Head from "next/head";
//import { MessengerChat } from 'react-messenger-chat-plugin';
export function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "101319619177236"); // TODO: move to args
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v11.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

/**
 *
 */
export function cleanup() {
  (function (d, id) {
    var target = d.getElementById(id);
    if (target) {
      target.parentNode.removeChild(target);
    }
  })(document, "facebook-jssdk");

  delete window.FB;
}

export function Facebook1() {
  useEffect(() => {
    console.log("Facebook1");
    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
const Footer = () => {
  const gContext = useContext(GlobalContext);
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [email,setEmail] =useState("");
  
  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <Head>
      <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
       </Head>
      <footer className="footer bg-ebony-clay dark-mode-texts">
        <div className="container">
        <div className="pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2">
            <div className="row justify-content-center ">
              <div
                className="col-xl-3 col-lg-12"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* <!-- cta-content start --> */}
                <div className="pb-xl-0 pb-9 text-xl-left text-center">
                  <h2 className="text-white font-size-8 mb-4">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="text-hit-gray font-size-5 mb-0">
                   
                  </p>
                </div>
                {/* <!-- cta-content end --> */}
              </div>
              <div
                className="col-xl-6 col-lg-12"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
            
                {/* <!-- cta-btns start --> */}
        
                <div className="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4">
                <input
                            
                            className="form-control mx-4 h-px-60"
                            name="name"
                            placeholder="Your Full Name"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                          />
                            </div>
                            </div>
                            <div
                className="col-xl-2 col-lg-12"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                            <div className="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4">
                  <a
                    className="btn btn-green btn-h-48 btn-xl mx-4 text-uppercase"
                    href="/registration"
                    onClick={(e) => {
                      router.push('/registration');
                    }}
                  >
                    Register
                  </a>
                </div>

                {/* <!-- cta-btns end --> */}
              </div>
            </div>
          </div>
          {/* <!-- Cta section --> */}
          <div className="pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2">
            <div className="row justify-content-center ">
              <div
                className="col-xl-7 col-lg-12"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* <!-- cta-content start --> */}
                <div className="pb-xl-0 pb-9 text-xl-left text-center">
                  <h2 className="text-white font-size-8 mb-4">
                    Most comprehensive Education Consultancy Agency
                  </h2>
                  <p className="text-hit-gray font-size-5 mb-0">
                   
                  </p>
                </div>
                {/* <!-- cta-content end --> */}
              </div>
              <div
                className="col-xl-5 col-lg-12"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {/* <!-- cta-btns start --> */}
                <div className="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4">
                  <a
                    className="btn btn-outline-gallery btn-xl mx-4 mt-6 text-uppercase"
                    href="/login"
                    onClick={(e) => {
                      router.push('/login');
                    }}
                  >
                    Log in
                  </a>
                  <a
                    className="btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase"
                    href="/registration"
                    onClick={(e) => {
                      router.push('/registration');
                    }}
                  >
                    Register
                  </a>
                </div>
                {/* <!-- cta-btns end --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container  pt-12 pt-lg-19 pb-10 pb-lg-19">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-lg-0 mb-9">
              {/* <!-- footer logo start --> */}
              <div style={{backgroundColor:'white',paddingTop:'10px',width:'100px',borderRadius:'50px'}}>
              <Logo white className="footer-logo mb-14" />
              </div>
              {/* <!-- footer logo End --> */}
              {/* <!-- media start --> */}
              <div className="media mb-11">
                {/* <img src={imgM} className="align-self-center mr-3" alt="" /> */}
                <div className=" media-body pl-5">
                  <p className="mb-0 font-size-4 text-white">Contact us at</p>
                  <Link href="/#">
                    <a className="mb-0 font-size-4 font-weight-bold">
                      info@ci-gsc.com
                    </a>
                  </Link>
                  <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                      
                       <div>
                       House no.-54/A(3rd Floor),
                       Road-132, 
                        <br/>Gulshan-1, 
                       Dhaka-1212
</div>



                          </a>
                        </Link>
                </div>
              </div>
              {/* <!-- media start --> */}
              {/* <!-- widget social icon start --> */}
              <div className="social-icons">
                <ul className="pl-0 list-unstyled d-flex align-items-end ">
                  <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">
                    Follow us on:
                  </li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3">
                    <a href="https://www.facebook.com/GlobalStudyContacts">
                      <a className="hover-color-primary heading-default-color">
                        <i className="fab fa-facebook-f font-size-3 pt-2"></i>
                      </a>
                    </a>
                  </li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3">
                    <Link href="/#">
                      <a className="hover-color-primary heading-default-color">
                        <i className="fab fa-twitter font-size-3 pt-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3">
                    <Link href="/#">
                      <a className="hover-color-primary heading-default-color">
                        <i className="fab fa-linkedin-in font-size-3 pt-2"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- widget social icon end --> */}
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget2 mb-md-0 mb-13">
                    {/* <!-- footer widget title start --> */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                      Addresses
                    </p>
                    {/* <!-- footer widget title end --> */}
                    {/* <!-- widget social menu start --> */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                   
                          <strong >   Dhaka</strong>
<div>
                       249,Moghbazar Chourasta,1st Floor,
                          Dhaka-1217,Bangladesh. 
                          Mob:+880 1715-482363
</div>


                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                          <strong >   Switzerland</strong>  
                          <div>
Av de travail 19.1007 Lausanne. 
Switzerland. 
Mob:+41 079 471 95 92.
</div>
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                           
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                       
                          </a>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- widget social menu end --> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget3 mb-sm-0 mb-13">
                    {/* <!-- footer widget title start --> */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                      Services
                    </p>
                    {/* <!-- footer widget title end --> */}
                    {/* <!-- widget social menu start --> */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Students
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Institutes
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Agents
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Service Providers
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                           
                          </a>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- widget social menu end --> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget4 mb-sm-0 mb-13">
                    {/* <!-- footer widget title start --> */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                      Countries
                    </p>
                    {/* <!-- footer widget title end --> */}
                    {/* <!-- widget social menu start --> */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6">
                        <Link href="/uk">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            UK
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/usa">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            USA
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/europe">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Europe
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/canada">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Canada
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/australia ">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Australia
                          </a>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- widget social menu end --> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget4">
                    {/* <!-- footer widget title start --> */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                      Legal
                    </p>
                    {/* <!-- footer widget title end --> */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6">
                        <Link href="/privacy-policy">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Privacy Policy
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/terms-and-conditions">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="heading-default-color font-size-4 font-weight-normal">
                            Refund Policy
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
      {/* <MessengerChat
    pageId='101319619177236'
    language='en_US'
    themeColor={'#F2F3G2'}
    height={24}
    loggedInGreeting='Hello logged in user!'
    loggedOutGreeting='Hello stranger!'
    autoExpand={true}
    debugMode={false}
    onMessengerShow={() => {console.log('onMessengerShow')}}
    onMessengerHide={() => {console.log('onMessengerHide')}}
    onMessengerDialogShow={() => {console.log('onMessengerDialogShow')}}
    onMessengerDialogHide={() => {console.log('onMessengerDialogHide')}}
    /> */}
   <a
        href="https://wa.me/+8801990225993"
        className={`whatsapp_float ${scroll > top ? "show" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1647364489/whatsapp_gvu6uz.png"} alt="Whatsapp"/>
      </a>
      <a
        href="/contact"
        className={`contact_float ${scroll > top ? "show" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
      <img className="contact-icon" src={"https://res.cloudinary.com/dl2tsdbcf/image/upload/v1648022986/contact_w5ckvn.png"} alt="Whatsapp"/>
      </a>
      </footer>
    </>
  );
};

export default Footer;
