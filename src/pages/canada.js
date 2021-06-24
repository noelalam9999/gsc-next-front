import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/canada/Hero";
import Brands from "../sections/canada/Brands";
import Categories from "../sections/canada/Categories";
import Content1 from "../sections/canada/Content1";
import FeaturedJobs from "../sections/canada/FeaturedJobs";
//import Blog from "../sections/landing1/Blog";
import Content2 from "../sections/canada/Content2";

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
