import React from "react";
import type { NextPage } from "next";
import { Layout } from "../src/layout";
import HomePage from "../src/components/home-page/home-page";
const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      {/* <!--        --> */}
      <HomePage />
    </Layout>
  );
};

export default Home;
