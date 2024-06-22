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
    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa(
            process.env.NEXT_PUBLIC_MAILJET_API_KEY +
              ":" +
              process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY
          ),
      },
      body: JSON.stringify({
        SandboxMode: false,
        Messages: [
          {
            From: {
              Email: req.body.email,
              Name: req.body.name + " " + req.body.surname,
            },
            HTMLPart: `${req.body.message}\n<h3>You can contact: ${req.body.phone}</h3>`,
            Subject: "Contact Us",
            To: [{ Email: process.env.NEXT_PUBLIC_CONTACT_US_EMAIL }],
          },
        ],
      }),
    }).then((res) => res.json());

    res.status(200).json({ ...response.Messages[0] });
  } catch (error: any) {
    res.status(200).json({ error: error.message });
  }
}
