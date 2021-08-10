import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/europe/Hero";
import Brands from "../sections/europe/Brands";
import Categories from "../sections/europe/Categories";
import Content1 from "../sections/europe/Content1";
import FeaturedJobs from "../sections/europe/FeaturedJobs";
//import Blog from "../sections/landing1/Blog";
import Content2 from "../sections/europe/Content2";

const Europe = () => {
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
export default Europe;
