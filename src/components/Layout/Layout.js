import React, { useState, useEffect, useContext, useRef } from "react";

import styled, { ThemeProvider } from "styled-components";
import Helmet from "next/head";
import AOS from "aos";

import Header from "../Header";
import Header2 from "../Header/HeaderProfile";
import HeaderAgent from "../Header/HeaderProfileAgent";
import HeaderStudent from "../Header/HeaderProfileStudent";
import HeaderUni from "../Header/HeaderProfileUni";
import HeaderTeamMember from "../Header/HeaderTeamMember";
import Footer from "../Footer";


import SidebarDashboard from "../SidebarDashboard";
import SidebarDashboardStudent from "../SidebarDashboard/SidebarDashboardStudent";
import SidebarDashboardAgent from "../SidebarDashboard/SidebarDashboardAgent";
import SidebarDashboardInstitute from "../SidebarDashboard/SidebarDashboardInstitute";
import ModalVideo from "../ModalVideo";
import ModalApplication from "../ModalApplication";
import ModalSignIn from "../ModalSignIn";
import ModalSignUp from "../ModalSignUp";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/favicon2.png";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";
import { useAuth } from '../../../AuthUserContext';
import "firebase/auth";

import firebase from "firebase/app";
import SidebarDashboardTeam from "../SidebarDashboard/SidebarDashboardTeam";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);
  const { authUser, loading, signOut } = useAuth();
  const [visibleLoader, setVisibleLoader] = useState(true);
const [userType,setUserType] = useState("")

  async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/user/');
  
      const todoList = await res.json();
      const filtered = todoList.filter(function(val, i, a) {return val.email==authUser;});
     
      setUserType(filtered[0].usertype)
      
    } catch (e) {
      console.log(e);
  }
    }
  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
    fetchMyAPI()

  }, authUser);
  console.log(userType)
  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
     
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }

  if (pageContext.layout == "dashboard") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            
            <Header2 isDark={gContext.headerDark} />
            <SidebarDashboard />
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
else
  if (pageContext.layout === "student") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <HeaderStudent isDark={gContext.headerDark} />
            <SidebarDashboardStudent />
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
  else
  if (pageContext.layout === "institute") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <HeaderUni isDark={gContext.headerDark} />
            <SidebarDashboardInstitute />
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
  else
  if (pageContext.layout === "agent") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <HeaderAgent isDark={gContext.headerDark} />
            <SidebarDashboardAgent />
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
  if (pageContext.layout === "team") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <HeaderTeamMember isDark={gContext.headerDark} />
            <SidebarDashboardTeam />
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
  if (pageContext.layout === "login") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div
            className="site-wrapper overflow-hidden bg-default-2"
            ref={eleRef}
          >
            <Header isDark={gContext.headerDark} />
       
       
            {children}
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    );
  }
  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Helmet>
            <title>Global Study Contacts</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>  
          {authUser == null ?   <Header isDark={gContext.headerDark} /> : userType == "admin" ? <Header2 isDark={gContext.headerDark} /> : userType == "agent" ? <HeaderAgent isDark={gContext.headerDark}/> : userType == "student" ? <HeaderStudent/> : userType=="team-member" ? <HeaderTeamMember/> : <Header/>} 
           
            {children}

            <Footer isDark={gContext.footerDark} />
          </div>

          <ModalVideo />
          <ModalApplication />
          <ModalSignIn />
          <ModalSignUp />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
