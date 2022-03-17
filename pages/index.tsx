import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getData } from "../src/components/detail/fetcher";
import { Data } from "../src/components/detail/interfaces";
import { Layout } from '../src/layout';
import { DetailPage } from "../src/components/detail/detail";
import HomePage from '../src/components/home-page/home-page';
const Home: NextPage = () => {
  const [data, setData] = React.useState<Data>({
    description: "",
    firstTitle: "",
    secondTitle: "",
    introduction: "",
  });
  React.useEffect(() => {
    (async () => {
      const res = await getData();
      setData(res ?? data);
    })();
  }, [data]);
  return (
    <Layout title='Home Page'>
      <!--       <DetailPage data={data} /> -->
      <HomePage />
    </Layout>
  );
};

export default Home;
