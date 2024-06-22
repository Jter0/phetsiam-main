import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const resp = await fetch(
      "https://search-api.swiftype.com/api/v1/engines/new/search.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_token: "y6rEwYv1tr3S9GmNN8Qw",
          // 'engine_key': 'y6rEwYv1tr3S9GmNN8Qw',
          // 'engine_key': 'new',
          q: req.body.search,
        }),
      }
    ).then((res) => res.json());

    res.status(200).json({ message: resp.message, error: undefined });
  } catch (error: any) {
    res.status(200).json({ error: error.message });
  }
}
