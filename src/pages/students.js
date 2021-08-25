import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/student/Hero";
import Services from "../sections/student/Services";
import FeaturedJobs from "../sections/student/FeaturedJobs";
import Content1 from "../sections/student/Content1";
import Content2 from "../sections/student/Content2";
import Slider from "../sections/landing2/Content2";
import Pricing from "../sections/student/Pricing";

const StudentPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Services />
        <FeaturedJobs />
        <Content1 />
        <Content2 />
        <Slider />
        {/* <Pricing /> */}
      </PageWrapper>
    </>
  );
};
export default StudentPage;
