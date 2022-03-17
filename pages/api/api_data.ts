// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../src/interfaces/response";

type Data = {
  introduction: string;
  firstTitle: string;
  secondTitle: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<Data>>
) {
  try {
    const data: Data = {
      introduction: "ONLINE EXAM SOFTWARE",
      firstTitle: "Code Editor",
      secondTitle: "Platform",
      description:
        "Innovation features to systematically track and improve Code Quiality and Code Security in your applications",
    };
    res.status(200).json({
      success: true,
      message: "successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed",
      data: null,
    });
  }
}
