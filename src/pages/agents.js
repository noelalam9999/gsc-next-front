import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/agents/Hero";
import Services from "../sections/agents/Services";
import FeaturedJobs from "../sections/agents/FeaturedJobs";
import Content1 from "../sections/agents/Content1";
import Content2 from "../sections/agents/Content2";
import Slider from "../sections/agents/Slider";
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
