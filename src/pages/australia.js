import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/australia/Hero";
import Brands from "../sections/australia/Brands";
import Categories from "../sections/australia/Categories";
import Content1 from "../sections/australia/Content1";
import FeaturedJobs from "../sections/australia/FeaturedJobs";
//import Blog from "../sections/landing1/Blog";
import Content2 from "../sections/australia/Content2";

const Australia = () => {
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
export default Australia;
