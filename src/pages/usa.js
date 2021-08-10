import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/usa/Hero";
import Brands from "../sections/usa/Brands";
import Categories from "../sections/usa/Categories";
import Content1 from "../sections/usa/Content1";
import FeaturedJobs from "../sections/usa/FeaturedJobs";
//import Blog from "../sections/landing1/Blog";
import Content2 from "../sections/usa/Content2";

const UsaPage = () => {
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
export default UsaPage;
