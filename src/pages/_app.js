// import App from 'next/app'
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../assets/fonts/icon-font/fonts/avasta.ttf";
import "../assets/fonts/icon-font/css/style.css";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/fontawesome-5/css/all.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";
import { AuthUserProvider } from '../../AuthUserContext';

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/404/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
      
          <Component {...pageProps} />
        
        </Layout>
      </GlobalProvider>
    );
  }
  if (router.pathname.match(/dashboard/)) {
    return (

      <GlobalProvider>
           <AuthUserProvider>
        <Layout pageContext={{ layout: "dashboard" }}>
     
          <Component {...pageProps} />
        
        </Layout>
        </AuthUserProvider>
      </GlobalProvider>
    );
  }
  if (router.pathname.match(/student-registration/)) {
    return (

      <GlobalProvider>
           <AuthUserProvider>
        <Layout pageContext={{ layout: "student" }}>
     
          <Component {...pageProps} />
        
        </Layout>
        </AuthUserProvider>
      </GlobalProvider>
    );
  }

  return (
    
    <GlobalProvider>
          <AuthUserProvider>
      <Layout pageContext={{}}>
     
        <Component {...pageProps} />
        
      </Layout>
      </AuthUserProvider>
    </GlobalProvider>
    
  );
};

export default MyApp;
