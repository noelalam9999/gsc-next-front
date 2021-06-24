import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/uk/Hero";
import Brands from "../sections/uk/Brands";
import Categories from "../sections/uk/Categories";
import Content1 from "../sections/uk/Content1";
import FeaturedJobs from "../sections/uk/FeaturedJobs";
//import Blog from "../sections/landing1/Blog";
import Content2 from "../sections/uk/Content2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <FeaturedJobs />
        {/* <Blog /> */}
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
