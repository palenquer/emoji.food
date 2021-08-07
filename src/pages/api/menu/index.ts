import { NextApiRequest, NextApiResponse } from "next";
import { menu } from "../../../../data/menu";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  
  return response.status(200).json(menu);
};
