import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/institutes/Hero";
import Services from "../sections/institutes/Services";
import FeaturedJobs from "../sections/institutes/FeaturedJobs";
import Content1 from "../sections/institutes/Content1";
import Content2 from "../sections/institutes/Content2";
import Slider from "../sections/institutes/Slider";
import Pricing from "../sections/student/Pricing";

const IndexPage = () => {
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
export default IndexPage;
