import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getData } from "../src/components/detail/fetcher";
import { Data } from "../src/components/detail/interfaces";
import { DetailPage } from "../src/components/detail/detail";
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
    <>
      <DetailPage data={data} />
    </>
  );
};

export default Home;
