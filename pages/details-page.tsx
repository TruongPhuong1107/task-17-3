import React from "react";
import { Detail } from "../src/components/detail/detail";
import { getData } from "../src/components/detail/fetcher";
import { Data } from "../src/components/detail/interfaces";
import type { NextPage } from "next";

const DetailPage: NextPage = () => {
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
  }, []);
  return <Detail data={data} />;
};

export default DetailPage;
