import { Data } from "./interfaces";
import { get } from "../../fetcher";

export const getData = async (): Promise<Data | null> => {
  const res = await get<Data>("api/api_data");

  if (!res.success) {
    console.log(res.message);
  }

  return res.data;
};
